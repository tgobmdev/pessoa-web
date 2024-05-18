import { Component, OnInit } from '@angular/core'
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message'
import { Column } from '../../shared/table/models/table-common-models.interface'
import { TableModule } from '../../shared/table/table.module'
import { AddressService } from './address.service'
import { AddressDetailsResponse } from './response/address-details-response.interface'

@Component({
    selector: 'app-address',
    standalone: true,
    imports: [TableModule, NzMessageModule],
    templateUrl: './address.component.html',
    styleUrl: './address.component.css',
})
export class AddressComponent implements OnInit {
    dataSet: AddressDetailsResponse[] = []

    columns: Column[] = [
        { type: 'data', field: 'id', header: 'ID' },
        { type: 'data', field: 'street', header: 'Street' },
        { type: 'data', field: 'zipcode', header: 'ZipCode' },
        { type: 'data', field: 'streetNumber', header: 'Street Number' },
        { type: 'data', field: 'city', header: 'City' },
        { type: 'data', field: 'state', header: 'State' },
        { type: 'data', field: 'stateShortname', header: 'State Shortname' },
        {
            type: 'action',
            header: 'Action',
            actions: [
                {
                    tooltipTitle: 'View',
                    icon: 'eye',
                    actionFunction: (address: AddressDetailsResponse) =>
                        this.viewAddress(address.id),
                },
            ],
        },
    ]

    constructor(
        private readonly addressService: AddressService,
        private readonly message: NzMessageService
    ) {}

    ngOnInit(): void {
        this.getAllAddresses()
    }

    getAllAddresses = () => {
        this.addressService.getAllAddresses().subscribe({
            next: (res) => {
                this.dataSet = res
            },
            error: (err) => {
                this.message.error(err)
            },
        })
    }

    viewAddress = (address: number) => {}
}
