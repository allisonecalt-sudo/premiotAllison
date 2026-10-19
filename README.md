# premiotAllison (v1) — ARCHIVED, forwards to v2

מחשבון פרמיות כללית — הגרסה הישנה. הכתובת מעבירה למחשבון החדש.

## What this is

The first premiot calculator (about 15 OTs used it). Since 2026-10-19 its address
only forwards to v2: https://allisonecalt-sudo.github.io/premiotAllison-v2/

## Why

v1 and v2 gave different numbers for the same inputs. v2 is the one checked
against Clalit's own premia pages (8 clinic-months to ₪0.15); v1 never got the
rounding fix, had no Friday hours, and its holiday calendar ended Dec 2027.
Two live copies drift apart, so v1 was archived and its link points at v2.
Allison's call, 2026-10-19 ("should we archive v1" → "Ok").

## What's decided / built

- `index.html` = a forwarding page (instant redirect + a link as fallback).
- Saved data carries over by itself: same site, and v2 reads v1's saved keys
  (`premiot_data`, `premiot_hours`) on first load. Tested live 2026-10-19.
- The old app is kept, pullable: `git checkout v1-final`.
- Keep this repo's GitHub Pages ON — the OTs' saved links and home-screen
  icons point here.

## Next

Nothing. All changes go to v2: https://github.com/allisonecalt-sudo/premiotAllison-v2
