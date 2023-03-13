const chai = require('chai');
const supertest = require('supertest');

const { expect } = chai;
const app =
  process.env.NODE_ENV == 'production'
    ? require('../../../tools/serverProduction')
    : require('../../../tools/serverDevelopment');

const api = supertest(app);
const path = `/v1/example/hi`;

module.exports = describe(`Hi V1`, () => {

  it(`Should receive 200 when called`, done => {
    api
      .get(path)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status, 'Status').to.equal(200);
          done();
        }
      });
  });

});
