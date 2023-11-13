import { callChatGPT, genImage } from './chatGPT';

const express = require('express');
const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const route = express.Router();
const port = process.env.PORT || 3003;
app.use('/v1', route);

route.get('/joke', async (req: any, res: any) => {
  console.log('called');
  try {
    // Simulate an asynchronous operation, such as a database query

    const userPrompt: string = 'Tell me a joke.';
    const result = await callChatGPT(userPrompt);
    console.log(result);
    res.json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

  // res.status(200).send({ message: 'TEST Mail send' });
});

route.get('/image', async (req: any, res: any) => {
  console.log('calle image');
  try {
    // Simulate an asynchronous operation, such as a database query

    const userPrompt: string = `I'm trying to make an app for kids to learn about "if else" conditions in computer languages, and I'm planning to make it a game. In the game, there will be multiple pipes marked as "A, B, C, D...". There will also be a ball at one end of the pipes, at the other end of the pipes, there will be some baskets to catch the ball, only some of the pipes have baskets at the other end, and some don't. The player has to write the right condition to make sure that the ball will land on a basket.
    For example, I have 4 pipes A B C and D. There are baskets at the end of B and D, only if the player writes a condition "if(pipe==B || pipe==D)", they can win the game.
    Can you generate a picture of how the game looks like?`;
    const result = await genImage(userPrompt);
    // console.log(result);
    res.json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

  // res.status(200).send({ message: 'TEST Mail send' });
});

route.get('/sendmail', (req: Request, res: any) => {
  res.status(200).send({ message: 'Mail send' });
  // const { html } = req.body;
  // const mailData = {
  //   from: 'gouwu332@gmail.com',
  //   to: 'danial.huang@gmail.com,gouwu332@gmail.com',
  //   subject: 'New Model X added',
  //   text: 'That was easy!',
  //   html: html,
  // };
  // transporter.sendMail(mailData, (error, info) => {
  //   if (error) {
  //     return console.log(error);
  //   }
  // res.status(200).send({ message: 'Mail send', message_id: info.messageId });
  // });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// import { callChatGPT } from './chatGPT';

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// const route = express.Router();
// const port = process.env.PORT || 3002;
// app.use('/v1', route);

// route.get('/hi', async (req: any, res: any) => {
//   console.log('called');
//   try {
//     // Simulate an asynchronous operation, such as a database query

//     const userPrompt: string = 'Tell me a joke.';
//     const result = await callChatGPT(userPrompt);
//     res.json({ result });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }

//   // res.status(200).send({ message: 'TEST Mail send' });
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
