# Content Design Agent

A standalone, LLM-agnostic content design tool grounded in any style guide.

## What it does

- **Q&A** — ask what a style guide covers or how it's structured
- **Style lookup** — find specific rules on tone, labels, color, typography
- **Brainstorm** — generate on-guide copy options for any UX problem
- **Screenshot critique** — upload a UI screenshot and get violations flagged

Ships pre-loaded with the Apple Human Interface Guidelines — iOS.

---

## Files

```
content-design-agent/
├── index.html          ← the entire app (open this in a browser)
├── README.md           ← this file
└── guides/
    └── apple-hig.md    ← Apple HIG content (swap in any guide)
```

---

## Running locally

Just open `index.html` in any browser. No server required — but if you want
the `guides/apple-hig.md` file to load automatically, serve it with a simple
local server:

```bash
# Python (built into macOS/Linux)
python3 -m http.server 8080
# then open http://localhost:8080

# Node (if you have it)
npx serve .
```

Without a server, the app falls back to a built-in copy of the HIG — everything
still works.

---

## Deploying (so you can share a URL)

### GitHub Pages (free, 5 minutes)
1. Create a new GitHub repository
2. Upload all files (keep the `guides/` folder)
3. Go to Settings → Pages → Source: main branch / root
4. Your URL: `https://[your-username].github.io/[repo-name]`

### Netlify (free, 2 minutes)
1. Go to netlify.com → "Deploy manually"
2. Drag the entire `content-design-agent/` folder onto the page
3. Netlify gives you a URL instantly

### Vercel (free)
```bash
npm i -g vercel
cd content-design-agent
vercel
```

---

## Adding your API key

1. Open the app
2. Click the **Settings** icon (top right)
3. Pick your LLM provider
4. Paste your API key
5. Save

Keys are stored in memory for the session only — never persisted or sent
anywhere except the provider's API.

### Where to get API keys
- **Anthropic:** console.anthropic.com → API Keys
- **OpenAI:** platform.openai.com → API Keys
- **Google Gemini:** aistudio.google.com → Get API Key
- **Mistral:** console.mistral.ai → API Keys

---

## Swapping the style guide

### Option 1 — Use the UI
Click the guide pill in the top bar and load a guide by URL, file upload, or
pasted text.

### Option 2 — Replace the .md file
Drop a new markdown file into `guides/` and update the "Apple HIG — iOS"
sidebar button to point to it, or just use the UI to load it.

### Option 3 — Add more guides
Put multiple `.md` files in `guides/` — the UI's "Load another guide" option
lets users switch between them at any time.

---

## Supported providers

| Provider | Model | Notes |
|---|---|---|
| Anthropic | claude-sonnet-4-6 | Full vision support |
| OpenAI | gpt-4o | Full vision support |
| Google Gemini | gemini-1.5-pro | Full vision support |
| Mistral | mistral-large-latest | Text only (no screenshot critique) |
