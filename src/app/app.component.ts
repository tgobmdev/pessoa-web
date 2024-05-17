import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { MenuModule } from './shared/menu/menu.module'
import { MenuItem } from './shared/menu/models/menu-item.interface'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        NzIconModule,
        NzLayoutModule,
        MenuModule,
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    isCollapsed = false

    menuItems: MenuItem[] = [
        { label: 'Persons', iconType: 'user', routerLink: 'person' },
        { label: 'Addresses', iconType: 'book', routerLink: 'address' },
    ]

    footerMessage = 'Ant Design ©2020 Implement By Angular'
}
