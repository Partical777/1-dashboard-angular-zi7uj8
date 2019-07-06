import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { SidenavAutosize } from './sidenav/sidenav-autosize.component';
import { ListOverview } from './list/list-overview.component';
import { MenuPosition } from './menu/menu-position.component';
import { GridListDynamicExample } from './grid-list-gynamic/grid-list-gynamic.component';
import { Card } from './card/card-component';

import { D3LineChartDirective } from './d3/line-chart.directive'

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatButtonModule, MatCheckboxModule, BrowserAnimationsModule, MatSidenavModule, MatListModule, MatMenuModule, MatIconModule, MatGridListModule, MatCardModule, FlexLayoutModule],

  declarations: [ AppComponent, SidenavAutosize, ListOverview, MenuPosition, GridListDynamicExample, Card, D3LineChartDirective ],
  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
