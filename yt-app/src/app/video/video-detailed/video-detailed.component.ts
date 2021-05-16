import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { IVideo } from '../videos';

@Component({
  selector: 'app-video-detailed',
  templateUrl: './video-detailed.component.html',
  styleUrls: ['./video-detailed.component.scss']
})
export class VideoDetailedComponent implements OnInit {
  isShowMore: boolean = true;
  videos: IVideo[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService.getAllVideos().subscribe({
      next: videos => this.videos = videos
    });
  }

  showMore():void {
    this.isShowMore = !this.isShowMore;
  }
}
