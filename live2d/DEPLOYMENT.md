# Live2D resource layout

This directory is the published Live2D bundle for Giraffish's blog.

- Authoritative published files: `giraffishh/image-hosting`, `live2d/`.
- SUSTech mirror: `giraffish/image-hosting`, same directory and commit.
- Original source: `giraffishh/live2d-widget` at `7021eff494733dfa264c3cd5ab4ca44e29fcef00`.
- `model/` and `model_list.json`: existing GitHub models, preserved without changes.
- Runtime files were compared to the production OSS `live2d-widget/` directory on 2026-10-31. The production Cubism Core differs from the old GitHub copy and is preserved here.
- `autoload.js`: portable entry point; all dependencies use the directory of the loaded script, with ordered runtime loading.
- `waifu-tips.js` already includes PixiJS. Do not add a separate PixiJS 7 script to the blog.
- `src/`, build configuration and upstream licenses are retained. Model licensing information remains in the model directories.
- `asset-manifest.json`: provenance and SHA-256 hashes for auditing the initial migration.

The original GitHub repository and OSS objects are retained as historical backups. They are not the update target for the blog's new bundle.

## Updating

Update this bundle in GitHub, then verify that the SUSTech mirror has the same commit before updating the blog's pinned resource revision. Verify the runtime scripts, CSS, model list and every referenced model asset. Do not rewrite immutable revision URLs in place.

The Hitokoto tool calls a dynamic quotation API; that is not a static Live2D asset.
