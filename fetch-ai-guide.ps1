# PowerShell script to fetch the AI Design System Guide for use with AI assistants
# Usage: .\fetch-ai-guide.ps1

$GUIDE_URL = "https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md"
$OUTPUT_FILE = "AI_DESIGN_SYSTEM_GUIDE.md"

Write-Host "Fetching AI Design System Guide..." -ForegroundColor Cyan

try {
    Invoke-WebRequest -Uri $GUIDE_URL -OutFile $OUTPUT_FILE
    Write-Host "✅ Successfully downloaded $OUTPUT_FILE" -ForegroundColor Green
    Write-Host "You can now reference this file in your AI assistant prompts." -ForegroundColor Yellow
} catch {
    Write-Host "❌ Failed to download the guide: $_" -ForegroundColor Red
    exit 1
}

