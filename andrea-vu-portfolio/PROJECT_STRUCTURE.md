# Andrea Vu Portfolio - Project Structure

This portfolio website is built with Astro and Tailwind CSS, featuring a clean, minimalist design inspired by hennyadmoni.com.

## Project Structure

```
andrea-vu-portfolio/
├── public/
│   ├── images/
│   │   ├── about/          # Profile images
│   │   ├── projects/       # Project images organized by slug
│   │   ├── experiences/    # Experience images
│   │   └── research/       # Research images
│   └── Vu_Andy_Resume.pdf  # Resume PDF
├── src/
│   ├── components/
│   │   └── Navigation.astro    # Main navigation component
│   ├── content/
│   │   ├── config.ts          # Content collections schema
│   │   ├── projects/          # Project markdown files
│   │   ├── experiences/       # Experience markdown files
│   │   └── research/          # Research markdown files
│   ├── layouts/
│   │   └── Layout.astro       # Main layout with Tailwind
│   ├── pages/
│   │   ├── index.astro        # Home/About page
│   │   ├── experience.astro   # Experience listing page
│   │   ├── projects/
│   │   │   ├── index.astro    # Projects listing
│   │   │   └── [...slug].astro # Individual project pages
│   │   └── research/
│   │       ├── index.astro    # Research listing
│   │       └── [...slug].astro # Individual research pages
│   └── styles/
│       └── global.css         # Global styles with Tailwind imports
└── astro.config.mjs           # Astro config with Tailwind

```

## Content Collections

The website uses Astro's content collections feature for blog-style markdown rendering:

### Projects
Location: `src/content/projects/`

Schema:
- title
- description
- date
- location (optional)
- skills (array)
- image (path to cover image)
- featured (boolean)
- order (for sorting)

### Experiences
Location: `src/content/experiences/`

Schema:
- title
- organization
- role
- type (professional | education | extracurricular)
- startDate
- endDate (optional)
- location (optional)
- skills (array, optional)
- image (optional)
- order (for sorting)

### Research
Location: `src/content/research/`

Schema:
- title
- shortTitle
- advisor
- area
- startDate
- endDate (optional)
- image (optional)
- publications (array, optional)
- articles (array, optional)
- featured (boolean)
- order (for sorting)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding New Content

### Adding a Project
1. Create a new markdown file in `src/content/projects/`
2. Add frontmatter with required fields
3. Add project images to `public/images/projects/[project-slug]/`
4. The page will be automatically generated at `/projects/[filename]`

### Adding Experience
1. Create a new markdown file in `src/content/experiences/`
2. Set the appropriate type (professional, education, or extracurricular)
3. Add images to `public/images/experiences/[experience-slug]/` if needed
4. Experience will appear on the `/experience` page in the appropriate section

### Adding Research
1. Create a new markdown file in `src/content/research/`
2. Include publications or articles arrays if applicable
3. Add research images to `public/images/research/[research-slug]/`
4. The page will be automatically generated at `/research/[filename]`

## Design Philosophy

The website follows a minimalist academic portfolio design with:
- Clean typography using Inter font
- Subtle hover effects and transitions
- Card-based layouts for content listings
- Responsive design that works on all devices
- Blog-style individual pages for detailed content
- Clear visual hierarchy with proper spacing

## Navigation Structure

- **About** (`/`) - Homepage with bio and skills
- **Research** (`/research`) - Research projects and publications
- **Projects** (`/projects`) - Technical projects
- **Experience** (`/experience`) - Professional, educational, and extracurricular experience
- **CV** - Direct link to resume PDF

## Images

All images are organized in the `public/images/` directory:
- Images are referenced with absolute paths starting with `/images/`
- Each content type has its own subdirectory
- Project/research/experience images are further organized by slug
- Cover images are typically named `cover.jpg` or `cover.png`
