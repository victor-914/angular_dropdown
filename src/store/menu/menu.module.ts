import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { menuReducer } from './menu.reducers';

@NgModule({
  imports: [StoreModule.forFeature('isOpen', menuReducer)],
})
export class MenuModule {}
