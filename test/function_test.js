var test_target = require('../app/functions.js');
var assert = require('assert');

describe('Functions demostration tests', function() {

  describe('same type addition', function() {

      it('adds two numbers, 1+1 and equals 2', function(done) {
        assert.equal(test_target.add(1,1), 2);
        done();
      });

      it('concatenates two strings, ass+ert', function(done) {
        assert.equal(test_target.add('ass', 'ert'), 'assert');
        done();
      });

      it('sum two arrays, [1,2] + [3,4]', function(done){
        //two arrays added turn into a string; why? Because javascript.
        assert.equal(test_target.add([1,2], [3,4]), '1,23,4');
        done();
      });
    });

  describe('different type addition',function(){

    it('adds number and string ', function(done){
      assert.equal(test_target.add(1, '=one'), '1=one');
      done();
    });

    it('adds string and number', function(done){
      assert.equal(test_target.add('two=', 2), 'two=2');
      done();
    });

    it('adds array and number', function(done){
      assert.equal(test_target.add([1,2], 3), '1,23');
      done();
    });
  });

});
