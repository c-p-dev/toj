import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from '../models/user.interface';
import { Config } from '../models/config.interface';

@Injectable({
	providedIn: 'root'
})
export class ConfigService {

	constructor(private http: HttpClient) {
    }
    

    public getConfig(): Observable<Config>{
        return this.http.get<Config>('./assets/data/config1.json');
    }

	
}