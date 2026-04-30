<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Asia Group

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy (GitHub Pages)

This repo includes a GitHub Actions workflow that builds and deploys the `dist/` folder to GitHub Pages on every push to `main`.

1. In GitHub repo settings: `Settings -> Pages -> Build and deployment -> Source`, select `GitHub Actions`
2. Push to `main` (or run the workflow manually via `Actions`)
