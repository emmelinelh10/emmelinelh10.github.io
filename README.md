# emmelinelh10.github.io

Personal portfolio website for Emmeline Handojo — platform & data engineer.

Live at: [emmelinelh10.github.io](https://emmelinelh10.github.io)

---

## Structure

```
emmelinelh10.github.io/
├── index.html          # Main page — all content and markup
├── style.css           # All styles, layout, and macOS theme
├── cv.pdf              # CV / Résumé (linked from the site)
├── studentshipdeck.pdf # KCL FoLSM studentship deck (linked from Papers)
└── README.md           # This file
```

---

## Design

The site uses a **macOS desktop metaphor**:

- A fixed **menu bar** at the top with a live clock
- A fixed **dock** at the bottom — each icon opens a section as a floating window
- **About** is open by default — clean first impression for recruiters
- All other sections (Projects, Papers, Skills, Contact) open on demand via the dock
- Windows can be closed with the red traffic light button
- Light macOS Sonoma aesthetic — sage green wallpaper gradient, frosted glass windows

---

## Sections

- **About** — open by default. Name, bio, credential pills, and links to GitHub, LinkedIn, email, CV
- **Projects** — research projects: computational motion perception paper + iGEM 2022
- **Papers** — publications and awards: Proc. R. Soc. B paper, KCL studentship, KURF fellowship, iGEM Silver Medal
- **Skills** — stack grouped by category: Cloud & Infra, Languages, Platforms, Certifications
- **Contact** — mailto link to emmelineliencie@gmail.com

---

## Tech

- Plain HTML + CSS — no frameworks, no build step
- Hosted on [GitHub Pages](https://pages.github.com)
- Fonts via [Google Fonts](https://fonts.google.com): Shippori Mincho (display) + DM Sans (body)
- No external dependencies beyond Google Fonts

---

## Local Development

No build tools needed — open `index.html` directly in a browser:

```bash
open index.html
# or serve locally:
python -m http.server 8000
# then visit http://localhost:8000
```

---

## Updating Content

| What to change | Where |
|---|---|
| Name, bio, tagline | `index.html` → `#win-about` |
| Social / CV links | `index.html` → `.link-row` inside `#win-about` |
| Projects | `index.html` → `#win-projects` |
| Publications & Awards | `index.html` → `#win-publications` |
| Skills | `index.html` → `#win-skills` |
| Contact | `index.html` → `#win-contact` |
| Colours & fonts | `style.css` → `:root` variables |
| Wallpaper gradient | `style.css` → `body` background |

### Colour palette

All key colours are CSS variables in `style.css`:

```css
:root {
  --accent:       #4a6741;  /* matcha green — buttons, tags, links */
  --accent-light: rgba(74,103,65,0.1);
  --glass-bg:     rgba(255,255,255,0.82);  /* window glass */
  --ink:          #111111;
  --ink-soft:     rgba(0,0,0,0.55);
  --ink-muted:    rgba(0,0,0,0.35);
}
```

---

## Deployment

Deploys automatically via GitHub Pages on every push to `main`.

To enable on a new repo:
1. Go to **Settings → Pages**
2. Source: **Deploy from a branch** → `main` / `/ (root)`
3. Save — live within ~60 seconds
