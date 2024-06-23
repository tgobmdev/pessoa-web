import { Injectable } from '@angular/core'
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms'
import { DynamicFormValidator } from '@core/validators'

@Injectable({
	providedIn: 'root',
})
export class DynamicFormService {
	constructor(private readonly fb: NonNullableFormBuilder) {}

	createFormGroupFromObject = <T extends Record<string, any>>(
		object: T
	): FormGroup => {
		const formGroup = this.fb.group({})

		Object.keys(object).forEach((key) => {
			formGroup.addControl(key, new FormControl(object[key]))
		})
		return formGroup
	}

	updateFormGroupFromObject = <T extends Record<string, any>>(
		formGroup: FormGroup,
		object: T
	): void => {
		const formGroupKeys = new Set(Object.keys(formGroup.controls))
		const objectKeys = new Set(Object.keys(object))

		const dynamicFormValidator: DynamicFormValidator =
			DynamicFormValidator.builder()
				.setReferenceKeys(formGroupKeys)
				.setTargetKeys(objectKeys)
				.build()

		dynamicFormValidator.ensureNoExtraKeys()
		dynamicFormValidator.ensureNoMissingKeys()

		formGroup.patchValue(object)
	}
}
