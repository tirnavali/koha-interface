import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { ModalModule} from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { OtherControlsComponent } from './other-controls/other-controls.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShelfNavigationComponent } from './bookshelf/shelf-navigation/shelf-navigation.component';
import { BooklistComponent } from './bookshelf/booklist/booklist.component';
import { BookfilterComponent } from './bookshelf/bookfilter/bookfilter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    OtherControlsComponent,
    BookshelfComponent,
    FooterComponent,
    ShelfNavigationComponent,
    BooklistComponent,
    BookfilterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
