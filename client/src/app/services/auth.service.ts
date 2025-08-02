import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { LoginDto, RegisterDto } from '../interfaces/auth.dto';
import { User } from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private user = signal<User | null>(null);

    constructor(private http: HttpClient) { }

    register(data: RegisterDto) {
        console.log('this is register !!');
        return this.http.post('/api/auth/register', data);
    }

    login(data: LoginDto) {
        return this.http.post<{ access_token: string; user: User }>('/api/auth/login', data)
            .pipe(tap(res => {
                localStorage.setItem('token', res.access_token);
                this.user.set(res.user);
            }));
    }

    get currentUser() {
        return this.user.asReadonly();
    }
}
