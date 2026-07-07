# Testplan — Røde Kors Designsystem

> Denne testplanen følger Norges Røde Kors' testpolicy, overordnede teststrategi og «Testing – prinsipper og praksis». Den beskriver hvordan testing er organisert for designsystemet (`rk-designsystem`).
>
> **Testhåndteringssystem:** Organisasjonens dokumenter beskriver Azure DevOps som verktøy. Dette produktet utvikles på **GitHub**, og inntil en eventuell overgang er GitHub vårt testhåndteringssystem: GitHub Actions (kjøring og rapportering), Pull Requests (godkjenning og sporbarhet) og GitHub Issues (feilhåndtering). Prinsippene er de samme — sporbarhet mellom krav, kode og test i ett verktøy.

## 1. Omfang

Testplanen gjelder komponentbiblioteket (`src/components`), designtokens-integrasjonen, Storybook-dokumentasjonen og dokumentasjonsplattformen (`src/pages`). Den dekker all endring som skal publiseres til npm eller deployes til GitHub Pages.

## 2. Roller og ansvar

| Rolle | Ansvar |
|---|---|
| Produkteier/maintainer | Godkjenner PR-er (= akseptanse), eier akseptert risiko, prioriterer testinnsats, tildeler feilrettinger |
| Utviklere (interne og agenter) | Skriver og vedlikeholder story-tester for egne endringer, kjører full suite lokalt før PR |
| Testleder-funksjonen | Ivaretas av maintainer: vedlikeholder denne planen, overvåker testdekning og risiko |
| Konsumerende team | Melder feil via GitHub Issues (bug-mal), deltar i akseptansetesting av nye komponenter |

Kvalitet er et felles ansvar; testing er ikke en fase til slutt, men en del av hver endring.

## 3. Testbasis

- Komponentkrav: Storybook-stories og MDX-dokumentasjon per komponent
- Designgrunnlag: «Design retning»-boarden i Figma og `rk-design-tokens`
- API-kontrakt: `metadata.json` (genereres fra koden) og `AI_DESIGN_SYSTEM_GUIDE.md`
- Digdir Designsystemet som underliggende leverandørdokumentasjon

## 4. Testnivåer (jf. praksisguiden kap. 4.1)

| Nivå | Slik gjør vi det | Verktøy |
|---|---|---|
| **Enhetstest** | Hver komponent har stories som kjøres som tester i ekte nettleser; interaksjonstester (`play`) verifiserer forventet resultat | Vitest + Storybook addon, headless Chromium (Playwright) |
| **Integrasjonstest** | Sammensatte komponenter (Header, Footer, Donor, skjema-komposisjoner) testes gjennom sine stories; dokumentasjonsplattformen bygger mot biblioteket | Samme suite + `vite build` |
| **Systemtest** | Full bygg av npm-pakke, Storybook og docs-app i CI ved hver endring | GitHub Actions |
| **Akseptansetest (UAT)** | PR-review: reviewer verifiserer endringen i Storybook/localhost før merge. Merge til `main` = godkjenning. Nye komponenter demonstreres for konsumerende team ved behov | GitHub PR + Storybook |
| **Regresjonstest** | Hele testsuite (alle stories, alle komponenter) kjøres på **hver PR** og hver push til `main` — ikke bare det som er endret | GitHub Actions |

## 5. Testtyper (jf. praksisguiden kap. 4.2)

- **Funksjonell testing:** `play`-assertions i stories (klikk, tastatur, tilstander, forventet resultat).
- **Tilgjengelighet (ikke-funksjonell):** `@storybook/addon-a11y` med `test: 'error'` — WCAG-brudd **feiler** testkjøringen. Dette er vårt viktigste ikke-funksjonelle krav (universell utforming).
- **Visuell testing:** Manuell verifisering i Storybook (lys/mørk modus, tre brand-varianter) som del av PR-review. Skjermbilder i PR-beskrivelsen ved visuelle endringer.
- **Negativ testing:** Stories skal dekke feiltilstander (disabled, error, tomme verdier) der komponenten har dem.
- **Sikkerhetstesting:** `npm audit` og Dependabot for avhengigheter; ingen egenutviklet autentisering/datalagring i biblioteket (se «avgrensninger»). Peer-avhengigheter eksternaliseres slik at konsumenter styrer sine versjoner.
- **Typesikkerhet:** `tsc --noEmit` (strict) og publisert `.d.ts` er del av kontraktstestingen mot konsumenter.

## 6. Testmiljøer

| Miljø | Bruk |
|---|---|
| Lokalt (`npm run storybook` / `npm run dev`) | Utvikling og utforskende testing |
| CI (GitHub Actions, headless Chromium) | Automatisert kjøring av hele suiten |
| GitHub Pages (Storybook + docs) | «Staging»/demonstrasjon — alltid siste `main` |
| npm-pakken | Produksjon — kun publisert via release-workflow |

## 7. Testdata

Alle stories bruker **syntetiske, fiktive data** (navn som «Frodo Baggins», e-poster som `test@test.no`). Det skal aldri brukes reelle personopplysninger i stories, tester eller dokumentasjon (GDPR). Testdata skal dekke normaltilfeller og kanttilfeller (lange strenger, tomme verdier, ugyldig input) der komponenten håndterer input.

