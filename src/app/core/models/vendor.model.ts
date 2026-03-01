import { TrainingType } from './training.model';

export interface Vendor {
    id: string;
    name: string;
    contactEmail: string;
    supportedTrainingTypes: TrainingType[];
}
