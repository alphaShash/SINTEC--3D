import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  
  constructor(private httpClient: HttpClient) { }

  // TODO: hymoser: replace by special type - not any
  getStockwerk(stockwerke: string) : Observable<any> {

    // TODO: hymoser: extract to helper (port/host handling etc.)
    var url = "http://localhost:3000/stockwerke/" + stockwerke;
    
    return this.httpClient.get<any>(url);
  }  
}
