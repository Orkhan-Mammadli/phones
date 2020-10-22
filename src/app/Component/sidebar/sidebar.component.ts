import { Component, OnInit } from '@angular/core';
import { Category } from '../../Model/sidebar';
import { SidebarService } from '../../Services/sidebar.service';
import { ProductService } from '../../Services/Product.service';
import { Product } from 'src/app/Model/product';
@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  selectedCategory:Category = null;
  categori: Category[];
  constructor(private sidebarService: SidebarService, private productService: ProductService) {}

  changeCategory(sign:Category,id:number) {
    this.selectedCategory = sign;
    this.sidebarService.getCategorisById(sign.name);
    this.sidebarService.updateStatus()


    this.productService.getProductById(sign.id);
    this.productService.updateStatus()
  }

 
  ngOnInit(): void {
    this.categori = this.sidebarService.category;
  }

}
