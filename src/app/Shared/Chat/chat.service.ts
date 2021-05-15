import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Chat } from '../../modal/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  endPoint = 'http://45.79.111.106/interview.json'

  constructor(private httpClient: HttpClient) { }

  getChatLists(): Observable<Chat> {
    return this.httpClient.get<Chat>(this.endPoint)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  httpError(error : any) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }

}
