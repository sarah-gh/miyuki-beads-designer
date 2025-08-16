# Miyuki Beads Designer 🎨

A comprehensive web-based application for designing and creating beautiful bead patterns, specifically designed for Miyuki beads and weaving projects.

## ✨ Features

### 🎯 **Flat Grid Designer**
- Create 2D bead patterns with customizable dimensions
- Intuitive grid-based interface for pattern design
- Color palette management with recent colors
- Export and import pattern designs

### 🧵 **Weaving Grid Editor**
- Advanced weaving pattern creation tools
- Customizable grid dimensions (8-160 columns, 8-400 rows)
- Adjustable bead sizes (6-28px)
- Professional weaving design interface

### 🔮 **3D Visualization**
- Real-time 3D preview of bead patterns
- Interactive 3D view with orbit controls
- Realistic bead rendering using Three.js
- Responsive 3D canvas

### 🎨 **Design Tools**
- Color picker with hex color support
- Recent colors management
- Multiple drawing tools (brush, fill, line, etc.)
- Pattern symmetry and mirroring options

## 🚀 Getting Started

### Prerequisites
- Node.js v20 or higher
- NPM v10 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/miyuki-beads-designer.git
   cd miyuki-beads-designer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot-reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test:unit` | Run unit tests with Vitest |
| `npm run test:e2e` | Run end-to-end tests with Playwright |
| `npm run lint` | Lint code with ESLint |
| `npm run format` | Format code with Prettier |

## 🏗️ Project Structure

```
src/
├── components/
│   ├── flat/           # Flat grid designer components
│   │   ├── MiyukiBeads.vue      # 3D bead visualization
│   │   ├── GridEditor.vue       # 2D grid editor
│   │   └── BraceletPreview.vue  # Bracelet preview
│   ├── weaving/        # Weaving grid editor components
│   │   └── WeavingGridEditor.vue # Advanced weaving tools
│   └── icons/          # SVG icon components
├── views/               # Route components
│   ├── HomeView.vue     # Flat grid designer page
│   ├── WeavingGrid.vue  # Weaving grid editor page
│   └── AboutView.vue    # About page
├── stores/              # Pinia state management
├── services/            # API services
├── lib/                 # Utilities and helpers
└── assets/              # Styles and static assets
```

## 🎨 Usage Guide

### Creating a Flat Pattern
1. Navigate to the **Flat Grid** tab
2. Use the grid editor to place beads
3. Select colors from the color picker
4. Use drawing tools to create your pattern
5. Preview in 3D using the 3D view

### Creating a Weaving Pattern
1. Navigate to the **Weaving Grid** tab
2. Adjust grid dimensions using the sliders
3. Choose your bead size
4. Use the drawing tools to create your weaving pattern
5. Save and export your design

## 🧪 Testing

### Unit Tests
```bash
npm run test:unit
```

### End-to-End Tests
```bash
# Install Playwright browsers
npx playwright install

# Run E2E tests
npm run test:e2e
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🛠️ Tech Stack

- **Frontend Framework**: Vue.js 3 with Composition API
- **Build Tool**: Vite
- **3D Graphics**: Three.js
- **Styling**: TailwindCSS
- **State Management**: Pinia
- **Routing**: Vue Router
- **Testing**: Vitest (Unit) + Playwright (E2E)
- **Code Quality**: ESLint + Prettier + Husky

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Miyuki** for their high-quality beads
- **Three.js** community for 3D graphics capabilities
- **Vue.js** team for the amazing framework
- **TailwindCSS** for the utility-first CSS framework

## 📞 Support

If you have any questions or need help with the application, please open an issue on GitHub.

---

**Designed with ❤️ for the beading community**
