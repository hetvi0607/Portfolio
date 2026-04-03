# Hetvi Mistry - Premium AI & Software Portfolio

A recruiter-focused, premium personal brand portfolio built with React + Vite + Framer Motion.

## Concept

This portfolio is designed as a product experience, not a resume page.

Core direction:
- AI-inspired premium visuals (glass panels, gradients, glow accents)
- Story-led flow for hiring managers (who you are -> how you think -> what you built)
- Smooth but tasteful motion that supports clarity
- Responsive and production-ready structure for easy GitHub deployment

## Tech Stack

- React 19
- Vite 8
- Framer Motion
- Custom design system with reusable components and tokens

## Sections Included

1. Hero
2. About
3. How I Think (creative differentiator)
4. Experience timeline
5. Skills
6. Featured projects
7. Certifications
8. Education
9. Contact CTA
10. Footer

## Project Structure

```text
src/
  components/
    Navbar.jsx
    SectionHeading.jsx
  data/
    portfolioData.js
  sections/
    AboutSection.jsx
    CertificationsSection.jsx
    ContactSection.jsx
    EducationSection.jsx
    ExperienceSection.jsx
    Footer.jsx
    HeroSection.jsx
    ProjectsSection.jsx
    SkillsSection.jsx
    ThinkingSection.jsx
  utils/
    motion.js
  App.jsx
  index.css
  main.jsx
```

## Run Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Personalization Checklist

Update the following in `src/data/portfolioData.js`:
- `socialLinks.github`
- `socialLinks.linkedin`
- `socialLinks.resume`
- `profileImage`

Also add your files in `public/`:
- `public/profile-photo.jpg`
- `public/resume.pdf`

## Deploy

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```
2. Add scripts in `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
3. Add homepage field in `package.json`:
```json
"homepage": "https://<your-username>.github.io/<repo-name>"
```
4. Deploy:
```bash
npm run deploy
```

### Vercel

1. Push to GitHub
2. Import project in Vercel
3. Framework preset: `Vite`
4. Build command: `npm run build`
5. Output directory: `dist`

### Netlify

1. Push to GitHub
2. Import project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## Why This Portfolio Stands Out

- Recruiter-friendly information hierarchy
- Distinct visual identity vs generic templates
- Strong product-thinking narrative for AI/software roles
- Reusable component architecture for long-term updates

## License

For personal use by Hetvi Mistry.

