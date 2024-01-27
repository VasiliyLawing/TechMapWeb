import {Component, OnInit, ViewChild} from '@angular/core';
import {Sidebar} from "primeng/sidebar";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  constructor(private userService: AuthService) {}

  loggedInUsername = this.userService.userValue?.username
  items = []
  closeCallback(e: Event): void {
    this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;
}
