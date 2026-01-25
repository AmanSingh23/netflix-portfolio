# Netflix Portfolio - Aman Singh

A Netflix-style portfolio website built with Angular 17+ featuring a modern, responsive design with smooth animations and a professional portfolio showcase.

## Features

### Core Features
- **Loading Screen**: Netflix-style loading with "AMAN SINGH" branding and smooth transitions
- **Profile Selection**: "Who's watching?" page with 4 profiles (AMAN, Rapso, Children, popa)
- **Dashboard**: Netflix-style interface with horizontal scrolling content rows
- **Content Detail Pages**: Detailed views for each portfolio section

### UI/UX Features
- Dark theme matching Netflix aesthetic
- Smooth animations and transitions
- Hover effects on cards (zoom, info overlay)
- Responsive design for desktop and mobile
- Netflix-style navigation header
- Lazy loading images
- Custom directives for enhanced interactions

### Content Structure
- **Today's Top Picks for recruiter**: Work Permit, Skills, Experience, Certifications, Recommendations, Projects
- **Continue Watching for recruiter**: Music, Reading, Blogs, Contact Me
- Each card opens either a detailed page or modal popup

### Technical Features
- Angular 17+ with routing and animations
- SCSS support with Netflix-style theming
- Lazy loading for all feature modules
- Custom services for data management
- Route guards for profile selection
- JSON data files for content
- Reusable components and directives

## Project Structure

```
src/
├── app/
│   ├── core/                    # Core functionality
│   │   ├── guards/             # Route guards
│   │   ├── interceptors/       # HTTP interceptors
│   │   ├── services/           # Core services
│   │   └── models/             # TypeScript models
│   ├── shared/                 # Shared components and utilities
│   │   ├── components/         # Reusable components
│   │   ├── directives/         # Custom directives
│   │   ├── pipes/              # Custom pipes
│   │   └── animations/         # Animation definitions
│   ├── features/               # Feature modules
│   │   ├── loading/            # Loading screen
│   │   ├── profile-selection/  # Profile selection
│   │   ├── dashboard/          # Main dashboard
│   │   ├── content-detail/     # Content detail pages
│   │   └── portfolio-sections/ # Portfolio sections
│   ├── app-routing.module.ts   # Main routing
│   ├── app.component.*         # Root component
│   └── app.module.ts           # Root module
├── assets/                     # Static assets
│   ├── images/                 # Images and icons
│   ├── data/                   # JSON data files
│   └── fonts/                  # Custom fonts
└── styles/                     # Global styles
    ├── abstracts/              # Variables and mixins
    ├── base/                   # Base styles
    ├── components/             # Component styles
    ├── layout/                 # Layout styles
    ├── themes/                 # Theme styles
    └── styles.scss             # Main stylesheet
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Angular CLI (v17 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd netflix-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build and watch for changes
- `npm test` - Run unit tests
- `npm run serve` - Serve the built application

### Code Structure

The application follows Angular best practices with:

- **Feature modules**: Each major feature is organized in its own module
- **Lazy loading**: All feature modules are lazy-loaded for better performance
- **Shared module**: Common components, directives, and pipes are shared
- **Core module**: Singleton services and core functionality
- **SCSS architecture**: Organized styles with variables, mixins, and themes

### Customization

#### Adding New Portfolio Sections

1. Create a new component in `src/app/features/portfolio-sections/`
2. Add the route to `app-routing.module.ts`
3. Update the content data in `src/assets/data/content-data.json`
4. Add the section to the sections configuration

#### Styling

The application uses a comprehensive SCSS architecture:

- **Variables**: Color palette, typography, spacing, etc.
- **Mixins**: Reusable style patterns
- **Themes**: Netflix-specific styling
- **Components**: Component-specific styles

#### Data Management

Content is managed through JSON files in `src/assets/data/`:

- `profiles.json`: Profile information
- `content-data.json`: Portfolio content
- `sections-config.json`: Section configuration

## Technologies Used

- **Angular 17+**: Frontend framework
- **TypeScript**: Programming language
- **SCSS**: Styling with advanced features
- **RxJS**: Reactive programming
- **Angular Router**: Navigation and routing
- **Angular Animations**: Smooth transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Deployment

This project can be deployed to various platforms. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy Options

1. **Netlify** (Recommended):
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist/netflix-portfolio`
   - Automatic deployments on every push

2. **Vercel**:
   - Connect your GitHub repository
   - Framework: Angular
   - Automatic deployments

3. **GitHub Pages**:
   ```bash
   npm install -g angular-cli-ghpages
   npm run build -- --base-href="/your-repo-name/"
   npx angular-cli-ghpages --dir=dist/netflix-portfolio
   ```

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact Aman Singh.

---

**Note**: This is a portfolio website inspired by Netflix's design and user experience. It's built for demonstration purposes and showcases modern web development practices with Angular.
