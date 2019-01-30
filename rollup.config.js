import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import path from 'path'
import glob from 'glob'
import pkg from './package.json'

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
    input: glob.sync('src/**/*.js').reduce((input, file) => ({...input, [file.replace(/^src\//, '').replace(/\.js$/, '')]: file}), {}),
    output: {dir: path.dirname(pkg.main), format: 'cjs'},
    plugins: [
      babel({exclude: ['node_modules/**']})
    ]
  },
  {
    input: glob.sync('src/**/*.js').reduce((input, file) => ({...input, [file.replace(/^src\//, '').replace(/\.js$/, '')]: file}), {}),
    output: {dir: path.dirname(pkg.module), format: 'es', entryFileNames: '[name].mjs'},
    plugins: [
      babel({exclude: ['node_modules/**']})
    ]
  }
]
