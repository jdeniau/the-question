import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  external: Object.keys(pkg.peerDependencies),
  plugins: [
    resolve(),
    commonjs(),
  ],
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'theQuestion',
      exports: 'named',
      sourcemap: true,
      globals: {
        'lodash': '_',
      },
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
};
