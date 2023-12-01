import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  categories : any;
  permalink:any ='';
  imgSrc:any = "./assets/Placeholder-img.png";
  selectedImage:any;
  postForm : any ;
  formStatus:any = 'Add';
  post:any;

  constructor( 
    private categoryService : CategoriesService , 
    private Fb : FormBuilder,
    private postService: PostsService,
    private route: ActivatedRoute
    ){

      this.route.queryParamMap.subscribe(val =>{
        this.postService.loadOneData(val).subscribe(post=>{
          console.log(post); 
          
          // this.post = post;
          // this.postForm = this.Fb.group({
          //   title:[this.post.title, [Validators.required,Validators.minLength(10)]],
          //   permalink:[this.post.permalink,Validators.required],
          //   excerpt:[this.post.excerpt, [Validators.required,Validators.minLength(50)]],
          //   category:[this.post.category],
          //   postImg:[this.post.postImgPath],
          //   content:[this.post.content]
          // });

        });
      })
    
     
    this.postForm = this.Fb.group({
      title:['', [Validators.required,Validators.minLength(10)]],
      permalink:['',Validators.required],
      excerpt:['', [Validators.required,Validators.minLength(50)]],
      category:[''],
      postImg:[''],
      content:['']
    });
    // this.categories = [];
  }

  ngOnInIt(): void{
    this.categoryService.loadData().subscribe(val =>{
      console.log(val);
          this.categories = val;
   
        //5:28//
    });
  }

  get fc(){
      return this.postForm.controls;
  }

  onTitleChanged($event:any){
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

  onSubmit(){
    console.log(this.postForm.value); 
    let splited = this.postForm.value.category.split('-');
    console.log(splited);
    const postData: Post = {
      title: this.postForm.value.title,
      permalink: this.postForm.value.permalink,
      category: {
        categoryId: splited[0],
        category: splited[1]
      },
      postImgPath:'',
      excerpt: this.postForm.value.excerpt,
      content: this.postForm.value.content, 
      isFeatured : false,
      views: 0,
      status: 'New',
      CreatedAt: new Date()
    }
    this.postService.UploadImage(this.selectedImage,postData);
    this.postForm.reset();
    this.imgSrc = './assets/Placeholder-img.png';
  }
}
