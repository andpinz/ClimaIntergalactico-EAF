import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenClimaComponent } from './resumen-clima.component';

describe('ResumenClimaComponent', () => {
  let component: ResumenClimaComponent;
  let fixture: ComponentFixture<ResumenClimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenClimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
