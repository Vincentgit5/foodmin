import { NgStyle } from '@angular/common';
import { Component, input, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [NgStyle],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit {
 
  constructor(){}

  @Input()
  title!:string

  @Input()
  marging? = '1rem 0 1rem 0.2';

  @Input()
  fontSize = '1.7rem';
  ngOnInit(): void {}

}
