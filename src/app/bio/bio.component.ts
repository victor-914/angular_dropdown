import { Component } from '@angular/core';
import { AddRecordComponent } from '../add-record/add-record.component';
@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [AddRecordComponent],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css',
})
export class BioComponent {}
