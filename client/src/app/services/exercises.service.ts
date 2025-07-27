import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise } from '../interfaces/exercise.interface';

@Injectable({
    providedIn: 'root'
})
export class ExercisesService {

    private apiUrl = '/api/exercises';

    constructor(private http: HttpClient) { }

    getExercises(): Observable<Exercise[]> {
        return this.http.get<Exercise[]>(this.apiUrl);
    }
}
