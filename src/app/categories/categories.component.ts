import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  categoryArray!: any;
  formCategory!:any;
  formStatus:any = 'Add';
  CategoryId!:any;

  constructor( private categoryService: CategoriesService ){
      this.categoryArray =[];
  }

  ngOnInit(): void {
      this.categoryService.loadData().subscribe(val =>{
        console.log(val);
         this.categoryArray = val;
      })
  }
  onSubmit(formData:NgForm){
     
      let categoryData : Category = {
        category: formData.value.category,
      }

      if(this.formStatus == 'Add'){
        this.categoryService.saveData(categoryData);
        formData.reset();
      }else if(this.formStatus == 'Edit')
      {
        this.categoryService.UpdateData(this.CategoryId,categoryData);
        formData.reset();
        this.formStatus = 'Add';
      }  
  }
        OnEdit(Category : any ,id :any){
          console.log(Category);
          this.formCategory =  Category;
          this.formStatus= 'Edit';
          this.CategoryId = id;
        }
        OnDelete(id:any){
            this.categoryService.DeleteData(id);
        }

}