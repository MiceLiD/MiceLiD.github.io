const path = require('path')
module.exports = {
  alias: {
    // 必须以 ‘/‘ 结尾，不然会认为是package，且tsconfig.json也要改成这样式的
    '@/': path.join(__dirname, './client')
  },
  rollupInputOptions: {
    external: {
      // 类似于webpack的entry
      input: path.resolve(__dirname, 'client/main.ts')
    }
  }
}