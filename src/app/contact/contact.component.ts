import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  userName:string='';
  // for ensuring that it is By specifying that userAge can only be a number or null
  userAge: number | null = null;
  userEmail:string='';
  userPassword:string=''

}
