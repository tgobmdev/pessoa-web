import { Injectable } from '@angular/core'
import { PersonResponse } from '@models/person.model'
import { Observable } from 'rxjs'
import { BaseHttpService } from './base-http.service'

@Injectable({
    providedIn: 'root',
})
export class PersonService extends BaseHttpService {
    private endpoint = 'person'

    getAllPersons = (): Observable<PersonResponse[]> => {
        return this.get<PersonResponse[]>(this.endpoint)
    }
}
