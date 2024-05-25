export interface PersonModel {
	id: number
	street: string
	dateOfBirth: Date
}
export interface PersonRequest extends Partial<Omit<PersonModel, 'id'>> {
	id?: number
}
export interface PersonResponse extends PersonModel {}
