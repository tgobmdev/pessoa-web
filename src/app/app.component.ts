import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'

export interface MenuItem {
    iconType: string
    label: string
    routerLink: string
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        NzIconModule,
        NzLayoutModule,
        NzMenuModule,
        RouterLink,
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    isCollapsed = false

    menuItems: MenuItem[] = [
        { iconType: 'user', label: 'Persons', routerLink: 'person' },
        { iconType: 'book', label: 'Addresses', routerLink: 'address' },
    ]

    footerMessage = 'Ant Design ©2020 Implement By Angular'
}
