const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'iqq6gs',
  e2e: {
    baseUrl: 'http://localhost',
    env: {  
      hideCredentials: true, 
      requestMode: true, 
    },
      experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  video: false,
})


