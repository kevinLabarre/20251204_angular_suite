import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositAndWithdrawal } from './deposit-and-withdrawal';

describe('DepositAndWithdrawal', () => {
  let component: DepositAndWithdrawal;
  let fixture: ComponentFixture<DepositAndWithdrawal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositAndWithdrawal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositAndWithdrawal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
