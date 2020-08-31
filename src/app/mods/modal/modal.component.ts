import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // To fix the Modal issue, which is that if the modal
    // is displayed within an element with position:relative
    // we need to append it to the body element of the AppComponent
    document.body.appendChild(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    document.body.removeChild(this.elementRef.nativeElement);
  }
}
