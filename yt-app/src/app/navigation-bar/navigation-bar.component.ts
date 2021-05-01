import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  container: any;
  isHidden = true

  toggleNav(): void {
    this.isHidden = !this.isHidden;
  }

}
