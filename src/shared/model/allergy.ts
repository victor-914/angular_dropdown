export interface Allergy {
  name: string;
  severity: 'mild' | 'moderate' | 'severe';
  medication: string;
  notes?: string;
}
