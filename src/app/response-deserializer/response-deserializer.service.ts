import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponseDeserializerService {

  public deserialize(contentType: string, body: ArrayBuffer) {
    if (body.byteLength == 0) {
      return body;
    }
    const stringBody = new TextDecoder('utf-8').decode(body);
    if (contentType.includes('text/plain')) {
      return stringBody;
    }
    return JSON.parse(stringBody);
  }
}
