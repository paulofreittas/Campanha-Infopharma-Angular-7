import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VincularFuncionarioComponent } from './vincular-funcionario.component';

describe('VincularFuncionarioComponent', () => {
  let component: VincularFuncionarioComponent;
  let fixture: ComponentFixture<VincularFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VincularFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VincularFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
