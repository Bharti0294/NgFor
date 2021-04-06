import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngfor';
  employees = EMPLOYEES;
}

interface employees {
  name: string;
  id: number;
  email: string;
  city: string;
}

const EMPLOYEES: employees[] = [
  {
    name: 'Priya',
    id: 501,
    email: 'priyanipunge@gmail.com',
    city: 'Shreerampur'
  },
  {
    name:'Akshaya',
    id: 502,
    email:'akshayavaghire@gmail.com' ,
    city: 'Nagar'
  },
  {
    name: 'Shubham',
    id: 503,
    email: 'shubhamchavan@gmail.com',
    city: 'Indore'
  },
  {
    name: 'Bharti',
    id: 504,
    email: 'bhartidevadhe@gmail.com',
    city: 'Aurangabad'
  },
  {
    name: 'Ganesh',
    id: 505,
    email: 'ganeshdevadhe@gmail.com',
    city: 'Pune'
  },
  {
    name: 'Tushar',
    id: 506,
    email: 'tusharkolhe@gmail.com',
    city: 'Indore'
  },
  {
    name: 'Anuja',
    id: 507,
    email: 'anujawagh@gmail.com',
    city: 'Pune'
  },
  {
    name: 'Vidya',
    id: 509,
    email: 'vidhyabhorde@gmail.com',
    city: 'Palghar'
  },
  {
    name: 'Rohini',
    id: 510,
    email: 'rohininehul@gmail.com',
    city: 'Nagar'
  }

];
