import { Component, inject } from '@angular/core';
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

    form = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });


    onLogin() {
        if (this.form.valid) {
            const loginDto = this.form.getRawValue() as LoginDto;
            this.auth.login(loginDto).subscribe();
        }
    }
}
