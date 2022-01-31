
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';
  name = 'Kate';
  mood = 'Happy';
  num1: number = 1;
  num2: number = 2;
  isHappy(mood: string) {
    if (mood === 'Happy') {
      return true;
    } else {
      return false;
    }
  }

  attitude = this.isHappy(this.mood);
}


