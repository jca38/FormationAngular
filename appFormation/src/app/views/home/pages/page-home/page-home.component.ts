import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

 // Pour le formulaire d'authentification
 public form:FormGroup;
 public username:string;
 public password:string;

  constructor(
    public userService:UserService,
    private formBuilder:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {

    // Initialisation du formulaire d'authentification
    this.form = this.formBuilder.group({
      username : [this.username, Validators.required],
      password : [this.password, Validators.required]
    });

    // Pour tester la récupération de tous les utilisateurs
    this.userService.collection.subscribe((allusers:User[]) => {
    });

    // Pour tester les OBSERVABLES
    const data = new Observable(obs => {
      obs.next(1);
      obs.next(5);
      //obs.error(new Error("Erreur détectée"));
      obs.next(8);
      obs.next(9);
      obs.complete();
    });

    data.subscribe({
      next: value => console.log(value),
      error : err => console.log(err),
      complete : () => console.log("finish")
    });

  }

  public onSubmit():void {
    // On peut aussi faire user:User = this.form.value;
    this.userService.getByUserNamePassword(this.form.value.username, this.form.value.password).subscribe((userAuthentifie:User) => {
      if (userAuthentifie && userAuthentifie.id!=null)
      {
        this.userService.setUserId(userAuthentifie.id);
        this.router.navigate(['/orders']);
      }
      else
      {
        this.userService.setUserId(null);
        this.router.navigate(['/']);
      }
    });
  }
}
