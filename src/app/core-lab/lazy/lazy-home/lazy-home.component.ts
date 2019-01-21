import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Pizza } from 'src/app/shared/models/pizza.model'

@Component({
  selector: 'app-lazy-home',
  templateUrl: './lazy-home.component.html',
  styleUrls: ['./lazy-home.component.scss']
})
export class LazyHomeComponent implements OnInit {
  constructor(private http: HttpClient) {
    this.http.get<Pizza>('api/pizzas').subscribe(pizzas => console.log(pizzas))
  }

  ngOnInit() {}
}
