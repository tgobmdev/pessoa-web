import { Address } from './address.interface'

export interface AddressRequest extends Partial<Omit<Address, 'id'>> {
	id?: number
}
