import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NzTableModule } from 'ng-zorro-antd/table'
import { TableComponent } from './table.component'

@NgModule({
    declarations: [TableComponent],
    imports: [CommonModule, NzTableModule],
    exports: [TableComponent],
})
export class TableModule {}
