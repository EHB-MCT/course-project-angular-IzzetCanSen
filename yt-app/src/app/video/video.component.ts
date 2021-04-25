import { IVideo } from './videos';
import { VideoService } from './video.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videos: IVideo[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService.getOneVideo().subscribe({
      next: videos => this.videos = videos
    });
  }
  
}
