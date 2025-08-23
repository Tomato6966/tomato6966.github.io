# Financial Goals Visualizer

## Overview

The Financial Goals Visualizer is a web application designed to help users track their assets, define financial goals, and visualize their projected wealth growth over time. It provides an interactive dashboard to understand how current contributions and asset performance can lead to achieving future financial milestones.

## Features

*   **Wealth Projection:** Visualize your wealth growth based on current assets, contributions, and expected returns.
*   **Asset Management:** Add, edit, and remove assets, including their current value, monthly contribution, allocation percentage, and expected annual return.
*   **Goal Tracking:** Define specific financial goals with required amounts and see their progress towards achievement.
*   **Collapsible Sections:** "Add New Asset" and "Add New Goal" sections are collapsible for a cleaner interface.
*   **Theme Toggle:** Switch between light and dark themes for comfortable viewing.
*   **Data Management:** Import and export your financial data as JSON files.
*   **Responsive Design:** Optimized for various screen sizes.

## Use it!

This project is configured for automatic deployment to GitHub Pages on every push to the `main` branch. You can view the live application at:

[https://tomato6966.github.io/financial-goals-visualiser/](https://tomato6966.github.io/financial-goals-visualiser/)

<img width="2270" height="1344" alt="image" src="https://github.com/user-attachments/assets/c1f71612-b11c-4378-afdb-8c294e4a4f9d" />

<img width="2271" height="1351" alt="image" src="https://github.com/user-attachments/assets/c7eefb2e-859d-49eb-8c40-56049d4bbf7f" />

## Technologies Used

*   **Frontend:** React.js (with TypeScript)
*   **Styling:** Tailwind CSS
*   **Charting:** Chart.js (with react-chartjs-2)
*   **Build Tool:** Vite
*   **Icons:** React Icons

## Installation

To set up the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/tomato6966/financial-goals-visualiser.git
    cd financial-goals-visualiser
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

4.  **Build for production:**
    ```bash
    npm run build
    ```
    This will create a `dist` folder with the production-ready build.

## Usage

1.  **Configuration:** Enter your birth date to enable age-based projections.
2.  **Add Assets:** Expand the "Add New Asset" section to input details for your assets (e.g., stocks, savings, retirement accounts). You can edit existing assets directly in the list.
3.  **Add Goals:** Expand the "Add New Goal" section to define your financial goals (e.g., house down payment, retirement fund).
4.  **Visualize:** The dashboard will automatically update to show your projected wealth growth and goal progress.
5.  **Theme Toggle:** Use the sun/moon icon in the header to switch between light and dark themes.
6.  **Import/Export:** Use the buttons in the Configuration section to save or load your data.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find any bugs, please open an issue or submit a pull request on the [GitHub repository](https://github.com/tomato6966/financial-goals-visualiser).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. (Note: A LICENSE file is not included in this project, but it's good practice to add one.)
