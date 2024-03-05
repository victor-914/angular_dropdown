import { Component } from '@angular/core';
import { Store, StoreFeatureModule } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { toggleMenu } from '../../../store/menu/menu.action';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  NavigationStart,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    // StoreFeatureModule,
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  isOpen$!: Observable<boolean>;
  isOpen: any;
  isMobile: boolean = false;
  storeSubscription: Subscription = new Subscription();
  breakpointSubscription: Subscription = new Subscription();

  constructor(
    private store: Store<{ isOpen: boolean }>,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.storeSubscription = this.store.select('isOpen').subscribe((isOpen) => {
      this.isOpen = isOpen;
      return (this.isOpen = this.isOpen?.isOpen);
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.breakpointSubscription = this.breakpointObserver
          .observe([Breakpoints.Handset])
          .subscribe((result: any) => {
            if (
              result.breakpoints[
                '(max-width: 599.98px) and (orientation: portrait)'
              ]
            ) {
              // this.isOpen = false
              if (this.isOpen) {
                this.store.dispatch(toggleMenu());
              }
            }
          });
      }
    });
  }

  toggleMenu() {
    this.store.dispatch(toggleMenu());
  }

  // ngOnDestroy(): void {
  //   if (this.storeSubscription) {
  //     this.storeSubscription.unsubscribe();
  //   }
  //   // if (this.breakpointSubscription) {
  //   //   this.breakpointSubscription.unsubscribe();
  //   // }
  // }
}
