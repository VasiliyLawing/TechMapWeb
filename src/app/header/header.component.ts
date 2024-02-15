// © 2024 Vasiliy Lawing
import {Component, OnInit, ViewChild} from '@angular/core';
import {Sidebar} from "primeng/sidebar";
import {AuthService} from "../auth/auth.service";
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../theme.service';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  items!: MenuItem[];
  loggedInUsername = this.userService.userValue?.username
  loggedInUserRole = this.userService.userValue?.role
  
  ngOnInit() {
      this.items = [
          {
              label: 'Theme',
              icon: 'pi pi-fw pi-file',
              items: [
                  {
                      label: 'DarkPurple',
                      icon: 'pi pi-fw pi-moon',
                      command: () => this.swapTheme('bootstrap4-dark-purple'),
                      
                  },
                  {
                      label: 'Dark',
                      icon: 'pi pi-fw pi-hashtag',
                      command: () => this.swapTheme('mdc-dark-indigo'),

                  },
                  {
                      separator: true
                  },
                  {
                      label: 'Light Blue',
                      icon: 'pi pi-fw pi-sun',
                      command: () => this.swapTheme('lara-light-blue'),

                  },
                  {
                    label: `Light`,
                    icon: 'pi pi-fw pi-hashtag',
                    command: () => this.swapTheme('bootstrap4-light-blue'),
                  }
              ]
          },
          {
            label: 'Manage Data',
            icon: 'pi pi-spin pi-fw pi-cog',
            command: () => this.dialogService.toggleManageData(),
          },
        
        ]
      }

      swapTheme(theme: string) {
        this.themeService.switchTheme(theme)
      }

  constructor(
    private dialogService: DialogService,
    private userService: AuthService, private themeService: ThemeService) {}

  closeCallback(e: Event): void {
    this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;
}
