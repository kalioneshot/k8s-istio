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
        const booksDB = [
            {
              isbn: '12100747444',
              title: 'Docker Pratique des architectures à base de conteneurs',
              author: {
                id: 1,
                name: 'Cloux',
                firstName: 'Pierre-Yves',
                mail: ''
              },
              editor: {
                name: 'Dunod'
              },
              // tslint:disable-next-line:max-line-length
              description: 'Cet ouvrage s’adresse autant aux développeurs et aux architectes logiciel qui lancent de nouvelles applications qu’aux opérationnels responsables des déploiements. Déployer du code en production a longtemps été une source de problèmes auxquels la virtualisation avait commencé à apporter des solutions. Aujourd’hui Docker propose des réponses nettement plus satisfaisantes.',
              page: '320',
              price: '29.90'
            },
            {
              isbn: '1788834755',
              title: 'Kubernetes for Developers',
              author: {
                id: 2,
                name: 'Heck',
                firstName: 'Joseph',
                mail: ''
              },
              editor: {
                name: 'Packt'
              },
              // tslint:disable-next-line:max-line-length
              description: 'Kubernetes is documented and typically approached from the perspective of someone running software that has already been built. Kubernetes may also be used to enhance the development process, enabling more consistent testing and analysis of code to help developers verify not only its correctness, but also its efficiency. This book introduces key Kubernetes concepts, coupled with examples of how to deploy and use them with a bit of Node.js and Python example code, so that you can quickly replicate and use that knowledge.',
              page: '376',
              price: '29.32'
            },
            {
              isbn: '12000747777',
              title: 'Kong: Becoming a King of API Gateways',
              author: {
                id: 3,
                name: 'Ramon Huerga',
                firstName: 'Jose',
                mail: ''
              },
              editor: {
                name: 'Bleeding Edge Press'
              },
              // tslint:disable-next-line:max-line-length
              description: 'This book is useful for IT architects, DevOps engineers, CTOs and security experts willing to understand how to use Kong to create and expose APIs. Even if you are not already familiar with Kong, it will only take a few minutes to create your first API',
              page: '194',
              price: '18.73'
            },
        ];
        const configDB = { adminName: 'Roignant Cédric', permissions: ['users'] };
        return { book: booksDB, config: configDB};
    }
}
