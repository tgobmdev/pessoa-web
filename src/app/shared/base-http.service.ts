import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class BaseHttpService {
    protected baseUrl: string = ''

    constructor(protected readonly httpClient: HttpClient) {}

    protected getUrl = (endpoint: string): string => {
        return `${this.baseUrl}/${endpoint}`
    }

    protected get = <T>(endpoint: string): Observable<T> => {
        return this.httpClient.get<T>(this.getUrl(endpoint))
    }

    protected getById = <T>(
        endpoint: string,
        id: string | number
    ): Observable<T> => {
        return this.httpClient.get<T>(`${this.getUrl(endpoint)}/${id}`)
    }
}
