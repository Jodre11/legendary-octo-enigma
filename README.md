# Stock Trading Algorithm Comparison

A React application that compares different algorithms for finding the best time to buy and sell stocks.

## Features

- Visualizes results from multiple trading algorithms:
  - Accumulator Approach
  - Dynamic Programming
  - Divide & Conquer
  - Peak Valley

- Interactive UI for inputting stock prices
- Real-time calculation and comparison
- Comprehensive test suite

## Development Setup

### Using Docker (Recommended)

1. Build the Docker image:

```sh
./build_docker.sh my_app
```

2. Run tests:

```sh
docker run -t my_app ./run_tests.sh
```

3. Run specific tests:

```sh
docker run -t my_app ./run_tests.sh <test-name>
```

4. Start development server with hot reloading:

```sh
docker run --network=host -v .:/app -it my_app npm exec vite dev --host
```

### Local Development

1. Install dependencies:

```sh
npm install
```

2. Run tests:

```sh
npm test
```

3. Start development server:

```sh
npm run dev
```

## Testing

The project uses Vitest for testing. Tests are located in the `test/` directory and cover both algorithm logic and UI components.

## Technologies

- React 19
- Vite
- Vitest
- Testing Library
- Docker
