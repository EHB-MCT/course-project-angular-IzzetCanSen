import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent {
  fakeArray = new Array(12);
  @Input() width = "";
  @Input() styleObj = {};
  
  // width = '100%';
  // styleObj = {
  //   'flex-direction': 'column',
  //   'width': '100%'
  // }
}
