import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Eslavi';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'Invitarlo',
    female: 'Invitarla',
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Paul','Carlos','Gus','Diego','Karla','Esther','Paco','Eluney','Luis','Aurelio'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando',
  }

  deleteClient(): void {
    this.clients.pop();
  }

  // KeyValue pipe
  public person = {
    name: 'Eslavi',
    age: 36,
    address: 'Guadajalara, Mexico'
  }

  // Async pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log(`tap: ${value}`))
  );

  // No es tan recomendable usar promises en estos casos porque el observable
  // no se desuscribe cuando cambias de pagina.
  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() =>{
      resolve('Tenemos data en la promesa');
    }, 3500)
  })

}
