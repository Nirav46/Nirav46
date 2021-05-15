import { Component, OnInit } from '@angular/core';
import { ChatService } from "../../Shared/Chat/chat.service";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

   
  ChatList: any = [];

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.fetchChatList()
  }  

  fetchChatList() {
    return this.chatService.getChatLists().subscribe((data: {}) => {
      console.log(data);
      // this.ChatList = data;
    })    
  }  


}
