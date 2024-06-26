import { Component, OnInit } from '@angular/core';
import { TypeWriterService } from '../../services/TypeWriter/type-writer.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  typedText$: Observable<string> | undefined;
  titles = ["développeur web", "développeur full-stack", "développeur d'application", "concepteur logiciel"];
  sppedForward = 100;
  speedBackward = 60;
  bgHome = environment.bg_home;

  constructor(private typewriterService: TypeWriterService) {}

  ngOnInit() {
    this.typedText$ = this.typewriterService.getTypewriterEffect(this.titles, this.sppedForward, this.speedBackward);
  }



}
