import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { MenuItem, MenuModule } from '@components/menu'
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

	menuItems: MenuItem[] = [
		{ label: 'Persons', iconType: 'user', routerLink: 'persons' },
		{ label: 'Addresses', iconType: 'book', routerLink: 'addresses' },
	]

	footerMessage = 'Ant Design ©2020 Implement By Angular'
}
