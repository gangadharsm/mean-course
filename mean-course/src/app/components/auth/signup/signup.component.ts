import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoading: boolean = false;
  signupForm: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  onSignup() {
    if (this.signupForm.invalid) {
      return;
    }
    console.log(this.signupForm.value)
    this.authService.createUser(this.signupForm.value.email, this.signupForm.value.password);
  }
}
