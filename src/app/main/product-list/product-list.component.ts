import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showDialog(){
    let modal_t  = document.getElementById('modal_1')
    modal_t.classList.remove('hhidden')
    modal_t.classList.add('sshow');
  }
  closeDialog() {
      let modal_t  = document.getElementById('modal_1')
      modal_t.classList.remove('sshow')
      modal_t.classList.add('hhidden');
  }

}
