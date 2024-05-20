import { Component, OnInit } from '@angular/core'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { PartialColumnModel } from '@components/table/models/column.model'
import { TableModule } from '@components/table/table.module'
import { addressFormView } from '@config/form/address-form.config'
import { personTableColumnsConfig } from '@config/table/person-table-columns.config'
import { AddressPeopleResponse } from '@models/address-person.model'
import { AddressResponse } from '@models/address.model'
import { PersonResponse } from '@models/person.model'
import { AddressService } from '@service/address.service'
import { DynamicFormBuilderService } from '@service/dynamic-form-builder.service'
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
        private readonly formBuilderService: DynamicFormBuilderService
    ) {
        this.columns = personTableColumnsConfig
        this.addressForm =
            this.formBuilderService.createFormFromObject(addressFormView)
    }

    ngOnInit(): void {
        this.loadAddressDetails()
        this.addressForm.disable()
    }

    updateAddressForm = (addressDetails: AddressResponse) => {
        this.addressForm.patchValue({
            id: addressDetails.id,
            street: addressDetails.street,
            streetNumber: addressDetails.streetNumber,
            zipcode: addressDetails.zipcode,
            city: addressDetails.city,
            state: addressDetails.state,
            stateShortname: addressDetails.stateShortname,
        })
    }

    fetchAddressInfo = (addressId: number) => {
        this.addressService.getAddressInfoWithPeople(addressId).subscribe({
            next: (res: AddressPeopleResponse) => {
                this.updateAddressForm(res.address)
                this.data = res.persons
            },
            error: (err) => {
                this.message.error(err)
            },
        })
    }

    loadAddressDetails = () => {
        this.route.paramMap.subscribe((params) => {
            this.addressId = Number(params.get('id'))
            if (this.addressId) {
                return this.fetchAddressInfo(this.addressId)
            }
        })
    }
}
