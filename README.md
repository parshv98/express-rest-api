# Express REST API

A RESTful backend API built with Node.js and Express, featuring clean code structure, modular routing, and CRUD operations. This project is designed to practice and understand core backend concepts like routing, middleware, and REST architecture.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- RESTful API design
- Modular routing
- Middleware for request handling
- CRUD operations
- Clean and maintainable codebase

## Tech Stack

- **JavaScript** (Node.js, Express) — 51.9%
- **EJS** (Embedded JavaScript templates) — 44.7%
- **CSS** — 3.4%

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

```bash
git clone https://github.com/parshv98/express-rest-api.git
cd express-rest-api
npm install express
npm install ejs
npm install nodemon(if possible)
npm install method-override
npm install uuid
```


By default, the server runs on `http://localhost:3000`.

## API Endpoints

Below are example endpoints; refer to the code for exact routes.

| Method | Endpoint        | Description         |
|--------|----------------|---------------------|
| GET    | /api/items     | Get all items       |
| POST   | /api/items     | Create new item     |
| GET    | /api/items/:id | Get item by ID      |
| PUT    | /api/items/:id | Update item by ID   |
| DELETE | /api/items/:id | Delete item by ID   |

## Project Structure

```
express-rest-api/
├── routes/        # Modular route definitions
├── controllers/   # Logic for handling requests
├── middleware/    # Custom middleware
├── views/         # EJS templates
├── public/        # Static assets (CSS, images)
├── app.js         # Main Express app
└── package.json
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).
