module.exports = () => ({
  sources: ['https://api-test.houselux.com/doc/swagger-files/api/client_api.swagger.json'],
  outDir: './services',
  apiTemplate: () => {
    return {
      trailingCode: '',
      returnKey: 'data',
    }
  },
})
