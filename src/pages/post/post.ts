import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

class Post {
  title: string;
  body: string;
  id: string;

  constructor() {

  }
}

/**
 * Generated class for the Post page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  post: Post = new Post();

  constructor(public navCtrl: NavController) {
  }

  submit() {
    this.navCtrl.parent.select(0);
  }

}
