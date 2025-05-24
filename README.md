# Internshala - Internship Search Page

This project replicates the Internshala internship search page using React. It allows users to search and filter internships based on profile, location, and duration.

## Features

- **Internship List**: Displays a list of internships fetched from the API (https://internshala.com/hiring/search).
- **Filters**:
  - Filter internships by profile
  - Filter internships by location
  - Filter internships by duration
- **Frontend Filtering**: All filtering is done on the frontend without additional API requests.
- **Responsive Design**: Replicates the Internshala UI with potential innovations.

## Project Structure

```
src/
├── components/
│   ├── Breadcrumb.jsx
│   ├── Breadcrumb.css
│   ├── Filters.jsx
│   ├── Filters.css
│   ├── Headers.jsx
│   ├── Headers.css
│   ├── InternshipCard.jsx
│   ├── InternshipCard.css
│   ├── InternshipList.jsx
│   └── InternshipList.css
├── App.jsx
├── App.css
└── main.jsx
```

## Technologies Used

- React
- CSS for styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yash12000/internshala-assignment.git
cd internshala-assignment

# Install dependencies
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

