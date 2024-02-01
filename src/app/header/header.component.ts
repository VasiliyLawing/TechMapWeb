import {Component, OnInit, ViewChild} from '@angular/core';
import {Sidebar} from "primeng/sidebar";
import {AuthService} from "../auth/auth.service";
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../theme.service';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  items!: MenuItem[];

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
          },]
      }

      swapTheme(theme: string) {
        this.themeService.switchTheme(theme)
      }

  constructor(private userService: AuthService, private themeService: ThemeService) {}

  loggedInUsername = this.userService.userValue?.username
  closeCallback(e: Event): void {
    this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;
}
