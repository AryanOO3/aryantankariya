# Portfolio Setup

## Adding Your Resume PDF

1. Place your resume PDF file in the `public/` folder
2. Name it exactly: `resume.pdf`
3. The download link will automatically work

## File Structure
```
public/
├── resume.pdf          <- Your PDF goes here
├── robots.txt
├── sitemap.xml
└── vite.svg
```

## Customization

### Personal Information
Edit `src/data/resume.js` to update:
- Personal details (name, email, phone, etc.)
- Work experience
- Education
- Skills
- Featured projects

### Project Data
Edit `src/data/projects/index.js` to update:
- Project information
- Screenshots
- Technologies used
- Links to demos and code

## Development
```bash
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will auto-detect Vite and deploy
4. Set custom domain in Vercel dashboard (optional)

### Manual Deploy
```bash
npm install -g vercel
vercel --prod
```

## Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Set base in vite.config.js: `base: '/your-repo-name/'`
4. Run: `npm run build && npm run deploy`

## Performance

- Run `npm run build:analyze` to analyze bundle size
- Check Core Web Vitals in browser DevTools
- All images are optimized with lazy loading
- Pages are code-split for faster loading