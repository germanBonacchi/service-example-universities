import { IOClients } from '@vtex/api'

import UniversitiesClient from './universities'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get universities() {
    return this.getOrSet('universities', UniversitiesClient)
  }
}
