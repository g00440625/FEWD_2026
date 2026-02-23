import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Listcomponent } from './listcomponent/listcomponent'; // Import listcomponent to be used

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Listcomponent], // Add Listcomponent
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count:number = 0;
  hide:boolean = false;

  // Function to count the star when being pressed
  onClickButton(){
    alert("button clicked");
    this.count++;
  }

  // Function to display/hide text when image doubled click
  onImageClick() {
    if(this.hide == false) {
      this.hide = true;
    }
    else {
      this.hide = false;
    } 
  }
}
