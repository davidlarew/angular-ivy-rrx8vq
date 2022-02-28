import { Component } from '@angular/core';
import { HttpService } from './http.service';

interface Message {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  messages: Message[] = [];
  messageCache: Message[] = [];
  searchTerm: string = '';
  initialSearch: string = '';

  constructor(private http: HttpService) {}

  filter() {
    const array = this.messageCache.filter((m) =>
      m.Title.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase())
    );
    this.messages = array;
  }

  add(message: Message) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
    this.messageCache = [];
  }

  handleError() {}

  getHttpData() {
    this.http
      .getData(this.initialSearch)
      .then((response) => {
        this.messages = response.Search;
        this.messageCache = response.Search;
      })
      .catch(this.handleError);
  }
}
