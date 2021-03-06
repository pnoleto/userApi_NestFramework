import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let tokenResponse: any;
  const user = { username: 'admin', password: 'admin' };
  const profile = { userId: 1, username: "admin", roles: ["admin"] }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Error -Thown an error while getting profile without Token JWT - profile (GET)', () => {
    return request(app.getHttpServer())
      .get('/profile')
      .expect(401)
      .expect('{"statusCode":401,"message":"Unauthorized"}');
  });

  it('Error - On Getting profile information without token - profile (GET))', () => {
    return request(app.getHttpServer())
      .get('/profile')
      .expect(401)
      .expect('{"statusCode":401,"message":"Unauthorized"}');
  });

  it('OK - Login - auth/login (POST))', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send(user)
      .expect(201)
      .then(response => { tokenResponse = response.body.access_token; });
  });

  it('OK - On Getting profile information - profile (GET))', () => {
    return request(app.getHttpServer())
      .get('/profile')
      .set('Authorization', `Bearer ${tokenResponse}`)
      .expect(200)
      .expect(JSON.stringify(profile));
  });

});
