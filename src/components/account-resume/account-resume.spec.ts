import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountResume } from './account-resume';

describe('AccountResume', () => {
  let component: AccountResume;
  let fixture: ComponentFixture<AccountResume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountResume]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountResume);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
