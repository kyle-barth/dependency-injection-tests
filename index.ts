import { DatabaseConnection } from 'fakeRepo';
import { EmailConnection } from 'fakeRepo';

import { UserService } from './services/class-based-user-service';
import { makeUserService } from './services/functional-based-user-service';

const classUserService = new UserService(DatabaseConnection, EmailConnection);

classUserService.addUser('John Smith', 'johnsmith@aol.com');
classUserService.removeUser('0af3d195-fc83-4a89-8ff0-53b5122bc989');
classUserService.banUser('0af3d195-fc83-4a89-8ff0-53b5122bc989', 'johnsmith@aol.com');

const functionalUserService = makeUserService(DatabaseConnection, EmailConnection);

functionalUserService.addUser('John Smith', 'johnsmith@aol.com');
functionalUserService.removeUser('0af3d195-fc83-4a89-8ff0-53b5122bc989');
functionalUserService.banUser('0af3d195-fc83-4a89-8ff0-53b5122bc989', 'johnsmith@aol.com');