// eslint-disable-next-line no-undef
const jsonServer = require('json-server')

const server = jsonServer.create()

const router = jsonServer.router('cities.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('/', router)
server.listen(8000, () => {
  console.log('JSON Server is running on http://localhost:8000')
})