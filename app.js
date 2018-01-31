var ApiBuilder = require('claudia-api-builder');

var api = new ApiBuilder();

module.exports = api;


api.get('/redirect', function (request) {
    if (request.queryString.url_redirect){
        return request.queryString.url_redirect;
    }
    else {
        return 'https://www.solede.com/grazie'
    }

}, {
  success: {code: 302}
});
