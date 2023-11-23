import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {AngularFirestore}from '@angular/fire/compat/firestore';
import {ToastrService} from 'ngx-toastr';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private afs: AngularFirestore, private toastrservice: ToastrService, private storage : AngularFireStorage) {}

  UploadImage(selectedimage:any){
    const filepath = 'postIMG/${Datetime.now()}';

  }

  saveData(data: any) {

    //this query is saving data into Angular Firestore
    this.afs.collection('Categories').add(data).then(docref=> {
        this.toastrservice.success('Data insert Successfully!');

      }

    ).catch(err=> {
        console.log(err)
      }

    )
  }

  loadData() {
    return this.afs.collection('Categories').snapshotChanges().pipe(
      map(actions =>{
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return{id,data}
        })
      })
    )
    // 4:18:04
  }
  UpdateData( Id:any, EditData:any){
    this.afs.collection('Categories').doc(Id).update(EditData).then(docRef =>
      {
        this.toastrservice.success('Data Updated Successfully!');
      })
   
  }
  DeleteData (Id:any){
    this.afs.collection('Categories').doc(Id).delete().then(docRef => {
      this.toastrservice.success("Data deleted Successfully!");
    })
    
  }
}
