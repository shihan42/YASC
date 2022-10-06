export interface Item {
    id : string;
    name : string;
}

export interface ItemCategory {
    id : string;
    name : string;
    items : Item[];
}
