import { Component, Input } from '@angular/core'
import { PartialColumn } from './models/column.model'

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
})
export class TableComponent<T extends Record<string, any>> {
    @Input() title: string = ''
    @Input() dataSet: T[] = []
    @Input() columns!: PartialColumn[]
    @Input() frontPagination: boolean = true
    @Input() bordered: boolean = false
}
