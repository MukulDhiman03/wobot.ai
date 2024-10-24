# Camera List Table

Getting Started
Follow the instructions below to get a copy of the project running on your local machine.

Prerequisites
Make sure you have the following installed on your local environment:

- Node.js: Download Node.js
- npm: Comes bundled with Node.js or Install npm

Clone the repo,

### `git clone https://github.com/MukulDhiman03/wobot.ai.git`

Navigate into the project directory:

### `cd wobotapp`

Install the required dependencies:

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Features

Once the app is running, you'll be presented with a camera list table featuring:

- Pagination Controls: Use the "<" and ">" buttons to navigate between pages.
- Search Bar: Enter a search term to filter the list of cameras by name.
- Filters: Apply available filters to narrow down the list based on location and status.
- Shimmer ui: A popular design pattern used to improve the user experience during content loading. Instead of showing a blank screen or a static loader (like a spinner), a shimmer effect shows a visual placeholder for the content that is still being loaded. It gives users a sense of progress and makes the interface feel more dynamic and responsive.

# Technologies Used

- React.js: Frontend framework for building the user interface.
- Axios : For making API requests to fetch camera data.
- CSS: For styling the table and ensuring responsive design.
- React Hooks: Used for managing state (e.g., search term, pagination, filters).

### Project Structure

- src
  - components
    - camera
      - CameraTable
        - TableHeader
        - Filters
        - Table
          - TableRow
    - shimmerui
      - TableShimmerUi
- App.js
