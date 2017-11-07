import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from './products';


@Injectable()

export class ProductService {
    private _productsURL: string= 'api/products/products.json';
    constructor(private _http: Http) {}

    getProducts(): Observable<IProduct[]> {
      return this._http.get(this._productsURL).map((resp: Response) => <IProduct[]>resp.json() )
      .do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
    }

    handleError(err: Response) {
        console.log(err);
        return Observable.throw( err.json().errror || 'Server errror');
    }
}
