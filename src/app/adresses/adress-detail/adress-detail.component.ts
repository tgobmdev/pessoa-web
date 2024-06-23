import { Component } from '@angular/core'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { PartialColumn, TableModule } from '@components/table'
import { addressForm } from '@core/configs/form'
import { personColumns } from '@core/configs/table-columns'
import { AddressPeopleResponse, PersonResponse } from '@core/models'
import { AddressService, DynamicFormService } from '@core/services'
import { NzCollapseModule } from 'ng-zorro-antd/collapse'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzMessageService } from 'ng-zorro-antd/message'

@Component({
	selector: 'app-adress-detail',
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
	templateUrl: './adress-detail.component.html',
	styleUrl: './adress-detail.component.css',
})
export class AdressDetailComponent {
	addressId!: number
	addressForm: FormGroup

	data: PersonResponse[] = []
	columns: PartialColumn[]

	constructor(
		private readonly route: ActivatedRoute,
		private readonly message: NzMessageService,
		private readonly addressService: AddressService,
		private readonly dynamicFormService: DynamicFormService
	) {
		this.getAddressId()
		this.columns = personColumns
		this.addressForm =
			this.dynamicFormService.createFormGroupFromObject(addressForm)
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
