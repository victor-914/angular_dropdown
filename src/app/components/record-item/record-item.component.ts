import { Component, Input } from '@angular/core';
import { Record } from '../../../shared/model/record';
@Component({
  selector: 'app-record-item',
  standalone: true,
  imports: [],
  templateUrl: './record-item.component.html',
  styleUrl: './record-item.component.css',
})
export class RecordItemComponent {
  @Input()
  record: Record | undefined;
}
