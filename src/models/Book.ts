import { Author } from "./Author";

export interface Book {
    title: string;
    price: string;
    publisher: string;
    pages: string;
    bookStore: string;
    year: string;
    authors: Author[];
    topics: string[];
    link: string;
    imageUrl: string;
}