# Production readiness and architecture audit

Date: 7 September 2026. Audited package: `rk-designsystem@1.4.1`.

Snapshot: `de23d5b2d8022bc0d78013cdc30769aa4f4a83be`, branch `preview/local-all`, two commits ahead of the local `origin/main` reference. The worktree was clean before this report. This reviews the entire current snapshot, not a PR diff. No component, configuration, or published context files were changed.

Reference repositories: `/Users/daniel/Desktop/designsystemet` and `/Users/daniel/Desktop/designsystem-docs`. The upstream checkout's React package declares 1.20.0; RK's installed and locked Digdir packages are 1.21.0. Upstream comparisons concern these local sources, not an assertion about the newest online release. The portal was inspected as a real consumer; its extraction is not the focus of this audit.

## Assessment

The architecture is sound at its core: a small RK facade over Digdir, explicit exports, preserved ESM modules, externalized dependencies, CSS modules, and a tested npm package. It does not need an upstream-sized monorepo or a wholesale rewrite.

I would not give an unconditional production sign-off yet. The important remaining work is to finish the consumer contract and make release verification consistent. Several problems are observable today: the recommended Next.js setup omits component CSS; server consumers need wrappers for missing flat exports; DateInput's documented validation differs from its implementation; generated examples contain invalid TypeScript; Header can produce different server and initial browser markup; and Donor's payment label fails a contrast rule that its stories explicitly suppress.

Priority terminology used below: **P1** should be resolved before the affected production use case launches. **P2** should be resolved before the public API is frozen, or explicitly accepted with a documented constraint. Architectural risks are distinguished from reproduced defects; not every structural improvement is a release blocker.

## Architecture and standards findings

### A1 — P1: Release verification does not enforce the full production gate

The main CI workflow runs dependency auditing, lint, token checking, type checking, stories, library build, packaging smoke tests, Storybook, generated-artifact freshness, and visual regression. The release workflow runs only lint, type checking, stories, and the library build. It neither requires a successful full CI result for the selected commit nor repeats the omitted gates. The existing-tag publishing path validates the tag's shape and package version, but does not check that its commit belongs to approved `main` history.

Consequently, a commit that fails packaging, token validation, visual regression, or the security audit can still satisfy the checks in the publishing workflow. This conflicts with TESTING.md's requirement to release only from green `main`. This is a workflow enforcement gap, not evidence that a bad version has already been published.

