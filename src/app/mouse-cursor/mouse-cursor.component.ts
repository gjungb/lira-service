import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lise-mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.css']
})
export class MouseCursorComponent implements OnInit {

  private _x = 0;

  #x = 0;

  position = {
    x: 0,
    y: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  get abc(): number {
    return this._x * 2;
  }

  set abc(value: number) {
    this._x = value;
  }

  getX(): number {
    return this._x;
  }

  handleMove(ev: MouseEvent): void {
    const {x, y} = ev;
    this.position = {
      x,
      y
    };
  }

}
