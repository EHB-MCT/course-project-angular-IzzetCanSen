import { Component, Input } from '@angular/core';
import { VideoService } from '../video.service';
import { IVideo } from '../videos';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent {
  @Input() width = "";
  @Input() styleObj = {};
  
  videos: IVideo[] = [];
  
  constructor(private videoService: VideoService) {}
  
  ngOnInit(): void {
    this.videoService.getAllVideos().subscribe({
      next: videos => this.videos = videos
    });
  }
}
