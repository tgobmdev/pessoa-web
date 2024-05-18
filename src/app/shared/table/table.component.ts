import { Component, Input } from '@angular/core'
import { Column } from './models/table-common-models.interface'

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
})
export class TableComponent<T extends Record<string, any>> {
    @Input() title: string = ''
    @Input() dataSet: T[] = []
    @Input() columns!: Column[]
    @Input() frontPagination: boolean = true
}
