From [tornadocash](https://github.com/tornadocash/circomlibjs/tree/fdaafd32eb617df1a7fe320a275c2f78eff094f8)

main.js

```js
export { default as buildPoseidon } from './src/poseidon.js'
```

rollup.esm.config.js

```js
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonJS from '@rollup/plugin-commonjs'
import virtual from '@rollup/plugin-virtual'
import replace from '@rollup/plugin-replace'
import inject from '@rollup/plugin-inject'

const empty = 'export default {}'
const assert = `export default function(value) {
  if (!value) {
    throw {
      value
    }
  }
}
`

export default {
  input: './main.js',
  output: {
    file: 'build/main.esm.js',
    format: 'es',
  },
  plugins: [
    virtual({
      fs: empty,
      os: empty,
      crypto: empty,
      readline: empty,
      ejs: empty,
      assert
    }),
    inject({
      Buffer: ['buffer', 'Buffer']
    }),
    nodeResolve({
      browser: true,
      preferBuiltins: false,
      exportConditions: ['browser', 'default', 'module', 'require']
    }),
    commonJS(),
    replace({
      // The current default is false, but they are changing it next version
      'preventAssignment': false,
      'process.browser': !!process.env.BROWSER
    }),
  ]
}
```
