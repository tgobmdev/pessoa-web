import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { TableComponent } from './table.component'

@NgModule({
    declarations: [TableComponent],
    imports: [
        CommonModule,
        NzTableModule,
        NzIconModule,
        NzDividerModule,
        NzToolTipModule,
    ],
    exports: [TableComponent],
})
export class TableModule {}
