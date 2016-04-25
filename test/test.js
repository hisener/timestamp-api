var supertest = require('supertest');
var assert = require('assert');

var server = supertest.agent('http://localhost:3000');

var rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

describe('A valid number test', function() {

  it('should return json object with non null properties.', function(done) {
    
    // random timestamp between Date object range which is
    // -100,000,000 days to 100,000,000 days relative to 01 January, 1970 UTC
    var random = rand(-100000000, 100000000) * 86400;

    server
      .get('/' + random)
      .expect('Content-type', /json/)
      .expect(200)
      .end(function(err, res) {
        assert(res.status == 200);
        assert(res.body.unix != null);
        assert(res.body.natural != null);
        done();
      });
  });

});

describe('A valid natural date test', function() {

  it('should return json object with non null properties.', function(done) {
    
    // random year between 100 and 275760
    var random = rand(100, 275760);

    server
      .get('/September 13, ' + random)
      .expect('Content-type', /json/)
      .expect(200)
      .end(function(err, res) {
        assert(res.status == 200);
        assert(res.body.unix != null);
        assert(res.body.natural != null);
        done();
      });
  });

});

describe('A non valid number test', function() {

  it('should return json object with null properties.', function(done) {
    
    // Date object range -100,000,000 days to 100,000,000 days
    var random = rand(100000000, 200000000) * 86400 + 1;

    server
      .get('/' + random)
      .expect('Content-type', /json/)
      .expect(200)
      .end(function(err, res) {
        assert(res.status == 200);
        assert(res.body.unix == null);
        assert(res.body.natural == null);
        done();
      });
  });

  it('should return json object with null properties.', function(done) {
    
    // Date object range -100,000,000 days to 100,000,000 days
    var random = rand(-200000000, -100000000) * 86400 - 1;

    server
      .get('/' + random)
      .expect('Content-type', /json/)
      .expect(200)
      .end(function(err, res) {
        assert(res.status == 200);
        assert(res.body.unix == null);
        assert(res.body.natural == null);
        done();
      });
  });
});
