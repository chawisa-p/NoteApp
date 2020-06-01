import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MynoteComponent } from './mynote/mynote.component';
import { MynoteListComponent } from './mynote/mynote-list/mynote-list.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AddMynoteComponent } from './mynote/add-mynote/add-mynote.component';
import { RouterModule, Routes} from '@angular/router';
import { DropdownDirective } from './shared/dropdown.directive';
import { Top5addComponent } from './home/top5add/top5add.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'mynote', component: MynoteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MynoteComponent,
    MynoteListComponent,
    HomeComponent,
    AddMynoteComponent,
    DropdownDirective,
    Top5addComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot((appRoutes)),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
