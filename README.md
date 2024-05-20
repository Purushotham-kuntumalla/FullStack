Vehicle Simulation Project

Overview

The Vehicle Simulation Project is a web application designed to simulate vehicle movements within defined scenarios. Users can create scenarios, add vehicles to them, and observe the movements of these vehicles based on specified parameters such as speed and direction.

Features

Create and manage scenarios
Add vehicles to scenarios with specific attributes
Simulate vehicle movements based on direction and speed
Real-time vehicle movement within a defined area
Edit and delete scenarios
Input validation to ensure proper vehicle positioning

Technologies Used:

Frontend: React
Backend: Node.js, Express
Database: JSON server (or any backend for mock API)
Styling: CSS

Project Structure
src/
components/
HomePage.js: Main page to select and run scenarios.
AddScenarioPage.js: Page to add new scenarios.
AllScenariosPage.js: Page to view and manage all scenarios.
AddVehiclePage.js: Page to add vehicles to scenarios.
ScenarioItem.js: Component for displaying scenario details in a table row.
App.js: Main application component containing routing and layout.
index.js: Entry point for the React application.
public/: Static files and HTML template.
server/: Backend server configuration (if using JSON server or similar setup).

Installation
Clone the repository

Copy code
git clone https://github.com/your-username/vehicle-simulation-project.git
cd vehicle-simulation-project
Install dependencies

Copy code
npm install
Run the backend server
If you are using JSON server as the backend, start it by running:

Copy code
npm run server
Run the frontend

Copy code
npm start
Access the application
Open your browser and navigate to http://localhost:3000.

API Endpoints
POST /scenarios: Create a new scenario.
PUT /scenarios/:id/vehicles: Add a vehicle to a scenario.
DELETE /scenarios/:id: Delete a scenario.

Usage

Adding a Scenario
Navigate to the "Add Scenario" page from the sidebar.
Enter the scenario name and time duration.
Submit the form to create a new scenario.

Adding a Vehicle
Navigate to the "Add Vehicle" page from the sidebar.
Select a scenario from the dropdown.
Enter the vehicle name, position (X and Y), speed, and direction.
Submit the form to add the vehicle to the selected scenario.

Running a Simulation
Navigate to the "Home" page.
Select a scenario from the dropdown.
Click the "Start Simulation" button to begin the vehicle movement within the defined area.

Managing Scenarios
Navigate to the "All Scenarios" page.
View the list of all scenarios.
Use the "Edit" button to modify scenario details.
Use the "Delete" button to remove a scenario.

Input Validation
Position Validation: Ensures that the vehicle positions (X and Y) are within the defined container size (0 to 1000).
Form Validation: Ensures that all required fields are filled before submission.

Error Handling
API errors are caught and displayed to the user.
Proper feedback is provided for invalid input values.

Styling
Sidebar navigation for easy access to different sections.
Responsive design for better user experience.
Real-time updates and movements visually represented.

Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for more information.

Acknowledgements
Special thanks to all contributors and open-source projects used in this application.
Feel free to reach out if you have any questions or suggestions!
