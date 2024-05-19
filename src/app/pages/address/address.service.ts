import { Injectable } from '@angular/core'
import { BaseHttpService } from '@shared/base-http.service'
import { Observable } from 'rxjs'
import { AddressInfoWithPeopleResponse } from './response/address-Info-with-people.response'
import { AddressDetailsResponse } from './response/address-details.response'

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
