# GW2 Owned Material Crafting Optimizer

Find Guild Wars 2 crafts that turn materials you already own into more gold than selling those materials directly. It also includes Research Note mode for crafts you can make and then salvage for expected Research Notes.

## GitHub Pages setup

1. Upload `index.html` to the repo root.
2. Keep the `data/` folder in the repo root.
3. In GitHub, enable Pages from the repo branch/root.

The app is a static single-page HTML tool. API keys are stored only in the user's browser IndexedDB.

## Optional repo data files

The app can auto-load these files from `data/` before falling back to live GW2 API/wiki scans:

- `data/gw2-recipes.json`
- `data/wiki-nested-variant-recipes.json`
- `data/research-salvageable-item-ids.json`
- `data/wiki-vendor-cache.json`
- `data/mystic-forge-recipes.json`

Use the export buttons inside the app to generate JSON files, then commit the useful ones back into the `data/` folder.
