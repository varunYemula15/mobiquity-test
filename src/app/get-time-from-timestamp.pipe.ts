import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getTimeFromTimestamp'
})
export class GetTimeFromTimestampPipe implements PipeTransform {

  transform(timestamp: any): any {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const formattedTime = hours + ':' + minutes.substr(-2);
    return formattedTime;
  }

}
