export default {
    plugins: [svgr()],
    input: 'src/main.js',
    output: {
      file: 'bundle.js',
      format: 'cjs',
    },
  }