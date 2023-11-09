import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  constructor(){

  }

  ngOnInit(): void {
   
  }
  onSubmit(formData:NgForm){
      // console.log(formData.value);
      let categoryData = {
        category: formData.value.category
      }
      console.log(categoryData);
  }

}
