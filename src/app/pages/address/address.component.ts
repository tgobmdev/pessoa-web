import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ActionHandler } from '@shared/table/models/action-handler.model'
import { PartialColumn } from '@shared/table/models/column.model'
import { TableModule } from '@shared/table/table.module'
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message'
import { AddressService } from './address.service'
import { addressColumnsConfig } from './config/address-columns.config'
import { AddressDetailsResponse } from './response/address-details.response'

@Component({
    selector: 'app-address',
    standalone: true,
    imports: [TableModule, NzMessageModule],
    templateUrl: './address.component.html',
    styleUrl: './address.component.css',
})
export class AddressComponent implements OnInit {
    data: AddressDetailsResponse[] = []
    columns: PartialColumn[]

    constructor(
        private readonly router: Router,
        private readonly message: NzMessageService,
        private readonly addressService: AddressService
    ) {
        this.columns = addressColumnsConfig(this.getActions())
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
        this.router.navigate([`address/${id}`])
    }

    private getActions = (): ActionHandler => {
        const actionView = (id: number): void => this.viewAddress(id)
        return { actionView: actionView.bind(this) }
    }
}
