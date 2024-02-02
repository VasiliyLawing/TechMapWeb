// © 2024 Vasiliy Lawing
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header.component";
import {SidebarModule} from "primeng/sidebar";
import {StyleClassModule} from "primeng/styleclass";
import {RippleModule} from "primeng/ripple";
import {AvatarModule} from "primeng/avatar";
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterLink} from "@angular/router";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    StyleClassModule,
    RippleModule,
    AvatarModule,
    ButtonModule,
    BrowserAnimationsModule,
    RouterLink,
    MenubarModule,
    InputTextModule
  ]
})
export class HeaderModule { }
