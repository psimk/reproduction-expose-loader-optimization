This repository is a minimal reproduction of some unexpected behavior with webpack expose-loader. 

When the export from a module is exposed as a global through expose-loader, this should be regarded as a 'used export'. However, it seems that webpack will still skip over these modules if they have `{ sideEffects: false }` inside their package.json. 

This repo contains 3 variants of the same webpack setup. For convenience, the build output is also included into this repository.

### without-expose-loader
The `styled-components` module imported and the default export is placed on `window` manually. Result: the module is bundled as expected.

### with-expose-loader
`styled-components` is exposed through the following mechanism:

```
import 'expose-loader?styled!styled-components';
```

Result: the output bundle doesn't include the library, neither does it contain the variable name  `styled` at all.

### disable-optimization-side-effects
The same setup as with-expose-loader, but the `sideEffects` tree shaking option has been turned off by adding `{ optimization: { sideEffects: false } }` to webpack configuration. 

Result: the bundle contains the library as expected, and exposes `styled` as global variable.
