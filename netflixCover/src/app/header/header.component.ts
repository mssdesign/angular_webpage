import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  changeBtn = 'English';
  addBtn = 'Adicionar';
  callAction = 'Adicione sujestões de filmes aqui.';
  tipText = 'Você também pode excluir da lista!'
  filmsAdded: string[] = []

  constructor() {}

  ngOnInit(): void {}

  changeLang() {
    this.changeBtn === 'Português'
      ? (this.changeBtn = 'English')
      : (this.changeBtn = 'Português');
    this.addBtn === 'Adicionar'
      ? (this.addBtn = 'Add')
      : (this.addBtn = 'Adicionar');
    this.callAction === 'Adicione sujestões de filmes aqui.'
      ? this.callAction = 'Add film suggestions here.'
      : this.callAction = 'Adicione sujestões de filmes aqui.';
    this.tipText === 'Você também pode excluir da lista!'
      ? this.tipText = 'You can also delete items!'
      : this.tipText = 'Você também pode excluir da lista!';
  }

  addFilmHandler(event: any) {
    let film = event.value
    this.filmsAdded.push(film)
    event.value = ''
  }

  rmFilmHandler(film: string) {
    this.filmsAdded = this.filmsAdded.filter(movie => movie !== film)
  }
  
}
