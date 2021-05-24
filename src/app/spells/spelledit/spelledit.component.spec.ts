import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpelleditComponent } from './spelledit.component';

describe('SpelleditComponent', () => {
  let component: SpelleditComponent;
  let fixture: ComponentFixture<SpelleditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpelleditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpelleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
