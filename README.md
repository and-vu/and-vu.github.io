# Andrea Vu Portfolio Website

A modern, responsive portfolio website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## 🚀 Live Site

Visit the live site at: [https://and-vu.github.io](https://and-vu.github.io)

## 📁 Project Structure

```
andrea-vu-portfolio/
├── src/
│   ├── content/           # Content collections (markdown files)
│   │   ├── projects/      # Project entries
│   │   ├── research/      # Research entries
│   │   ├── experiences/   # Experience entries
│   │   ├── extracurriculars/  # Extracurricular entries
│   │   └── config.ts      # Content schema definitions
│   ├── pages/             # Page routes
│   ├── components/        # Reusable Astro components
│   ├── layouts/           # Page layouts
│   └── styles/            # Global styles
├── public/                # Static assets (images, PDFs, etc.)
└── dist/                  # Built site (generated)
```

## 📝 Adding Content

All content is managed through Markdown files with YAML frontmatter. Each content type has its own directory under `src/content/`.

### Adding a Project

Create a new file in `src/content/projects/` (e.g., `my-project.md`):

```markdown
---
title: "My Amazing Project"
description: "A brief one-sentence description of the project"
date: "January 2024 - May 2024"
location: "Optional Location"
skills: ["Python", "ROS", "CAD"]
image: "/images/projects/my-project/cover.jpg"
featured: true
order: 1
---

Your detailed project description goes here. You can use markdown formatting.

---

## Section Title

- Bullet points
- More details
- Key accomplishments

---

## Another Section

More content...
```

**Field Definitions:**
- `title` (required): Project name
- `description` (required): One-sentence summary
- `date` (required): Time period (e.g., "January 2024 - May 2024")
- `location` (optional): Where the project took place
- `skills` (required): Array of relevant skills/technologies
- `image` (optional): Path to cover image (relative to `public/`)
- `featured` (optional): Set to `true` to highlight (default: false)
- `order` (optional): Lower numbers appear first (default: 999)

### Adding Research

Create a new file in `src/content/research/` (e.g., `my-research.md`):

```markdown
---
title: "Full Research Project Title"
shortTitle: "Short Title or Acronym"
advisor: "Dr. Advisor Name"
area: "Research area, methods, and focus"
startDate: "January 2024"
endDate: "May 2024"
image: "/images/research/my-research/cover.jpg"
featured: true
order: 1
publications:
  - "Author, A., Author, B., 'Paper Title,' Conference Name, 2024."
  - "Another publication citation"
articles:
  - "Article Title - Publication Name, 2024"
---

Research overview and summary.

---

## Key Accomplishments

- Achievement 1
- Achievement 2
```

**Field Definitions:**
- `title` (required): Full research project title
- `shortTitle` (required): Abbreviated name or acronym
- `advisor` (required): Research advisor name
- `area` (required): Research focus and methods
- `startDate` (required): Start date (e.g., "January 2024")
- `endDate` (optional): End date (omit if ongoing)
- `image` (optional): Path to cover image
- `featured` (optional): Set to `true` to highlight
- `order` (optional): Display order
- `publications` (optional): Array of publication citations
- `articles` (optional): Array of article citations

### Adding an Experience

Create a new file in `src/content/experiences/` (e.g., `my-job.md`):

```markdown
---
title: "Job Title or Experience Name"
organization: "Company or Organization Name"
role: "Your specific role"
type: "professional"
startDate: "January 2024"
endDate: "May 2024"
location: "City, State"
skills: ["Skill 1", "Skill 2", "Skill 3"]
image: "/images/experiences/my-job/cover.jpg"
order: 1
---

Brief overview of the position and responsibilities.

---

## Responsibilities

- Responsibility 1
- Responsibility 2

---

## Key Accomplishments

- Achievement 1
- Achievement 2
```

**Field Definitions:**
- `title` (required): Position or experience name
- `organization` (required): Company/organization name
- `role` (required): Your specific role
- `type` (required): One of: `"professional"`, `"education"`, or `"extracurricular"`
- `startDate` (required): Start date
- `endDate` (optional): End date (omit if current)
- `location` (optional): Location
- `skills` (optional): Array of relevant skills
- `image` (optional): Path to cover image
- `order` (optional): Display order

### Adding an Extracurricular

Create a new file in `src/content/extracurriculars/` (e.g., `robotics-club.md`):

```markdown
---
title: "Club or Activity Name"
organization: "Organization Name"
role: "Your Role"
startDate: "August 2023"
endDate: "May 2024"
location: "City, State"
skills: ["Leadership", "Teamwork", "Technical Skill"]
image: "/images/extracurriculars/activity/cover.jpg"
featured: true
order: 1
---

Description of the extracurricular activity and your involvement.

---

## Responsibilities

- What you did
- Your contributions

---

## Key Accomplishments

- Achievement 1
- Achievement 2
```

**Field Definitions:**
- `title` (required): Activity name
- `organization` (required): Organization name
- `role` (required): Your role
- `startDate` (required): Start date
- `endDate` (optional): End date (omit if current)
- `location` (optional): Location
- `skills` (optional): Array of relevant skills
- `image` (optional): Path to cover image
- `featured` (optional): Highlight on main page
- `order` (optional): Display order

## 🖼️ Managing Images

1. Add images to the appropriate directory in `public/images/`:
   - Projects: `public/images/projects/your-project-name/`
   - Research: `public/images/research/your-research-name/`
   - Experiences: `public/images/experiences/your-experience-name/`
   - Extracurriculars: `public/images/extracurriculars/your-activity-name/`

2. Reference images in markdown using paths relative to `public/`:
   ```markdown
   image: "/images/projects/my-project/cover.jpg"
   ```

3. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`

## 🛠️ Development Commands

All commands are run from the `andrea-vu-portfolio/` directory:

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally before deploying |

## 🚀 Deployment

This site is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Deployment Workflow

1. Make your changes (add content, update styles, etc.)
2. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```
3. Push to main:
   ```bash
   git push origin main
   ```
4. GitHub Actions will automatically build and deploy your site
5. Visit [https://and-vu.github.io](https://and-vu.github.io) to see your changes live (may take 1-2 minutes)

### Monitoring Deployments

- Check deployment status in the **Actions** tab of your GitHub repository
- View build logs to troubleshoot any issues

## 📋 Content Management Tips

### Ordering Content

Use the `order` field to control the display order of items. Lower numbers appear first:
```yaml
order: 1  # Appears first
order: 2  # Appears second
# No order field = 999 (appears last)
```

### Featured Content

Set `featured: true` to highlight important items:
```yaml
featured: true
```

### Date Formats

- **Range**: `"January 2024 - May 2024"`
- **Single date**: `"May 2024"`
- **Ongoing**: `"January 2024 - Present"` or omit `endDate`

### Markdown Formatting

Content supports full Markdown syntax:
- **Bold**: `**text**`
- *Italic*: `*text*`
- Links: `[text](url)`
- Images: `![alt text](image-path)`
- Lists, headings, code blocks, etc.

## 🎨 Styling

The site uses Tailwind CSS with custom pastel accent colors for visual interest. The design emphasizes:
- Clean, modern aesthetics
- Responsive layouts for all devices
- Smooth transitions and hover effects
- Accessible color contrast

## 🔧 Troubleshooting

### Content not showing up?
- Check that your frontmatter is valid YAML
- Ensure all required fields are present
- Verify file is in the correct directory
- Run `npm run build` to check for errors

### Images not loading?
- Confirm images are in `public/images/`
- Check that paths start with `/` (e.g., `/images/...`)
- Verify image file extensions are lowercase

### Build errors?
- Check the GitHub Actions logs in your repository
- Run `npm run build` locally to see detailed error messages
- Ensure all frontmatter fields match the schema

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Markdown Guide](https://www.markdownguide.org)

## 📧 Support

For questions or issues, create an issue in the GitHub repository.

