import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  powers=['Really Smart','Fantastic one','Nothing Todo','Go mahn...']

  model =  new Hero(10,'Ronalmdo',this.powers[3],'Hooohoooo')
  isSubmitted= false;

  onSubmit(){
    this.isSubmitted=true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
