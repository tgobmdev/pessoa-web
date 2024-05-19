import { Injectable } from '@angular/core'
import { AddressInfoWithPeopleResponse } from '@response/address-Info-with-people.response'
import { AddressDetailsResponse } from '@response/address-details.response'
import { Observable } from 'rxjs'
import { BaseHttpService } from './base-http.service'

@Injectable({
    providedIn: 'root',
})
export class AddressService extends BaseHttpService {
    private endpoint = 'address'

    getAllAddresses = (): Observable<AddressDetailsResponse[]> => {
        return this.get<AddressDetailsResponse[]>(this.endpoint)
    }

    getAddressInfoWithPeople = (
        id: number
    ): Observable<AddressInfoWithPeopleResponse> => {
        const url = `${this.endpoint}/${id}/persons`
        return this.get<AddressInfoWithPeopleResponse>(url)
    }
}
