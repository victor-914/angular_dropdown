import { Component, OnInit } from '@angular/core';
import { Record } from '../../shared/model/record';
import { RecordService } from '../services/record-service.service';
import { RecordItemComponent } from '../components/record-item/record-item.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-record',
  standalone: true,
  imports: [RecordItemComponent, CommonModule],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css',
})
export class RecordComponent implements OnInit {
  records: Record[] = [];

  constructor(private recordService: RecordService) {}

  ngOnInit(): void {
    this.records = this.recordService.getRecords();
  }

  ngOnDestroy(): void {
    this.records = [];
  }
}
