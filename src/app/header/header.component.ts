// © 2024 Vasiliy Lawing
import {Component, OnInit, ViewChild} from '@angular/core';
import {Sidebar, SidebarModule} from "primeng/sidebar";
import {AuthService} from "../auth/auth.service";
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../theme.service';
import { DialogService } from '../dialog.service';
import { R3PartialDeclaration } from '@angular/compiler';
import { Role } from '../auth/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: []
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  items!: MenuItem[];
  loggedInUsername !: string
  loggedInUserRole !: Role
  
  isUserLoggedIn() {
    if (this.userService.userValue !== null) {
      this.loggedInUsername = this.userService.userValue.username
      this.loggedInUserRole = this.userService.userValue.role
      return true;
    }
    
    return false;
  }


  ngOnInit() {
      this.items = [
          {
              label: 'Theme',
              icon: 'pi pi-fw pi-file',
              items: [
                  {
                      label: 'Dark',
                      icon: 'pi pi-fw pi-moon',
                      command: () => this.swapTheme('bootstrap4-dark-purple'),
                      
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
                    label: `Light Grey`,
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
    public dialogService: DialogService,
    public userService: AuthService, 
    private themeService: ThemeService) {}

  closeCallback(e: Event): void {
    this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;
}
