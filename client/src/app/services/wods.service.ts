import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wod } from '../interfaces/wod.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WodService {

    private apiUrl = '/api/wods';

    constructor(private http: HttpClient) { }

    createWod(wod: Partial<Wod>): Observable<Wod> {
        return this.http.post<Wod>(this.apiUrl, wod);
    }

    updateWod(id: string, data: Wod) {
        return this.http.put(`${this.apiUrl}/${id}`, data);
    }

    getWods(): Observable<Wod[]> {
        return this.http.get<Wod[]>(this.apiUrl);
    }

    getWodById(id: string) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }

    deleteWod(wodId: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${wodId}`);
    }
}
