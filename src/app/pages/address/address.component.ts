import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ActionHandlerModel } from '@components/table/models/action-handler.model'
import { PartialColumnModel } from '@components/table/models/column.model'
import { TableModule } from '@components/table/table.module'
import { addressTableColumnsConfig } from '@configs/table/address-table-columns.config'
import { AddressResponse } from '@models/address.model'
import { AddressService } from '@services/address.service'
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message'

@Component({
    selector: 'app-address',
    standalone: true,
    imports: [TableModule, NzMessageModule],
    templateUrl: './address.component.html',
    styleUrl: './address.component.css',
})
export class AddressComponent implements OnInit {
    data: AddressResponse[] = []
    columns: PartialColumnModel[]

    constructor(
        private readonly router: Router,
        private readonly message: NzMessageService,
        private readonly addressService: AddressService
    ) {
        this.columns = addressTableColumnsConfig(this.getActions())
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

    private getActions = (): ActionHandlerModel => {
        const actionView = (id: number): void => this.viewAddress(id)
        return { actionView: actionView.bind(this) }
    }
}
