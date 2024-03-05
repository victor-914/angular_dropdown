import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecordService } from '../services/record-service.service';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';

@Component({
  selector: 'app-add-record',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
    SideMenuComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './add-record.component.html',
  styleUrl: './add-record.component.css',
})
export class AddRecordComponent implements OnInit {
  infoForm = this.fb.group({
    title: ['', Validators.required],
    attendingPhysician: ['', Validators.required],
    hospitalName: ['', Validators.required],
    location: ['', Validators.required],
    durationOfTreatment: ['', Validators.required],
    cost: ['', Validators.required],
    medicationName: ['', Validators.required],
    dosage: ['', Validators.required],
    frequency: ['', Validators.required],
    testName: ['', Validators.required],
    testResult: ['', Validators.required],
  });

  isOpen$!: Observable<boolean>;
  isOpen: any;

  storeSubscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private recordService: RecordService,
    private store: Store<{ isOpen: boolean }>
  ) {}
  ngOnInit(): void {
    this.storeSubscription = this.store.select('isOpen').subscribe((isOpen) => {
      this.isOpen = isOpen;
      return (this.isOpen = this.isOpen?.isOpen);
    });
  }

  ngOnDestroy(): void {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }

  boiDataInputs = [
    {
      type: 'text',
      placeholder: 'title',
      name: 'title',
      labelText: 'Title',
    },
    {
      type: 'number',
      placeholder: 'cost',
      name: 'cost',
      labelText: 'Cost of treatment',
    },
    {
      type: 'number',
      placeholder: 'Duration of treatment',
      name: 'durationOfTreatment',
      labelText: 'Duration of treatment',
    },

    {
      type: 'text',
      placeholder: 'Physician',
      name: 'attendingPhysician',
      labelText: 'Attending Physician',
    },

    {
      type: 'text',
      placeholder: 'medication name',
      name: 'medicationName',
      labelText: 'medication name',
    },

    {
      type: 'text',
      placeholder: 'medication dosage',
      name: 'dosage',
      labelText: 'dosage',
    },

    {
      type: 'text',
      placeholder: 'frequency',
      name: 'frequency',
      labelText: 'frequency',
    },

    {
      type: 'text',
      placeholder: 'Test Name',
      name: 'testName',
      labelText: 'Test  Name',
    },
    {
      type: 'text',
      placeholder: 'Test  Result',
      name: 'testResult',
      labelText: 'Test Result',
    },

    {
      type: 'text',
      placeholder: 'Hospital Name',
      name: 'hospitalName',
      labelText: 'Hospital Name',
    },
    {
      type: 'text',
      placeholder: 'Hospital Location',
      name: 'location',
      labelText: 'Hospital Location',
    },
  ];

  submitForm() {
    if (this.infoForm.value) {
      const newRecord = {
        title: this.infoForm.value?.title,
        attendingPhysician: this.infoForm.value?.attendingPhysician,
        hospitalName: this.infoForm.value?.hospitalName,
        location: this.infoForm.value?.location,
        durationOfTreatment: this.infoForm.value?.durationOfTreatment,
        cost: this.infoForm.value?.cost,
        medicationName: this.infoForm.value?.medicationName,
        dosage: this.infoForm.value?.dosage,
        frequency: this.infoForm.value?.frequency,
        testName: this.infoForm.value?.testName,
        testResult: this.infoForm.value?.testResult,
      };

      this.recordService.addRecord(newRecord).subscribe((response) => {
        console.log('Post request successful: ', response);
      });
    } else {
      alert('fill all inputs');
    }
  }
}
