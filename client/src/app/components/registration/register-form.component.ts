import { Component, signal, computed } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
		// TODO: Call your registration service here
		setTimeout(() => {
			this.isSubmitting.set(false);
			alert('Registration successful!');
			this.form.reset();
		}, 1000);
	}
}
