/* eslint-disable no-undef */

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    resolve:{
      extensions: [
        ".vue", 
        ".js", 
        ".json"
      ],
      alias:{
        page:"@/page",
        util:"@/util",
        router:"@/router",
        component:"@/component",
        assets:"@/assets",
      }
    }
  }
})
