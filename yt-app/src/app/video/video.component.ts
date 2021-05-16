import { IVideo } from './videos';
import { VideoService } from './video.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  @Input() video!: IVideo;
}
