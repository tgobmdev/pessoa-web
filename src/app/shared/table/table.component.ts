import { Component, Input } from '@angular/core'
import { Column } from './models/column.interface'

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
})
export class TableComponent<T extends Record<string, any>> {
    @Input() dataSet!: T[]
    @Input() columns!: Column[]
}
