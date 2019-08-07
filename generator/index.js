module.exports = (api, opts, rootOptions) => {

    api.extendPackage({
      scripts:{
        "docs:dev": "vuepress dev docs",
        "docs:build": "vuepress build docs"
      },
      devDependencies: {
        "vuepress": "^1.0.3"
      }
    })
  }
