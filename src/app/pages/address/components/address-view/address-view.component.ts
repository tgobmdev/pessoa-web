import { Component, OnInit } from '@angular/core'
import {
    FormControl,
    FormGroup,
    NonNullableFormBuilder,
    ReactiveFormsModule,
} from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { NzCollapseModule } from 'ng-zorro-antd/collapse'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzMessageService } from 'ng-zorro-antd/message'
import { Column } from '../../../../shared/table/models/table-common-models.interface'
import { TableModule } from '../../../../shared/table/table.module'
import { AddressService } from '../../address.service'
import { AddressInfoWithPeopleResponse } from '../../response/address-Info-with-people-response.interface'
import { AddressDetailsResponse } from '../../response/address-details-response.interface'
import { PersonDetailsResponse } from '../../response/person-details-response.interface'

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

    addressForm!: FormGroup<{
        id: FormControl<number>
        street: FormControl<string>
        streetNumber: FormControl<string>
        zipcode: FormControl<string>
        city: FormControl<string>
        state: FormControl<string>
        stateShortname: FormControl<string>
    }>

    data: PersonDetailsResponse[] = []

    columns: Column[] = [
        { type: 'data', field: 'id', header: 'ID' },
        { type: 'data', field: 'namePerson', header: 'Name Person' },
        { type: 'data', field: 'dateOfBirth', header: 'Date of Birth' },
    ]

    constructor(
        private readonly route: ActivatedRoute,
        private readonly message: NzMessageService,
        private readonly fb: NonNullableFormBuilder,
        private readonly addressService: AddressService
    ) {
        this.initializeForm()
    }

    ngOnInit(): void {
        this.loadAddressDetails()
    }

    initializeForm = () => {
        this.addressForm = this.fb.group({
            id: [{ value: Number.NaN, disabled: true }],
            street: [{ value: '', disabled: true }],
            streetNumber: [{ value: '', disabled: true }],
            zipcode: [{ value: '', disabled: true }],
            city: [{ value: '', disabled: true }],
            state: [{ value: '', disabled: true }],
            stateShortname: [{ value: '', disabled: true }],
        })
    }

    updateAddressForm = (addressDetails: AddressDetailsResponse) => {
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
            next: (res: AddressInfoWithPeopleResponse) => {
                this.updateAddressForm(res.addressDetailsResponse)
                this.data = res.personDetailsResponseList
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
