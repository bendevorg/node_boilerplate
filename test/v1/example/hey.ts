const chai = require('chai');
const supertest = require('supertest');
const faker = require('faker');

const { expect } = chai;
const app =
  process.env.NODE_ENV == 'production'
    ? require('../../../tools/serverProduction')
    : require('../../../tools/serverDevelopment');

const api = supertest(app);
const path = `/v1/example/hey`;

module.exports = describe(`Hey V1`, () => {
  let example = faker.random.word();

  it(`Should receive 400 when no example is sent`, done => {
    api
      .post(path)
      .send()
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it(`Should receive 400 when example is sent but it is not a string`, done => {
    api
      .post(path)
      .send({
        example: faker.random.number(),
      })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it(`Should receive 400 when example is sent as a string but more field are also sent`, done => {
    api
      .post(path)
      .send({
        example: faker.random.word(),
        extra: faker.random.word(),
      })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it(`Should receive 200 when example is sent as a string`, done => {
    api
      .post(path)
      .send({
        example,
      })
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
