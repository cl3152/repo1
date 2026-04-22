import { useEffect, useState } from 'react'

const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export default function App() {
  const [message, setMessage] = useState('Lade API...')

  useEffect(() => {
    fetch(`${apiBase}/api/message`)
      .then((res) => {
        if (!res.ok) throw new Error('API Fehler')
        return res.json()
      })
      .then((data) => setMessage(data.message || 'Keine Nachricht'))
      .catch(() => setMessage('Backend nicht erreichbar. Prüfe VITE_API_URL.'))
  }, [])

  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: 720, margin: '40px auto', padding: 16 }}>
      <h1>React Frontend (Vercel)</h1>
      <p>Backend-URL: <code>{apiBase}</code></p>
      <p><strong>Antwort aus FastAPI:</strong> {message}</p>
    </main>
  )
}
