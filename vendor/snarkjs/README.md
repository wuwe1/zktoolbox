From [iden3/snarkjs](https://github.com/iden3/snarkjs/tree/29be61e70da9a1819c71777b835552dfc5603237)

built based on followed rollup config

```js
import config from './rollup.iife.config'

export default {
  ...config,
  output: {
    ...config.output,
    format: 'es',
    file: 'build/snarkjs.esm.js',
    sourcemap: false,
  },
  plugins: [
    ...config.plugins
  ]
}
```

```bash
BROWSER=true rollup -c config/rollup.esm.config.js
```
