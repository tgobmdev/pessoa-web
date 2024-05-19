import { Component, Input } from '@angular/core'
import { MenuItem } from './models/menu-item.model'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
})
export class MenuComponent {
    @Input() menuItems: MenuItem[] = []
}
