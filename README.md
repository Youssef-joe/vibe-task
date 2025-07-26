# Website Ideas Generator

A fullstack project for generating and previewing website section ideas based on user prompts.

## Tech Stack
- **Frontend:** Next.js (React, TypeScript)
- **Backend:** NestJS (TypeScript, Express)
- **Database:** MongoDB (Mongoose ODM)

---

## Features
- Enter a website idea prompt (e.g., "Landing page for bakery")
- Backend generates 3 dummy sections ("Hero", "About", "Contact")
- Sections are stored in MongoDB
- Fetch and preview the generated sections
- Loading and error handling in the UI

---

## Project Structure

```
website-ideas-api/        # NestJS backend API
website-ideas-frontend/   # Next.js frontend app
```

---

## Prerequisites
- Node.js (v18+ recommended)
- npm
- MongoDB (local or Atlas)

---

## Getting Started

### 1. Clone the repository

```
git clone <your-repo-url>
cd <repo-root>
```

### 2. Start MongoDB

- **Local:**
  - `sudo systemctl start mongod`  
  or  
  - `mongod --dbpath ~/data/db`
- **Docker:**
  - `docker run -d -p 27017:27017 --name mongo mongo`
- **Atlas:**
  - Update the MongoDB URI in `website-ideas-api/src/app.module.ts`

### 3. Backend Setup (NestJS)

```
cd website-ideas-api
npm install
npm run start:dev
```
- The API runs on `http://localhost:3000` by default.
- Endpoints:
  - `POST /ideas` — create a new idea (body: `{ prompt: string }`)
  - `GET /ideas/:id` — fetch idea by ID

### 4. Frontend Setup (Next.js)

```
cd ../website-ideas-frontend
npm install
npm run dev
```
- The app runs on `http://localhost:3000` by default.
- Edit `app/page.tsx` for the main UI.

### 5. Using the App
- Open [http://localhost:3000](http://localhost:3000) in your browser.
- Enter a website idea and submit.
- See the generated sections preview.

---

## Development Notes
- **CORS:** CORS is enabled in the backend for development.
- **API URLs:** If backend runs on a different port, update fetch URLs in `website-ideas-frontend/app/page.tsx`.
- **MongoDB Compass:** Use Compass to view and manage stored ideas.

---

## Example API Usage

### Create an Idea
```bash
curl -X POST http://localhost:3000/ideas \
  -H 'Content-Type: application/json' \
  -d '{"prompt": "Landing page for bakery"}'
```

### Fetch an Idea
```bash
curl http://localhost:3000/ideas/<ideaId>
```

---

## License
MIT