Evidence: [CI gates](/Users/daniel/Desktop/Jobb/RK/DesignSystem/.github/workflows/ci.yml:43), [release gates](/Users/daniel/Desktop/Jobb/RK/DesignSystem/.github/workflows/release.yml:64), [tag verification](/Users/daniel/Desktop/Jobb/RK/DesignSystem/.github/workflows/release.yml:175), [republish checks](/Users/daniel/Desktop/Jobb/RK/DesignSystem/.github/workflows/release.yml:227). Manual dispatch uses the branch or tag selected for the dispatch, as described in [GitHub's workflow event documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_dispatch).

Recommendation: share the quality gate between PR and publishing workflows, or require its successful result for the exact source commit. Verify release ancestry and main-only release policy explicitly. Validate the release tarball and publish that same artifact, avoiding a separate unverified reconstruction where practical.

Related automation concern: the token-bump workflow intentionally creates PRs with `GITHUB_TOKEN`, so normal PR CI does not run. It reports its own narrower test results in the PR body, and commits only package files after generating context. Ensure the generated changes are included when token types change, and that the actual token PR commit receives enforceable quality checks. Repository protection settings were not inspected, so this report does not assert how GitHub currently permits or blocks those merges. [Token PR workflow](/Users/daniel/Desktop/Jobb/RK/DesignSystem/.github/workflows/token-bump.yml:90).

### A2 — P1 for Next.js consumers: The recommended stylesheet setup is incomplete

The recommended Next.js layout imports only Digdir CSS and token CSS. RK's custom stylesheet is a separate emitted asset, so those imports do not style Header, Footer, DateInput, DatePicker, Carousel, Donor, or GraphicElement. Component JavaScript imports generated class-name mappings; it does not load the complete CSS asset itself.

The fallback effects add partial styles after mounting, concealing the omission in simple client demos. They cannot provide the correct server-rendered first paint, and they do not reproduce every responsive rule. The new portal already compensates by importing the complete RK stylesheet.

Evidence: [Next.js quick start](/Users/daniel/Desktop/Jobb/RK/DesignSystem/README.md:80), [complete stylesheet construction](/Users/daniel/Desktop/Jobb/RK/DesignSystem/scripts/build-styles.mjs:25), [Header fallback](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/Header/index.tsx:163), [portal layout](/Users/daniel/Desktop/designsystem-docs/services/next/src/app/layout.tsx:17).

Recommendation: document a complete CSS import for every supported framework and test the exact example against the packed package. An additive font-free complete stylesheet would suit Next's font loader and applications hosting fonts themselves. The existing combined import includes a Google Fonts request and global body font rules; make that behavior explicit rather than forcing it on every integration.

### A3 — P1 for direct server-component composition: Missing flat compound exports

RK exposes `Details`, `Table`, `Tabs`, `Dialog`, and other compound families without many of their individually named members. Client code can use `Details.Summary`; a server component cannot use that property access in the same way across the client boundary. The actual portal has a compatibility wrapper solely to export `DetailsSummary` and `DetailsContent`.

This is an existing upstream solution that RK has dropped at the facade boundary. Comparing installed upstream runtime exports found 35 flat names missing across component families RK already exposes. Examples include `DetailsSummary`, `TableRow`, `TabsTab`, `DialogTrigger`, `FieldsetLegend`, and `SearchInput`.

Evidence: [RK export surface](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/index.ts:71), [portal workaround](/Users/daniel/Desktop/designsystem-docs/services/next/src/components/partials/Details.tsx:1), [upstream Details exports](/Users/daniel/Desktop/designsystemet/packages/react/src/components/details/index.ts:39).

Recommendation: add flat component and prop-type exports while retaining compound APIs. Include their classification in the inventory and a small real Next App Router consumer test. A `use client` banner is valuable, but checking the banner alone does not test composition across the server boundary.

### A4 — P2, resolve before promising fixed visual releases: Token CSS and embedded types can diverge

The published dependency allows `rk-design-tokens: ^1.0.49`. Runtime CSS resolves the consumer's installed token package, while the declaration build embeds the exact color definitions installed when RK was built. A subsequent fresh installation or consumer lockfile update can therefore acquire new token CSS without an RK release, while RK's embedded type union remains unchanged.

Existing consumer lockfiles do not change spontaneously. The risk concerns new dependency resolution, and undermines the stated assumption that reviewed token PRs and RK visual tests control consumers' visual changes.

Evidence: [token dependency range](/Users/daniel/Desktop/Jobb/RK/DesignSystem/package.json:117), [consumer-resolved CSS](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/styles.css:20), [embedded type snapshot](/Users/daniel/Desktop/Jobb/RK/DesignSystem/scripts/embed-color-types.mjs:19).

Recommendation: pin the reviewed token dependency for each RK release and update that exact version through the existing PR workflow, or explicitly define and test a supported token range. Decide the policy before production adoption. Keep the existing human-usable token/context commands.

### A5 — P2: Custom components maintain two separate style implementations

Seven custom components ship both CSS modules and manually constructed CSS strings. Their effects inject fallback style tags whenever the fixed style ID is absent, including when the real stylesheet was already imported. Header and Footer contain especially large duplicated blocks.

This increases JavaScript payload, creates document-level side effects, and requires visual changes to be maintained in two implementations. Prepending the fallback prevents a previously addressed ordering problem, but does not remove the duplicated contract. Existing injection tests are useful mitigation, not a single source of truth.

Evidence: [Header fallback definition](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/Header/index.tsx:899), [Footer fallback definition](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/Footer/index.tsx:644), [injection](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/DatePicker/index.tsx:70).

Recommendation: establish one supported CSS delivery path and remove fallback copies in a documented compatibility change. If an interim fallback is needed, generate it from the stylesheet. This is a concrete duplicated-code maintenance issue; thin upstream reexports are intentional and should stay thin.

### A6 — P2: Header styling and behavior escape the component boundary

Header's CSS emits `.ds-popover, .ds-dropdown { z-index: 20000 !important; }`. Because the complete stylesheet includes all component CSS, importing RK styles applies this override to unrelated popovers and dropdowns even when no Header is rendered.

Header also measures the first matching element using global selectors and writes geometry variables onto `documentElement`. It owns the document color-scheme attribute and imposes page identifiers such as `search/<query>`. Those choices make it harder to integrate with application routing/theme state or render independent instances.

Evidence: [global stacking override](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/Header/styles.module.css:18), [global measurement](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/Header/index.tsx:227), [document theme mutation](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/Header/index.tsx:386).

Recommendation: scope stacking styles to Header-owned elements, measure through an instance ref, and expose navigation/search/theme callbacks. Internally separate menu, search, and appearance behavior; retain a convenient Header composition as the public entrypoint.

### A7 — P2: The library language provider owns portal content and locale initialization

`LanguageProvider` imports the full portal translation dictionary and uses dynamic key lookup. Its only input is `children`, and it always starts in Norwegian. An English application cannot supply its locale for the first server render without a later client-side correction.

Measured against the fresh library build with esbuild, minification, dependencies external, and no emitted files:

| RK import | Minified RK JavaScript | gzip | Translation contribution |
| --- | ---: | ---: | ---: |
| Button | 242 B | 186 B | 0 |
| Header | 35,300 B | 10,772 B | 0 |
| LanguageProvider | 190,265 B | 61,494 B | 189,926 B |
| Header + LanguageProvider | 225,438 B | 72,087 B | approximately 189,927 B |

These are isolated RK module contributions, not total application bundles. Header alone does successfully tree-shake the large dictionary away. Using the language provider retains it.

Evidence: [provider import and initialization](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/context/LanguageContext.tsx:1), [portal prose in shared translations](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/translations/index.ts:37).

Recommendation: keep small component messages in the library, move portal prose to its owner, and support an initial/controlled locale with optional messages. This separation affects the shipped package directly even though the wider portal extraction is outside this audit's priority.

### A8 — P2: Custom public APIs do not consistently meet the repository's extensibility rules

README asks for native props, ref forwarding, and controlled/uncontrolled state. DateInput substantially supports those patterns, but Header, Footer, Carousel, Donor, and DatePicker generally lack normal root HTML props and refs. Donor has internal amount/frequency state with callbacks, but no controlled state or pending/disabled payment state. DatePicker has a controlled selection prop without a corresponding uncontrolled selected default.

These are API design limitations, not proof that every existing use fails. They matter before production adoption because improving them later affects many consumers. Evidence: [component standards](/Users/daniel/Desktop/Jobb/RK/DesignSystem/README.md:331), [DatePicker props](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/DatePicker/index.tsx:18), [Donor props](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/Donor/index.tsx:15).

Recommendation: define a small consistent custom-component contract for root refs/native attributes, controlled/default values, and state callbacks. For payment UI, explicitly support disabled/pending submission. Keep demo service data and placeholder actions in stories or make their configuration clear: Footer currently supplies placeholder links/organization data and an optional newsletter handler. [Footer defaults](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/Footer/index.tsx:120).

## Behavior and published-contract findings

### C1 — P1: Donor suppresses a confirmed payment-label contrast failure

The default Vipps button displays the ordinary action text "Gi med" in white on `#ff5b24`. Its story configuration excludes the entire button and its descendants from the contrast rule. The comments say to see TESTING.md, but that file's accepted-risk list does not contain this exemption.

To verify the actual failure, the exclusion was removed only in the isolated exact-lock copy and the Default story was run. Axe failed on the label: contrast **3.1:1**, font size **18.5px / 13.9pt**, bold, expected **4.5:1**. The ordinary label is below the large-bold-text cutoff; it is separate from the Vipps logo. The source comment's approximate 2.9:1 ratio is inaccurate, but the confirmed failure remains.

Evidence: [excluded selector](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/Donor/Donor.stories.tsx:11), [button exception marker](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/Donor/index.tsx:310), [label typography and colors](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/Donor/styles.module.css:127). The normal-text and large-text thresholds and the scope of the logotype exception are explained by [W3C's contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

Recommendation: use an accessible approved payment-button treatment and remove the exemption for the ordinary action label. If a residual exception is accepted, record its exact scope, rationale, owner, and follow-up in the test policy. A green suite with an explicit exclusion does not establish conformance for the excluded control.

### C2 — P1 for form consumers following the documentation: DateInput does not deliver its promised validation

README promises a built-in blur validation message, `showValidationMessage`, and `minDate`/`maxDate` with a 1900–2100 default. Those props and behaviors do not exist. The implementation reports calendar validity through an optional callback; visible errors and `aria-invalid` depend on the consumer supplying `error`. Native `pattern` only validates the string's shape.

Browser reproduction: render `<DateInput label="Date" />`, enter `31022024`, then blur. The field displays `31.02.2024`, returns `true` from native `checkValidity()`, has `aria-invalid="false"`, and displays no error.

Evidence: [published validation promise](/Users/daniel/Desktop/Jobb/RK/DesignSystem/README.md:253), [actual props](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/DateInput/index.tsx:16), [input validity attributes](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/DateInput/index.tsx:297).

Recommendation: either implement the promised contract or explicitly document that calendar validation and errors are owned by the consuming form, with a working integration example. Do not advertise bounds or automatic error UI that the component does not provide.

### C3 — P2: DateInput leaves parent validity stale during partial editing

The callback documentation promises `null` while a date is incomplete. The input handler only reports at zero or eight digits. Entering `29.02.2024` reports valid; deleting the final digit leaves `29.02.202` while the parent's most recent callback still says valid, until blur.

Evidence: [callback promise](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/DateInput/index.tsx:54), [callback implementation](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/DateInput/index.tsx:214). Reproduced in Chromium.

Recommendation: make emitted validity match the current draft and explicitly define how controlled value updates affect it. A smaller editing issue also remains: deleting selected day digits reflows the remaining digits and moves the caret to the end; the caret calculation uses total digit count rather than the original selection.

### C4 — P2: Header can produce a server/client hydration mismatch

Header initializes its theme to light on the server, but reads the document/OS theme during the first browser render. The theme controls the secondary logo source and switch state.

Reproduction with both logo variants: server rendering emits `/light.svg` and an unchecked switch; an initial browser render under `html[data-color-scheme="dark"]` emits `/dark.svg` and a checked switch. This is a mismatch in the recommended SSR use case, even though the effect bodies themselves guard browser APIs.

Evidence: [theme initialization](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/Header/index.tsx:147), [theme-dependent logo](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/Header/index.tsx:534).

Recommendation: accept an initial/controlled scheme that can be shared between server and browser, or synchronize browser preferences after the matching initial render. Add a hydration test for dark mode.

### C5 — P2, intentional behavior requiring a production contract decision: Donor reports two different effective amounts

Entering `500`, clearing the custom field, then clicking Vipps produces an `onAmountChange` history of `[[500, "monthly"]]`, but `onVippsClick` receives `[345, "monthly"]`. The visible impact text also shows 345. Clearing or invalidating custom input falls back to the preset without emitting the effective amount change.

The current stories deliberately assert this behavior. It is not a regression against those stories, and there is no evidence here of an actual incorrect payment. It is an unsafe integration assumption for a consuming form that mirrors the amount through `onAmountChange`; the Avtalegiro callback supplies no amount at all.

Evidence: [effective amount](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/Donor/index.tsx:184), [change callback](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/Donor/index.tsx:198), [payment callback](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/Donor/index.tsx:218), [current contract test](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/Donor/Donor.stories.tsx:231).

Recommendation: define one effective donation value and communicate every transition consistently. Decide explicitly whether an invalid nonempty custom draft blocks submission or falls back. Resolve this before integrating real payment flows.

### C6 — P2: Generated guide examples are not validated as code

The guide contains imports such as `import { Chip, Chip.Button, Chip.Checkbox, Chip.Radio } from 'rk-designsystem'`, which is invalid JavaScript syntax. The same generator mistake affects List, Details, and Suggestion. Callback formatting also splits generic arguments with a regular expression: the checked-in DateInput example contains `(event, Element>, formattedValue) => {}`. Parsing the generated component examples with TypeScript confirmed syntax errors.

The freshness gate only proves that generated files match the generator's output. It does not prove the output is correct. The guide also retains positive examples of `data-color="accent"`, although the embedded token types reject that scope. The manifest's spacing diagnostic triggers on explanatory statements saying not to use `--ds-spacing-*`, so it cannot distinguish good warnings from incorrect recommendations.

Evidence: [invalid Chip example](/Users/daniel/Desktop/Jobb/RK/DesignSystem/AI_DESIGN_SYSTEM_GUIDE.md:688), [invalid Suggestion example](/Users/daniel/Desktop/Jobb/RK/DesignSystem/AI_DESIGN_SYSTEM_GUIDE.md:1015), [import generation](/Users/daniel/Desktop/Jobb/RK/DesignSystem/update-ai-guide-components.mjs:161), [callback generation](/Users/daniel/Desktop/Jobb/RK/DesignSystem/update-ai-guide-components.mjs:100), [diagnostic matcher](/Users/daniel/Desktop/Jobb/RK/DesignSystem/generate-ai-context-manifest.mjs:98).

Recommendation: preserve the existing generator commands and add parsing/type checking of actual runnable examples against the public package. Import only valid exported identifiers; use member access inside JSX. Distinguish runnable examples from illustrative pseudocode. Correct terminology in both MDX and the human-readable guide. This is additive context-pipeline work consistent with AGENTS.md and the publish-rk-context skill.

The inventory validation itself is useful: it covers 68 public runtime exports, including 46 primary components and 62 component names counting parts. Metadata documents 60 names; CardBlock and FieldCounter are explicitly warned about but omitted. Make those omissions machine-readable or document the parts rather than relying solely on build-log warnings.

## Testing and operational follow-through

The test system has substance: browser-executed stories, meaningful interaction assertions, axe failures, three theme projects, packed-consumer checks, and 30 committed visual snapshots covering 15 stories in light/dark mode. These should be retained.

The following limits should be made explicit before sign-off:

- The functional suite runs Chromium. Visual coverage uses a 1280×800 viewport, also Chromium. Add a small risk-based mobile/WebKit/Firefox set for custom navigation, dates, overlays, and Carousel rather than multiplying every story indiscriminately. [Vitest browser projects](/Users/daniel/Desktop/Jobb/RK/DesignSystem/vitest.config.ts:16), [visual configuration](/Users/daniel/Desktop/Jobb/RK/DesignSystem/playwright.visual.config.ts:22).
- Consumer tests currently build Vite apps. Add actual server rendering/hydration and App Router composition cases for the problems found here.
- The type smoke script filters several upstream diagnostics, including missing exports under NodeNext, and can swallow command failures with empty stdout before printing success. Its green status is not evidence of an entirely clean strict NodeNext compilation. Preserve narrowly justified exceptions, report them honestly, and fail on unexpected compiler/process failures. [Type-check filter](/Users/daniel/Desktop/Jobb/RK/DesignSystem/scripts/packaging-smoke.mjs:76).
- The `--omit=dev` security check excludes Digdir React/CSS and react-dom as installed in this repository, because the lockfile marks them as development dependencies. These are nevertheless runtime peers for consumers. Audit a packed consumer's production dependency graph as well as the build toolchain, so the security gate covers what applications actually install.
- `Suggestion` remains an alias of upstream `EXPERIMENTAL_Suggestion`. The source documents this and the canary is useful, but the public stability policy should preserve that distinction. A broad compatible-version range and a weekly canary do not guarantee experimental API stability. [Suggestion export](/Users/daniel/Desktop/Jobb/RK/DesignSystem/src/components/Suggestion/index.tsx:1).
- README's contribution setup uses `pnpm i`, while the committed reproducibility artifact and CI use `package-lock.json`/`npm ci`. Align them. The installed local dependencies in this audit were older than the lockfile, which materially changed generated output. [Contributor setup](/Users/daniel/Desktop/Jobb/RK/DesignSystem/README.md:261).
- README recommends `*.test.tsx`, but the unit project's include pattern is only `src/**/*.test.ts`. There are no existing standalone `*.test.tsx` tests being silently skipped in this snapshot; this is a trap for future contributors. [Unit discovery](/Users/daniel/Desktop/Jobb/RK/DesignSystem/vitest.config.ts:45).
- End the documented pre-production exception allowing breaking changes in minor releases at an explicit adoption milestone. Assign ownership of the public contract, accepted accessibility exceptions, and deprecation/migration decisions. TESTING.md already describes rollback by deprecation plus a patch; retain that operational guidance.

## Proportionate target structure

Keep one publishable library. Preserve the current component folders and colocated stories while strengthening ownership boundaries:

```text
src/
  index.ts                         explicit public values and types
  component-inventory.json         classification and stability metadata
  components/
    Button/, Details/, ...         thin upstream facade
    Header/, DateInput/, ...       RK components + one CSS source + stories
  internal/
    locale/                        component messages and locale state
    hooks/                         shared behavior only where justified
  styles/                          complete + font-free public entrypoints
scripts/                           build, package, context generation/validation
tests/
  consumers/                       packed Vite + Next/SSR fixtures
  visual/                          focused theme/viewport regressions
.storybook/                        component documentation and interaction tests
```

The important dependency rule is that the library runtime cannot depend on portal pages, portal prose, story helpers, or Storybook. The portal consumes public package exports and published documentation artifacts. There is no need to rename every existing component file or create separate React/CSS packages to establish that boundary.

## Suggested sequence

1. Finish the launch contracts: accessible Donor action text, complete stylesheet instructions, flat compound exports, accurate DateInput validation, valid generated examples, and a shared release gate tied to the intended source commit.
2. Set token-version and semver policy; resolve Header hydration and Donor effective-value semantics for the applications using them. Record accessibility exceptions with owners and evidence.
3. Remove duplicated style delivery, scope Header side effects, separate component localization from portal content, and standardize custom props/refs/state APIs before they become expensive to change.
4. Keep the existing story coverage and add the small consumer/SSR/browser cases exposed by this audit. Treat failing or flaky tests as evidence to investigate, not as a reason to add blanket retries.

## Verification record

| Check | Result and scope |
| --- | --- |
| Lint, TypeScript, token checker | Passed on both the original and clean exact-lock installations; token checker covered 151 files and 410 defined tokens with zero exceptions. |
| Library build | Passed on both installations; the original packaging run produced a 65-file artifact, approximately 129.8 KB compressed / 477.6 KB unpacked. |
| Packaging smoke | Passed with React 19 and React 18.3: complete CSS, computed Button styles, published declarations under the script's filters, ESM entrypoint checks, and React 17 rejection. |
| Tree shaking | Packed Vite Button-only application: 402,468 bytes total JavaScript, no Donor/Carousel markers. Separate RK-only measurements are listed in A7. |
| Storybook build and artifact copies | Passed in an isolated source copy using the original installed dependencies. Guide, metadata, manifest, and changelog were copied to the output. |
| Exact-lock story/unit suite | **1,304 passed, zero failed, six expected conditional skips** across 154 files. Installed with `npm ci` in an isolated archive and run with the matching Playwright browser. |
| Donor contrast diagnostic | **Failed as expected after removing its exemption in a temporary copy**: the Default story reports 3.1:1 contrast on the 18.5px bold action label; 4.5:1 required. This diagnostic is separate from the passing unmodified suite. |
| Context freshness with exact lock | `metadata.json`, `AI_DESIGN_SYSTEM_GUIDE.md`, and `ai-context.manifest.json` all regenerate byte-identically to the checked-in files. This does not validate their examples; see C6. |
| Production dependency audit | `npm audit --omit=dev --audit-level=high`: zero advisories reported. Note the peer-dependency scope limitation above. |
| Full dependency audit | Three affected tooling packages: one high and two moderate; no critical findings. Details below. |

The full advisory check found `fast-uri@3.1.5` under the declaration-generation toolchain, `@humanfs/node@0.16.7` under ESLint, and `qs@6.15.2` under the development-only Digdir CLI/style-dictionary chain. All are marked `dev: true` in the lockfile. This is not evidence of a shipped browser vulnerability or demonstrated exploit in this repository. Review the available tooling updates: [fast-uri advisory](https://github.com/advisories/GHSA-f65p-4m7j-42xc), [humanfs advisory](https://github.com/advisories/GHSA-p498-v437-472g), [qs advisory](https://github.com/advisories/GHSA-4mjr-xmp4-gh2g).

The first full run on the existing, stale local installation had two Suggestion assertion failures; the focused rerun passed. The complete exact-lock run then passed, so those failures are not reported as a reproduced defect in the audited locked stack. Installed versions differed materially: for example local React was 19.2.0 versus locked 19.2.8, and Storybook was 10.4.6 versus locked 10.5.10. Initial regeneration also differed because local React types were older; exact-lock regeneration resolved that difference.

All temporary regeneration and behavioral probes were performed outside the repository's tracked source tree. This report is the only intentional repository addition.

Limitations: this is a code, package, workflow, and focused browser audit. It is not a manual screen-reader certification, a hosted penetration test, or verification of remote GitHub protection/npm account settings. Linux visual baselines were inspected but not compared against macOS rendering, because the repository explicitly documents platform-dependent font differences.
