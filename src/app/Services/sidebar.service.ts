import { Injectable } from '@angular/core';
import { Category } from '../Model/sidebar';
import { categories } from '../category-data';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  status: Subject<Category[]> = new Subject<Category[]>();
  category:Category[];
  constructor() { 
    this.category = categories
  }

  updateStatus() {
    this.status.next(this.category)
  }
  getCategorisById(name: string) {
    this.category = categories.filter(c =>c.name === name)
  }
}
