import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  logData(data: any) {
    console.log(data);
  }

}
