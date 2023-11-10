import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private afs: AngularFirestore ){   }
  // ngOnInit(): void {
  // }

  saveData(data:any){
  
      //this query is saving data into Angular Firestore
      this.afs.collection('Categories').add(data).then(docref => {
        console.log(docref)
       
      }).catch(err => 
        { console.log(err)})
      }
     
    }

           

  

