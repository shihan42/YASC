import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/items';


@Pipe({
    name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform
{
    transform(items: readonly Item[]|null, filter? : string): readonly Item[]
    {
        if (items === null || items === undefined)
        {
            return [];
        }

        if (filter !== null && filter !== undefined)
        {
            return items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
        }

        return items;
    }
}
