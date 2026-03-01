import { Client } from './client.model';
import { User } from './user.model';

export type ProjectType = 'On-site' | 'Off-site';

export interface Project {
    id: string;
    name: string;
    type: ProjectType;
    clientId: string;
    client?: Client;
    accountManagerId?: string;
    accountManager?: User;
    workflowId?: string;
    status: 'Draft' | 'Active' | 'Completed';
    createdAt: string;
}
