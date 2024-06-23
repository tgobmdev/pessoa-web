import { Person } from "./person.interface";

export interface PersonRequest extends Partial<Omit<Person, 'id'>> {
	id?: number
}
