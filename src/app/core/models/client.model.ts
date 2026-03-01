export interface ClientContact {
    id: string;
    name: string;
    email: string;
    phone: string;
}

export interface Client {
    id: string;
    name: string;
    address: string;
    industry: string;
    contacts: ClientContact[];
    createdAt: string;
}
