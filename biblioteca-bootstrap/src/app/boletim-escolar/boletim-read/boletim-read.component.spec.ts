import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletimReadComponent } from './boletim-read.component';

describe('BoletimReadComponent', () => {
  let component: BoletimReadComponent;
  let fixture: ComponentFixture<BoletimReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoletimReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoletimReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
