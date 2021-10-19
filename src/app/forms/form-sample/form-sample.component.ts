import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-sample',
  templateUrl: './form-sample.component.html',
  styleUrls: ['./form-sample.component.scss']
})
export class FormSampleComponent implements OnInit {
  forms!: FormGroup;
  form!:FormGroup;
  constructor( private router:Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.forms= new FormGroup({
      'name':new FormControl("",Validators.required),
      'email':new FormControl(null, [Validators.required,Validators.email]),
      'address':new FormControl("",Validators.required),
    })
      this.form= new FormGroup({
      'name1':new FormControl("",Validators.required),
      'email1':new FormControl(null, [Validators.required,Validators.email]),
      
      'address1':new FormControl("",Validators.required),

      
  })

}

get name ()
{
    return this.forms.get('name') as FormControl
}
get email ()
{
    return this.forms.get('email') as FormControl
}
get address ()
{
    return this.forms.get('address') as FormControl
}
get name1(){
  return this.form.get('name1') as FormControl
}
get email1 ()
{
    return this.form.get('email1') as FormControl
}
get address1 ()
{
    return this.form.get('address1') as FormControl
}

submit(pageName:string):void{

  if (this.forms.invalid){
    return;
  }
  this.form.reset();
   
  setTimeout(() =>{ 
    this.router.navigate([`${pageName}`]); }, 3000);
}
onSubmit( pageName:string):void{

  if (this.form.invalid){
    return;
  }
   this.form.reset();

  setTimeout(() =>{ 
    this.router.navigate([`${pageName}`]); }, 3000);
}
}
