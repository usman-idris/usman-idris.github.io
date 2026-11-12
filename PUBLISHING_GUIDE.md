# Publish your portfolio on GitHub Pages

Your account: **usman-idris**  
Repository name: **usman-idris.github.io**  
Expected live address after deployment: **https://usman-idris.github.io/**

This guide gives you two ways to upload exactly the same ready-to-use site. Choose **Method A** if you want to use the GitHub website. Choose **Method B** if you prefer Git commands. Do not upload the ZIP file itself as the website.

## 1. Extract and check the files

1. Download `Usman_Idris_Kwaru_Portfolio.zip`.
2. In Windows File Explorer, right-click the ZIP and choose **Extract All…**.
3. Click **Extract**.
4. Open the extracted folder. You should see `index.html`, `assets`, `projects`, and the guide files. `index.html` must eventually sit at the repository's top level.
5. Double-click `index.html` to preview the site. Try the filters, project links, and résumé download.

## 2. Create the dedicated repository

1. Open https://github.com/ and sign in to **usman-idris**.
2. In the upper-right corner, click **+**, then **New repository**. You can also open https://github.com/new.
3. In **Owner**, select **usman-idris**.
4. In **Repository name**, type exactly `usman-idris.github.io`.
5. For the description, enter `Personal portfolio — software engineering, cybersecurity, and client work`.
6. Choose **Public**. This makes the portfolio files public; it does not change any other repository's visibility.
7. If using **Method A**, turn on **Add a README file** so the upload menu is immediately available.
8. If using **Method B**, leave README, .gitignore, and licence initialisation off so that the repository starts empty. The local site already contains a README.
9. Leave other settings at their defaults and click **Create repository**.
10. Confirm the repository URL ends in `/usman-idris/usman-idris.github.io`.

If that repository already exists by the time you follow this guide, stop before replacing anything and inspect it first. Do not use another existing project repository for this portfolio.

## 3A. Method A — upload through the GitHub website

1. In your new repository, click the **Code** tab.
2. Click **Add file**, then **Upload files**.
3. Open the extracted site folder in File Explorer.
4. Select its **contents**: the `assets` folder, the `projects` folder, and all the top-level files. Drag that selection into GitHub's upload area. Do not drag the outer extracted folder.
5. Wait until all uploads finish. You should see paths such as `index.html`, `assets/styles.css`, `assets/projects.js`, and `projects/hadum-dictionary.html`.
6. Under **Commit changes**, enter `Publish personal portfolio`.
7. Select **Commit directly to the main branch** if GitHub offers the choice.
8. Click **Commit changes**.
9. Check the Code tab. The top level should show `index.html`, `assets`, and `projects`. If you see one enclosing folder instead, the site is nested too deeply. Upload its contents to the top level before enabling Pages.
10. Check `.nojekyll` is listed. Windows may hide dotfiles or your file selection may omit it. If it is missing, choose **Add file → Create new file**, type `.nojekyll` as the filename, add `# Serve this portfolio as static files`, then click **Commit changes… → Commit changes**. A nonempty `.nojekyll` works too.

The uploaded `README.md` replaces the repository's initial README. That is expected in this new portfolio repository.

## 3B. Method B — upload with Git commands

1. Install Git for Windows from https://git-scm.com/downloads/win if Git is not installed. Use the official installer and its defaults.
2. Open the extracted portfolio folder in File Explorer.
3. Right-click in an empty part of the folder. On Windows 11, choose **Show more options** if needed, then **Open Git Bash here**.
4. Check the correct files are in the current directory:

```bash
ls
```

You should see `index.html`, `assets`, and `projects`.

5. Run these commands one at a time. These initialise only this new local folder:

```bash
git init
git branch -M main
git config user.name "Usman Idris Kwaru"
git config user.email "kwaru91@gmail.com"
git add .
git commit -m "Publish personal portfolio"
git remote add origin https://github.com/usman-idris/usman-idris.github.io.git
git push -u origin main
```

6. If Git opens a browser to authenticate, sign in to the correct account and complete Git's normal authentication flow. A normal GitHub account password does not work as a Git HTTPS password. Prefer Git Credential Manager's browser sign-in. Do not paste access tokens into site files, chat, or commands.
7. Refresh the repository's Code tab and confirm the files appear at the top level.

**If you accidentally created the remote with a README:** use a clean clone rather than force-pushing:

1. Open Git Bash in a different parent folder, not inside the existing extracted site folder.
2. Run:

```bash
git clone https://github.com/usman-idris/usman-idris.github.io.git
cd usman-idris.github.io
```

3. Copy the extracted site's contents into this new clone using File Explorer, including `.nojekyll`. Do not copy an existing `.git` folder; let the clone keep its own Git history.
4. Run:

```bash
git add .
git commit -m "Add personal portfolio"
git push origin main
```

## 4. Turn on GitHub Pages

