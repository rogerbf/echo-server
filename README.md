# echo-server

Echo echo echo.

```javascript
import createServer from 'echo-server'

createServer({ type: `http` })
  .then(server => console.log(server.address().port))
  .catch(console.error)
```
