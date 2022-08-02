interface Args {
  country: string
}

interface University {
  name: string
  domains: [string]
  state_province: string | undefined
  web_pages: [string]
  country: string
  alpha_two_code: string
  'state-province'?: string
}

export const getUniversities = async (
  _: unknown,
  { country }: Args,
  { clients }: Context
) => {
  const {
    data: universities,
  } = await clients.universities.getUniversityByCountry(country)

  return universities.map((university: University) => {
    university.state_province = university['state-province']
    delete university['state-province']

    return university
  })
}
