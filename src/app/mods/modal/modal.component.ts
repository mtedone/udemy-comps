import {
  Component,
  OnInit,
  ElementRef,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<void>();
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // To fix the Modal issue, which is that if the modal
    // is displayed within an element with position:relative
    // we need to append it to the body element of the AppComponent
    document.body.appendChild(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    // We need to remove the element as we're adding it
    // directly in ngOnInit
    this.elementRef.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }
}
