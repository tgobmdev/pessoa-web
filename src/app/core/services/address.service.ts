import { Injectable } from '@angular/core'
import { AddressPeopleResponse } from '@models/address-people-response.interface'
import { AddressResponse } from '@models/address-response.interface'
import { Observable } from 'rxjs'
import { BaseHttpService } from './base-http.service'

@Injectable({
	providedIn: 'root',
})
export class AddressService extends BaseHttpService {
	private endpoint = 'address'

	getAllAddresses = (): Observable<AddressResponse[]> => {
		return this.get<AddressResponse[]>(this.endpoint)
	}

	getAddressInfoWithPeople = (
		id: number
	): Observable<AddressPeopleResponse> => {
		const url = `${this.endpoint}/${id}/persons`
		return this.get<AddressPeopleResponse>(url)
	}
}
