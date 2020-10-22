import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/Product.service';
import { Product } from '../../Model/product';
import { Category } from '../../Model/sidebar';
import { startWith } from 'rxjs/operators';
import { SidebarService } from '../../Services/sidebar.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  title = 'phone-market';
  selectedCategory:Category[] = null;
  data: Product[] = [];
  categori:Category[];

  selectedPerPage =3;
  selectedPage=2;

  constructor(private productService: ProductService,private sidebarService:SidebarService) {

    this.productService.status
        .subscribe(value => {
          this.data = value
    })
    this.sidebarService.status
    .subscribe(value => {
      this.categori = value
})



  }



  ngOnInit(): void {
    this.getList();
  }


  private getList() {
    this.data = this.productService.products
  }


}
