# emmelinelh10.github.io

Personal portfolio website for Emmeline Handojo, a platform and data engineer based in London.

Live at: [emmelinelh10.github.io](https://emmelinelh10.github.io)

## Overview

This is a static portfolio site built with plain HTML, CSS, and JavaScript. It has no framework, build step, or package manager dependency.

Current features:

- Sidebar navigation for Home, Skills, Projects, and About
- Dark/light theme toggle with saved preference
- Mobile side-drawer navigation
- Skills marquee with local SVG/PNG logo assets
- Interactive skills constellation driven by `skills-config.js`
- Decorative language planet nodes in the skills map
- Responsive layouts for desktop and mobile

## Structure

```text
emmelinelh10.github.io/
├── index.html                  # Main markup and page interaction scripts
├── style.css                   # Site styling, responsive layout, and theme tokens
├── skills-config.js            # Skills, objectives, implementation notes, and metrics
├── assets/                     # Logo assets used by the skills marquee
│   ├── aws-icons/              # AWS architecture icons
│   ├── airflow-logo.png
│   ├── argocd-logo.png
│   └── dataiku-logo.svg
├── cv.pdf                      # CV / resume linked from the site
├── studentshipdeck.pdf         # KCL FoLSM studentship deck
└── README.md
```

## Content

- **Home**: hero introduction, skills marquee, featured projects, and contact CTA
- **Skills**: constellation map of cloud, platform, and language skills
- **Projects**: research and engineering work
- **About**: bio, education, experience, certifications, CV, and contact links

Most skills content lives in `skills-config.js`. The constellation reads from the `SKILLS` object, while node positions and map behavior are defined in the inline script in `index.html`.

## Design

The site uses a restrained dark portfolio aesthetic with an optional light mode.

- Display font: Plus Jakarta Sans 800
- Body font: Inter
- Theme colors are controlled by CSS variables in `style.css`
- Primary contact buttons use a softer green in light mode
- Mobile navigation is a left-side drawer
- Language skills render as unlinked planet-style nodes around the constellation

## Local Development

You can open `index.html` directly, or serve the folder locally:

```bash
python3 -m http.server 8765
```

Then visit:

```text
http://127.0.0.1:8765
```

Useful direct URLs:

```text
http://127.0.0.1:8765/#home
http://127.0.0.1:8765/#skills
http://127.0.0.1:8765/#projects
http://127.0.0.1:8765/#about
```

## Updating Content

| Change | Where |
|---|---|
| Hero copy and featured project cards | `index.html` |
| Skills data, objectives, implementation, metrics | `skills-config.js` |
| Skills constellation positions and connections | `index.html` |
| Theme colors, typography, responsive layout | `style.css` |
| Marquee logo mappings | `index.html` |
| Local logo/image assets | `assets/` |
| CV link target | `cv.pdf` |

## Deployment

The site is designed for GitHub Pages and deploys from the repository root.

To enable Pages on a new repo:

1. Go to **Settings -> Pages**
2. Source: **Deploy from a branch**
3. Select `main` and `/ (root)`
4. Save

GitHub Pages should publish the site shortly after changes are pushed to `main`.
