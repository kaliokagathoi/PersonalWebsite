# Tom Coates - Personal Website

A minimalistic, software-engineer-inspired personal website built with vanilla HTML, CSS, and JavaScript.

## Features

- **IBM Plex Mono** - Cursor/IDE-inspired monospace typography
- **Dark Theme** - Easy on the eyes, modern aesthetic
- **Terminal Typing Effect** - Animated tagline in the hero section
- **Responsive Design** - Works on all screen sizes
- **Zero Dependencies** - Pure static files, no build step required

## How to Edit

### Changing Projects

Open `index.html` and find the **PROJECTS SECTION** (around line 130). Each project follows this template:

```html
<a href="YOUR_PROJECT_URL" target="_blank" rel="noopener" class="project-item">
    <span class="project-title">project name</span>
    <span class="project-desc">Brief description of the project</span>
</a>
```

Simply copy this block and update the `href`, title, and description.

### Changing Experience

Find the **PREVIOUSLY SECTION** and add timeline items:

```html
<div class="timeline-item">
    <span class="timeline-role">Your Role</span>
    <a href="https://company.com" class="timeline-company">Company Name</a>
</div>
```

### Changing the Typing Animation

Open `script.js` and edit the `phrases` array around line 20:

```javascript
const phrases = [
    'Trader @ Optiver',
    'UNSW Graduate',
    'Your Custom Phrase'
];
```

### Customizing Colors

Open `styles.css` and modify the CSS variables at the top:

```css
:root {
    --bg-primary: #0a0a0a;      /* Main background */
    --accent-blue: #7aa2f7;     /* Link hover color */
    --accent-green: #9ece6a;    /* Typing text color */
    /* ... etc */
}
```

## Deployment

This is a static website - just upload the files to any hosting service:

- **GitHub Pages** - Push to a `gh-pages` branch
- **Vercel** - Connect your repo and deploy
- **Netlify** - Drag and drop the folder
- **Any web server** - Just copy the files

## File Structure

```
PersonalWebsite/
├── index.html    # Main HTML (content lives here)
├── styles.css    # All styling
├── script.js     # Animations and interactivity
└── README.md     # This file
```

## License

MIT
