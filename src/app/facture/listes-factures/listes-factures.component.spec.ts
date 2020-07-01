import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesFacturesComponent } from './listes-factures.component';

describe('ListesFacturesComponent', () => {
  let component: ListesFacturesComponent;
  let fixture: ComponentFixture<ListesFacturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesFacturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
