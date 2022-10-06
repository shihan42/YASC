import { Injectable } from '@angular/core';
import { Item, ItemCategory } from '../models/itemBrowser';


@Injectable({
    providedIn: 'root'
})
export class ItemService
{
    items = [
        { id: "standard",   name: "Standard",   items: [
            { id: "plates", name: "Plates" },
            { id: "rods",   name: "Rods" },
            { id: "wire",   name: "Wire" }
        ]},
        { id: "industrial", name: "Industrial", items: [
            { id: "rotor",  name: "Rotor" },
            { id: "stator", name: "Stator" }
        ]},
        { id: "electronics",  name: "Electronics", items: [
            { id: "chip",     name: "Chip" },
            { id: "computer", name: "Computer" }
        ]}
    ];

    constructor()
    {}

    getItems(filter : string = "") : ItemCategory[]
    {
        if (filter.length == 0)
        {
            return this.items;
        }

        let filteredItems : ItemCategory[] = [];

        this.items.forEach(category => {
            let dummyCategory = {...category};
            dummyCategory.items = [];

            category.items.forEach(item => {
                if (item.name.toLowerCase().includes(filter.toLocaleLowerCase()))
                {
                    dummyCategory.items.push(item);
                }
            });

            if (dummyCategory.items.length > 0)
            {
                filteredItems.push(dummyCategory);
            }
        });

        return filteredItems;
    }
}
