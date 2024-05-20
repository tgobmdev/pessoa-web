import { Injectable } from '@angular/core'
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms'

@Injectable({
    providedIn: 'root',
})
export class DynamicFormBuilderService {
    constructor(private readonly fb: NonNullableFormBuilder) {}

    createFormFromObject = <T extends Record<string, any>>(
        object: T
    ): FormGroup => {
        const formGroup = this.fb.group({})

        Object.keys(object).forEach((key) => {
            formGroup.addControl(key, new FormControl(object[key]))
        })
        return formGroup
    }
}
