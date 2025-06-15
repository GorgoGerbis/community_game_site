# Hell Divers 2 Community Tier List

a community-driven tier list site for hell divers 2 weapons, equipment, and stratagems. no login required - just browse rankings, compare items, and build loadouts.

## what it does

- **tier lists**: s-f rankings for weapons, armor, stratagems, etc.
- **multiple perspectives**: toggle between community rankings and content creator opinions
- **item comparisons**: side-by-side stat comparisons 
- **loadout builder**: create and share complete builds via url
- **recommendations**: "players who use X also use Y" suggestions

## tech stack

**backend**: fastapi + python, sqlite for now (might upgrade to postgres later)  
**frontend**: react + typescript, tailwind for styling, vite for dev server

## setup

```bash
# clone and cd into project
git clone <repo-url>
cd community_game_site

# backend setup
cd backend
python -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on windows
pip install -r requirements.txt

# frontend setup  
cd ../frontend
npm install

# run both servers
# backend (from backend/ dir)
uvicorn main:app --reload

# frontend (from frontend/ dir)
npm run dev
```

## current status

🚧 **in development** - basic project structure is set up, working on core tier list functionality

### what's working
- project setup and structure
- .env and notes/ properly gitignored

### what's next
- backend api endpoints for items and tier lists
- frontend components for tier list display
- basic hell divers 2 item database

## contributing

this is mainly a portfolio project but feel free to open issues if you spot bugs or have suggestions for the hell divers 2 data.

## why this exists

wanted to build something useful for the hell divers 2 community while showcasing full-stack development skills. the game has tons of weapons and equipment but finding good tier lists and loadout recommendations is scattered across different sites.

---

*managed democracy intensifies* 🦅