import { IComment } from './comment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommentService {
    private commenstUrl = './assets/data/comments.json';

    constructor(private http: HttpClient){}

    getOneComment(): Observable<IComment[]> {
        return this.http.get<IComment[]>(this.commenstUrl);
    }
}