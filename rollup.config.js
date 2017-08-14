import pkg from './package.json'
import babel from 'rollup-plugin-babel'

export default Object.assign(
  {
    entry: `source/main.js`,
    targets: [
      { dest: pkg.main, format: `cjs` },
      { dest: pkg.module, format: `es` }
    ],
    plugins: [
      babel({ exclude: `node_modules/**` })
    ]
  },
  {
    external: [
      ...Object.keys(pkg.dependencies || {}),
      `http`,
      `net`,
      `util`
    ]
  }
)
