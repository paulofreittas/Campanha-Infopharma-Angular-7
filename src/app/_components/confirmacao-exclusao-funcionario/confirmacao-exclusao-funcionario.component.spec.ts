import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoExclusaoFuncionarioComponent } from './confirmacao-exclusao-funcionario.component';

describe('ConfirmacaoExclusaoFuncionarioComponent', () => {
  let component: ConfirmacaoExclusaoFuncionarioComponent;
  let fixture: ComponentFixture<ConfirmacaoExclusaoFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacaoExclusaoFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacaoExclusaoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
