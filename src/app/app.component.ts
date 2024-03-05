import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MenuModule } from '../store/menu/menu.module';
import { StoreModule, StoreRootModule } from '@ngrx/store';
import { menuReducer } from '../store/menu/menu.reducers';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NavBarComponent,
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HomeComponent,
    MenuModule,
    SideMenuComponent,
    StoreModule,
    // StoreModule.forRoot({ isOpen: menuReducer })
    StoreRootModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ePHI';
}
