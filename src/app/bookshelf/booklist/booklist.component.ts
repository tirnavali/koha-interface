import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  @Input() book: {title: string, isbn: number}

  constructor() { }

  ngOnInit(): void {
  }

}
