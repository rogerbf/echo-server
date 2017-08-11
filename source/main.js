import { createServer: http } from 'http'
import { createServer: tcp } from 'net'

export default (options = { type }) => {
  const server = [type]((...args) => {})
  server.listen(0)
}
