![Logo](https://skill-ex.vercel.app/media/icons/LogoMain.svg)

# Project Title

Our skill sharing platform, SkillEx, provides an opportunity for people to upskill and raise their employability levels without a financial burden. By making access free, the opportunity to learn is available to everyone including marginalised groups who may be priced out of using similar paid-for services.

The 1:1 delivery model will improve learning outcomes and learner engagement when compared with passive learning resources (e.g. YouTube) while enabling human connection and interaction for those who are socially isolated.

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

## Demo

Insert gif or link to demo

## Tech Stack

- React
- Next.js
- CSS
- Auth0
- Postgres
- Prisma
- Cypress
- Jest
- React Testing Library
- Postman
- Heroku
- Vercel

## Roadmap

- Additional browser support

- Add more integrations

## Run Locally

Clone the project

```bash
  git clone https://github.com/SchoolOfCode/final-project_front-end-2b-2b
```

Go to the project directory

```bash
  cd final-project_front-end-2b-2b
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## API Reference

#### Get all profiles

```http
  GET /api/profiles
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get profile by ID

```http
  GET /api/profiles/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Post new user profile

```http
  POST /api/profiles/
```

| Parameter | Type     | Body     | Description |
| :-------- | :------- | :------- | :---------- |
| `id`      | `string` | `object` |             |

#### Edit user profile

```http
  PUT /api/profiles/${id}
```

| Parameter | Type     | Body     | Description |
| :-------- | :------- | :------- | :---------- |
| `id`      | `string` | `object` |             |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [Craig Summers](https://www.github.com/AlphaPentagon)
- [Dave Hazeldean](https://www.github.com/dvhzldn)
- [Jay Whittingham](https://www.github.com/jaymlwhittingham)
- [Lucy de Rojas](https://www.github.com/Lucy-de-Rojas)
- [Pira Tejasakulsin](https://www.github.com/piratejas)
- [Zainab Abid](https://www.github.com/ZainabAbid1)

## Feedback

If you have any feedback, please reach out to us at fake@fake.com
