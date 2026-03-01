import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User, Role } from '../models/user.model';
import { Client } from '../models/client.model';
import { Project } from '../models/project.model';

@Injectable({
    providedIn: 'root'
})
export class MockDataService implements InMemoryDbService {
    createDb() {
        const users: User[] = [
            { id: '1', email: 'prapul@prophire.com', name: 'Prapul Kumar', role: 'CLIENT' },
            { id: '2', email: 'venkat@prophire.com', name: 'Venkat', role: 'ACCOUNT_MANAGER' },
            { id: '3', email: 'pream@prophire.com', name: 'Pream', role: 'ACCOUNT_MANAGER' }
        ];

        const clients: Client[] = [
            { id: '101', name: 'Acme Corp', address: '123 Tech Ln', industry: 'Software', contacts: [], createdAt: new Date().toISOString() }
        ];

        const projects: Project[] = [
            { id: 'p1', name: 'Agentic AI', type: 'On-site', clientId: '101', status: 'Active', createdAt: new Date().toISOString() }
        ];
        const trainings: any[] = [
            { id: 't1', name: 'Java Training', type: 'Computer Skills', payer: 'ABC', certificationRequired: true }
        ];
        const vendors: any[] = [
            { id: 'v1', name: 'Global Training Co', contactEmail: 'contact@global.com', supportedTrainingTypes: ['Computer Skills', 'Business Skills'] }
        ];
        const trainees: any[] = [
            { id: 'tr1', name: 'Alice Doe', email: 'alice@test.com', currentStage: 'Sourced', assignedTrainings: ['t1'], completedTrainings: [] }
        ];
        const workflows: any[] = [];

        return { users, clients, projects, trainings, vendors, trainees, workflows };
    }

    genId(collection: any[], collectionName: string): any {
        if (!collection || collection.length === 0) {
            return Math.random().toString(36).substring(2, 9);
        }
        const lastId = collection[collection.length - 1].id;
        if (typeof lastId === 'string') {
            const prefixMatch = lastId.match(/^(\D*)(\d+)$/);
            if (prefixMatch) {
                const prefix = prefixMatch[1];
                const num = parseInt(prefixMatch[2], 10);
                return prefix + (num + 1);
            }
            return Math.random().toString(36).substring(2, 9);
        } else if (typeof lastId === 'number') {
            return Math.max(...collection.map(item => item.id)) + 1;
        }
        return Math.random().toString(36).substring(2, 9);
    }
}
