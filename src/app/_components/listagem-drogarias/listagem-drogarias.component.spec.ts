import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDrogariasComponent } from './listagem-drogarias.component';

describe('ListagemDrogariasComponent', () => {
  let component: ListagemDrogariasComponent;
  let fixture: ComponentFixture<ListagemDrogariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemDrogariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemDrogariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
