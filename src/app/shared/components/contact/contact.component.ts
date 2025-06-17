import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
})
export class ContactComponent {
  form: FormGroup;
  loading: boolean = false;
  success: boolean = false;
  error: boolean = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      from_name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    this.loading = true;
    emailjs
      .send(
        'service_sygd4sk',
        'template_fqa1z3k',
        this.form.value,
        'VPj63xUtAafjdJ2s5'
      )
      .then(() => {
        this.loading = false;
        this.success = true;
        this.error = false;
        this.form.reset();
        setTimeout(() => (this.success = false), 3000);
      })
      .catch(() => {
        this.loading = false;
        this.success = false;
        this.error = true;
        setTimeout(() => (this.error = false), 3000);
      })
      .finally(() => {
        this.loading = false;
        this.error = false;
      });
  }
}
