import { Directive, ElementRef, OnChanges, SimpleChanges, inject, input } from '@angular/core';
import { Job } from '../data/db';
import moment from 'moment';

@Directive({
  selector: '[duration]',
})
export class JobDuration implements OnChanges {
  public readonly job = input.required<Job>();
  private readonly el = inject(ElementRef);

  ngOnChanges(changes: SimpleChanges): void {
    const job = changes['job'].currentValue;
    const startDate = new Date(job.dateStart);
    const endDate = job.dateEnd ? new Date(job.dateEnd) : new Date();
    const totalMonths = moment(endDate).diff(moment(startDate), 'months');
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const timeSummary =
      years > 0 && months > 0
        ? `${years} years ${months} months`
        : years > 0 && months === 0
          ? `${years} years`
          : `${months} months`;

    this.el.nativeElement.textContent = `(${timeSummary})`;
  }
}
