var assert = require('assert');
var request = require('request');

describe('API functionality', function() {
  var url = 'http://localhost:3000'

  it('adds two numbers over API', function(done) {
    var a = 1, b = 1;
    var req_url = url+'/add?a='+a+'&b='+b;

    request(req_url, function(error, response, body) {

      assert.equal(response.body, 2);
      done();
    });
  });

  it('concatenates string over API', function(done) {
    var a = 'ass', b = 'ert';
    var req_url = url+'/addString?a='+a+'&b='+b;

    request(req_url, function(error, response, body) {
      assert.equal(JSON.parse(response.body), 'assert');
      done();
    });
  });

});
