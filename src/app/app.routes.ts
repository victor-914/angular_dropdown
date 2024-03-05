import { Routes } from '@angular/router';
import { AddRecordComponent } from './add-record/add-record.component';
import { HomeComponent } from './home/home.component';
import { provideState } from '@ngrx/store';
import { menuReducer } from '../store/menu/menu.reducers';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    providers: [provideState({ name: 'isOpen', reducer: menuReducer })],
  },
  {
    path: 'add-record',
    component: AddRecordComponent,
    providers: [provideState({ name: 'isOpen', reducer: menuReducer })],
  },
];
