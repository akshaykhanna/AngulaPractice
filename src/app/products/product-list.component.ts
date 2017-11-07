import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css'],
    moduleId: module.id
})

export class ProductListComponent implements OnInit {
    title: string= 'Prod list';
    imgWidth: number= 50;
    imgMargin: number= 2;
    showImage: boolean = false;
    filterText: string = 'cart';
    products: IProduct[];
    errorMsg: string;
    constructor(private _prodService: ProductService) {}
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        console.log('Called OnInit lifecycle hook of ProdListComponent');
        this._prodService.getProducts().subscribe( prods => this.products = prods,
        err => this.errorMsg = <any> err);
        if (this.errorMsg){
            console.log('Error Msg:' + this.errorMsg);
        }
    }
    onRatingClicked(msg: string) {
         this.title = 'Prod List ' + msg;
    }
}
