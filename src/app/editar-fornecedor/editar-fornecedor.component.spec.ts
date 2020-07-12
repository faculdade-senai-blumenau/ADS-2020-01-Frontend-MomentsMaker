import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFornecedorComponent } from './editar-fornecedor.component';

describe('EditarFornecedorComponent', () => {
  let component: EditarFornecedorComponent;
  let fixture: ComponentFixture<EditarFornecedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarFornecedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
