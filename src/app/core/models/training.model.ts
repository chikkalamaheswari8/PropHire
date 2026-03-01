export type TrainingType = 'Computer Skills' | 'Business Skills' | 'Logic Skills';
export type PayerType = 'ABC' | 'Client' | 'Trainee';

export interface Training {
    id: string;
    name: string;
    type: TrainingType;
    vendorId?: string;
    payer: PayerType;
    certificationRequired: boolean;
}