1. Open your portfolio repository on GitHub.
2. Click **Settings** near the top. If hidden on a narrow screen, open the repository navigation overflow menu.
3. In the left sidebar, under **Code and automation**, click **Pages**.
4. Under **Build and deployment**, find **Source**.
5. Select **Deploy from a branch**.
6. Under **Branch**, select **main**.
7. In the folder selector beside it, select **/(root)**.
8. Click **Save**.
9. Leave the custom domain field empty. The requested site uses GitHub's default domain.
10. Allow GitHub to build and deploy the site. You can inspect progress under the **Actions** tab, usually in a workflow named **pages build and deployment**.
11. Return to **Settings → Pages**. When it is ready, GitHub shows the published address and a **Visit site** button.
12. Open **https://usman-idris.github.io/** and check your homepage, project case studies, images, and résumé.

GitHub says publishing changes can take up to **10 minutes**. If the site still has not appeared after an hour, check the deployment logs and the troubleshooting section below. Successful upload by itself is not proof that Pages deployment succeeded.

## 5. Add or update a project later

### Through GitHub

1. In the repository, open `assets`, then `projects.js`.
2. Click the pencil icon (**Edit this file**).
3. Change an existing project's text, or copy the complete new-project example from `README.md` into the `projects` array.
4. Use a unique `id`; keep the commas between objects. For a new project, omit `page` so that the generic detail page handles it automatically.
5. If adding screenshots, upload them into `assets/images` first, then reference their exact filenames in the project object.
6. Click **Commit changes…**, enter a short description, and commit to `main`.
7. Wait for the Pages deployment to complete, then refresh the site.

### Through Git

1. Open your local clone in Git Bash.
2. Before editing, bring it up to date:

```bash
git pull --ff-only origin main
```

3. Edit `assets/projects.js` in VS Code or another text editor.
4. Add screenshots if needed and save.
5. Commit and push:

```bash
git add assets
git commit -m "Update portfolio projects"
git push origin main
```

To update your résumé, replace `assets/documents/Usman_Idris_Kwaru_Resume.pdf` with the new PDF at the same path, then commit and push. To update your bio or skills, edit `index.html`.

## 6. Fix common problems

### The site shows 404

1. Confirm the owner is `usman-idris` and the repository name is exactly `usman-idris.github.io`.
2. In the Code tab, select `main` and confirm `index.html` is at the top level. The filename must be lowercase, not `Index.html`, `index.htm`, or `index.html.txt`.
3. Check **Settings → Pages** is **Deploy from a branch → main → /(root)**, then save if needed.
4. Check **Actions** for a failed or pending Pages deployment. Open a failed run and read the error.
5. Use `https://usman-idris.github.io/`, without an extra repository name after the domain.
6. Wait up to 10 minutes after a successful deployment, then refresh.

### The site is not updating

1. Confirm the edited file is committed to `main` on GitHub. A change saved only on your computer is not uploaded.
2. Check the latest Pages deployment corresponds to your latest commit and finished successfully.
3. Wait for deployment. Refresh with **Ctrl+Shift+R** in Firefox, or try a private window.
4. If an image was replaced under the same name, your browser may retain a cached copy. A hard refresh normally resolves this. You can also give the image a new filename and update its reference.
5. If `main` is missing in Pages settings, create the first commit, refresh Settings, and select the branch again.

### CSS is not loading

1. In GitHub, confirm `assets/styles.css` exists. A common mistake is uploading `styles.css` into a different folder.
2. Check `index.html` contains `<link rel="stylesheet" href="assets/styles.css">`.
3. Case-study files inside `projects/` must use `../assets/styles.css`.
4. Check capitalisation exactly: GitHub Pages is case-sensitive. `Assets` and `assets` are different paths.
5. If every file is inside an extra outer folder, move/upload the contents to the repository root.
6. Open `https://usman-idris.github.io/assets/styles.css` to check that the deployed file exists.

### Project cards disappear after editing

1. Check `assets/projects.js` for a missing comma, quote, closing bracket, or closing brace.
2. In Firefox, press **Ctrl+Shift+K** to open the Web Console and read the first JavaScript error. It usually identifies the file and line.
3. Compare your new object with the complete example in `README.md`. Keep arrays such as `features` and `engineering` even when they have only one item.
4. If needed, restore only your latest edit using the file history; do not delete the repository.

### A new project's detail link shows 404

1. Remove the optional `page` property from the new project object unless you actually created that HTML file.
2. Without `page`, the site uses `project.html?id=your-id`, which works automatically.
3. Ensure the `id` is unique and uses letters, numbers, and hyphens.

### Images or the résumé show 404

1. Check the file was uploaded and the folder/name matches exactly.
2. Check the file extension: `.webp`, `.jpg`, `.png`, and `.pdf` are different.
3. Use paths beginning `assets/` in `assets/projects.js`; the renderer handles the parent directory on case-study pages.
4. For the résumé, preserve its existing filename unless you update every link.

## 7. Official references

- GitHub Pages quickstart: https://docs.github.com/en/pages/quickstart
- Configure a publishing source: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Create and view a Pages site: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

The guide follows GitHub's documentation checked on 12 November 2026. Minor UI labels can change; the required settings remain the repository's Pages publishing source, branch, and root folder.
