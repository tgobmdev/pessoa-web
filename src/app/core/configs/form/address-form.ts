import { Validators } from '@angular/forms'

export const addressForm = {
	id: [null],
	street: ['', Validators.required],
	zipcode: ['', Validators.required],
	streetNumber: ['', Validators.required],
	city: ['', Validators.required],
	state: ['', Validators.required],
	stateShortname: ['', Validators.required],
}
