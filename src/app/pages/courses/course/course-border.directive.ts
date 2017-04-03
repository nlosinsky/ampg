import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: `[courseBorder]`
})
export class CourseBorderDirective implements OnInit {
  @Input() createdDate: Date;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const upcomingCondition = (this.createdDate > new Date());
    const millisecondInOneDay = 86400000;
    const fourteenDaysDiff = new Date().getTime() - 14 * millisecondInOneDay;
    const freshCondition = (this.createdDate < new Date() && this.createdDate >= new Date(fourteenDaysDiff));

    if (freshCondition) {
      this.el.nativeElement.style.borderColor = 'green';
    } else if (upcomingCondition) {
      this.el.nativeElement.style.borderColor = 'blue';
    }
  }
}
