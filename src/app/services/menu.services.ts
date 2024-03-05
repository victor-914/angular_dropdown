// menu.service.ts
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MenuState } from '../../store/menu/menu.reducers';
import * as MenuActions from '../../store/menu/menu.action';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private store: Store<MenuState>) {}

  isOpen(): Observable<boolean> {
    return this.store.select((state) => state.isOpen);
  }

  toggleMenu(): void {
    this.store.dispatch(MenuActions.toggleMenu());
  }
}
