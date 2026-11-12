# Usman Idris Kwaru — Portfolio

A complete, build-free portfolio for **https://usman-idris.github.io/**.

## What is included

- Home, About, Skills, Experience, and Contact sections.
- Seven featured project case studies and eight supporting projects.
- Client work, software development, and cybersecurity filters.
- Real Hadum Dictionary and Decoy Forge screenshots; designed topic illustrations for other projects (not simulated application screenshots).
- Optimised portrait, local images, downloadable two-page résumé, favicon, social preview image, sitemap, and custom 404 page.
- No framework, package installation, backend, tracking, API keys, or build command.
- All project content is in `assets/projects.js`.

## Open the site on your computer

1. Extract the ZIP: in Windows File Explorer, right-click it and select **Extract All**.
2. Open the extracted folder. Find `index.html` alongside `assets` and `projects`.
3. Double-click `index.html` to open it in Firefox or another browser. The site works directly from files; the project scripts do not use fetch or modules.
4. For a local web preview instead, open a terminal in this folder, run `python -m http.server 8000`, and visit `http://localhost:8000`. Press Ctrl+C in that terminal to stop it. Python is optional; there is no build step.

## Publishing

Read **PUBLISHING_GUIDE.md** for complete click-by-click instructions, Git commands, updates, and troubleshooting. Upload the **contents** of this folder into `usman-idris.github.io`, not the containing folder itself.

## Files you will normally edit

| File | Purpose |
|---|---|
| `index.html` | Introduction, About, skills, education, experience, and contact text |
| `assets/projects.js` | Project cards, case studies, and other work |
| `assets/styles.css` | Colours, typography, spacing, and responsive styles |
| `assets/site.js` | Project rendering, filters, and mobile navigation |
| `assets/images/` | Optimised images and screenshots |
| `assets/documents/Usman_Idris_Kwaru_Resume.pdf` | Downloadable résumé |
| `projects/*.html` | Existing shareable case-study entry pages and their search metadata |
| `project.html` | Generic case-study page for new projects, using `?id=project-id` |
| `.nojekyll` | Tells GitHub Pages to serve the static site directly |

## Add a featured project — edit one file

1. Open `assets/projects.js` in VS Code or GitHub's editor.
2. Find the `projects: [` array. Each project is enclosed in `{ ... }`.
3. After the last existing project object, add a comma, then paste this object before the closing `],` that comes immediately before `otherWork`.
4. Replace the example values with your own. Use single quotes; if your text contains an apostrophe, escape it as `\'` or use double quotes for that whole string.
5. Give the project a unique lowercase `id`. Use hyphens instead of spaces.
6. Save and commit. Its card and full case study appear automatically, with a link such as `project.html?id=my-new-project`. No extra HTML file is required.

```javascript
{
  id: 'my-new-project',
  title: 'My New Project',
  number: '08',
  category: 'Software Development',
  filters: ['Software Development'],
  status: 'In development',
  type: 'Web application',
  summary: 'One or two sentences explaining what the application does.',
  stack: ['C#', 'ASP.NET Core'],
  visual: 'architecture',
  repo: 'https://github.com/usman-idris/REPLACE-WITH-REPO-NAME',
  demo: null,
  private: false,
  role: 'Sole developer · Personal project',
  context: 'Why I started this project and who it was for.',
  problem: 'The practical problem it addresses.',
  solution: 'How I approached the problem.',
  features: ['First implemented feature', 'Second implemented feature'],
  engineering: ['A meaningful design decision and its purpose'],
  outcome: 'What I completed or learned. Be specific and accurate.',
  limitation: 'Any unfinished work or important limits.'
}
```

Allowed filter names: `Client Work`, `Software Development`, `Cybersecurity`. A project can have more than one. `category` is the primary label. Use `repo: null` for private source and `demo: null` when there is no live demo. The renderer derives the public source label from `repo`; the `private` flag records your intention for maintainers.

Optional screenshot fields inside the same object:

```javascript
image: 'assets/images/my-project.webp',
imageAlt: 'A meaningful description of the application screen',
gallery: [
  { src: 'assets/images/my-second-screen.webp', caption: 'What this screen demonstrates.' }
],
```

Put those image files in `assets/images` before committing. Without a screenshot, choose a designed topic illustration: `architecture`, `community`, `authentication`, `password`, or `automation`.

The original seven projects also have a `page` field for a short HTML URL. Omit it on new projects to use the automatic generic page. If you want a dedicated short URL later, copy an existing file from `projects/`, change its `<title>`, description, canonical URL, and `data-project` value, then set `page: 'projects/my-new-project.html'`. Add that URL to `sitemap.xml` too. This is optional and does not require a build.

## Add supporting work

Add another object inside `otherWork: [` in `assets/projects.js`:

```javascript
{
  title: 'My Utility',
  stack: 'Python',
  text: 'A brief, honest explanation of what it does.',
  status: 'Learning project',
  repo: 'https://github.com/usman-idris/REPLACE-WITH-REPO-NAME'
}
```

Separate adjacent objects with commas. To reorder projects, move complete objects in the array. Update their `number` values to match the order. To remove a project, remove its complete object and the appropriate comma.

## Other updates

- **Résumé:** replace the PDF at the same path. The download links keep working.
- **Photo:** replace `assets/images/usman-idris-kwaru.webp` with a WebP image at the same path. For a JPG, change the image path in `index.html` too.
- **Email and social links:** update the actual links in `index.html`; update the matching contact links in project-page headers/footers if you change those, and keep the information at the top of `assets/projects.js` in sync. The catalogue contact values are maintainer metadata; contact HTML is static.
- **About/skills/experience:** edit `index.html`. Avoid adding unsupported skills or inflated proficiency claims.
- **Search metadata:** after major text changes, update page titles, descriptions, and `sitemap.xml`. Existing dedicated project-page metadata is static even though its visible content comes from the catalogue.
- **Colours:** edit variables at the start of `assets/styles.css`.

## Content and attribution

Client source repositories remain private. Public project pages show approved descriptions and assets only. Hadum was delivered as source code and is not presented as a hosted demo. WHEEI links to the client-hosted site. Decoy Forge credits its team and Usman's code-development contribution. CoreForge limitations and prototype scope are stated explicitly. Forked third-party applications and curricula are not presented as original work.

The résumé PDF was prepared from the latest supplied CV, with Hadum's delivery status updated following Usman's clarification. The original Word document was not modified.

## Accessibility and runtime

The site includes semantic landmarks and headings, keyboard-operable buttons, a skip link, visible focus styles, image descriptions, live filter-result announcements, and reduced-motion support. The mobile menu supports Escape. Contact details and résumé links remain available without JavaScript; project cards and full case-study content need JavaScript.

Everything needed for the site is local. WHEEI, GitHub, LinkedIn, and email open only when a visitor follows those links. This static site does not process form submissions.
