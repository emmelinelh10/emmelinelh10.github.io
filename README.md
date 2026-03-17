# emmelinelh10.github.io

Personal portfolio website for Emmeline Handojo — platform & data engineer.

Live at: [emmelinelh10.github.io](https://emmelinelh10.github.io)

---

## Structure

```
emmelinelh10.github.io/
├── index.html       # Main page — all content and markup
├── style.css        # All styles, fonts, and layout
├── cv.pdf           # CV / Résumé (linked from the site)
└── README.md        # This file
```

---

## Sections

- **About** — Intro, tagline, and links to GitHub, LinkedIn, email, and CV
- **Skills & Tech** — Current stack: Python, Bash, Go, AWS, Kubernetes, ArgoCD, Dataiku, Grafana, and more
- **Projects** — Platform and data engineering work from Macquarie Group
- **Publications** — Peer-reviewed research from computational neuroscience at King's College London
- **Contact** — Form powered by [Formspree](https://formspree.io)

---

## Tech

- Plain HTML + CSS — no frameworks, no build step
- Hosted on [GitHub Pages](https://pages.github.com)
- Fonts via [Google Fonts](https://fonts.google.com): Fraunces (display) + DM Sans (body)
- Contact form via [Formspree](https://formspree.io) (free tier)

---

## Local Development

No build tools needed. Just open `index.html` directly in a browser:

```bash
open index.html
# or on Linux:
xdg-open index.html
```

Or use a simple local server to avoid any relative-path quirks:

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000
```

---

## Updating Content

| What to change | Where |
|---|---|
| Name, bio, tagline | `index.html` → `#about` section |
| Social / contact links | `index.html` → `.social-links` |
| Skills | `index.html` → `#skills` section |
| Projects | `index.html` → `#projects` section |
| Publications | `index.html` → `#publications` section |
| Colours & fonts | `style.css` → `:root` variables |
| Contact form endpoint | `index.html` → `form action="..."` |

### Colour palette

All colours are defined as CSS variables in `style.css` and can be changed in one place:

```css
:root {
  --bg:       #f7f8f4;  /* page background */
  --surface:  #ffffff;  /* card / surface background */
  --ink:      #1e2318;  /* primary text */
  --ink-soft: #6b7560;  /* secondary text */
  --accent:   #4a6741;  /* links, labels, highlights */
  --rule:     #dde3d8;  /* borders and dividers */
}
```

---

## Deployment

This site deploys automatically via GitHub Pages on every push to `main`. No CI/CD configuration needed.

To enable GitHub Pages on a new repo:
1. Go to **Settings → Pages**
2. Set source to **Deploy from a branch**
3. Select `main` branch, `/ (root)` folder
4. Save — the site will be live within ~60 seconds
