# Team opportunity board

`opportunities.html` is the team-research view linked as **Teams** from the profile and Fit Lab. It is an initial five-team shortlist, not a league-wide ranking or a list of verified vacancies.

## Update the data

Edit `opportunities-data.json`. Each team keeps its research priority, factual roster signal, separate fit rationale, next action, publication date, checked date, source URLs, selected perimeter names and roster-stage position counts. The page reads this file and supports search, priority/role filters, sorting, source expansion, copying a research brief and CSV export. It does not refresh automatically or send messages.

Position counts are counted from the entire dated source table and are not a minutes/depth chart. Player lists in expanded cards are selected names and need not exhaust the source roster. Long Island's complete roster was an embedded image, so its position count is intentionally unfilled. Never replace missing values with zero. Do not infer a vacancy from training-camp cuts or total roster size.

## Initial evidence (checked November 8, 2026)

- Wisconsin: official November 6 opening roster. 12 players; listed positions reconcile to 5 G, 6 F, 1 C.
- Long Island: official November 7 opening announcement identifies two guard waivers and named incoming guards. Complete position count not extracted.
- Cleveland: official October 25 camp roster only. 17 players; 10 G, 5 F, 1 F/C, 1 C. Final roster still needs checking before an inquiry is prioritized.
- Maine: official November 3 opening roster. 13 players; 7 G, 4 F, 2 C.
- San Diego: official October 26 camp roster includes Jordan L*thon. 18 players; 10 G, 1 G/F, 6 F, 1 C. RealGM subsequently reports a November 3 waiver; that secondary report does not establish current rights or availability. San Diego is a clarification/reconnection task rather than a new vacancy lead.

All source URLs are in the data file and rendered in each card. No personal recruiting contacts, warm introductions, team interest, or verified vacancies have been supplied. Directory links are only aids to identifying an appropriate recipient. No generic ticket-sales inbox is presented as a player-recruiting contact.

## Validation

JavaScript syntax, shared navigation across three pages, local assets and cross-page anchors, unique IDs, five team records and position-count arithmetic checked. Browser review at 390 px and 320 px confirmed compact navigation, stacked cards, priority filtering, expanded source/roster context and empty-search feedback. External playback and roster changes after the checked date are outside these checks. The temporary phone QA page is not part of the repository change.
