import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfNavigationComponent } from './shelf-navigation.component';

describe('ShelfNavigationComponent', () => {
  let component: ShelfNavigationComponent;
  let fixture: ComponentFixture<ShelfNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelfNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelfNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
