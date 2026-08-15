import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, TranslatePipe],
})
export class ContactComponent {
  form: FormGroup;
  loading = false;

  toast: { show: boolean; type: 'success' | 'error'; message: string } = {
    show: false,
    type: 'success',
    message: '',
  };

  private toastTimer: any;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService
  ) {
    this.form = this.fb.group({
      from_name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required],
    });
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.showToast('error', 'contact.toastRequired');
      return;
    }

    this.loading = true;

    // Carga diferida: @emailjs/browser solo se descarga al enviar el formulario.
    const emailjs = (await import('@emailjs/browser')).default;

    emailjs
      .send(
        'service_sygd4sk',
        'template_fqa1z3k',
        this.form.value,
        'VPj63xUtAafjdJ2s5'
      )
      .then(() => {
        this.form.reset();
        this.showToast('success', 'contact.toastSuccess');
      })
      .catch(() => {
        this.showToast('error', 'contact.toastError');
      })
      .finally(() => {
        this.loading = false;
      });
  }

  private showToast(type: 'success' | 'error', messageKey: string): void {
    // messageKey se traduce en el template (permite re-traducir toasts abiertos).
    this.toast = { show: true, type, message: messageKey };
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => (this.toast.show = false), 4500);
  }
}
