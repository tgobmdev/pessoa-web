import { Component } from '@angular/core'
import {
	FormGroup,
	NonNullableFormBuilder,
	ReactiveFormsModule,
} from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { PartialColumn, TableModule } from '@components/table'
import { addressForm } from '@core/configs/form'
import { personColumns } from '@core/configs/table-columns'
import { AddressPeopleResponse, PersonResponse } from '@core/models'
import { AddressService } from '@core/services'
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
		private readonly fb: NonNullableFormBuilder
	) {
		this.columns = personColumns
		this.addressForm = this.fb.group(addressForm)
	}

	ngOnInit(): void {
		this.getAddressId()
		this.loadAddressDetails()
		this.addressForm.disable()
	}

	fetchAddressInfo = (addressId: number) => {
		this.addressService.getAddressInfoWithPeople(addressId).subscribe({
			next: (res: AddressPeopleResponse) => {
				this.addressForm.patchValue(res.address)
				this.data = res.persons
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
