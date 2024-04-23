import { Injectable } from '@angular/core';
import { interval, concat, of, from } from 'rxjs';
import { map, take, delay, ignoreElements, concatMap, repeat } from 'rxjs/operators';

interface TypeParams {
  word: string;
  speed: number;
  backward?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TypeWriterService {

 private type({ word, speed, backward = false}: TypeParams) {
  return interval(speed).pipe(
    map(x => backward ? word.substring(0, word.length - x) : word.substring(0, x + 1)),
    take(word.length + 1)
  );
 }

 typeEffect(word: string) {
  return concat(
    this.type({ word, speed: 100}),
    of('').pipe(delay(1200), ignoreElements()),
    this.type({ word, speed: 60, backward: true }),
    of('').pipe(delay(300), ignoreElements())
  );
 }

 getTypewriterEffect(titles: string[]) {
  return from(titles).pipe(
    concatMap(title => this.typeEffect(title)),
    repeat()
  );
 }
}
