import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Store, StoreFeatureModule } from '@ngrx/store';
import { toggleMenu } from '../../../store/menu/menu.action';
import { Observable, Subscription } from 'rxjs';
import { SideMenuComponent } from '../side-menu/side-menu.component';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    MatListModule,
    CommonModule,
    MatIconModule,
    StoreFeatureModule,
    SideMenuComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  isOpen$!: Observable<boolean>;
  isOpen: any;
  storeSubscription: Subscription = new Subscription();

  constructor(private store: Store<{ isOpen: boolean }>) {}

  ngOnInit(): void {
    this.storeSubscription = this.store.select('isOpen').subscribe((isOpen) => {
      this.isOpen = isOpen;
      (this.isOpen = this.isOpen?.isOpen);
      console.log("🚀 ~ NavBarComponent ~ this.storeSubscription=this.store.select ~ isOpen:", this.isOpen)
      return 
    });
  }

  toggleMenu() {
    this.store.dispatch(toggleMenu());
  }

  ngOnDestroy() {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }
}
