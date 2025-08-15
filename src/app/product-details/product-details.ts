import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
  productId!: string | null;

  constructor(private route: ActivatedRoute) {
    console.log("productId", this.productId)
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
    })
    console.log("on Init product Id" , this.productId)
  }
}
