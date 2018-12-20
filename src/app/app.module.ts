import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor, ErrorInterceptor, PtBrMatPaginatorIntl } from './_helpers';
import { LoginComponent } from './_components';
import { MenuLateralComponent } from './_components';
import { DashboardComponent } from './_components';
import { ListagemDrogariasComponent } from './_components';
import { FooterComponent } from './_components';
import { VincularFuncionarioComponent } from './_components';
import { ConfirmacaoExclusaoContatoComponent } from './_components';
import { HistoricoListaComponent } from './_components';
import { ListagemHistoricoComponent } from './_components';
import { ListagemFuncionariosComponent } from './_components';
import { ConfirmacaoExclusaoFuncionarioComponent } from './_components';
import { CadastroFuncionarioComponent } from './_components';

import { StatusPipe } from './_pipes';
import { TipoPropostaPipe } from './_pipes';

import { MccColorPickerModule } from 'material-community-components';


import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatSnackBarModule,
  MatCardModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDatepickerModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuLateralComponent,
    DashboardComponent,
    ListagemDrogariasComponent,
    FooterComponent,
    VincularFuncionarioComponent,
    HistoricoListaComponent,
    StatusPipe,
    TipoPropostaPipe,
    ListagemHistoricoComponent,
    ConfirmacaoExclusaoContatoComponent,
    ListagemFuncionariosComponent,
    ConfirmacaoExclusaoFuncionarioComponent,
    CadastroFuncionarioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSelectModule,
    MatGridListModule,
    MatAutocompleteModule,
    FormsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
    MccColorPickerModule,

    AppRoutingModule
  ],
  entryComponents: [
    VincularFuncionarioComponent,
    ConfirmacaoExclusaoContatoComponent,
    ConfirmacaoExclusaoFuncionarioComponent,
    CadastroFuncionarioComponent,
    HistoricoListaComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
