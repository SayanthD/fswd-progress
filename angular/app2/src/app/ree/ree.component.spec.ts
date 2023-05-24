import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReeComponent } from './ree.component';

describe('EerComponent', () => {
  let component: ReeComponent;
  let fixture: ComponentFixture<ReeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
