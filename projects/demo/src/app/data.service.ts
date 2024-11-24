import { Injectable } from '@angular/core';

import { faker } from '@faker-js/faker';
import { delay, of } from 'rxjs';
import { UserModel } from './models';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateUsers(n: number) {
  const users = Array.from({ length: n }, () => ({
    id: faker.number.int(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    avatar: faker.image.avatar(),
  }));

  return users as UserModel[];
}

const LIMIT = 20;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _users = generateUsers(50);

  load(page: number) {
    return of<UserModel[]>(
      this._users.slice(page * LIMIT, page * LIMIT + LIMIT)
    ).pipe(delay(getRandomInt(1000, 3000)));
  }
}
