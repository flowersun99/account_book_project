const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  outputDir: "/Users/sinjueun/IdeaProjects/calculator/src/main/resources/static",

  // npm run server 개발 진행시 포트가 다르기 때문에 프록시 설정해줘야 함
  // target : 백엔드 port가 들어감
  // changeOrigin -> true로 해야 cros 문제 해결할 수 있음
  devServer: {
    proxy: {
      '/': {
        target: "http://localhost:8080",
        changeOrigin: true,
      }
    }
  }
})
