import { Directive, inject, Injectable, signal } from '@angular/core';
import { of, delay } from 'rxjs';
import { UserModel } from '../models';
import { DataService } from '../data.service';

@Directive()
export class BasePage {
  dataService = inject(DataService);

  users = signal<Array<UserModel>>([]);

  page = signal(0);
  finalized = signal(false);

  loading = signal(false);

  constructor() {
    this.loadMore();
  }

  loadMore() {
    console.log('LOADING');
    this.loading.set(true);
    this.dataService.load(this.page()).subscribe((data) => {
      this.loading.set(false);
      if (!data.length) {
        this.finalized.set(true);
      } else {
        this.page.update((page) => page + 1);
        this.users.update((users) => [...users, ...data]);
      }
    });
  }
}
