import { Component } from '@angular/core';

@Component({
  selector: 'lise-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lira-service';

  visible = true;

  handleTitle(ev: string): void {
    console.log(ev);
  }
}
