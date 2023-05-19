import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import teamModel from '../database/models/teams';

import { Response } from 'superagent';
import { matchesMock } from './mocks/matches.mock';
import { IMatches } from '../database/models/matches';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test teams table', () => {
  before(async () => {
    sinon
      .stub(teamModel, "findAll")
      .resolves({
        ...matchesMock
      } as any[]);
  });
  
  after(()=>{
    sinon.restore();
  })

  it('Verify if the return have the response expected and status 200', async () => {
    const res = await chai.request(app).get('/matches');
    expect(res.body).to.deep.equal(matchesMock);
    expect(res.status).to.equal(200);
  });
});
