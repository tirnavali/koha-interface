import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  aramaYeri= [
    "Kütüphane kataloğu",
    "Eser adı",
    "Yazar adı",
    "Konu",
    "ISBN",
    "Diziler",
    "Yer numarası",
    "Demirbaş No"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    alert("Ara");  
  }

}
