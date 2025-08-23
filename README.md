# Dynamic Project Showcase

A modern and interactive web application for showcasing your projects with engaging UI effects and dynamic content.

## ✨ Features

*   **Dynamic Project Cards**: Display projects with titles, descriptions, and external links.
*   **Interactive Image Galleries**: Each project card can feature a dynamic image gallery with:
    *   Lazy-loaded images for optimized performance.
    *   Auto-switching carousels that transition every 5 seconds.
    *   Intuitive left/right navigation arrows that appear on hover.
*   **Gradient Fallback**: Projects without specific images, or those designated with a 'gradient-' string, will display a vibrant green-blue gradient.
*   **Enhanced Call-to-Actions**: Buttons for project links and GitHub repositories (if provided) now include relevant icons for better visual cues.
*   **Tilt-Follow Effect**: Project cards react to mouse movement, creating an immersive tilt effect that follows your cursor.

<img width="1934" height="1104" alt="image" src="https://github.com/user-attachments/assets/11eb7696-82f4-4faf-8453-fb40a72b6206" />


## 🚀 Technologies Used

*   **React**: A JavaScript library for building user interfaces.
*   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
*   **Vite**: A fast build tool that provides an extremely fast development experience.
*   **React Icons**: A library providing popular icon packs as React components.

## 📦 Installation

To set up and run this project locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/tomato6966/tomato6966.github.io.git
    cd tomato6966.github.io
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

4.  **Build for production**:
    ```bash
    npm run build
    ```
    This will create a `dist` directory with the production-ready build.

## 💡 Usage

Projects are defined in `src/projects.ts`. To add or modify projects:

1.  Open `src/projects.ts`.
2.  Edit the `projects` array:
    *   Each object in the array represents a project.
    *   `title`: The name of your project.
    *   `description`: A brief description of your project.
    *   `link`: The URL to your live project or demo.
    *   `images`: An array of image URLs for the project's gallery. If you want a gradient instead of images, include a string like `"gradient-blue"` in this array. If any string in the array starts with `"gradient-"`, the card will display a green-blue gradient.
    *   `githubLink`: (Optional) The URL to your project's GitHub repository. If provided, a GitHub icon button will appear.

Example:

```typescript
export const projects: Project[] = [
  {
    title: "My Awesome Project",
    description: "This project does amazing things!",
    link: "https://myawesomeproject.com",
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.png"
    ],
    githubLink: "https://github.com/yourusername/my-awesome-project",
  },
  {
    title: "Gradient Project",
    description: "A project with a cool gradient background.",
    link: "https://gradientproject.com",
    images: ["gradient-custom"], // This will display the green-blue gradient
  },
];
```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
