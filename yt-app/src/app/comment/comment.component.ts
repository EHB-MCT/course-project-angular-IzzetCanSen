import { IComment } from './comment';
import { CommentService } from './comment.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comments: IComment[] = [];
  @Input() amount: number = 0;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getOneComment().subscribe({
      next: comments => this.comments = comments
    });
  }
}


