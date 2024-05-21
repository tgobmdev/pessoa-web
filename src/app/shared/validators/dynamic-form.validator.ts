import { DynamicFormValidatorBuilder } from '@builders/dynamic-form.builder'
import { ErrorUtil } from '@utils/error.util'
import { SetUtil } from '@utils/set.util'

export class DynamicFormValidator {
    private _referenceKeys: Set<string>
    private _targetKeys: Set<string>

    static builder = (): DynamicFormValidatorBuilder => {
        return new DynamicFormValidatorBuilder()
    }

    static create(
        referenceKeys: Set<string>,
        targetKeys: Set<string>
    ): DynamicFormValidator {
        return new DynamicFormValidator(referenceKeys, targetKeys)
    }

    private constructor(referenceKeys: Set<string>, targetKeys: Set<string>) {
        this._referenceKeys = referenceKeys
        this._targetKeys = targetKeys
    }

    ensureNoExtraKeys(): this {
        const extraKeys = SetUtil.excludeKeys(
            this._targetKeys,
            this._referenceKeys
        )

        const condition = extraKeys.length > 0
        const errorMessage = `Extra keys found: ${Array.from(extraKeys).join(', ')}`

        ErrorUtil.throwErrorIfConditionMet(
            condition,
            () => new Error(errorMessage)
        )
        return this
    }

    ensureNoMissingKeys(): this {
        const missingKeys = SetUtil.excludeKeys(
            this._referenceKeys,
            this._targetKeys
        )

        const condition = missingKeys.length > 0
        const errorMessage = `Missing keys found: ${Array.from(missingKeys).join(', ')}`

        ErrorUtil.throwErrorIfConditionMet(
            condition,
            () => new Error(errorMessage)
        )
        return this
    }
}
