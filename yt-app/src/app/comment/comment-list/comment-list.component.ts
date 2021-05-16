import { Component } from '@angular/core';
import { IComment } from '../comment';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent {
  comments: IComment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getAllComments().subscribe({
      next: comments => this.comments = comments
    });
  }
}
