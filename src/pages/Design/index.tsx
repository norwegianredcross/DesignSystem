import { useState } from 'react';
import { Heading } from '../../components/Heading';
import { Paragraph } from '../../components/Paragraph';
import { List } from '../../components/List';
import { Link } from '../../components/Link';
import { Card, CardBlock } from '../../components/Card';
import { ArticleLayout, ArticleImage } from '../../components/ArticleLayout';
import styles from './styles.module.css';

// --- CONTENT COMPONENTS ---

const HvaErDesignTokensContent = () => (
  <ArticleLayout title="Hva er design tokens" category="Design Tokens">
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      "Design Tokens" styrer hvordan komponentene skal se ut i forhold til farger, typografi, størrelser, avstander, former osv. Design tokens sørger vi for at både designere og utviklere arbeider etter de samme reglene og retningslinjene.
    </Paragraph>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Noen av variablene er lagt opp til å være tema-baserte, det vil si at de tar utgangspunkt i din merkevare med de fargene og preferansene du selv velger. Vi jobber med en tema-bygger som skal gjøre det enklere for deg å tilpasse stilene.
    </Paragraph>
    <Paragraph>
      Design Tokens er fleksible variabler som kan benyttes uavhengig av teknologi eller designverktøy.
    </Paragraph>
  </ArticleLayout>
);

const DesignTokensIFigmaContent = () => (
  <ArticleLayout title="Design tokens i Figma" category="Design Tokens">
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Vi bruker Figma-pluginen "Tokens Studio", da denne lar oss administrere flere stiler og egenskaper enn Figma i seg selv kan.
    </Paragraph>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Pluginen har som mål å være W3C-kompatibel og retter seg etter standarden som etableres av W3C Design Tokens Community Group. Tokens-verdiene er dermed ikke låst til et verktøy - JSON-filen kan flyttes til andre verktøy dersom det skulle bli aktuelt.
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Flere sett og themes</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Bruk av variabler og tokens gjør det mulig å ha ett designsystem med ulike identiteter. Vi kan lage en komponent i Figma kun èn gang og style den mange ganger - Med et klikk kan vi slå på et annet theme som for eksempel aktiverer en annen fargepalett eller et annet sett med størrelser. Ved å dele tokens inn i både sets og themes, kan vi tilby avanserte former for gjenbruk.
    </Paragraph>
    
    <ArticleImage src="/ThemesExample.png" alt="Themes example" caption="Videoen over viser at når settet for &quot;Tilsynet&quot; slås på, overstyres både fargene som er i bruk i filen og stilene som er tilgjengelig i høyremargen byttes ut." />
  </ArticleLayout>
);

const FargerNavnestrukturContent = () => (
  <ArticleLayout title="Navnestruktur" category="Farger">
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Fargesystemet består av globale farger som refererer til hva fargen er (eks. red-1) og et semantisk nivå som beskriver hva fargen skal brukes til (eks. Text.Danger).
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Navnestruktur</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Fargene i Designsystemet er strukturert med en semantisk betydning. Dette betyr at de er definert etter funksjon og bruk, ikke bare etter hvordan de ser ut. Det gjør det lettere å velge riktig farge fordi du slipper å vurdere selve fargetonen og kan fokusere på hva fargen skal formidle i stedet.
    </Paragraph>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Fargenavnene i Designsystemet er delt opp i 3 ledd: Navn på fargeskala, gruppe (bruksområde) og variant. Disse leddene beskriver hvordan fargene er bygget opp og hvordan de skal brukes.
    </Paragraph>
    
    <ArticleImage src="/ColorNameStructure.png" alt="Fargenavn struktur" caption="Viser oppdelingen av fargenavn i 3 ledd" />

    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item><strong>Navn:</strong> Det første leddet og navnet på fargeskalaen. Som standard kommer Designsystemet med fargeskalaene Success, Danger, Warning, Info og Neutral. Flere skalaer kan legges til ved hjelp av Temabyggeren.</List.Item>
      <List.Item><strong>Gruppe:</strong> Hver fargeskala er delt inn i gruppene Background, Surface, Border, Text og Base. Disse gruppene beskriver bruksområdene til fargene. Text-gruppen skal for eksempel brukes på tekst og ikoner.</List.Item>
    </List.Unordered>

    <ArticleImage src="/ColorScaleGroups.png" alt="Fargeskala grupper" caption="Viser en fargeskala og de 5 gruppene som fargene er delt inn i." />

    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item><strong>Variant:</strong> Inne i hver gruppe finnes det varianter som beskriver hvordan fargene ser ut eller skal brukes. Tinted betyr for eksempel at fargen har et hint av farge i seg, mens Hover betyr at fargen er tenkt brukt for en interaktiv tilstand.</List.Item>
    </List.Unordered>
  </ArticleLayout>
);

