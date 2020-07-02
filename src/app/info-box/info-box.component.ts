import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lise-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {

  isHidden = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isHidden = !this.isHidden;
  }

}
