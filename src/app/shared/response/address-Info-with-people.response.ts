import { AddressDetailsResponse } from './address-details.response'
import { PersonDetailsResponse } from './person-details.response'

export interface AddressInfoWithPeopleResponse {
    addressDetailsResponse: AddressDetailsResponse
    personDetailsResponseList: PersonDetailsResponse[]
}
