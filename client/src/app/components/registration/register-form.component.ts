import { Component, signal, computed, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { UserRole } from '../../enums/user-role.enum';

@Component({
	standalone: true,
	selector: 'app-register-form',
	imports: [ReactiveFormsModule, CommonModule],
	templateUrl: './register-form.component.html',
	styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
	form = new FormGroup({
		firstName: new FormControl('', Validators.required),
		lastName: new FormControl('', Validators.required),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(6)]),
		confirmPassword: new FormControl('', Validators.required),
		role: new FormControl('user', Validators.required)
	});

	private auth = inject(AuthService);
	isSubmitting = signal(false);
	error = signal<string | null>(null);

	// Computed signal for password match
	passwordsMatch = computed(() =>
		this.form.controls.password.value === this.form.controls.confirmPassword.value
	);

	register() {
		this.error.set(null);
		if (this.form.invalid || !this.passwordsMatch()) {
			this.error.set('Please fix the errors in the form.');
			this.form.markAllAsTouched();
			return;
		}
		this.isSubmitting.set(true);
		const { firstName, lastName, email, password, role } = this.form.value;
		this.auth.register({
			firstName: firstName ?? '',
			lastName: lastName ?? '',
			email: email ?? '',
			password: password ?? '',
			role: (role as UserRole) ?? UserRole.USER
		})
			.subscribe({
				next: () => {
					this.isSubmitting.set(false);
					alert('Registration successful!');
					this.form.reset();
				},
				error: (err) => {
					this.isSubmitting.set(false);
					this.error.set('Registration failed. Please try again.');
					console.error(err);
				}
			});
	}
}
