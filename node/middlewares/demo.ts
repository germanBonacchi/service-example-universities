export async function demo(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params },
    },
  } = ctx
  console.info('Received params:', params)

  const { country } = params

  console.info('Received country:', country)

  const swapiResponse = await ctx.clients.universities.getUniversityByCountry(country)

  console.info('Status response:', swapiResponse)

  ctx.status = swapiResponse.status
  ctx.body = swapiResponse.data

  await next()
}
