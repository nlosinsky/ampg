import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: 'pagination.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {
  @Input() start: number;
  @Input() count: number;
  @Input() allCount: number;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    console.info('PaginationComponent initialised');
  }

  isFirstPage(): boolean {
    return this.start === 1;
  }

  isLastPage(): boolean {
    return this.start * this.count >= this.allCount;
  }

  nextPage(e: Event): void {
    e.preventDefault();

    this.start = this.start + 1;
    this.pageChanged.emit(this.start);
  }

  prevPage(e: Event): void {
    e.preventDefault();

    this.start = this.start - 1;
    this.pageChanged.emit(this.start);
  }
}
