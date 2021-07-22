import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { AuthService, AuthResponse } from './auth.service';
import { PlaceholderDirective } from '../shared/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  authForm: FormGroup;
  inLoginMode: boolean;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective) alertContainer: PlaceholderDirective;
  private closeSub: Subscription;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.inLoginMode = params['mode'] === 'login';
    });

    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    if (!this.authForm.valid) return;
    const { email, password } = this.authForm.value;
    this.isLoading = true;

    let authObs: Observable<AuthResponse>;

    if (!this.inLoginMode) {
      authObs = this.authService.signup(email, password);
    } else {
      authObs = this.authService.login(email, password);
    }

    authObs.subscribe(
      (resp) => {
        console.log(resp);
        this.isLoading = false;
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
        this.error = error;
        this.showErrorAlert(error);
        this.isLoading = false;
      }
    );

    this.authForm.reset();
  }

  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(message: string) {
    // const alertComp = new AlertComponent();
    const alertCmpFactory =
      this.componentFactoryResolver.resolveComponentFactory(AlertComponent);

    const hostViewContainerRef = this.alertContainer.viewContainerRef;
    hostViewContainerRef.clear();

    const compRef = hostViewContainerRef.createComponent(alertCmpFactory);

    compRef.instance.message = message;
    this.closeSub = compRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
