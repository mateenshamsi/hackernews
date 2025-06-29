import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { ErrorResponse } from './shared/types.js'

const app = new Hono()

app.get('/', (c) => {
  throw new HTTPException(500, {message:'This is a test error'})
  return c.text('Hello Hono!')
})
app.onError((err, c) => {
  if (err instanceof HTTPException) {
    console.error('Error:', err.message)
    const errResponse = err.res ?? c.json<ErrorResponse>({
      success: false,
      error: err.message,
    })
    return errResponse
  }
  // Always return a Response
  return c.json<ErrorResponse>({
    success: false,
    error: err instanceof Error ? err.message : 'Unknown error',
  }, 500)
})
export default app
