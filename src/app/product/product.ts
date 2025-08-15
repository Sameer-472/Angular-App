import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterLink , RouterOutlet],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

}
