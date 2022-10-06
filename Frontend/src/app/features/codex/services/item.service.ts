import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/items';


@Injectable({
    providedIn: 'root'
})
export class ItemService
{
    constructor(private http : HttpClient)
    {}

    retrieveItems() : Observable<Item[]>
    {
        let url = "/assets/data/items.json";
        return this.http.get<Item[]>(url);
    }
}
