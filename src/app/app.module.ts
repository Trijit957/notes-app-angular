import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';
import { ThumbnailComponent } from './body/thumbnail/thumbnail.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { AvatarModule } from 'ngx-avatar';
import {MatButtonModule} from '@angular/material/button';

import { TaskItemsComponent } from './sidebar/task-items/task-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BodyComponent,
    ThumbnailComponent,
    TaskItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    AvatarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
