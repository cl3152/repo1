# React + FastAPI Hosting Starter (Vercel + Render)

Dieses Repo ist jetzt als Starter für **Option 1** vorbereitet:
- **Frontend (React/Vite)** in `frontend/` → Deployment auf **Vercel**
- **Backend (FastAPI)** in `backend/` → Deployment auf **Render**

## 1) Backend auf Render deployen

1. Render öffnen: https://render.com
2. Neues Web Service aus deinem GitHub-Repo erstellen.
3. Als `Root Directory` **`backend`** setzen.
4. Build Command: `pip install -r requirements.txt`
5. Start Command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
6. Env Var setzen:
   - `ALLOWED_ORIGINS` = deine Vercel URL (z. B. `https://my-app.vercel.app`)

Alternativ kannst du `backend/render.yaml` als Blueprint nutzen.

## 2) Frontend auf Vercel deployen

1. Vercel öffnen: https://vercel.com
2. Repo importieren.
3. Als Root Directory **`frontend`** setzen.
4. In den Environment Variables setzen:
   - `VITE_API_URL` = deine Render Backend URL, z. B. `https://example-fastapi-backend.onrender.com`
5. Deploy ausführen.

## 3) Lokal testen

### Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Dann sollte das Frontend unter `http://localhost:5173` laufen und mit dem lokalen Backend auf `http://localhost:8000` sprechen.

## API Endpoints
- `GET /health`
- `GET /api/message`

## Alte statische Demo

Die alte Ein-Datei-Demo liegt weiterhin als `index.html` im Repo-Root, wird aber für das neue Setup nicht mehr verwendet.
