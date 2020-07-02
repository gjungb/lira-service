import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lise-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent implements OnInit {

  #title: string;

  @Output()
  titleClicked = new EventEmitter<string>();

  @Input('fancyTitle')
  set title(value: string) {
    if (value.startsWith('A')) {
      this.#title = value;
    } else {
      this.#title = 'Go away!';
    }
  }

  get title(): string {
    return this.#title;
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.titleClicked.emit(this.title);
  }

}
