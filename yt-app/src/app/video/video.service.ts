import { IVideo } from './videos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class VideoService {
    private videosUrl = './assets/data/videos.json';

    constructor(private http: HttpClient){}

    getOneVideo(): Observable<IVideo[]> {
        return this.http.get<IVideo[]>(this.videosUrl);
    }
}