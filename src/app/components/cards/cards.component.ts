import { Component,Input, OnInit } from '@angular/core';
import { productData, ProductData } from '../models/product-data';


@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  data = productData;

  
  ngOnInit(): void {
  }

  
}


 
  