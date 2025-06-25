import {Injectable} from "@angular/core";
import {TokenService} from "../token/token.service";
import {BehaviorSubject} from "rxjs";
import {User} from "./user";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User | null>(null);
  private userName: string | undefined;

  constructor(private tokenService: TokenService) {
    // Se já tiver um token ao iniciar a aplicação, decodifica
    if (this.tokenService.hasToken()) {
      this.decodeAndNotify();
    }
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();

// 1. VERIFICA SE O TOKEN EXISTE
    if (token) {
      const user = jwtDecode<User>(token); // Tipando o retorno do decode
      this.userName = user.name;
      this.userSubject.next(user);
    }

  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUserName(){
    return this.userName;
  }

}
