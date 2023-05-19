import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import teamModel from '../database/models/teams';

import { Response } from 'superagent';
import { teamMock, teamsMock } from './mocks/teams.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test teams table', () => {
  before(async () => {
    sinon
      .stub(teamModel, "findAll")
      .resolves({
        ...teamsMock
      } as teamModel[]);
  });

  after(()=>{
    sinon.restore();
  })

  it('Verify if the return have the response expected and status 200', async () => {
    const res = await chai.request(app).get('/teams');
    expect(res.body).to.deep.equal(teamsMock);
    expect(res.status).to.equal(200);
  });

});

describe('Test teams table', () => {
  before(async () => {
    sinon
      .stub(teamModel, "findOne")
      .resolves({
        ...teamMock
      } as teamModel);
  });

  after(()=>{
    sinon.restore();
  })

  it('Verify if the return have the response expected and status 200', async () => {
    const res = await chai.request(app).get('/teams/1');
    expect(res.body).to.deep.equal(teamMock);
    expect(res.status).to.equal(200);
  });
})

