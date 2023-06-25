import { defineNitroConfig } from 'nitropack/config'
import preactIslandPlugins from '@barelyhuman/preact-island-plugins/rollup'
import babel from '@rollup/plugin-babel'
import process from 'node:process'
import { config as loadEnv } from 'dotenv'

// Force load dotenv
loadEnv()

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
  imports: {
    imports: [
      {
        name: 'renderToString',
        as: 'renderComponent',
        from: 'preact-render-to-string',
      },
    ],
  },
  publicAssets: [
    {
      dir: 'public',
      baseURL: '/public',
    },
  ],
  esbuild: {
    options: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      loaders: {
        '.js': 'jsx',
      },
    },
  },
  rollupConfig: {
    plugins: [
      babel({
        babelHelpers: 'bundled',
        plugins: [
          [
            '@babel/plugin-transform-react-jsx',
            {
              runtime: 'automatic',
              importSource: 'preact',
            },
          ],
        ],
      }),
      preactIslandPlugins({
        rootDir: '.',
        atomic: true,
        hash: false,
        baseURL: '/public',
        bundleClient: {
          outDir: 'public',
        },
      }),
    ],
  },
})
