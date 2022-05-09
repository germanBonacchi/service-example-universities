import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class UniversitiesClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(
      `http://universities.hipolabs.com/`,
      context,
      {
        ...options,
        /*headers: {
          VtexIdClientAutCookie: context.authToken,
        },*/
      }
    )
  }

  public async getUniversityByCountry(country: string | string[]) {
    return this.http.getRaw(`search?country=${country}`)
  }
}
