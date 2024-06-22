import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ActionHandler } from '@components/table/models/action-handler.interface'
import { PartialColumn } from '@components/table/models/column.interface'
import { TableModule } from '@components/table/table.module'
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message'
import { addressColumns } from 'src/app/core/configs/table-columns/address-columns'
import { AddressResponse } from 'src/app/core/models/address-response.interface'
import { AddressService } from 'src/app/core/services/address.service'

@Component({
	selector: 'app-adress-list',
	standalone: true,
	imports: [TableModule, NzMessageModule],
	templateUrl: './adress-list.component.html',
	styleUrl: './adress-list.component.css',
})
export class AdressListComponent {
	data: AddressResponse[] = []
	columns: PartialColumn[]

	constructor(
		private readonly router: Router,
		private readonly message: NzMessageService,
		private readonly addressService: AddressService
	) {
		this.columns = addressColumns(this.getActions())
	}

	ngOnInit(): void {
		this.getAllAddresses()
	}

	getAllAddresses = () => {
		this.addressService.getAllAddresses().subscribe({
			next: (res) => {
				this.data = res
			},
			error: (_err) => {
				this.message.error('Internal error. try again or later.')
			},
		})
	}

	viewAddress = (id: number) => {
		this.router.navigate([`addresses/${id}`])
	}

	private getActions = (): ActionHandler => {
		const actionView = (id: number): void => this.viewAddress(id)
		return { actionView: actionView.bind(this) }
	}
}
