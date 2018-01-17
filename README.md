# the-question

The question to life, universe and everything (including [the-answer](https://github.com/rich-harris/the-answer) !)

## Really ?
Same as the-answer, I needed a small package to "really" try rollup including some example proposed in [Integrating Rollup with other tools](https://rollupjs.org/guide/en#tools)

## Answers really found

### dependencies

`dependencies` should be listed as`external` in rollup.
Will delegate dependency management to the caller.
May end up with two differents package versions in parent.

You can look at `lodash` here in [src/index.js](src/index.js) and [dist/index.es.js](dist/index.es.js).

### peerDependencies

`peerDependencies` should be listed as`external` in rollup.
Tell the caller developper to install the peer dependency, but without package manager resolution.
May be useful for tighly coupled packages (eslint with an eslint plugin or react for a react component).
Harder to understand for humans though, but you will be 100% certain that the same instance of the library is shared between package and caller.

### devDependencies
`devDependencies` should not be listed as `external` in rollup.

If you use a package internally, it will be included and "tree-shaked" by rollup.
You can look at `the-answer` here in [src/index.js](src/index.js) and [dist/index.es.js](dist/index.es.js).

Useful if you do not want your caller to know the library used.

## Tips for rollup configuration

You can auto-generate external packages via theses lines of code:
```js
// rollup.config.js
import pkg from './package.json';

export default {
  // ...
  external: Object.keys(pkg.peerDependencies || {})
    .contact(Object.keys(pkg.dependencies || {})),
}
```

You will still need to provide "globals" map of you are generating non-ES output but you will have a warning triggered by rollup.
