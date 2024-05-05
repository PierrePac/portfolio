import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

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
  gitValue: number = 75;
  isZoomed: boolean = false;
  bandeau1 = environment.bandeau_1;
  bgCvHeader = environment.bg_cv_header;
  profilCv = environment.profil_cv;
  angular = environment.angular;
  bootstrap = environment.bootstrap;
  css = environment.css;
  html = environment.html;
  java = environment.java;
  javascript = environment.javascript;
  jquery = environment.jquery;
  mysql = environment.mysql;
  php = environment.php;
  postman = environment.postman;
  spring = environment.spring;
  symfony = environment.symfony;
  cv = environment.cv;

  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }

}
