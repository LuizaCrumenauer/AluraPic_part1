import {Component} from "@angular/core";
import {UserService} from "../user/user.service";
import {Observable} from "rxjs";
import {User} from "../user/user";
import {Router} from "@angular/router";

@Component({
  selector: "ap-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent{

  user$:Observable<User | null>;


  constructor(
    private userService: UserService,
    private router: Router,) {

    this.user$ = this.userService.getUser();
  }

  logout() {
    this.userService.logout();
    // Após o logout, redireciona para a página de login
    this.router.navigate(['']);
  }
}
