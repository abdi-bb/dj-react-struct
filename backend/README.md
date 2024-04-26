
---

# Dj - React Struct

## Description

Common settings of django project.

## Setup

### Clone Repository

```bash
git clone https://github.com/abdi-bb/dj-react-struct.git
cd dj-react
cd backend
```

### Development Mode

To run the project in development mode, follow these steps:

1. Build and start the Docker containers:
   ```bash
   docker-compose up --build
   ```

2. Access the API:
   Open your browser and navigate to [http://localhost:8000/api](http://localhost:8000/api)

### Production Mode

To run the project in production mode, follow these steps:

1. Build and start the Docker containers using the production configuration:
   ```bash
   docker-compose -f docker-compose.prod.yml up --build
   ```

2. Access the API:
   Open your browser and navigate to [http://localhost/api](http://localhost/api)
