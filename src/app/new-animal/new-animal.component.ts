import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Animal } from './../animal.model';

@Component({
  selector: 'new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})
export class NewAnimalComponent implements OnInit {
  @Output() newAnimalSender = new EventEmitter();

  addAnimal = false;

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string, bio: string, admitted: string, photo: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes, bio, admitted, photo);
    this.newAnimalSender.emit(newAnimalToAdd);
    this.addAnimal = false;
  }

  showAddForm() {
    this.addAnimal = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
