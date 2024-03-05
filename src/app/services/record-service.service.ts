import { Injectable } from '@angular/core';
import { Record } from '../../shared/model/record';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class RecordService {
  private apiUrl = 'http://localhost:5000/records';
  constructor(private http: HttpClient) {}


  getRecords(): Record[] {
    return [{
      title: "Health Record",
      attendingPhysician: "Dr Obi",
      hospitalName: "General Hospital",
      location: "Gwarinpa",
      durationOfTreatment: "6 months",
      cost: "1200",
      medicationName: "Cough treatment",
      dosage: "3 tablet per day",
      frequency: "twice",
      testName: "Tuberclosis",
      testResult: "Negative"
    }]
    
    // this.http.get<Record[]>(this.apiUrl);
  }

  addRecord(data:any): Observable<Record> {
    return this.http.post<Record>(this.apiUrl, data, httpOptions);
  }
}
