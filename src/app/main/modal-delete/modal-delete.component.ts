import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.addEventListener('click', ()=> {
      this.close()
    })
  }
  close() {
    this.el.nativeElement.classList.remove('sshow');
    this.el.nativeElement.classList.add('hhidden')
  }

}
