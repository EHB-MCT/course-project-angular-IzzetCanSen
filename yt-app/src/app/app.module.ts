import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { VideoListComponent } from './video/video-list/video-list.component';
import { CategoryComponent } from './category/category.component';
import { CommentComponent } from './comment/comment.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { SubsComponent } from './subs/subs.component';
import { VideoDetailedComponent } from './video/video-detailed/video-detailed.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { HomeComponent } from './home/home.component';
import { DetailedPageComponent } from './detailed-page/detailed-page.component';
import { SubscriptionsPageComponent } from './subscriptions-page/subscriptions-page.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    NavigationBarComponent,
    VideoListComponent,
    CategoryComponent,
    CommentComponent,
    CommentListComponent,
    SubsComponent,
    VideoDetailedComponent,
    ShortNumberPipe,
    HomeComponent,
    DetailedPageComponent,
    SubscriptionsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'detailed', component: DetailedPageComponent},
      { path: 'subs', component: SubscriptionsPageComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
