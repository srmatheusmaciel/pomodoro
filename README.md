# Pomodoro - Focus & Productivity App


## 📋 Overview

Pomodoro is a modern React application designed to help users implement the Pomodoro Technique for improved productivity and focus. This technique breaks work into intervals, traditionally 25 minutes, separated by short breaks.

The app features:
- Customizable work/break intervals
- Task tracking
- Complete history of your productivity sessions
- Clean, intuitive UI
- Responsive design for all devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/srmatheusmaciel/pomodoro.git
cd pomodoro
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 💻 Usage

- **Start Timer**: Set your task name, choose a time interval, and click start
- **Pause/Resume**: Control your current timer as needed
- **History View**: Track your past sessions and productivity patterns

## 🏗️ Project Structure

```
pomodoro/
├── public/          # Static assets
├── src/
│   ├── @types/      # TypeScript type definitions
│   ├── assets/      # Images and resources
│   ├── components/  # Reusable UI components
│   │   └── Header/  # Navigation component
│   ├── layouts/     # Layout templates
│   │   └── DefaultLayout/ # Main application layout
│   ├── pages/       # Application pages
│   │   ├── Home/    # Timer and task input page
│   │   └── History/ # Past sessions records
│   ├── styles/      # Global styles and themes
│   ├── App.tsx      # Main application component
│   ├── main.tsx     # Application entry point
│   └── Router.tsx   # Application routing
└── package.json     # Project dependencies and scripts
```

## 🛠️ Built With

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Vite](https://vitejs.dev/) - Build tool and development server
- [React Router](https://reactrouter.com/) - Navigation and routing
- [Styled Components](https://styled-components.com/) - Component styling
- [React Hook Form](https://react-hook-form.com/) - Form handling with validation
- [Zod](https://github.com/colinhacks/zod) - Schema validation
- [date-fns](https://date-fns.org/) - Date manipulation
- [Phosphor Icons](https://phosphoricons.com/) - Modern icon library

## 📱 Responsive Design

PomodoroTimer is designed to work flawlessly on:
- Desktops and laptops
- Tablets
- Mobile devices

## 🧪 Quality Assurance

- ESLint for code quality
- TypeScript for type safety
- Proper code organization and best practices

## 🔄 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Preview production build
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Francesco Cirillo](https://francescocirillo.com/pages/pomodoro-technique) for creating the Pomodoro Technique

---

<div align="center">
  <p>Made with ❤️ by Matheus</p>
</div>
