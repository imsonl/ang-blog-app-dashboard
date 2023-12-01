import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent {

  postArray:any;
  constructor(private postService:PostsService){
      this.postArray =[];
  }

  ngOnInit() : void{
      this.postService.loadData().subscribe(val =>{
          console.log(val);
          this.postArray = val;
      });
  }

}
