import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class CmDataService implements InMemoryDbService {

  createDb() {

    return {};
  }
}

