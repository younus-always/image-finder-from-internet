## 📸 Image Finder From Internet

A modern React + Vite web application that lets users search and browse high-quality free stock images using the Pexels API. Built with React 19, Vite, and Tailwind CSS, this project is fast, responsive, and developer-friendly.

**🔗 Live Demo: https://image-finder-from-internet.netlify.app**

### ✨ Features

- 🔍 Search images by keyword

- 📷 Fetches free stock images from the Pexels API

- ♾️ Load more images with pagination

- ⚡ Fast performance using Vite

- 📱 Fully responsive layout (mobile → desktop)

- 🎨 Beautiful, responsive UI with Tailwind CSS

- 🖼️ Lazy-loaded images for better performance

- 🚨 Error handling and loading indicators

### 🛠️ Tech Stack

- Frontend: React 19

- Bundler: Vite

- Styling: Tailwind CSS

- API: Pexels API

- Linting: ESLint

- Deployment: Netlify

### 📂 Project Structure

```bash
├── src/
│   ├── App.jsx        # Main application logic
│   ├── main.jsx       # App entry point
│   └── index.css      # Tailwind styles
├── public/
├── .env               # Environment variables
├── package.json
├── vite.config.js
└── README.md
```

### 🚀 Getting Started

Follow these steps to run the project locally.

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/younus-always/image-finder-from-internet.git
cd image-finder-from-internet
```

#### 2️⃣ Install Dependencies

```bash
npm install
```

#### 3️⃣ Set Up Environment Variables

Create a .env file in the root directory:

```bash
VITE_PEXELS_API_KEY=your_pexels_api_key_here
```

🔑 You can get a free API key from:
👉 https://www.pexels.com/api/

#### 4️⃣ Run the Development Server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### 📦 Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### 🧠 How It Works

- Uses React useEffect to fetch images whenever the search query or page number changes

- Stores image data in state and appends results when loading more

- Sends authenticated requests to the Pexels API using environment variables

- Displays images in a responsive grid layout

- Clicking an image opens the original high-resolution version

### 🧪 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

### 🌍 Deployment

- This project is deployed on Netlify.

- To deploy your own version:

- Push the project to GitHub

- Connect the repo to Netlify

- Add VITE_PEXELS_API_KEY in Netlify environment variables

- Build command: npm run build

- Publish directory: dist

### 🤝 Contributing

1. Fork the repository

2. Create a new branch

3. Make your changes

4. Submit a pull request

### 📄 License

This project is open-source and available for learning and personal use.

### 💙 Acknowledgements

- [Pexels,"https://www.pexels.com"] for the amazing free stock images

- React & Vite teams for the incredible tooling

- Tailwind CSS

⭐ If you like this project, give it a star and share it!

Happy coding 🚀
