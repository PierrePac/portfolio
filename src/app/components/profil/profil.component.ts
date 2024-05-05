import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeWriterService } from '../../services/TypeWriter/type-writer.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent implements OnInit {
  typedText$: Observable<string> | undefined;
  titles = ["..."];
  sppedForward = 200;
  speedBackward = 100;
  profil = environment.profil;

  constructor(private typewriterService: TypeWriterService) {}

  ngOnInit() {
    this.typedText$ = this.typewriterService.getTypewriterEffect(this.titles, this.sppedForward, this.speedBackward);
  }
}
