import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from "rollup-plugin-postcss"
const pkg = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: [
      commonjs({
        include: ['node_modules/**'],
      }),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/__tests__/**'],
      }),
      postcss({ modules: true })
    ],
    external: ['react', 'react-dom', '@material-ui/core', '@material-ui/icons'],
  },
  {
    input: 'dist/cjs/types/index.d.ts',
    output: [{ file: 'dist/cjs/index.d.ts', format: 'cjs' }],
    plugins: [dts(), postcss({ modules: true })],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/esm/index.d.ts', format: 'esm' }],
    plugins: [dts(), postcss({ modules: true })],
  },
];
