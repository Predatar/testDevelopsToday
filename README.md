# Recipe Search App

A Next.js application that allows users to search for recipes based on keywords, cuisine type, and preparation time. The app fetches data from the Spoonacular API and displays a list of recipes with images.

## 📌 Features
- Search for recipes using a keyword, cuisine type, and max preparation time.
- Fetch recipes using the Spoonacular API.
- Server-side rendering (SSR) for faster performance.
- Detailed recipe page with ingredients and preparation instructions.
- Styled using Tailwind CSS.

## 🛠️ Installation

1️⃣ Clone the repository:

```bash
	git clone https://github.com/Predatar/recipe-search-app.git
	cd recipe-search-app
```

2️⃣ Install dependencies:

```bash
npm install
# or
yarn install
```

3️⃣ Set up environment variables:

Rename m.env.local to .env.local in the root of the project. The API key is already set up, and you don't need to change it. However, if you want to use your own key, create one at Spoonacular API and update .env.local as follows:

```bash
SPOONACULAR_API_KEY=your_api_key_here
```

4️⃣ Start the development server:

```bash
npm run dev
# or
yarn dev
```

Then open http://localhost:3000 in your browser.

## 🚀 Build and Run

To build and start the production server:

```bash
npm run build
npm start
# or
yarn build
yarn start
```