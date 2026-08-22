# Content Design Agent

A standalone, LLM-agnostic content design tool grounded in any style guide.

> **Disclaimer:** This is an independent experimental project. It is not affiliated with, endorsed by, or officially connected to Apple Inc. in any way. All reference material is synthesized from publicly available Apple documentation and product pages.

---

## What it does

- **Q&A** — ask what a style guide covers or how it's structured
- **Style lookup** — find specific rules on tone, labels, terminology, and capitalization
- **Brainstorm** — generate on-guide copy options for any UX problem
- **Screenshot critique** — upload a UI screenshot and get violations flagged

---

## Files

```
content-design-agent/
├── index.html              ← the entire app (open this in a browser)
├── prompts.js              ← agent prompts and behavior configuration
├── README.md               ← this file
├── DECISIONS.md            ← log of key project decisions and rationale
├── GOVERNANCE.md           ← ownership and contribution guidelines
├── PROJECT_STATE.md        ← current build state and open work
├── SYSTEM_PROMPTS.md       ← documented system prompt versions
└── guides/
    ├── apple-guidelines.md       ← Apple Style Guide: editorial rules, UI elements, interaction verbs
    ├── apple-terminology.md      ← Apple Style Guide: complete A–Z terminology dictionary
    ├── apple-homekit.md          ← HomeKit HIG: terminology, setup, naming, and Siri guidance
    ├── apple-privacy.md          ← Apple Privacy HIG: permissions, purpose strings, data protection
    └── apple-home-voice-tone.md  ← Voice and tone for Apple Home, HomePod, and Apple TV (incl. Marketing)
```

---

## Running locally

Open `index.html` in any browser. No server required — but to load the `guides/` files automatically, serve with a simple local server:

```bash
# Python (built into macOS/Linux)
python3 -m http.server 8080
# then open http://localhost:8080

# Node
npx serve .
```

Without a server, the app falls back to built-in content — everything still works.

---

## Deploying

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

Keys are stored in memory for the session only — never persisted or sent anywhere except the provider's API.

### Where to get API keys
- **Anthropic:** console.anthropic.com → API Keys
- **OpenAI:** platform.openai.com → API Keys
- **Google Gemini:** aistudio.google.com → Get API Key
- **Mistral:** console.mistral.ai → API Keys

---

## Swapping or adding guides

### Option 1 — Use the UI
Click the guide pill in the top bar and load a guide by URL, file upload, or pasted text.

### Option 2 — Replace a file
Drop a new markdown file into `guides/` and update the sidebar button in `index.html` to point to it.

### Option 3 — Add more guides
Put additional `.md` files in `guides/` — the UI's "Load another guide" option lets users switch between them at any time.

---

## Supported providers

| Provider | Model | Notes |
|---|---|---|
| Anthropic | claude-sonnet-4-6 | Full vision support |
| OpenAI | gpt-4o | Full vision support |
| Google Gemini | gemini-1.5-pro | Full vision support |
| Mistral | mistral-large-latest | Text only (no screenshot critique) |
