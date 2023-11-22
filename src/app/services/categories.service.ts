import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService  {

  constructor(private afs: AngularFirestore ,private toastrservice : ToastrService){   }
 
  saveData(data:any){
  
      //this query is saving data into Angular Firestore
      this.afs.collection('Categories').add(data).then(docref => {
        this.toastrservice.success('Data insert Successfully!');
       
      }).catch(err => 
        { console.log(err)})
      }
    loadData(){

      // 4:18:04
    }

    }
    
 

           

  

