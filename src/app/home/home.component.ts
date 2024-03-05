import { Component, OnInit } from '@angular/core';
import { BioComponent } from '../bio/bio.component';
import { AllergiesComponent } from '../allergies/allergies.component';
import { RecordComponent } from '../record/record.component';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';
import { Observable, Subscription } from 'rxjs';
import { Store, StoreFeatureModule } from '@ngrx/store';
import { CommonModule, NgClass } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BioComponent,
    CommonModule,
    SideMenuComponent,
    NgClass,
    AllergiesComponent,
    // StoreFeatureModule ,
    RecordComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isOpen$!: Observable<boolean>;
  isOpen: any;
  storeSubscription: Subscription = new Subscription();

  constructor(private store: Store<{ isOpen: boolean }>) {}

  ngOnInit(): void {
    this.storeSubscription = this.store.select('isOpen').subscribe((isOpen) => {
      this.isOpen = isOpen;
      return (this.isOpen = this.isOpen?.isOpen);
    });
  }

  ngOnDestroy(): void {
    this.storeSubscription && this.storeSubscription.unsubscribe();
  }
}
