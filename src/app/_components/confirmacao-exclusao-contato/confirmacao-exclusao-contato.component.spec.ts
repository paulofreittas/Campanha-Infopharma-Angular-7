import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoExclusaoContatoComponent } from './confirmacao-exclusao-contato.component';

describe('ConfirmacaoExclusaoContatoComponent', () => {
  let component: ConfirmacaoExclusaoContatoComponent;
  let fixture: ComponentFixture<ConfirmacaoExclusaoContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacaoExclusaoContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacaoExclusaoContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
