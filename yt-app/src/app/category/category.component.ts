import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categoryArr: Array<any> = ["All","Live","Lo-fi","Minecraft","Ambiant music","JavaScript","Crypto","Memes","Stand up","Gaming","Movie","Motivation","Laughter","Podcast","Pokemon GO"]
}
