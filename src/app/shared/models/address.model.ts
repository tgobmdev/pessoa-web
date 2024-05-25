export interface AddressModel {
	id: number
	street: string
	zipcode: string
	streetNumber: string
	city: string
	state: string
	stateShortname: string
}
export interface AddressRequest extends Partial<Omit<AddressModel, 'id'>> {
	id?: number
}
export interface AddressResponse extends AddressModel {}
