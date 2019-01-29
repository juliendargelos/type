import pkg from './package.json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

export default [
  {
    input: 'src/index.js',
    output: {file: pkg.browser, name: 'Type', format: 'umd'},
    plugins: [
      resolve(),
      babel({exclude: ['node_modules/**']}),
      commonjs(),
      uglify()
    ]
  },
  {
    input: 'src/index.js',
    output: [
      {file: pkg.main, format: 'cjs'},
      {file: pkg.module, format: 'es'}
    ],
    plugins: [
      babel({exclude: ['node_modules/**']})
    ]
  }
]
