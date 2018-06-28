import fs from 'fs'
import { uglify } from 'rollup-plugin-uglify'
import analyze from 'rollup-analyzer-plugin'

import config from './shared'

// remove source map of previous dev builds if there is one
fs.unlink('lib/index.js.map', () => {})

const prod = {
  ...config,
  plugins: [
    ...config.plugins,
    uglify({
      compress: {
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    }),
    analyze({ limit: 5, filter: [], root: __dirname }),
  ],
}

export default prod