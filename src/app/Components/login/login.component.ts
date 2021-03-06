import { Component, OnInit } from '@angular/core';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public username: string = "";
  public password: string = "";
  public formInvalid: boolean = false;
  public usernameOrPasswordWrong: boolean = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  public login(): void {
    if (this.username && this.password) {
      this.formInvalid = false;
      //Der Benutzer hat was in die Felder geschrieben.
      const loginSuccessful: boolean = this.authenticationService.login(this.username, this.password);
      if (loginSuccessful) {
        this.usernameOrPasswordWrong = false;
        this.router.navigate(["home"])
      } else {
        this.usernameOrPasswordWrong = true;
      }

    } else {
      this.formInvalid = true;
    }
  }
}
