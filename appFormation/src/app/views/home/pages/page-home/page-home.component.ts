import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

 // Le formulaire
 public form:FormGroup;

 @Input() public user:User = new User();

 public authentifie:Boolean = false;

  constructor(
    public userService:UserService,
    private formBuilder:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.authentifie = (localStorage.getItem('userConnected') && localStorage.getItem('userConnected')=='true');

    this.form = this.formBuilder.group({
      username : [this.user.username],
      password : [this.user.password]
    });

    //this.userService.getByUserNamePassword("admin","admin").subscribe((user:User) => { console.log(user); });

    this.userService.collection.subscribe((allusers:User[]) => {
    })

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
    this.userService.getByUserNamePassword(this.form.value.username, this.form.value.password).subscribe((userAuthentifie:User) => {
      if (userAuthentifie && userAuthentifie.id!=null)
      {
        this.authentifie = true;
        localStorage.setItem('userConnected', 'true');
        localStorage.setItem('user', JSON.stringify(userAuthentifie));
        this.router.navigate(['/orders']);
      }
      else
      {
        this.authentifie = false;
        localStorage.removeItem('userConnected');
        localStorage.removeItem('user');
        this.router.navigate(['/']);
      }
    });
  }
}
