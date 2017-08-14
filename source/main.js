import { inspect } from "util"

const moduleNames = {
  tcp: `net`,
  http: `http`
}

const defaultHandlers = {
  tcp (socket) {
    console.log(inspect(socket, { colors: true, depth: 1 }))
    socket.on(
      `data`,
      data =>
        data.toString().toLowerCase().trim() === `exit`
          ? socket.end()
          : socket.write(data)
    )
    socket.write(`type 'exit' to disconnect\n`)
  },
  http (request, response) {
    console.log(inspect(request, { colors: true, depth: 1 }))
    response.end(inspect(request))
  }
}

const listen = (server, port = 0) =>
  new Promise((resolve, reject) => {
    server.on(`error`, error => reject(error))
    server.listen(port, error => {
      error ? reject(error) : resolve(server)
    })
  })

export default async (
  options = { type: `http`, handler: defaultHandlers.http, port: 0 },
  { type, handler, port } = options
) => {
  const { createServer } = await import(moduleNames[type])
  const server = createServer(handler || defaultHandlers[type])
  return listen(server, port)
}
