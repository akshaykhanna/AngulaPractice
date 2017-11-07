import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-stars',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    console.log('ak: rating: ' + this.rating );
    this.starWidth = this.rating * (86 / 5) ;
  }
  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    console.log('this.ratingClicked.emit(`The rating $(this.rating) was clicked`)');
  }
}
