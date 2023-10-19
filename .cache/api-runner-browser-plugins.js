module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":660,"showCaptions":["title"],"markdownCaptions":true,"withWebp":true,"linkImagesToOriginal":false,"backgroundColor":"transparent","quality":50,"withAvif":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"rotten_caRot","short_name":"caRot","start_url":"/","background_color":"#FFFFFF","theme_color":"#000000","display":"minimal-ui","icon":"./content/images/rotten_carot.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"3eafc3e694e2941f2ae2ba7f07c3d2e4"},
    },{
      plugin: require('../node_modules/gatsby-plugin-gdpr-cookies/gatsby-browser.js'),
      options: {"plugins":[],"googleAnalytics":{"trackingId":"UA-197563814-1","cookieName":"gatsby-gdpr-google-analytics","anonymize":true},"environments":["production","development"]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-theme-portfolio-minimal/gatsby-browser.js'),
      options: {"plugins":[],"manifestSettings":{"favicon":"./content/images/rotten_carot.png","siteName":"rotten_caRot","shortName":"caRot","startUrl":"/","backgroundColor":"#FFFFFF","themeColor":"#000000","display":"minimal-ui"},"contentDirectory":"./content","blogSettings":{"path":"/blog","usePathPrefixForArticles":false},"googleAnalytics":{"trackingId":"UA-197563814-1","anonymize":true,"environments":["production","development"]}},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
