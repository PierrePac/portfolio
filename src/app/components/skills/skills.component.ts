import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  htmlValue: number = 80;
  cssValue: number = 75;
  javascriptValue: number = 75;
  angularValue: number = 75;
  bootstrapValue: number = 75;
  javaValue: number = 75;
  springbootValue: number = 75;
  phpValue: number = 75;
  symfonyValue: number = 75;
  sqlValue: number = 75;
  postmanValue: number = 75;
  loopingValue: number = 75;
  isZoomed: boolean = false;

  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }

}
