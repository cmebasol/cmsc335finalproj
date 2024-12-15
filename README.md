# Snip & Style - Haircut Appointment Scheduler

## Submitted By:
- Meba Tadesse (directory ID: mtades30)
- AndreAzwa Bajwah (directory ID: member2ID)
- Andre Achee (directory ID: aachee)

## App Description
Snip & Style is a web application that allows users to schedule, review, and manage haircut appointments conveniently. The application features multiple services, integrates an API for dynamic content, and provides a polished user interface.

## YouTube Video Demo Link
[Insert YouTube Link Here]

## APIs Information
- **Unsplash API**: Used to fetch images of hairstyles and salon services. [Unsplash API Documentation](https://unsplash.com/developers)
- **Weather API**: Used to display weather forecasts for appointment days. [OpenWeatherMap Documentation](https://openweathermap.org/api)

## Features
- **Node.js & Express**: Backend framework to handle routing and server logic.
- **MongoDB**: Database for storing user information and appointments.
- **Dynamic Forms**: Users can schedule or review appointments via interactive forms.
- **CSS Styling**: Clean and modern design for an enhanced user experience.
- **External APIs**: Enriches the application with dynamic content (e.g., images and weather data).
- **Deployment**: Hosted on [Render](https://render.com/) for easy accessibility.

## Installation and Setup
### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas instance)

### Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/abajwah/cmsc335finalproj.git
   ```
2. Navigate to the project directory:
   ```bash
   cd SnipAndStyle
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up your environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=3000
     MONGODB_URI=your-mongodb-connection-string
     UNSPLASH_API_KEY=your-unsplash-api-key
     WEATHER_API_KEY=your-weather-api-key
     ```
5. Start the server:
   ```bash
   node appointmentServer.js 3000
   ```
6. Access the application at `http://localhost:3000`.

## Deployment Link
[Insert Deployed App Link Here]

## Contact Email
mtades30@terpmail.umd.edu
