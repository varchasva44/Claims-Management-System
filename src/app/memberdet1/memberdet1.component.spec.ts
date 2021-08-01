import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Memberdet1Component } from './memberdet1.component';

describe('Memberdet1Component', () => {
  let component: Memberdet1Component;
  let fixture: ComponentFixture<Memberdet1Component>;

  beforeEach(() => {
    const activatedRouteStub = () => ({
      queryParams: { subscribe: (f: (arg0: {}) => any) => f({}) }
    });
    const routerStub = () => ({});
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [Memberdet1Component],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(Memberdet1Component);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('logout function', () => {
    spyOn(sessionStorage,'removeItem').and.callThrough();
    component.logout();
    expect(sessionStorage.removeItem).toHaveBeenCalledWith('key');
    expect(sessionStorage.removeItem).toHaveBeenCalledWith('token');
  });
});
