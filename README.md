# OSH2U Ratings

An interactive, zero-build prototype for an independent Malaysian OSH trainer-rating platform.

## Run locally

Open `index.html` directly, or serve the folder with any static server:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Prototype features

- Searchable trainer register with 14 fictional specimen profiles
- Data-driven trainer rating reports and evidence pillars
- Rating actions and methodology pages
- Five-step trainer registration flow
- Employer request dialog
- Trainer workspace with eight tabs, profile-readiness guidance, interactive availability calendar, review-link flow and employer-request inbox
- Browser-local demo back office with CSV export
- Responsive light and dark themes
- English and Bahasa Malaysia toggle generated from the bilingual review sheet
- Sourced featured profile for Datuk Wira Ahmad Fakhrul Anuar bin Haji Ismail, clearly marked not yet rated
- Hash-based routing that works on GitHub Pages without rewrites

All names, ratings and evidence in this version are fictional. Browser submissions use `localStorage`; there is no production database, authentication, file upload or email integration yet.
