# ReactFlix 🎬

A modern React-based movie discovery application that allows users to search for movies, view trending content and explore detailed movie information using The Movie Database (TMDB) API.

![ReactFlix](public/hero.png)

## ✨ Features

- **Movie Search**: Real-time search functionality with debounced input for optimal performance
- **Trending Movies**: Displays the most searched movies based on user interactions
- **Movie Details**: Shows movie ratings, release year, language and poster images
- **Responsive Design**: Modern UI built with Tailwind CSS
- **Search Analytics**: Tracks search terms and popular movies using Appwrite backend
- **Error Handling**: Graceful error handling with user-friendly messages
- **Loading States**: Smooth loading indicators for better user experience

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4
- **State Management**: React Hooks (useState, useEffect)
- **API Integration**: The Movie Database (TMDB) API
- **Backend**: Appwrite (for search analytics and trending data)
- **Utilities**: react-use (for debounced search)
- **Linting**: ESLint

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 16 or higher)
- npm or yarn
- A TMDB API key
- An Appwrite account and project setup

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/NigelMarshal/ReactFlix.git
cd ReactFlix
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add the following environment variables:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

#### Getting TMDB API Key:

1. Visit [The Movie Database](https://www.themoviedb.org/)
2. Create an account and log in
3. Go to Settings → API
4. Request an API key (choose "Developer" option)
5. Copy your API key

#### Setting up Appwrite:

1. Create an account at [Appwrite Cloud](https://cloud.appwrite.io/)
2. Create a new project
3. Create a database and collection for storing search analytics
4. Copy your project ID, database ID and collection ID

### 4. Run the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
ReactFlix/
├── public/
│   ├── hero-bg.png
│   ├── hero.png
│   ├── logo.png
│   ├── no-movie.png
│   ├── search.svg
│   └── star.svg
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx    # Individual movie display component
│   │   └── Search.jsx       # Search input component
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application styles
│   ├── appwrite.js          # Appwrite configuration and functions
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Key Components

### App.jsx

The main application component that handles:

- Movie fetching from TMDB API
- Search functionality with debouncing
- State management for movies, loading and errors
- Integration with Appwrite for analytics

### MovieCard.jsx

Displays individual movie information including:

- Movie poster
- Title
- Rating
- Release year
- Original language

### Search.jsx

Handles user input for movie searches with real-time functionality.

### appwrite.js

Contains functions for:

- Updating search counts
- Fetching trending movies
- Database interactions

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code linting

## 🌟 Features in Detail

### Search Functionality

- Debounced search with 300ms delay to reduce API calls
- Real-time results as you type
- Search term analytics stored in Appwrite

### Trending Section

- Displays top 5 most searched movies
- Based on user search patterns
- Updates dynamically based on search activity

### Movie Display

- High-quality poster images from TMDB
- Fallback image for movies without posters
- Movie ratings with star icons
- Release year and language information
