import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  // constructor(private afs: AngularFirestore ){
  // }
  constructor( private categoryService: CategoriesService){

  }

  ngOnInit(): void {
   
  }
  onSubmit(formData:NgForm){
     
      let categoryData = {
        category: formData.value.category,
      }

      // this.categoryService.saveData(categoryData);

      // let SubcategoryData = {
      //   subcategory: 'subCategory',
       
      // }
      //this query is saving data into Angular Firestore
      // this.afs.collection('Categories').add(categoryData).then(docref => {
      //   console.log(docref)

      //   this.afs.doc('categories/${docRef.id}').collection('subCategories').add(SubcategoryData)
      //   this.afs.collection('categories').doc(docref.id).collection('subCategories').add(SubcategoryData).then(docref1 =>{
      //     console.log(docref1)

      //     this.afs.doc('categories/${docref.id}/subCategories/${docref1.id}').collection('Subsubcategories').add(SubcategoryData).then(docref2=>{
      //       console.log('Second Level is working successfully');
      //     });

      //     this.afs.collection('categories').doc(docref.id).collection('subCategories').doc(docref1.id).collection('subsubcategories').add(SubcategoryData).then(docref2=>{
      //       console.log('Second Level')
      //     })
      //   })
      // }).catch(err => 
      //   { console.log(err)})
       }
        

}