## 8. Risikobasert prioritering (jf. praksisguiden kap. 12)

Testinnsatsen prioriteres der feil gjør mest skade. Vurdering per område:

| Område | Konsekvens | Sannsynlighet | Risiko | Testtiltak |
|---|---|---|---|---|
| Skjemakomponenter (Input, Select, Checkbox, Radio, DatePicker, DateInput) | Høy (brukere får ikke fullført oppgaver) | Middels | **Høy** | Interaksjonstester, negativ testing, a11y |
| Header/Footer (alle flater) | Høy (synlig overalt) | Middels | **Høy** | Interaksjonstester, responsiv + mørk modus-verifisering |
| Donor (donasjonsflyt) | Høy (økonomi/omdømme) | Middels | **Høy** | Interaksjonstester på beløpsvalg og callbacks |
| Tokens-integrasjon (`rk-design-tokens`) | Høy (endrer alt visuelt) | Middels (auto-oppdateres i CI) | **Høy** | Full regresjon kjøres ved hver token-bump; visuell sjekk ved major-endringer |
| Visningskomponenter (Tag, Badge, Avatar, …) | Lav–middels | Lav | Lav | Render- og a11y-tester |
| Dokumentasjonsplattformen (`src/pages`) | Lav (publiseres ikke til npm) | Middels | Middels | Typecheck/lint + manuell verifisering |

**Akseptert risiko** (bevisste valg, jf. kap. 12.3.2 E):
- Ingen automatisert visuell regresjon (skjermbilde-diff) — kompenseres med manuell Storybook-review i PR. Begrunnelse: kost/nytte for nåværende teamstørrelse.
- Ingen ytelsestesting av komponenter — lav last, statiske komponenter.
- Dokumentasjonsplattformen har ikke egne automatiserte tester — lav konsekvens, dekkes av typecheck og manuell review.

Når testing begrenses utover dette skal det dokumenteres i PR-beskrivelsen med begrunnelse.

## 9. Kriterier

**«Klar til test» (før PR åpnes):**
- [ ] Typecheck og lint er grønne lokalt
- [ ] Endret/ny funksjonalitet har stories (enhetstest)
- [ ] Full testsuite er kjørt lokalt (regresjon)

**«Klar til produksjon» (før merge/release):**
- [ ] Alle CI-sjekker er grønne (lint, typecheck, full testsuite, bygg av pakke + Storybook)
- [ ] PR er godkjent av maintainer (akseptanse)
- [ ] Kjente feil er dokumentert som Issues; akseptert risiko står i PR-beskrivelsen
- [ ] Breaking changes er flagget (`!` i commit / PR-tittel) og beskrevet
- [ ] AI-kontekstartefakter er regenerert ved API-endringer (`metadata.json`, guide, manifest)

**Produksjonssetting (npm-release):**
- [ ] Release-workflow kjøres kun fra grønn `main`
- [ ] Versjonsbump følger semver (breaking = major)
- [ ] Rollback-plan: `npm deprecate` av defekt versjon + ny patch; GitHub Pages redeployes fra forrige grønne `main`
- [ ] Verifisering etter publisering: installer pakken i et konsumentprosjekt eller kjør `npm pack`-sjekk

## 10. Feilhåndtering (jf. praksisguiden kap. 9.4)

Feil registreres som **GitHub Issues med bug-malen** (`.github/ISSUE_TEMPLATE/bug_report.yml`). Malen krever: tydelig tittel, faktisk og forventet resultat, steg for å reprodusere, alvorlighetsgrad, versjon og skjermbilde ved visuelle feil. Retting kobles til issuen via `Fixes #N` i PR-en — det gir sporbarheten krav → feil → test → fiks.

Alvorlighetsgrader:
- **Kritisk** — komponent ubrukelig, sikkerhets- eller tilgjengelighetsbrudd, feil i produksjon hos konsumenter
- **Høy** — vesentlig funksjonalitet feiler, workaround finnes
- **Middels** — feil med enkel workaround
- **Lav** — kosmetisk

## 11. Rapportering (jf. teststrategien kap. 7)

- **Teststatus og -resultater:** GitHub Actions-kjøringen på hver PR og hver push er testrapporten — den viser hva som er kjørt, hva som passerte og hva som feilet, med historikk over tid.
- **Sluttrapport per release:** GitHub Release-notatene oppsummerer endringer; CHANGELOG.md vedlikeholdes automatisk av release-workflowen. Kjente avvik og akseptert risiko refereres fra release-notatene ved behov.
- **Trend:** Actions-historikken gir utvikling over tid (antall kjøringer, feilrate).

## 12. Kompetanse og forbedring (jf. praksisguiden kap. 15)

- Nye bidragsytere leser denne planen og README-ens bidragsguide før første PR.
- Testfunn som avdekker mønstre (f.eks. gjentatte a11y-feil) skal føre til oppdatering av denne planen eller av komponent-retningslinjene.
- Planen revideres ved større endringer i verktøy eller organisering (f.eks. en eventuell overgang til Azure DevOps).
