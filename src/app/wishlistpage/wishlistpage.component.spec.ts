import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistpageComponent } from './wishlistpage.component';

describe('WishlistpageComponent', () => {
  let component: WishlistpageComponent;
  let fixture: ComponentFixture<WishlistpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishlistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
