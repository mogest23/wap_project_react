# Product Review Client

The frontend application for the Product Review system, built with React and TypeScript.

## Tech Stack

- React with TypeScript
- Vite for build tooling
- React Router for navigation
- Axios for API calls
- TailwindCSS for styling

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

### Environment Setup

Create a `.env` file in the client directory:
```env
# For development
VITE_API_URL=http://localhost:3000/api

# For production
VITE_API_URL=https://product-review-api.onrender.com/api
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at:
- Development: [http://localhost:5173](http://localhost:5173)
- Production: [https://product-review-client.vercel.app](https://product-review-client.vercel.app)

## Project Structure

```
client/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── services/      # API services
│   ├── types/         # TypeScript type definitions
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── public/            # Static assets
└── index.html         # HTML template
```

## Development

### Code Style
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety

### Testing
```bash
npm test
```

### Building for Production
```bash
npm run build
```

The build output will be in the `dist` directory.

## Deployment

The client is deployed on Vercel:
- URL: [https://product-review-client.vercel.app](https://product-review-client.vercel.app)
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variables: Configured in Vercel dashboard

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
