import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcnamesComponent } from './npcnames.component';

describe('NpcnamesComponent', () => {
  let component: NpcnamesComponent;
  let fixture: ComponentFixture<NpcnamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpcnamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcnamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
