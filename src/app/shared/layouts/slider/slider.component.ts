import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }
  public images = [
    { path: 'assets/img/01.jpg' },
    { path: 'assets/img/02.jpg' },
    { path: 'assets/img/03.jpg' },
    { path: 'assets/img/01.jpg' },
    { path: 'assets/img/02.jpg' },
    { path: 'assets/img/03.jpg' },
    { path: 'assets/img/01.jpg' },
    { path: 'assets/img/02.jpg' },
    { path: 'assets/img/03.jpg' },
    { path: 'assets/img/01.jpg' },
    { path: 'assets/img/02.jpg' },
    { path: 'assets/img/03.jpg' },
    { path: 'assets/img/01.jpg' },
    { path: 'assets/img/02.jpg' },
    { path: 'assets/img/03.jpg' },
  ];
  ngOnInit(): void {
  }

}
