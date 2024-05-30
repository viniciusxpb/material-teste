import { Component } from '@angular/core';

@Component({
  selector: 'app-saudacao',
  standalone: true,
  imports: [],
  templateUrl: './saudacao.component.html',
  styleUrl: './saudacao.component.scss'
})
export class SaudacaoComponent {
  teste:number = 0;

  cliquei(){
    this.teste++;

    this.teste = this.teste+1;

  }

}
