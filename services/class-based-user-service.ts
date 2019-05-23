import { DatabaseConnection } from 'fakeRepo';
import { EmailConnection } from 'fakeRepo';

export class UserService {
    constructor(
        private dbConnection: DatabaseConnection,
        private emailConnection: EmailConnection,
    ) {}

    addUser(username: string, email: string) {
        this.dbConnection.user.add(username, email);
    }

    removeUser(id: uuid) {
        this.dbConnection.user.remove(id);
    }

    banUser(id: uuid, email: string) {
        this.dbConnection.user.fetch(id).then(user => {
            const username: string = user.name;

            this.emailConnection.send(email, `${username}, you have been banned - lol.`)
        })
    }
}