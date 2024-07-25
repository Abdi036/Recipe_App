<body>
    <div class="container">
        <h1>Recipe Application</h1>
        <p>This is a Recipe Application built using React. It allows users to search, filter, view, and manage their favorite recipes. The application is styled using Tailwind CSS and fetches data from a backend API.</p>

<h2>Features</h2>
        <ul>
          <li>Search recipes by title</li>
            <li>Filter recipes by meal type</li>
            <li>View detailed recipe information</li>
            <li>Add and remove recipes from favorites</li>
            <li>Rate recipes</li>
        </ul>

  <h2>Installation</h2>
        <p>To run this project locally, follow these steps:</p>
        <pre><code>
git clone https://github.com/yourusername/recipe-app.git
cd  Food_recipe
npm install
npm run server (to start the mock api)
npm run dev(to start the react vite)
        </code></pre>

  <h2>Usage</h2>
        <p>Once the application is running, you can:</p>
        <ul>
            <li>Search for recipes using the search bar</li>
            <li>Filter recipes by meal type using the dropdown menu</li>
            <li>Click on a recipe to view detailed information</li>
            <li>Add or remove recipes from your favorites</li>
            <li>Rate recipes using the star rating system</li>
        </ul>

<h2>Code Overview</h2>
        <p>The main components of the application are:</p>
        <ul>
            <li><strong>AllRecipes.jsx:</strong> Displays all recipes with search and filter functionality.</li>
            <li><strong>RecipeDetail.jsx:</strong> Displays detailed information for a selected recipe.</li>
            <li><strong>Favorites.jsx:</strong> Displays all favorite recipes.</li>
            <li><strong>RecipeCard.jsx:</strong> A reusable component for displaying recipe information.</li>
        </ul>

        
