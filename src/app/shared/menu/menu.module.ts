import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { MenuComponent } from './menu.component'

@NgModule({
    declarations: [MenuComponent],
    imports: [CommonModule, RouterLink, NzIconModule, NzMenuModule],
    exports: [MenuComponent],
})
export class MenuModule {}
