import { Component, Input, TemplateRef } from '@angular/core'
import { Column } from './models/column.interface'

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
})
export class TableComponent<T extends Record<string, any>> {
    @Input() title?: string | TemplateRef<void>
    @Input() dataSet!: T[]
    @Input() columns!: Column[]
}
