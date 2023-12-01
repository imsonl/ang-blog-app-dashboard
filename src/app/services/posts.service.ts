import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private storage : AngularFireStorage,
    private afs :AngularFirestore ,
    private toatr : ToastrService,
    private router:Router
    ) { 

    }

  UploadImage(selectedImage:any,postData:any){
    const filePath = 'postIMG/${Date.now()}';
   // const filePath = '${Datetime.now()}';
    console.log(filePath);

    this.storage.upload(filePath, selectedImage).then(()=>{
        console.log('post image uploaded successfully');

        //this method returns an observable
        this.storage.ref(filePath).getDownloadURL().subscribe(URL =>{
          postData.postImgPath = URL;
          console.log(postData);

          this.SaveData(postData);

        })
    })
  }

  SaveData(postData:any){
    this.afs.collection('posts').add(postData).then(docref=>{
      this.toatr.success('Data insert successfully!');
      this.router.navigate(['/posts']);
  });

  
}
loadData() {
  return this.afs.collection('posts').snapshotChanges().pipe(
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
    loadOneData(id:any){
       return this.afs.doc('posts/${id}').valueChanges();
    }
}
