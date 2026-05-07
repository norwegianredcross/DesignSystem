import fs from "node:fs";
import path from "node:path";

const ROOT_DIR = process.cwd();
const PACKAGE_FILE = path.join(ROOT_DIR, "package.json");
const GUIDE_FILE = path.join(ROOT_DIR, "AI_DESIGN_SYSTEM_GUIDE.md");
const METADATA_FILE = path.join(ROOT_DIR, "metadata.json");
const OUTPUT_FILE = path.join(ROOT_DIR, "ai-context.manifest.json");

const packageJson = JSON.parse(fs.readFileSync(PACKAGE_FILE, "utf8"));
const guide = fs.readFileSync(GUIDE_FILE, "utf8");
const metadata = JSON.parse(fs.readFileSync(METADATA_FILE, "utf8"));

const storybookBaseUrl = packageJson.homepage;
const manifest = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  package: {
    name: packageJson.name,
    version: packageJson.version,
  },
  resources: {
    storybookUrl: storybookBaseUrl,
    guideUrl: `${storybookBaseUrl}/AI_DESIGN_SYSTEM_GUIDE.md`,
    metadataUrl: `${storybookBaseUrl}/metadata.json`,
    manifestUrl: `${storybookBaseUrl}/ai-context.manifest.json`,
    themeUrl: "https://norwegianredcross.github.io/design-tokens/theme.css",
  },
  summary: {
    componentCount: metadata.length,
    exportedComponents: metadata.map((component) => component.componentName).sort(),
  },
  ruleHints: [
    {
      id: "prefer-rk-components",
      summary: "Prefer rk-designsystem components over custom HTML for common UI.",
    },
    {
      id: "use-ds-size-tokens",
      summary: "Use --ds-size-* tokens for spacing instead of --ds-spacing-* shortcuts.",
    },
    {
      id: "prefer-semantic-structure",
      summary: "Use semantic landmarks, headings, and accessible names as a baseline.",
    },
    {
      id: "limit-css-overrides",
      summary: "Use local styling for layout and composition rather than restyling design system components.",
    },
  ],
  driftSignals: [
    {
      id: "spacing-token-drift",
      severity: "review",
      detectAnyOf: ["--ds-spacing-", "var(--spacing-"],
      guidance: "Spacing guidance should use --ds-size-* tokens.",
    },
    {
      id: "hardcoded-color-drift",
      severity: "review",
      detectAnyOf: ["#D52B1E", "rgb(", "hsl("],
      guidance: "Published guidance should prefer tokenized color examples over raw color values where possible.",
    },
  ],
  verification: {
    preferredBrowserTool: "chrome-devtools-mcp",
    downstreamChecks: [
      "typecheck",
      "lint",
      "check:designsystem",
      "check:a11y",
      "check:agent-context",
    ],
  },
  guideDiagnostics: buildGuideDiagnostics(guide),
};

fs.writeFileSync(OUTPUT_FILE, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(`✅ Generated ai-context.manifest.json with ${manifest.summary.componentCount} components.`);

function buildGuideDiagnostics(content) {
  const diagnostics = [];

  if (content.includes("--ds-spacing-") || content.includes("var(--spacing-")) {
    diagnostics.push({
      severity: "review",
      message: "AI guide still references spacing terminology that conflicts with --ds-size-* token usage.",
    });
  }

  if (!content.includes("## Available Components")) {
    diagnostics.push({
      severity: "review",
      message: "AI guide is missing the Available Components section marker expected by downstream workflows.",
    });
  }

  return diagnostics;
}
