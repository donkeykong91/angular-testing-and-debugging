import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class XyzWebStorageService {
    constructor(private http: Http) {}

    get(key: string) {
        return window.localStorage.getItem(key);
    }

    set(key: string, value: string) {
        window.localStorage.setItem(key, value);
    }

    getRemote(){
        return this.http.get<any>('http://localhost:5984/user/settings');
    }

    setRemote(payload: Object) {
        return this.http.put<any>('http://localhost:5984/user/settings', payload);
    }
}
