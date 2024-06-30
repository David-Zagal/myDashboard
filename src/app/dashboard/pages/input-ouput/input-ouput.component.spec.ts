import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOuputComponent } from './input-ouput.component';

describe ('InputOuputComponent', () => {
	let component: InputOuputComponent;
	let fixture: ComponentFixture<InputOuputComponent>;

	beforeEach (async () => {
		await TestBed.configureTestingModule ({
			imports: [InputOuputComponent]
		}).compileComponents ();

		fixture = TestBed.createComponent (InputOuputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges ();
	});

	it ('should create', () => {
		expect (component).toBeTruthy ();
	});
});