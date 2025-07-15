import {Directive, ElementRef, OnInit} from "@angular/core";
import {PlataformDetectorService} from "../../../core/plataform-detector/paltaform-detector.service";

@Directive({
  selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {
  constructor(private element: ElementRef<any>,
              private platFormDetector: PlataformDetectorService) {
              }
              ngOnInit() {
                this.platFormDetector.isPlatformBrowser() &&
                this.element.nativeElement.click();
              }
}
