import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wod } from '../../interfaces/wod.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WodService {

    private apiUrl = 'http://localhost:3000/wods';

    constructor(private http: HttpClient) { }

    submitWod(name: string, type: string): Observable<Wod> {
        console.log('saved! ' + name + ', ' + type);
        const wod: Partial<Wod> = {name, type};
        return this.http.post<Wod>(this.apiUrl, wod);
    }
}
