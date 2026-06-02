export type MenuItem = {
    _id: string;
    name: string;
    description: string;
    price: number;
}

export type MenuCategory = {
    _id: string;
    title: string;
    items: MenuItem[];
}