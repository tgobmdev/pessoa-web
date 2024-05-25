import { DynamicFormValidator } from '@validators/dynamic-form.validator'

export class DynamicFormValidatorBuilder {
	private _referenceKeys: Set<string> = new Set<string>()
	private _targetKeys: Set<string> = new Set<string>()

	setReferenceKeys = (
		referenceKeys: Set<string>
	): DynamicFormValidatorBuilder => {
		this._referenceKeys = referenceKeys
		return this
	}

	setTargetKeys = (targetKeys: Set<string>): DynamicFormValidatorBuilder => {
		this._targetKeys = targetKeys
		return this
	}

	build = (): DynamicFormValidator => {
		return DynamicFormValidator.create(
			this._referenceKeys,
			this._targetKeys
		)
	}
}
