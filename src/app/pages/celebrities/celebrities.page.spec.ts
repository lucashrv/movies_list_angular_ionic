import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CelebritiesPage } from './celebrities.page';

describe('CelebritiesPage', () => {
  let component: CelebritiesPage;
  let fixture: ComponentFixture<CelebritiesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebritiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
