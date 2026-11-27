# Dependency security update (2026-11-07)

The site remains a static Astro build. There is no server adapter, server island,
request-time image endpoint, or remote image allowlist. This limits the deployed
server attack surface, but does not make vulnerable build/development packages
safe to keep.

Astro, MDX, Sitemap, Sharp and Astro check were updated together. The migration
uses Node 24, preserves HTML-aware whitespace with `compressHTML: true`, and
imports the content schema's Zod instance from `astro/zod`. Content, routes,
formatting rules and required checks are unchanged.

## Scoped minimatch override

GHSA-g3hv-75wg-m249 affects minimatch 7 through 11.0.0. The current ESLint 10.14.0,
`@eslint/config-array` 0.23.5 and TypeScript-ESLint 8.72.1 still depend on minimatch
10. The overrides target those consumers, rather than forcing a new major across
unrelated dependency paths.

Minimatch 11 removes regex/AST APIs and changes some glob semantics. The installed
consumers were checked: ESLint and config-array use `Minimatch`, `pattern` and
`match`; typescript-estree uses the `minimatch` function. They do not use the
removed `makeRe` or `AST` APIs. The 34 files selected by the repository's lint
command and their diagnostics were identical before and after the override.

Remove these overrides when the upstream consumers natively adopt a fixed
version, then rerun a clean install, format check, lint, Astro check/build and
security audit. Do not replace the overrides with an ignored advisory.

## Migration verification

- A clean npm install from the committed lockfile, formatting, lint, Astro type
  checks and the complete static build are required before merging.
- The baseline and migrated build have the same 11 HTML paths, text chunks,
  headings, anchor IDs, link destinations and SEO metadata. Image sources,
  dimensions, alt text and loading attributes are unchanged; compiler-generated
  CSS scope identifiers differ. The robots and sitemap outputs are unchanged.
- Browser visual/interaction validation is still required. Artifact comparisons
  do not prove theme toggling or client-side navigation behaves identically.
- npm audit describes the npm dependency graph and its current advisory data;
  it does not establish deployment state or the status of GitHub security alerts.

References:

- https://docs.astro.build/en/guides/upgrade-to/v6/
- https://docs.astro.build/en/guides/upgrade-to/v7/
- https://github.com/advisories/GHSA-g3hv-75wg-m249
- https://github.com/isaacs/minimatch/compare/v10.2.6...v11.0.1
