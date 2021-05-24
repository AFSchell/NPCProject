import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalenteditComponent } from './talentedit.component';

describe('TalenteditComponent', () => {
  let component: TalenteditComponent;
  let fixture: ComponentFixture<TalenteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalenteditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalenteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
