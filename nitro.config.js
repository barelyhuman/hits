import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  storage: {
    db: {
      driver: 'redis',
      host: process.env.REDIS_HOST,
      tls: false,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASSWORD,
    },
  },
})
