import { Component, OnInit } from '@angular/core'
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message'
import { Column } from '../../shared/table/models/column.interface'
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
        { field: 'id', header: 'ID' },
        { field: 'street', header: 'Street' },
        { field: 'zipcode', header: 'ZipCode' },
        { field: 'streetNumber', header: 'Street Number' },
        { field: 'city', header: 'City' },
        { field: 'state', header: 'State' },
        { field: 'stateShortname', header: 'State Shortname' },
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
}
