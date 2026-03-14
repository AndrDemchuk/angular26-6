import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    constructor() { }

    addBook(book: Book): Observable<Book> {
        //uncomment to invoke an error
        /*         const err = new Error('err while adding a book ')
                return throwError(() => err) */
        return of(book);
    }
}