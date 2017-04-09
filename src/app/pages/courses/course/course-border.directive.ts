import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: `[courseBorder]`
})
export class CourseBorderDirective implements OnInit {
  @Input() date: Date;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const upcomingCondition = (this.date > new Date());
    const millisecondInOneDay = 86400000;
    const fourteenDaysDiff = new Date().getTime() - 14 * millisecondInOneDay;
    const freshCondition = (this.date < new Date() && this.date >= new Date(fourteenDaysDiff));

    if (freshCondition) {
      this.el.nativeElement.style.borderColor = 'green';
    } else if (upcomingCondition) {
      this.el.nativeElement.style.borderColor = 'blue';
    }
  }
}
