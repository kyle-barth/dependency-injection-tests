import { DatabaseConnection } from 'fakeRepo';
import { EmailConnection } from 'fakeRepo';

export const makeUserService = (
        dbConnection: DatabaseConnection, 
        emailConnection: EmailConnection,
    ) => ({
        addUser: makeAddUser(dbConnection),
        removeUser: makeRemoveUser(dbConnection),
        banUser: makeBanUser(dbConnection, emailConnection),
    });

const makeAddUser = dbConnection => (username: string, email: string) =>
    dbConnection.user.add(username, email);

const makeRemoveUser = dbConnection => (id: uuid) =>
    dbConnection.user.remove(id);

const makeBanUser = (dbConnection, emailConnection) => (id: uuid, email: string) =>
    dbConnection.user.fetch(id).then(user => {
        const username: string = user.name;

        emailConnection.send(email, `${username}, you have been banned - lol.`)
    })