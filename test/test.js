const assert = require('assert');
const router = require('../routes/index');
const chai = require('chai');
// const expect = chai.expect;
const spies = require('chai-spies');
const request = require('supertest');
chai.use(spies);

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Router', () => {
  describe('index', () => {
    it('should render the index page', () => {
      request(router)
        .get('/')
        .expect(200)
        .end(function(err, res) {
          if (err) throw err;
        });
    });
  });

  describe('getAllItems', () => {
    it('should return all items');
  });
});
