import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-normal-home',
  templateUrl: './normal-home.component.html',
  styleUrls: ['./normal-home.component.scss']
})
export class NormalHomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}
}
