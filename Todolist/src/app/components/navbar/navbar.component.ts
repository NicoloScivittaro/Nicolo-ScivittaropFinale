import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isSidebarOpen = false;
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
