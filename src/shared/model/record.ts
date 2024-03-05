// export interface Record {
//   _id: string;
//   title:string;
//   description?: string;
//   attendingPhysician: string;
//   prescribedActions?: string[];
//   medications?: {
//     name: string;
//     dosage: string;
//     frequency: string;
//   }[];
//   testsPerformed?: {
//     testName: string;
//     testResult: string;
//   }[];
//   hospital: {
//     name: string;
//     location: string;
//   };
//   durationOfTreatment?: string;
//   cost?:string,

// }

export interface Record {
  title?: string;
  description?: string;
  attendingPhysician?: string;
  location?: string;
  hospitalName?: string;
  dosage?: string;
  frequency?: string;
  testName?: string;
  testResult?: string;
  medicationName?: string;
  durationOfTreatment?: string;
  cost?: string;
}
