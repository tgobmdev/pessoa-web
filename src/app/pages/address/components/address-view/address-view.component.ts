import { Component, OnInit } from '@angular/core'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { PartialColumnModel } from '@components/table/models/column.model'
import { TableModule } from '@components/table/table.module'
import { addressFormView } from '@configs/form/address-form.config'
import { personTableColumnsConfig } from '@configs/table/person-table-columns.config'
import { AddressPeopleResponse } from '@models/address-person.model'
import { PersonResponse } from '@models/person.model'
import { AddressService } from '@services/address.service'
import { DynamicFormService } from '@services/dynamic-form.service'
import { NzCollapseModule } from 'ng-zorro-antd/collapse'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzMessageService } from 'ng-zorro-antd/message'

@Component({
	selector: 'app-address-view',
	standalone: true,
	imports: [
		NzDividerModule,
		NzGridModule,
		NzFormModule,
		NzInputModule,
		NzCollapseModule,
		TableModule,
		ReactiveFormsModule,
	],
	templateUrl: './address-view.component.html',
	styleUrl: './address-view.component.css',
})
export class AddressViewComponent implements OnInit {
	addressId!: number
	addressForm: FormGroup

	data: PersonResponse[] = []
	columns: PartialColumnModel[]

	constructor(
		private readonly route: ActivatedRoute,
		private readonly message: NzMessageService,
		private readonly addressService: AddressService,
		private readonly dynamicFormService: DynamicFormService
	) {
		this.getAddressId()
		this.columns = personTableColumnsConfig
		this.addressForm =
			this.dynamicFormService.createFormGroupFromObject(addressFormView)
	}

	ngOnInit(): void {
		this.loadAddressDetails()
		this.addressForm.disable()
	}

	fetchAddressInfo = (addressId: number) => {
		this.addressService.getAddressInfoWithPeople(addressId).subscribe({
			next: (res: AddressPeopleResponse) => {
				try {
					this.dynamicFormService.updateFormGroupFromObject(
						this.addressForm,
						res.address
					)
					this.data = res.persons
				} catch (err) {
					const errorMessage = err instanceof Error ? err.message : String(err)
					this.message.error(errorMessage)
				}
			},
			error: (err) => {
				this.message.error(err)
			},
		})
	}
	loadAddressDetails = () => {
		this.fetchAddressInfo(this.addressId)
	}

	getAddressId = (): void => {
		this.route.paramMap.subscribe({
			next: (params) => {
				this.addressId = Number(params.get('id'))
			},
			error: (err) => {
				this.message.error(err)
			},
		})
	}
}
