import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: { user: string, bot: string }[] = [];
  input: string = '';

  constructor(private http: HttpClient) {}

  sendMessage() {
    this.http.post<any>('http://localhost:5000/api/chat', { message: this.input })
      .subscribe(res => {
        this.messages.push({ user: this.input, bot: res.response });
        this.input = '';
      });
  }
}