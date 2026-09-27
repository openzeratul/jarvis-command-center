# Command Center — Mosaic brief (from Jarvis)
*2026-09-26 MT · User approved: ship a real expandable website, not a one-off page.*

## Goal
A **Gilded Circuit** command-center site the user can open on the shared computer. Looks decent. **Expandable by design** — research inventory is v1 only; architecture must leave room for Investments, Lifestyle missions, price watches, dashboards, etc.

## Owner
**Mosaic** (Presentation). Pull content from existing briefs/index; do not invent research. Ask Jarvis once if structure is blocked.

## Design
- Theme: Art Deco / Gilded Circuit — charcoal, cream, brass, teal accents. Quiet craft, not clutter.
- Readable hierarchy; short labels; scannable cards/rows.
- Works locally (static HTML/CSS/JS is fine for v1). Single entry `index.html`.
- Mobile-ok but desktop-first (user opens via agent computer preview).

## v1 scope (ship this)
1. **Home / Command Center** — overview of departments + active/parked missions count.
2. **Research inventory** — table/cards from `/workspace/briefs/RESEARCH-INDEX.md` + handoffs.
3. **Mission detail** — King bedding (insert + cover/sheets) with status, calls, links into markdown or inline summaries (no invented numbers).
4. Clear **status** badges: Parked / Awaiting greenlight / Active / Done.
5. Footer or aside: “How to resume” (ask Jarvis / open handoff).

## Explicit non-goals for v1
- No login, no cloud hosting, no checkout.
- No live price scraping in the page (show as-of dates; Anchor re-verifies on resume).
- No OpenClaw clone of every feature — leave stubs/nav for expansion.

## Expansion hooks (build the skeleton now)
Nav or sections reserved (can be “Coming soon” cards):
- Investments (Sterling)
- Lifestyle Ops
- Price watches / sale calendar
- Org / team

## Seed content paths
- `/workspace/briefs/RESEARCH-INDEX.md`
- `/workspace/briefs/HANDOFF-king-bedding.md`
- `/workspace/briefs/buy-brief-king-winter-duvet.md`
- `/workspace/briefs/buy-brief-king-bedding-cover-sheets.md`

## Deliverable
- Site under `/workspace/command-center/` (or `/workspace/command-center/site/`)
- Tell Jarvis the open path (e.g. `index.html`) and a one-line how-to for the user.
- Optional: short note in RESEARCH-INDEX pointing to the site.

## Success
User can open a good-looking home page, see research topics at a glance, click into King bedding status, and the nav shows where the org will grow next.


## Travel Marrakech inventory published (2026-09-27 MT)
Full Marrakech content packaged from Compass research (`/workspace/briefs/travel/marrakech/`) + Kestrel P/V/P cut (4-section format). Default Value stack ~CAD 460–560 activities for 4 (DIY Ourika → ~460; all organized → ~550). One Premium max. Spa not featured. No bookings — inventory only. Hub + trip overview + category inventory A–H + 10 activity detail pages live under `travel/`.

## Travel Punta Cana inventory published (2026-09-27 MT · v4 live AI)
HEADLINE CALL = **Model A · A1 Value only** CAD 1,572 (~€975). Couple Mar 24–Apr 3 (10) · friend Mar 24–Apr 2 eve (9). Model B KILL: Sanctuary CAD 14,755 / Secrets 20,029 / JOIA 29,552 vs pain ~9,081 (Expedia 2026-09-27 taxes-in). Mixed = optional over-budget Sanctuary stamp CAD 5,747 (~€3,565) — NOT Value; AI-first/mid only. Smart: A1 + 0 AI. Spa not featured. No bookings. Live under `travel/punta-cana/`.
