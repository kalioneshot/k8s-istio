import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
// The angular-in-memory-web-api module provides an in memory data store where you can create
// and fetch data and simulates a real REST API back-end.
// It works as a proxy for your real back-end. Each time you send a request,
// the module intercepts it, process it and returns the results from memory.
// This way, when you are ready to use a real API back-end
// you will not be required to change the API endpoints you added in your Angular code.
@Injectable({ providedIn: 'root' })
export class AppData implements InMemoryDbService {
    createDb() {
        const usersDB = [
            { id: '1', name: 'Robert Tail', email: 'robert.tail@gmail.com', phone: '0603060399' },
            { id: '2', name: 'Bernard Collard', email: 'bernard.collard@hotmail.fr', phone: '0402030506' },
            { id: '3', name: 'Edison Cavani', email: '-', phone: '0102030405' }
        ];
        const configDB = { adminName: 'Roignant Cédric', permissions: ['users'] };
        return { user: usersDB, config: configDB};
    }
}
