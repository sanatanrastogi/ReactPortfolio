# React Portfolio

A modern, responsive personal portfolio website built with React and Vite, showcasing professional experience, education, certifications, technical skills, and work samples.

## Features

- **About Me**: Personal introduction and background
- **Experience**: Professional work history and achievements
- **Education**: Academic qualifications and details
- **Certifications**: Professional certifications and credentials
- **Technical Skills**: Programming languages, frameworks, and tools
- **Work Samples**: Portfolio of projects and accomplishments
- **Contact**: Ways to get in touch

## Technologies Used

- **React 19**: Frontend framework for building user interfaces
- **Vite**: Fast build tool and development server
- **Bootstrap 5**: CSS framework for responsive design
- **FontAwesome**: Icon library for visual elements
- **JavaScript**: Programming language

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Building for Production

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components for each section
│   ├── AboutMe.jsx
│   ├── Certification.jsx
│   ├── Contact.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Navbar.jsx
│   ├── Technical.jsx
│   ├── Title.jsx
│   └── Work.jsx
├── data/               # JSON files containing portfolio data
│   ├── Certification.json
│   ├── educationDetails.json
│   ├── Experience.json
│   ├── Skill.json
│   └── Work.json
├── assets/             # Static assets
├── App.jsx             # Main application component
└── main.jsx            # Application entry point
```

## Customization

The portfolio is designed to be easily customizable. All content is stored in JSON files located in the `src/data/` directory:

- Update `Certification.json` with your certifications
- Modify `educationDetails.json` for your educational background
- Edit `Experience.json` for your work experience
- Customize `Skill.json` with your technical skills
- Update `Work.json` with your projects and work samples

Simply edit these JSON files with your personal information, and the portfolio will automatically reflect the changes.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
