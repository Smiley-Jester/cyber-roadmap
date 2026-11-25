# Cyber Path — Interactive Cybersecurity Roadmap

A Persian-language (RTL), responsive, local-first dashboard for tracking a cybersecurity learning path, from beginner level through defensive analysis and reverse engineering.

## Features
- A 19-chapter roadmap with prerequisite ordering, priority, pass criteria, and exercises
- Curated main resources with direct links
- Planned study/practice time kept separate from the length of the resource content
- Automatic progress calculation for each chapter and for the whole plan
- Stopwatch and Study Timer with saved timestamps
- Study session history log
- Progress and settings stored in the browser's LocalStorage
- Dark, responsive interface built with React and lucide-react

## Getting started locally
Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Build the production version:

```bash
npm run build
npm run preview
```

## Deploying to GitHub Pages
The workflow file lives in `.github/workflows/deploy.yml`. After a push to the `main` branch, GitHub Actions installs the dependencies, builds the project with Vite, and deploys the `dist` folder.

In the repository, go to **Settings → Pages** and set the Source to **GitHub Actions**.

Project URL:
https://Smiley-Jester.github.io/cyber-roadmap/

## Data and privacy
No backend or user account is required. Progress and history are stored only in the LocalStorage of the browser you use; they are not synced between devices. Clearing the site's data in your browser deletes the locally stored information.

## Ethical framework
All exercises are designed to be done on your own system, with code you wrote yourself, with fake data, in CTFs, or in educational labs. In vulnerability research, the goal is responsible disclosure and remediation. The Reverse Engineering and Malware Analysis sections are defensive and static: running unknown files, building or distributing malware, and testing real systems have no place in this project.

## Tech stack
React · Vite · JavaScript · lucide-react · CSS · LocalStorage
