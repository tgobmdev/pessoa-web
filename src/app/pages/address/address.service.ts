import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { BaseHttpService } from '../../shared/base-http.service'
import { AddressDetailsResponse } from './response/address-details-response.interface'

@Injectable({
    providedIn: 'root',
})
export class AddressService extends BaseHttpService {
    private endpoint = 'address'

    getAllAddresses = (): Observable<AddressDetailsResponse[]> => {
        return this.get<AddressDetailsResponse[]>(this.endpoint)
    }
}
