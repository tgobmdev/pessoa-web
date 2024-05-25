import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { MenuModule } from '@components/menu/menu.module'
import { MenuItemModel } from '@components/menu/models/menu-item.model'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzLayoutModule } from 'ng-zorro-antd/layout'

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

	menuItems: MenuItemModel[] = [
		{ label: 'Persons', iconType: 'user', routerLink: 'person' },
		{ label: 'Addresses', iconType: 'book', routerLink: 'address' },
	]

	footerMessage = 'Ant Design ©2020 Implement By Angular'
}
