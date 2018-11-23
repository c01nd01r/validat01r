const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const { uglify } = require('rollup-plugin-uglify');
const filesize = require('rollup-plugin-filesize');
const progress = require('rollup-plugin-progress');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const builderLib = plugins => rollup.rollup({
  input: 'src/index.js',
  plugins: [
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
  ].concat(plugins || [], progress({ clearLine: false }), filesize()),
});

const builderRules = plugins => rollup.rollup({
  input: 'src/rules/index.js',
  plugins: [
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
  ].concat(plugins || [], progress({ clearLine: false }), filesize()),
});

  builderLib([uglify()])
  .then((bundle) => {
    bundle.write({
      format: 'cjs',
      file: './dist/index.js',
      sourcemap: true,
    });
  });

builderRules([uglify()])
  .then((bundle) => {
    bundle.write({
      format: 'cjs',
      file: './dist/rules/index.js',
      sourcemap: true,
    });
  });


