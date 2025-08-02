import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginSuccess } from '../../store/auth.actions';
import { Router } from '@angular/router';
import { Validators, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginDto } from '../../interfaces/auth.dto';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-login',
    imports: [ReactiveFormsModule, CommonModule, MatSelectModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    private auth = inject(AuthService);
    private router = inject(Router);
    private store = inject(Store);

    form = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    error: string | null = null;

    onLogin() {
        this.error = null;
        if (this.form.valid) {
            const loginDto = this.form.getRawValue() as LoginDto;
            this.auth.login(loginDto).subscribe({
                next: (res: any) => {
                    if (res && res.user) {
                        this.store.dispatch(loginSuccess({ user: res.user }));
                        this.router.navigate(['/admin']);
                        console.log('login success!');
                    } else {
                        this.error = 'Login failed. Please check your credentials.';
                    }
                },
                error: (err: any) => {
                    this.error = 'Login failed. Please check your credentials.';
                    console.error(err);
                }
            });
        }
    }
}
