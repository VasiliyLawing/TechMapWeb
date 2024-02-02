// © 2024 Vasiliy Lawing
import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  constructor (private themeService: ThemeService) {

  }

  swapTheme(theme: string) {
    this.themeService.switchTheme(theme)
  }
}
