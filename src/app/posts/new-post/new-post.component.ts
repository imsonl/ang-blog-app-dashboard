import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  categories! : any;
  permalink:any ='';
  imgSrc:any = "./assets/Placeholder-img.png";
  selectedImage:any;
  postForm : any ;

  constructor( private categoryService : CategoriesService , private Fb : FormBuilder){
    this.categories =[];
    this.postForm = this.Fb.group({
      title:['', [Validators.required,Validators.minLength(10)]],
      permalink:['', Validators.required],
      excerpt:['', [Validators.required,Validators.minLength(50)]],
      category:['',Validators.required],
      postImg:['',Validators.required],
      contet:['',Validators.required]
    });
   }

  ngOnInIt(): void{
    this.categoryService.loadData().subscribe(val =>{
        console.log(val);
        this.categories = val;
        //5:28
    });
  }

  get fc(){
      return this.postForm.controls;
  }

  onTitleChanged($event:any){
    // console.log($event.target.value);
    const title = $event.target.value;
    this.permalink =  title.replace(/\s/g, '-');
  }
  showPreview($event:any){
      const reader = new FileReader();
      reader.onload = (e) =>{
        this.imgSrc = e.target?.result;
      }
      reader.readAsDataURL($event?.target.files[0]);
      this.selectedImage  = $event?.target.files[0];
  }

}
