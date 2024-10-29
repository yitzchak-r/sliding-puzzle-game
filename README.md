# Slider Puzzle Game

This is an interactive sliding puzzle game built with React, TypeScript, and Vite. The game includes a grid of numbered tiles (default size 3x3 or adjustable), with one empty tile. The goal is to arrange the numbers in ascending order by sliding tiles adjacent to the empty space.

## Game Features

- Playable on a 3x3 grid with adjustable grid sizes.
- Only valid moves are allowed (moving tiles adjacent to the empty slot).
- Reset button to restart the game and a difficulty selector.

## System Requirements

- Node.js (version 14 or higher)
- npm or yarn for package management

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/yitzchak-r/sliding-puzzle-game
    cd slider-puzzle
    ```

2.  Install dependencies:

    ```
    npm install
    or-yarn install

    ```

# Running the Project

1. To run the game in development mode:

   ```
      npm run dev
      or-yarn dev
   ```

   Then, navigate to http://localhost:3000 in your browser.

2. To build the project for production:

   ```
   npm run build
   or-yarn build

   ```

3. To preview the production build:

   ```
   npm run preview
   or-yarn preview

   ```

# Code Conventions

- The code is written in TypeScript and follows ESLint standards and conventions.
- Components are styled using styled-components for dynamic and organized styling within components.

# Git Workflow

While working on the project, it’s recommended to create a new branch for each feature. For example:

```
git checkout -b feature/add-difficulty-selector

```

After making changes, commit and push to the branch:

```
git add .
git commit -m "Add difficulty selector feature"
git push origin feature/add-difficulty-selector
```

Then, you can create a Pull Request on your code management platform (GitHub, GitLab, etc.).

##

## Enjoy the game and happy coding!
