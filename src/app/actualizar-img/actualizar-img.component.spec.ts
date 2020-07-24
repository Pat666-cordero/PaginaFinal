import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarImgComponent } from './actualizar-img.component';

describe('ActualizarImgComponent', () => {
  let component: ActualizarImgComponent;
  let fixture: ComponentFixture<ActualizarImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
