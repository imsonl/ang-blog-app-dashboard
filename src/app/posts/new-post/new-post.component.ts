import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  constructor(){

  }

  ngOnInIt(){

  }

  onTitleChanged($event:any){
    // console.log($event.target.value);
    const title = $event.target.value;
    let permalink =  title.replace(/\s/g, '-');
  }

}
