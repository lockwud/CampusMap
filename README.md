# CampusMap

*An online and mobile friendly navigation app for easy navigation of routes on Aamusted Campus and lecture rooms

This project provides a robust navigation system for users navigating through a campus environment, including both outdoor and indoor pathways. Users can choose their preferred navigation styles (e.g., fastest, accessible) and receive real-time routing updates.

## Features

- **Outdoor Navigation**: Integrates with Google Maps API to provide directions from any location to the nearest entrance of a building.
- **Indoor Navigation**: Utilizes a pathfinding algorithm to guide users through indoor structures based on their current location and desired destination.
- **User Preferences**: Allows users to specify their routing preferences, which the system considers when calculating routes.
- **Real-Time Updates**: The system can update the route dynamically based on the user's location.

## Getting Started

### Prerequisites

- Node.js
- Prisma
- A Google Maps API key
- A database (SQLite example provided)
- nest js 

### Installation

1. **Clone Repository**:

   ```bash
   git clone https://github.com/your-repo/campus-navigation.git
   cd campus-navigation

    

    Install Dependencies:

          

pnpm install

    

Set Up Database:

    Update your .env to include your database connection string.

    Run Prisma migrations:

      

    pnpm migrate
    

    Generate 

    pnpm generate

        

    Add Your Google Maps API Key:

    In your pathfinding.controller.ts, replace YOUR_GOOGLE_MAPS_API_KEY with your actual key.

Running the Application

To start the NestJS application, run:

      

pnpm run start

    

API Endpoints

    GET /navigation/street-to-room: Initiates navigation from the user's latitude/longitude to a room.

    Query Parameters: 
        lat: User's latitude
        lng: User's longitude
        room: Target room ID
        preference: (Optional) User's routing preference (e.g., fastest, accessible)

    GET /navigation/real-time: Updates the navigation route dynamically based on real-time location changes.

    POST /preferences: Saves user routing preferences.

    GET /preferences: Retrieves the user's routing preference.


License

This project is licensed under the MIT License. See the LICENSE file for details.

      