const FargerOversiktContent = () => (
  <ArticleLayout title="Oversikt og forklaring av farger" category="Farger">
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Hver fargeskala består av totalt 16 farger, utformet for å dekke ulike behov i designet. Nedenfor finner du en oversikt over de forskjellige fargene og deres tiltenkte bruksområder.
    </Paragraph>
    
    <ArticleImage src="/SemanticColorUsage.png" alt="Semantiske farger eksempel" caption="Viser hvordan de semantiske fargene kan brukes i designet. Eksempelet bruker fire forskjellige fargeskalaer: Danger, Neutral og to blåskalaer" />

    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 'var(--ds-size-8)' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid var(--ds-color-neutral-border-default)', textAlign: 'left' }}>
          <th style={{ padding: 'var(--ds-size-2)', fontWeight: 'bold' }}>Navn</th>
          <th style={{ padding: 'var(--ds-size-2)', fontWeight: 'bold' }}>Bruksområde</th>
        </tr>
      </thead>
      <tbody>
        {[
          ['background-default', 'Standard bakgrunnsfarge'],
          ['background-tinted', 'Bakgrunn med et hint av farge i seg'],
          ['surface-default', 'Standardfarge for overflater / komponenter'],
          ['surface-tinted', 'Overflater / komponenter med et hint av farge i seg'],
          ['surface-hover', 'Hover-farge til overflater / komponenter'],
          ['surface-active', 'Active-farge til overflater / komponenter'],
          ['border-subtle', 'Border-farge med lav kontrast til dekorativ bruk (skillelinjer)'],
          ['border-default', 'Standard border-farge til skjemakomponenter og meningsbærende elementer'],
          ['border-strong', 'Border-farge med høy kontrast for ekstra synlighet'],
          ['text-subtle', 'Tekst- og ikonfarge med lavere kontrast'],
          ['text-default', 'Tekst- og ikonfarge med høy kontrast og god synlighet'],
          ['base-default', 'Standardfarge for solide bakgrunner'],
          ['base-hover', 'Hover-farge for solide bakgrunner'],
          ['base-active', 'Active-farge for solide bakgrunner'],
          ['base-contrast-subtle', 'Farge med god kontrast mot Base-default'],
          ['base-contrast-default', 'Farge med god kontrast mot Base-default og Base-hover'],
        ].map(([name, desc]) => (
          <tr key={name} style={{ borderBottom: '1px solid var(--ds-color-neutral-border-subtle)' }}>
            <td style={{ padding: 'var(--ds-size-2)', fontFamily: 'monospace' }}>{name}</td>
            <td style={{ padding: 'var(--ds-size-2)' }}>{desc}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Background</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
      Background-fargene brukes for å fargelegge store flater og er ofte det bakerste laget på en nettside. Det er vanlig å bruke disse fargene på body-elementet.
    </Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item><strong>Background-default</strong> er den lyseste og mest nøytrale bakgrunnsfargen</List.Item>
      <List.Item><strong>Background-tinted</strong> får et hint av farge i seg og kan brukes for å skape variasjon i bakgrunnslaget</List.Item>
    </List.Unordered>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Surface</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
      Surface-fargene brukes til å fargelegge elementer som ligger over background-fargene, som for eksempel paneler eller kort (cards). Disse fargene fungerer som forgrunnsfarger og bidrar til å skape dybde i designet ved å skille elementer fra bakgrunnen. I mørk modus blir disse fire fargene gradvis lysere, med Surface-active som den lyseste.
    </Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item><strong>Surface-default</strong> er helt hvit i lys modus og brukes som standard bakgrunnsfarge på elementer.</List.Item>
      <List.Item><strong>Surface-tinted</strong> får et hint av farge i seg og kan brukes for å skille elementer fra bakgrunnen.</List.Item>
      <List.Item><strong>Surface-hover</strong> kan brukes til hover-tilstander for elementer eller til å skape visuelle hierarkier i Surface-laget når den kombineres med Surface-tinted og Surface-active.</List.Item>
      <List.Item><strong>Surface-active</strong> kan brukes til active-tilstander for elementer eller til å forsterke hierarkiet i Surface-laget sammen med Surface-tinted og Surface-hover.</List.Item>
    </List.Unordered>
    
    <ArticleImage src="/SurfaceTintedExample.png" alt="Surface-tinted eksempel" caption="Viser hvordan Surface-tinted ser ut for 7 fargeskalaer generert med Temabyggeren." />

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Border</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
      Border-fargene brukes for å fargelegge rammer (strokes) til elementer.
    </Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item><strong>Border-subtle</strong> har lav kontrast mot background- og surface-fargene og bør kun brukes til dekorative formål. Vanlige bruksområder er skillelinjer og dekorative rammer. Fargen bør ikke være den eneste visuelle indikatoren på at et element er interaktivt.</List.Item>
      <List.Item><strong>Border-default</strong> brukes på skjemakomponenter eller på andre meningsbærende rammer. Fargen har god kontrast (over 3:1) mot alle background-fargene, Surface-default og Surface-tinted.</List.Item>
      <List.Item><strong>Border-strong</strong> har god kontrast (over 3:1) mot alle background- og surface-fargene og kan brukes på rammer for å gjøre elementer ekstra synlige.</List.Item>
    </List.Unordered>
    
    <ArticleImage src="/BordersColorsExample.png" alt="Border colors example" caption="Første rad viser farger med Border-subtle, mens den andre raden viser Border-default." />

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Text</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
      Text-fargene brukes på tekst og ikoner.
    </Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item><strong>Text-subtle</strong> er en lys tekstfarge som kan brukes for å skape variasjon i typografien eller for å indikere hierarkiske nivåer av viktighet. Den forsøker også å bevare mest mulig av fargemetningen fra den opprinnelige fargen valgt i Temabyggeren. Fargen har god kontrast (4.5:1) mot alle background-fargene, Surface-default og Surface-tinted.</List.Item>
      <List.Item><strong>Text-default</strong> er en tekstfarge med høy kontrast, optimal for lesbarhet. Den bør brukes på hovedinnholdet og den primære teksten på en side. Denne fargen i Neutral varianten kan være en fin farge å bruke på mesteparten av teksten. Fargen har god kontrast (4.5:1) mot alle background- og surface-fargene.</List.Item>
    </List.Unordered>
    
    <ArticleImage src="/TextColorsExample.png" alt="Text colors example" caption="Viser hvordan Text-default og Text-subtle ser ut for 8 forskjellige fargeskalaer generert med Temabyggeren." />

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Base</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
      Base-fargene brukes for å fargelegge solide bakgrunner, som for eksempel knapper og andre interaktive elementer. Fargene bidrar til å lede oppmerksomheten mot viktige designelementer og etablere et visuelt hierarki i forhold til mindre fremtredende elementer. Samtidig skaper de kontrast mot background- og surface-fargene, noe som forsterker lesbarhet og visuell tydelighet.
    </Paragraph>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
      Base-hover og Base-active fargene genereres ut fra lysheten eller mørkheten til Base-default fargen fra samme fargeskala for å skape jevne visuelle overganger mellom tilstandene. Kontrastfargene blir enten hvite eller svarte avhengig av lysstyrken til Base-default fargen for å sikre god kontrast og lesbarhet.
    </Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item><strong>Base-default</strong> kan brukes for å fargelegge solide bakgrunner til elementer. Fargen (hex-koden) som blir valgt i temabyggeren blir plassert under Base-default.</List.Item>
      <List.Item><strong>Base-hover</strong> kan brukes til hover-tilstander for solide elementer eller til å skape visuelle hierarkier i Base-laget når den kombineres med Base-default og Base-active.</List.Item>
      <List.Item><strong>Base-active</strong> kan brukes til active-tilstander for solide elementer eller til å forsterke hierarkiet i Base-laget sammen med Base-default og Base-hover.</List.Item>
      <List.Item><strong>Base-contrast-subtle</strong> har god kontrast (4.5:1) mot Base-default fargen fra samme fargeskala og kan trygt brukes som tekst-farge mot denne.</List.Item>
      <List.Item><strong>Base-contrast-default</strong> har god kontrast (4.5:1) mot Base-default og Base-hover fargene fra samme fargeskala, og kan trygt brukes som en tekst-farge mot disse.</List.Item>
    </List.Unordered>
    
    <ArticleImage src="/BaseColorsExample.png" alt="Base colors example" caption="Viser bokser med Base-default som bakgrunn og Base-contrast-default som tekstfarge." />
  </ArticleLayout>
);

const FargeTokensContent = () => (
  <ArticleLayout title="Farge-tokens" category="Farger">
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Fargene under er eksempler fra et tilfeldig tema. Bruk temabyggeren for å generere dine egne farger og navn.
    </Paragraph>
    
    <ArticleImage src="/FargeTokensLight.png" alt="Farge tokens lys" caption="Et tilfeldig generert fargesystem fra Designsystemet.no" />
    <ArticleImage src="/FargeTokensDark.png" alt="Farge tokens mørk" caption="Et tilfeldig generert fargesystem fra Designsystemet.no, mørkt modus" />
  </ArticleLayout>
);

const SkyggerBrukContent = () => (
  <ArticleLayout title="Bruk av skygger i designet" category="Skygger">
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Skygger bør brukes bevisst og konsistent da de uttrykker at noe ligger over noe annet i løsningen.
    </Paragraph>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Skygger kan hjelpe svaksynte til å identifisere komponenter. Bruk av skygger og konturer gjør det enklere og raskere å finne en komponent når du skanner sider. (Research: Material Design)
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Styrker</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Vi har ulike styrker på skyggene, fra xsmall til xlarge. De ulike styrkene brukes for å antyde høyden til overflaten. Overflater i høyere høyder har større skygger, mens de på lavere høyder bør ha mindre skygger. Skygger skal skape et hierarki slik at det som ligger over eller under noe annet kommer tydeligere frem.
    </Paragraph>
    
    <ArticleImage src="/ShadowExample.png" alt="Skygger eksempel" />
  </ArticleLayout>
);

const SkyggeTokensContent = () => (
  <ArticleLayout title="Skygge-tokens" category="Skygger">
    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Tokens</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Pass på at du har lys modus aktivert for å se skyggene. Skygger er ikke ment for bruk i mørk modus, da de er basert på mørkere fargetoner. For å skape hierarki og kontrast i mørk modus er det bedre å benytte andre virkemidler som for eksempel lyse kanter.
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Eksempel</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Popover er en komponent som legger seg over annet innhold. Dette tydeliggjøres ved bruk av en medium skygge.
    </Paragraph>
    
    <ArticleImage src="/ShadowTokensExample.png" alt="Popover skygge eksempel" caption="Popover komponentet dekker over the andre innholdet." />
  </ArticleLayout>
);

const KomponentStorrelserContent = () => (
  <ArticleLayout title="Komponentstørrelser" category="Størrelse og avstander">
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      De fleste komponentene i designsystemet finnes i tre anbefalte størrelser: Small, Medium og Large (sm, md, lg). Disse er utviklet for å tilpasse seg ulike behov på tvers av skjermstørrelser og bruksområder.
    </Paragraph>
    
    <ArticleImage src="/ComponentSizesExample.png" alt="Komponentstørrelser eksempel" caption="Størrelser for komponenter i Designsystemet." />

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Small</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Small er ideell for kompakte grensesnitt der plassutnyttelse er viktig, som på mobile enheter, ekspertverktøy eller administrasjonsgrensesnitt. Det er anbefalt å bruke denne størrelsen på nettsider med en basefont på 16px.
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Medium</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Medium fungerer som standard for de fleste vanlige bruksområder, og er anbefalt å bruke sammen med en basefont på 18px. Størrelsen gir en god balanse mellom lesbarhet og plassutnyttelse og egner seg spesielt godt for desktop-grensesnitt og større visningsflater.
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Large</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Large gir økt lesbarhet og tydelighet. Den kan brukes i desktop-grensesnitt eller når synlighet og tilgjengelighet er viktig. Den kan også brukes i en avgrenset kontekst på siden, for å fremheve sentrale elementer. Det er anbefalt å bruke størrelsen sammen med en basefont på 21px.
    </Paragraph>
    
    <ArticleImage src="/MediumComponentSizeExample.png" alt="Medium komponentstørrelse eksempel" caption="Mange av medium-komponentene har en fast høyde på 48px." />

    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Komponenter innenfor en bestemt størrelse er designet for å fungere sammen. For eksempel har mange medium-komponenter en høyde på 48px og en basefont på 18px, noe som sikrer en harmonisk visuell balanse når de plasseres ved siden av hverandre.
    </Paragraph>
    
    <ArticleImage src="/MediumLargeComponentsExample.png" alt="Medium og Large komponenter" caption="Eksempel der Medium og Large komponenter er brukt sammen." />

    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      For å opprettholde et helhetlig og oversiktlig design anbefales det å bruke faste størrelser innenfor en gitt nettside eller kontekst. Mange ulike kombinasjoner av størrelser kan føre til et rotete og uoversiktlig design.
    </Paragraph>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      I enkelte tilfeller kan komponenter i ulike størrelser kombineres for å skape bedre visuelle hierarkier og brukervennlighet. I eksempelet ovenfor er søkefeltseksjonen større og mer fremtredende enn komponentene i headeren, fordi søkefunksjonen er en sentral del av siden. Den økte størrelsen gjør den mer synlig og lett tilgjengelig for brukeren.
    </Paragraph>
  </ArticleLayout>
);

const StorrelseTokensContent = () => (
  <ArticleLayout title="Størrelse-tokens" category="Størrelse og avstander">
    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Tokens</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Pass på at du har lys modus aktivert for å se skyggene. Skygger er ikke ment for bruk i mørk modus, da de er basert på mørkere fargetoner. For å skape hierarki og kontrast i mørk modus er det bedre å benytte andre virkemidler som for eksempel lyse kanter.
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Eksempel</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Popover er en komponent som legger seg over annet innhold. Dette tydeliggjøres ved bruk av en medium skygge.
    </Paragraph>
  </ArticleLayout>
);

const FontFamilyContent = () => (
  <ArticleLayout title="Font-family" category="Typografi">
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      For å presentere tekst på korrekt måte er det laget stiler som har ulike kombinasjoner av størrelse, fontvekt og linjehøyde. Det er også laget et sett med typografi-komponenter som innkapsler disse stilene, slik at de enkelt kan brukes i ulike sammenhenger. Beskrivelse av hvordan typografi-komponenter brukes finner du i komponentartikkelen Typography.
    </Paragraph>
  </ArticleLayout>
);

const TypografiTokensContent = () => (
  <ArticleLayout title="Typografi-tokens" category="Typografi">
     <Paragraph>Innhold kommer snart.</Paragraph>
  </ArticleLayout>
);

const FigmaOppkoblingContent = () => (
  <ArticleLayout title="Kom i gang med designsystemet (Figma)" category="Kom i gang">
    <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
      Denne veiledningen hjelper deg med å komme i gang med å designe ved hjelp av det delte designsystemet i Figma. Du får en innføring i hvordan du bruker komponenter, tokens og stiler fra det sentrale biblioteket.
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Forutsetninger</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>Før du starter trenger du:</Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item><strong>Figma</strong> - En aktiv Figma-konto (gratis eller betalt)</List.Item>
      <List.Item><strong>Access</strong> - Tilgang til Røde Kors sitt Figma-bibliotek (kontakt teamansvarlig hvis du mangler tilgang)</List.Item>
    </List.Unordered>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Opprett eller åpne en arbeidsfil</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
      Opprett en ny Figma-fil, eller åpne en eksisterende prosjektfil hvor du skal ta i bruk designsystemet.
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Aktiver designsystemets biblioteker</Heading>
    <List.Ordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item>Gå til Assets-panelet i Figma</List.Item>
      <List.Item>Klikk på bok-ikonet (📚) øverst til høyre for å åpne Team Library</List.Item>
      <List.Item>Slå på følgende biblioteker:
        <List.Unordered style={{ marginTop: 'var(--ds-size-2)' }}>
          <List.Item>Designsystem – komponenter</List.Item>
          <List.Item>Aksel ikonbibliotek</List.Item>
        </List.Unordered>
      </List.Item>
    </List.Ordered>
    <ArticleImage src="/LibraryActivationScreenshot.png" alt="Library Activation" caption="Viser aktivering av biblioteker i Figma" />

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Sett inn komponenter fra biblioteket</Heading>
    <List.Ordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item>Gå til Assets-panelet</List.Item>
      <List.Item>Bruk søkefeltet for å finne komponenter raskt, f.eks.:
        <List.Unordered style={{ marginTop: 'var(--ds-size-2)' }}>
          <List.Item>Button</List.Item>
          <List.Item>Card</List.Item>
          <List.Item>Modal</List.Item>
        </List.Unordered>
      </List.Item>
      <List.Item>Dra komponenten inn i artboardet</List.Item>
      <List.Item>🔄 Tilpass komponentene ved å bruke props og varianter i høyrepanelet. Dette gir fleksibilitet uten å bryte koblingen til hovedkomponenten.</List.Item>
    </List.Ordered>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Tips og god praksis</Heading>
    <Paragraph>
      Unngå å “detache” komponenter. For å sikre gjenbruk og fremtidige oppdateringer, skal du ikke detach’e komponenter. Bruk heller varianter og egenskaper (props) for å tilpasse utseende og funksjon.
    </Paragraph>
  </ArticleLayout>
);

const OppstartContent = () => (
  <ArticleLayout title="Oppstart: Oppsett av arbeidsområde" category="Kom i gang">
    
    <Heading level={3} data-size="sm">Trinn 1: Start med en ny frame</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>Opprett en ny frame i Figma med ønsket størrelse.</Paragraph>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>I dette tilfellet bruker vi 1728px i bredde.</Paragraph>
    <ArticleImage src="/OppstartStep1.png" alt="Trinn 1" />

    <Heading level={3} data-size="sm">Trinn 2: Legg til autolayout</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>Legg til autolayout på framen.</Paragraph>
    <ArticleImage src="/OppstartStep2.png" alt="Trinn 2" />

    <Heading level={3} data-size="sm">Trinn 3: Legg til tokens på framen</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>Legg til følgende tokens:</Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
      <List.Item>Spacing: 0</List.Item>
      <List.Item>Padding left right: 0</List.Item>
      <List.Item>Padding top bottom: 0</List.Item>
      <List.Item>Background color: color/main/background-default</List.Item>
    </List.Unordered>
    <ArticleImage src="/OppstartStep3.png" alt="Trinn 3" />

    <Heading level={3} data-size="sm">Trinn 4: Legg til heading og footer</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>Legg til header og footer fra komponenter biblioteket. Sørg for at Auto Layout retning er satt til vertikal.</Paragraph>
    <ArticleImage src="/OppstartStep4.png" alt="Trinn 4" />

    <Heading level={3} data-size="sm">Trinn 5: Lage en seksjon</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>Lag en ny frame som du kaller "section".</Paragraph>
    <ArticleImage src="/OppstartStep5.png" alt="Trinn 5" />

    <Heading level={3} data-size="sm">Trinn 6: Legge til autolayout</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>Legg til autolayout på den nye seksjonen.</Paragraph>
    <ArticleImage src="/OppstartStep6.png" alt="Trinn 6" />

    <Heading level={3} data-size="sm">Trinn 7: Legge til seksjon i hovedframe</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>Legg til seksjonen i hovedframen og sørg for at seksjonen er satt til "fill container".</Paragraph>
    <ArticleImage src="/OppstartStep7.png" alt="Trinn 7" />

    <Heading level={3} data-size="sm">Trinn 8: Legge til tokens (side-marginer og bakgrunnsfarge)</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>Velg seksjonen og legg til følgende tokens:</Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
      <List.Item>Spacing: size/6</List.Item>
      <List.Item>Padding left right: size/30</List.Item>
      <List.Item>Padding top bottom: size/22</List.Item>
      <List.Item>Background color: color/main/background-default</List.Item>
    </List.Unordered>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>Dette sørger for at siden din er koblet mot tokensene i koden og gjør det lettere for utviklere å utvikle det du designer da disse er lenket via GitHub.</Paragraph>
    <ArticleImage src="/OppstartStep8.png" alt="Trinn 8" />

    <Heading level={3} data-size="sm">Trinn 9: Test seksjonen</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>Legg til ett komponent fra biblioteket. I vårt tilfelle bruker vi card komponenten.</Paragraph>
    <ArticleImage src="/OppstartStep9.png" alt="Trinn 9" />

    <Heading level={3} data-size="sm">Trinn 10: Lag en nested layout</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>Legg til flere kort og sett de sammen ved hjelp av en auto layout. For å gjøre dette enkelt velg alle kortene og trykk shift + a.</Paragraph>
    <ArticleImage src="/OppstartStep10.png" alt="Trinn 10" />

    <Heading level={3} data-size="sm">Trinn 11: Set opp nested layout</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>Velg alle kortene i seksjonen og sørg for at disse er satt til fill container.</Paragraph>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>Dette gjør vi for at kortene skal ta like mye plass og holde seg innen for rammene til den nestede layouten.</Paragraph>
    <ArticleImage src="/OppstartStep11.png" alt="Trinn 11" />

    <Heading level={3} data-size="sm">Trinn 12: Legg til spacing tokens</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>Gå ett hakk ut og velg containeren til kortene. Sørg for at spacing er satt til size/6.</Paragraph>
    <ArticleImage src="/OppstartStep12.png" alt="Trinn 12" />

    <Heading level={3} data-size="sm">Trinn 13: Legg til spacing i seksjon</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>Legg til spacing mellom kort containeren og headingen ved å velge seksjonen og tilføye en spacing på size/6.</Paragraph>
    <ArticleImage src="/OppstartStep13.png" alt="Trinn 13" />

    <Heading level={3} data-size="sm">Trinn 14: gjenbruk</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>Dupliser seksjonen og gjør deg kjent med hvordan auto-layout og tokensene fungerer. Under ser du hvordan jeg enkelt laget en tabell ved å erstatte kortene med en tablecolumn komponent og satte spacing til size/0.</Paragraph>
    <ArticleImage src="/OppstartStep14.png" alt="Trinn 14" />
  </ArticleLayout>
);

const LageKomponenterContent = () => (
  <ArticleLayout title="Lage nye komponenter" category="Kom i gang">
    <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
      Denne siden forklarer hvordan man bygger nye komponenter i design­systemet. Målet er å sikre at komponentene er konsistente, skalerbare, tilgjengelige og enkle å bruke både i design og utvikling.
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Tokens som grunnlag</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Alle komponenter skal bygges med tokens. Tokens er de grunnleggende verdiene i systemet og gjør det mulig å oppdatere eller tilpasse design uten å endre hver enkelt komponent.
    </Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item><strong>Autolayout:</strong> Bruk alltid Autolayout i Figma. Det gir produksjonsklare filer og speiler hvordan kode er strukturert.</List.Item>
      <List.Item><strong>Størrelsestokens:</strong> Bruk tokens for spacing, padding og dimensjoner. Unngå manuelle verdier.</List.Item>
      <List.Item><strong>Semantiske tokens:</strong> Benytt semantiske tokens for farger, typografi og spacing. Dette sikrer støtte for lys og mørk modus, ulike størrelser og temaer – og gjør komponentene direkte koblet til kode.</List.Item>
    </List.Unordered>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Bygging med atomisk design</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Komponenter settes sammen hierarkisk etter atomisk design:
    </Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
      <List.Item><strong>Atomer:</strong> de minste byggeklossene (f.eks. knapp, ikon, inputfelt).</List.Item>
      <List.Item><strong>Molekyler:</strong> sammensatte atomer (f.eks. søkefelt = input + knapp).</List.Item>
      <List.Item><strong>Organismer:</strong> større helheter laget av molekyler (f.eks. skjema eller navigasjon).</List.Item>
    </List.Unordered>
    <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
      Dette prinsippet gjør komponentene modulære og gjenbrukbare.
    </Paragraph>
    <ArticleImage src="/LageKompSteg1.png" alt="Atomisk design" />

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Eksempel Kalender Modul</Heading>
    
    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Trinn 1: Begynn på atomisk nivå</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
      Se for deg atomene som trengs når du lager en kalender. Eksempelvis kan det være:
    </Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
      <List.Item><strong>Tekst:</strong> Måned/år (f.eks. "August 2025"), Ukedagsnavn (man, tir, ons …), Dato-nummer (1, 2, 3 …)</List.Item>
      <List.Item><strong>Ikoner:</strong> Piltaster for navigasjon (forrige/neste måned), Eventuelt ikon for «dagens dato» eller «reset»</List.Item>
      <List.Item><strong>Knapper:</strong> Navigasjonsknapper (forrige/neste måned), Dato-knapp (hver dato er en interaktiv knapp)</List.Item>
    </List.Unordered>
    <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
      Vi vet at vi allerede har icon-button så den kan vi enkelt hente ut fra komponent bibiloteket.
    </Paragraph>
    <ArticleImage src="/LageKompSteg2.png" alt="Trinn 1" />

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Trinn 2: Start med å bygge ut atomene dine</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      I vårt tilfelle vil vi trenge ett celle komponent som viser ukedagene og dato-nummer i en mnd. Her kan vi bruke samme atom for ukedagsnavn og dato-nummer.
    </Paragraph>
    <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
      Vi lager to elementer som vi kaller "cell" og legger til autolayout og appellerer token verdiene.
    </Paragraph>
    <ArticleImage src="/LageKompSteg3.png" alt="Trinn 2" />

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Trinn 3: Lag variantene du trenger</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
      I vårt tilfelle vil vi trenge ett celle komponent som viser ukedagene og dagene i en mnd.
    </Paragraph>
    <ArticleImage src="/LageKompSteg4.png" alt="Trinn 3" />

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Trinn 4: Sett sammen molekylet</Heading>
    <ArticleImage src="/LageKompSteg5.png" alt="Trinn 4" />

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Trinn 5: Bygg ut organismen</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
      Her legger vi sammen molekylene til en tabell.
    </Paragraph>
    <ArticleImage src="/LageKompSteg6.png" alt="Trinn 5" />

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Trinn 6: Legg til riktig states</Heading>
    <ArticleImage src="/LageKompSteg7.png" alt="Trinn 6" />

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Trinn 7: Gjør ferdig organismen med eksisterende elementer</Heading>
    <ArticleImage src="/LageKompSteg8.png" alt="Trinn 7" />

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Trinn 8: Bygg ut med flere varianter hvis det gir mening</Heading>
    <ArticleImage src="/LageKompSteg9.png" alt="Trinn 8" />

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Varianter og tilstander</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
      Alle komponenter skal ha definerte varianter og interaksjonstilstander:
    </Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item>Bruk Figma Variants i stedet for duplisering.</List.Item>
      <List.Item>Minimumstilstander: default, hover, pressed, disabled, focus. Litt ut fra kontekst.</List.Item>
      <List.Item>Opprett en ny variant når det gjelder en tilpasning av samme komponent, og en ny komponent kun når funksjonen er unik.</List.Item>
    </List.Unordered>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Tilgjengelighet</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
      Tilgjengelighet skal alltid ivaretas:
    </Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item>Følg WCAG-kontrastkrav (minimum 4.5:1 for tekst).</List.Item>
      <List.Item>Interaktive flater skal ha minst 44 × 44 px treffflate.</List.Item>
      <List.Item>Fokus­tilstand skal alltid være synlig, også uten hover.</List.Item>
    </List.Unordered>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Responsivitet</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
      Komponenter skal fungere på tvers av skjermstørrelser og layouts:
    </Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item>Bruk størrelsestokens for spacing og dimensjoner.</List.Item>
      <List.Item>Støtt små, mellomstore og store layoutvarianter.</List.Item>
      <List.Item>Sørg for at komponenter brytes eller stackes logisk i mindre formater.</List.Item>
    </List.Unordered>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Gjenbruk i kontekst</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
      En komponent skal alltid kunne brukes i ulike sammenhenger. Vis derfor eksempler i dokumentasjonen, som:
    </Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item>knapp i et skjema</List.Item>
      <List.Item>kort i et grid</List.Item>
      <List.Item>inputfelt i en dialogboks</List.Item>
    </List.Unordered>
  </ArticleLayout>
);

const PraktiskeEksemplerContent = () => (
  <ArticleLayout title="Praktiske eksempler" category="Kom i gang">
    <Heading level={2} data-size="md">Eksempel 1: Påmeldingsskjema</Heading>
    <List.Ordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item>Trinn 1: Start med en ny frame</List.Item>
      <List.Item>Trinn 2: Legg til overskrift</List.Item>
      <List.Item>Trinn 3: Legg til tekstfelt</List.Item>
      <List.Item>Trinn 4: Legg til dropdown</List.Item>
      <List.Item>Trinn 5: Legg til send-knapp</List.Item>
    </List.Ordered>
    <Heading level={2} data-size="md">Eksempel 2: Artikkelside</Heading>
    <Paragraph>Følg trinnene for å sette opp grid, ingress og bilder.</Paragraph>
    <Heading level={2} data-size="md">Eksempel 3: Planleggingsverktøy</Heading>
    <Paragraph>Oppsett av kalender, kort og tabeller.</Paragraph>
  </ArticleLayout>
);

const TokenStudioContent = () => (
  <ArticleLayout title="Kom i gang med Token Studio og GitHub-synkronisering" category="Kom i gang">
    <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
      Denne veiledningen viser hvordan du kobler Token Studio i Figma til et GitHub-repositorium for å holde design tokens synkronisert på tvers av teamet.
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Forutsetninger</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>Før du setter opp synkronisering trenger du:</Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item><strong>Figma</strong> - En Figma-konto med Professional-plan eller høyere</List.Item>
      <List.Item><strong>Token Studio</strong> - En Token Studio-konto med Premium-abonnement</List.Item>
    </List.Unordered>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Generer en GitHub Fine-grained access token</Heading>
    <List.Ordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item>Gå til: Github → Settings → Developer settings → Personal access tokens → Tokens (fine-grained)</List.Item>
      <List.Item>Klikk på <strong>Generate new token</strong></List.Item>
      <List.Item>Fyll ut følgende:
        <List.Unordered style={{ marginTop: 'var(--ds-size-2)' }}>
          <List.Item><strong>Navn:</strong> F.eks. Red Cross Token</List.Item>
          <List.Item><strong>Utløpsdato:</strong> sett som ønsket</List.Item>
        </List.Unordered>
      </List.Item>
      <List.Item>Klikk <strong>Generate token</strong> og kopier den trygt (lagres ikke av GitHub etterpå)</List.Item>
    </List.Ordered>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Konfigurer GitHub-sync i Token Studio</Heading>
    <List.Ordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item>Åpne Token Studio-pluginen i Figma</List.Item>
      <List.Item>Gå til: Settings → Sync providers → Add new → GitHub</List.Item>
      <List.Item>Fyll inn følgende:
        <List.Unordered style={{ marginTop: 'var(--ds-size-2)' }}>
          <List.Item><strong>Name:</strong> f.eks. Red Cross Tokens</List.Item>
          <List.Item><strong>Personal Access Token:</strong> lim inn tokenet fra GitHub</List.Item>
          <List.Item><strong>Repository:</strong> norwegianredcross/DesignSystem</List.Item>
          <List.Item><strong>Branch:</strong> main</List.Item>
          <List.Item><strong>Token Storage Location:</strong> design-tokens</List.Item>
        </List.Unordered>
      </List.Item>
      <List.Item>Repository access: velg All repositories eller spesifikt repo</List.Item>
      <List.Item>Repository permissions → Contents: velg Read & Write</List.Item>
    </List.Ordered>
    <ArticleImage src="/TokenStudioSetup.png" alt="Konfigurer GitHub-sync" />

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Utfør første synkronisering</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Etter at du har lagret innstillingene, vil pluginen vise en modal:
    </Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
      <List.Item>Hvis repoet er tomt → velg <strong>Push</strong></List.Item>
      <List.Item>Hvis tokens allerede finnes → velg <strong>Pull</strong></List.Item>
    </List.Unordered>
    <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
      Velg handling basert på situasjonen.
    </Paragraph>
    <ArticleImage src="/TokenStudioSync.png" alt="Utfør første synkronisering" />

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Løpende arbeidsflyt: Push og Pull</Heading>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item><strong>Push</strong> når du gjør endringer i tokens i Figma → skriv inn commit-melding og gjennomgå endringer før du evt. åpner en Pull Request.</List.Item>
      <List.Item><strong>Pull</strong> for å hente oppdateringer fra GitHub til Figma → du får mulighet til å gjennomgå og godkjenne før endringer tas inn.</List.Item>
    </List.Unordered>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Tips og god praksis</Heading>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item>Oppbevar tokenen sikkert – ikke lim den inn i offentlige dokumenter.</List.Item>
      <List.Item>Dokumenter innstillingene dine (navn, branch, sti osv.) for enklere oppsett senere.</List.Item>
      <List.Item>Synk ofte for å sikre konsistens mellom design og utvikling.</List.Item>
    </List.Unordered>
  </ArticleLayout>
);

const FargeSystemContent = () => (
  <ArticleLayout title="Sette opp ditt eget fargesystem" category="Farger">
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Med et gjennomtenkt fargesystem kan vi sikre at tekst alltid har god nok kontrast mot våre bakgrunnsfarger og at det finnes nok ulike farger for alle tilstander.
    </Paragraph>

    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      En profilveileder inneholder ofte kun et sett med primærfarger og sekundærfarger i et par forskjellige fargetoner. Å lage et digitalt produkt kun med disse fargene alene er vanskelig. For å kunne sikre riktig kontrast og korrekte farger for ulike tilstander, er vi avhengig av å definere flere variasjoner av profilfargene. Bare button komponenten består av 6 ulike blåfarger:
    </Paragraph>

    <ArticleImage src="/ButtonColors.png" alt="Button Colors" caption="Som du ser i eksemplet trenger vi 6 ulike fargevariasjoner bare for Button-komponentet" />

    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Fargesystemet er strukturert for å støtte multibranding og ulike modes (darkmode, contrastmode, etc.), og samtidig ivareta kontrastkrav. Vi har latt oss inspirere av USWDS sine "magic numbers" for å sikre tilgjengelige fargekombinasjoner fra hvilken som helst fargepalett. Vi har også blitt inspirert av Radix sitt fargesystem med tydelige intensjoner for de ulike fargene. For å sikre at en organisasjon skal kunne bruke sin faktiske brandfarge, har vi valgt å kombinere to tilnærminger til et helt nytt system.
    </Paragraph>
  </ArticleLayout>
);

const TemabyggerContent = () => (
  <ArticleLayout title="Designsystemets temagenerator" category="Farger">
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      For å generere en skala som fungerer kan du bruke <Link href="https://theme.designsystemet.no/no" target="_blank" rel="noreferrer">Designsystemets temagenerator</Link>. Det eneste du trenger å gjøre er å lime inn hex-koden til merkevarens accent-farge og øvrige profil-farger.
    </Paragraph>
    
    <ArticleImage src="/TemabyggerExample.png" alt="Temabygger" caption="Fargesystemet bruker brand-fargen til å generere flere fargevarianter, slik at vi kan sikre god kontrast mellom tekst og bakgrunnsfarger." />

    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Temageneratoren er basert på et fargesystem sørger for at både brand-farger ivaretas og kontrastkrav sikres gjennom de lineære fargene som genereres ut fra brand-fargen. Farger beregnet for tekst vil dermed alltid ha god nok kontrast mot bakgrunnsfarger.
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Eksempler</Heading>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item><strong>Text-default</strong> har alltid god nok kontrast mot alle background og surface farger.</List.Item>
      <List.Item><strong>Text-subtle</strong> har alltid god nok kontrast mot alle background-farger og surface-default.</List.Item>
    </List.Unordered>
    
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Dette vil gjelde uansett hva du har valgt som base-farge.
    </Paragraph>

    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Base-default-fargen vil alltid være den samme som fargen du har valgt. Dette er for å ivareta brandet ditt best mulig. Du må derfor selv passe på at fargen du velger oppfyller kontrastkravene i forhold til hvor den skal bli brukt. <Link href="https://theme.designsystemet.no/no" target="_blank" rel="noreferrer">Designsystemets temagenerator</Link> vil informere deg om eventuelle kontrastbrudd.
    </Paragraph>
  </ArticleLayout>
);

const BrukFargerContent = () => (
  <ArticleLayout title="Bruk fargene du har generert" category="Farger">
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Når du har generert skalaene, kan du bruke de nye fargekodene i Designsystemet, slik at alle komponenter følger din profil.
    </Paragraph>
  </ArticleLayout>
);

const ForeslaDesignContent = () => (
  <ArticleLayout title="Foreslå nytt design eller forbedringer" category="Bidra med design">
    <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
      Vi setter pris på at du hjelper oss å forbedre komponenter og design i Figma. De beste løsningene kommer gjennom samarbeid.
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Ny Komponent</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Ønsker du å foreslå en ny komponent setter vi pris på om den blir registrert i <Link href="https://github.com/norwegianredcross/DesignSystem" target="_blank" rel="noreferrer">Github</Link>.
    </Paragraph>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Når en ny komponent blir foreslått må vi vurdere om den er verdifull nok til å være en del av designsystemet. Vi ønsker ikke å ende opp med hundrevis av komponenter med små forskjeller, da vi kan risikere uønsket kompleksitet, vedlikehold, samt design- og teknologigjeld.
    </Paragraph>

    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      For nye komponenter som tas inn må vi:
    </Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item>Identifisere og utforske liknende behov hos andre produktteam og virksomheter. Hvor mange produkter/etater vil ha bruk for den?</List.Item>
      <List.Item>Vurdere problemet komponenten skal løse og verdien dette gir.</List.Item>
      <List.Item>Tenke på om den kan lages fleksibel og gjenbrukbar nok.</List.Item>
      <List.Item>Tenke på om den er i tråd med designprinsippene og om den passer inn i helheten</List.Item>
    </List.Unordered>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Registrere feil eller mangler på en komponent i Figma</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Har du funnet en svakhet med noen av de eksisterende komponentene i Figma, setter vi pris på om du enten legger igjen en kommentar i Figma sammen med den aktuelle komponenten, eller at du oppretter en bug-report i <Link href="https://github.com/norwegianredcross/DesignSystem/issues" target="_blank" rel="noreferrer">Github</Link> som forklarer feilen, eventuelt en feature-request som forklarer ønsket tilleggsfunksjonalitet.
    </Paragraph>
  </ArticleLayout>
);

// --- MAIN EXPORT ---

type MenuItem = {
  label: string;
  id?: string;
  link?: string;
  children?: MenuItem[];
};

interface DesignPageProps {
  section?: string;
}

export const DesignPage = ({ section }: DesignPageProps) => {
  const [activeDesignPage, setActiveDesignPage] = useState(section || 'intro');

  // Update active page if section prop changes
  if (section && section !== activeDesignPage) {
     setActiveDesignPage(section);
  }

  // Menu Data Structure
  const menuItems: { title: string; items: MenuItem[] }[] = [
    {
      title: 'For Designere',
      items: [
        {
          label: 'Kom i gang',
          children: [
            { label: 'Figma tilkobling', id: 'figma-oppkobling' },
            { label: 'Oppstart', id: 'oppstart' },
            { label: 'Lage ett nytt komponent', id: 'lage-komponenter' },
            { label: 'Praktiske eksempler', id: 'praktiske-eksempler' },
            { label: 'Token Studio', id: 'token-studio' },
          ]
        },
        {
          label: 'Farger',
          children: [
            { label: 'Sette opp ditt eget fargesystem', id: 'fargesystem' },
            { label: 'Designsystemets temagenerator', id: 'temabygger' },
            { label: 'Bruk fargene du har generert', id: 'bruk-farger' },
          ]
        },
        {
          label: 'Bidra med design',
          children: [
            { label: 'Foreslå nytt design eller forbedringer', id: 'foresla-design' },
          ]
        }
      ]
    },
    {
      title: 'Designelementer',
      items: [
        {
          label: 'Design Tokens',
          children: [
            { label: 'Hva er design tokens', id: 'hva-er-design-tokens' },
            { label: 'Design tokens i Figma', id: 'design-tokens-i-figma' },
          ]
        },
        {
          label: 'Farger',
          children: [
            { label: 'Navnestruktur', id: 'farger-navnestruktur' },
            { label: 'Oversikt og forklaringer av farger', id: 'farger-oversikt' },
            { label: 'Farge-tokens', id: 'farge-tokens' },
          ]
        },
        {
          label: 'Skygger',
          children: [
            { label: 'Bruk av skygger i designet', id: 'skygger-bruk' },
            { label: 'Skygge-tokens', id: 'skygge-tokens' },
          ]
        },
        {
          label: 'Størrelse og avstander',
          children: [
            { label: 'Komponentstørrelser', id: 'komponent-storrelser' },
            { label: 'Størrelse-tokens', id: 'storrelse-tokens' },
          ]
        },
        {
          label: 'Typografi',
          children: [
            { label: 'Font-family', id: 'font-family' },
            { label: 'Typografi-tokens', id: 'typografi-tokens' },
          ]
        }
      ]
    }
  ];

  const DefaultDesignContent = () => (
    <ArticleLayout title="Design i Røde Kors" intro="Velkommen til designdokumentasjonen." category="Intro">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--ds-size-6)' }}>
        <Card variant="tinted" data-color="neutral">
          <CardBlock>
            <Heading level={3} data-size="sm">Kom i gang</Heading>
            <Link href="#" onClick={(e) => {e.preventDefault(); setActiveDesignPage('figma-oppkobling')}}>Gå til guide</Link>
          </CardBlock>
        </Card>
        <Card variant="tinted" data-color="neutral">
          <CardBlock>
            <Heading level={3} data-size="sm">Farger</Heading>
            <Link href="#" onClick={(e) => {e.preventDefault(); setActiveDesignPage('fargesystem')}}>Se farger</Link>
          </CardBlock>
        </Card>
      </div>
    </ArticleLayout>
  );

  return (
    <main className={`container ${styles.docLayout}`}>
      
      {/* --- CUSTOM SIDEBAR --- */}
      <aside className={styles.sidebar}>
        <nav className={styles.nav}>
          {menuItems.map((group, index) => (
            <div key={index} className={styles.group}>
               <div className={styles.groupTitle}>{group.title}</div>
               <ul className={styles.list}>
                 {group.items.map((item, itemIndex) => (
                   <li key={itemIndex} className={styles.listItem}>
                     {item.children ? (
                       // Has children - Sub-menu
                       <details open className={styles.details}>
                         <summary className={`${styles.link} ${activeDesignPage === item.id ? styles.active : ''}`}>
                           {item.label}
                           <span style={{ fontSize: '0.7em', marginLeft: 'auto' }}>▼</span>
                         </summary>
                         <ul className={styles.nestedList}>
                           {item.children.map((subItem, subIndex) => (
                             <li key={subIndex}>
                               <button 
                                 type="button"
                                 className={`${styles.link} ${styles.nestedLink} ${activeDesignPage === subItem.id ? styles.nestedLinkActive : ''}`}
                                 onClick={() => subItem.id && setActiveDesignPage(subItem.id)}
                               >
                                 {subItem.label}
                               </button>
                             </li>
                           ))}
                         </ul>
                       </details>
                     ) : (
                       // Single link
                       <button 
                         type="button"
                         className={`${styles.link} ${activeDesignPage === item.id ? styles.active : ''}`}
                         onClick={() => {
                            if (item.id) setActiveDesignPage(item.id);
                         }}
                       >
                         {item.label}
                       </button>
                     )}
                   </li>
                 ))}
               </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <div className={styles.docContent}>
        {activeDesignPage === 'intro' ? <DefaultDesignContent /> :
         activeDesignPage === 'figma-oppkobling' ? <FigmaOppkoblingContent /> :
         activeDesignPage === 'oppstart' ? <OppstartContent /> :
         activeDesignPage === 'lage-komponenter' ? <LageKomponenterContent /> :
         activeDesignPage === 'praktiske-eksempler' ? <PraktiskeEksemplerContent /> :
         activeDesignPage === 'token-studio' ? <TokenStudioContent /> :
         activeDesignPage === 'fargesystem' ? <FargeSystemContent /> :
         activeDesignPage === 'temabygger' ? <TemabyggerContent /> :
         activeDesignPage === 'bruk-farger' ? <BrukFargerContent /> :
         activeDesignPage === 'foresla-design' ? <ForeslaDesignContent /> :
         activeDesignPage === 'hva-er-design-tokens' ? <HvaErDesignTokensContent /> :
         activeDesignPage === 'design-tokens-i-figma' ? <DesignTokensIFigmaContent /> :
         activeDesignPage === 'farger-navnestruktur' ? <FargerNavnestrukturContent /> :
         activeDesignPage === 'farger-oversikt' ? <FargerOversiktContent /> :
         activeDesignPage === 'farge-tokens' ? <FargeTokensContent /> :
         activeDesignPage === 'skygger-bruk' ? <SkyggerBrukContent /> :
         activeDesignPage === 'skygge-tokens' ? <SkyggeTokensContent /> :
         activeDesignPage === 'komponent-storrelser' ? <KomponentStorrelserContent /> :
         activeDesignPage === 'storrelse-tokens' ? <StorrelseTokensContent /> :
         activeDesignPage === 'font-family' ? <FontFamilyContent /> :
         activeDesignPage === 'typografi-tokens' ? <TypografiTokensContent /> :
         <DefaultDesignContent />
        }
      </div>
    </main>
  );
};
