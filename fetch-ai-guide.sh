#!/bin/bash
# Script to fetch the AI Design System Guide for use with AI assistants
# Usage: ./fetch-ai-guide.sh

GUIDE_URL="https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md"
OUTPUT_FILE="AI_DESIGN_SYSTEM_GUIDE.md"

echo "Fetching AI Design System Guide..."
curl -o "$OUTPUT_FILE" "$GUIDE_URL"

if [ $? -eq 0 ]; then
    echo "✅ Successfully downloaded $OUTPUT_FILE"
    echo "You can now reference this file in your AI assistant prompts."
else
    echo "❌ Failed to download the guide. Please check your internet connection."
    exit 1
fi

