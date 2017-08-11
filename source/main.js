import http from 'http'
import tcp from 'net'

export default (options = { type: `http` }, { type } = options) => {
  const server = { http, tcp }[type].createServer((...args) => {})
  server.listen(0)
}
