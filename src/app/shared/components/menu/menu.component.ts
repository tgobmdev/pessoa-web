import { Component, Input } from '@angular/core'
import { MenuItemModel } from './models/menu-item.model'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
})
export class MenuComponent {
    @Input() menuItems: MenuItemModel[] = []
}
