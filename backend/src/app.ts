import express, { Request, Response } from 'express';

import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.post('/registration', (request: Request, response: Response) => {
  const {
    firstName, lastName, email, birthday,
    shirtSize, attendeeType, mailingList,
  } = request.body.registration;

  if (
    firstName && lastName && email
    && birthday && shirtSize && attendeeType
    && mailingList
  ) {
    response.statusCode = 201;
    response.json({
      message: `
      Success! You are ${firstName} ${lastName}, your email address is ${email}, your shirt size is ${shirtSize},
      and your birthday is ${birthday}. Your attendee type is 
      ${attendeeType === 'both' ? 'both an attendee and a presenter' : `${attendeeType}`}, and you do 
      ${mailingList === 'yes' ? '' : ' not '} want to be added to our mailing list.
    `,
    });
  } else {
    response.statusCode = 400;
    response.json({
      error: `
Uh oh, it didn't work. I think your name is ${firstName} ${lastName}, your email address is ${email}, your shirt size is ${shirtSize},
and your birthday is ${birthday}. I think your attendee type is ${attendeeType}, and your mailing list choice is ${mailingList}.
      `,
    });
  }
});

export default app;
