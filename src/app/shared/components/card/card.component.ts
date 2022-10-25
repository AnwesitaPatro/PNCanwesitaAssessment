import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'common-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}
  @Input() email: string | undefined = '';
  @Input() name: string | undefined = '';
  @Input() bio: string | undefined = '';
  avatar: any = 'https://fakeimg.pl/100x100/';

  ngOnInit(): void {}
}
