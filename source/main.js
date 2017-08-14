export default async (options = { type: `http` }, { type } = options) => {
  const { createServer } = await import(type)
  const server = createServer(() => {})
  server.listen(0)
  return server
}
