# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

httpiq is an interactive HTTP status code quiz application for the terminal, built with React and Ink. It's an educational CLI tool distributed via npm that helps developers learn HTTP status codes through gamified quizzes. The application supports both English and Japanese languages with real-time switching capabilities.

## Development Commands

```bash
# Development
npm run dev          # Run in development mode with tsx
npm run build        # Build TypeScript to dist/
npm run start        # Run the built application

# Local testing
npm link            # Link for local testing
httpiq              # Test the CLI command
npm unlink -g httpiq # Remove global link

# Publishing (see Version Management section)
npm version patch|minor|major
npm publish
git push origin main --tags
```

## Architecture

### Component Flow
App.tsx manages the screen flow: WelcomeScreen → DifficultySelection → ModeSelection → Quiz → Result

### Key Components
- **Quiz.tsx**: Core quiz logic with real-time feedback and scoring
- **data/statusCodes.ts**: HTTP status code database with intelligent question selection and bilingual descriptions
- **utils/quiz.ts**: Question generation and shuffling algorithms
- **i18n/translations.ts**: Translation data for English and Japanese UI text
- **contexts/LanguageContext.tsx**: Language state management and switching logic
- **hooks/useLanguageToggle.ts**: Shift+Tab key binding for language switching
- **components/LanguageIndicator.tsx**: Visual language selection indicator

### Quiz Logic
- **Beginner**: 5 questions from beginner-level codes only
- **Intermediate**: 10 questions (max 5 beginner + remaining intermediate)
- **Advanced**: 20 questions (max 10 beginner+intermediate + remaining advanced)
- Questions are randomly selected and shuffled for each quiz session

## Internationalization (i18n)

### Language Support
- **Default Language**: English (en)
- **Supported Languages**: English, Japanese (ja)
- **Language Switching**: Shift+Tab key binding (available before quiz starts)
- **Persistence**: Language setting is not saved between sessions

### Translation Architecture
- **UI Text**: Translated through `i18n/translations.ts` and React Context
- **Status Code Meanings**: Always displayed in English (technical standard)
- **Status Code Descriptions**: Bilingual support with `description` (English) and `descriptionJa` (Japanese)
- **Language Indicator**: Visual feedback showing current language selection

### Translation Guidelines
- UI elements are fully localized for both languages
- HTTP status code meanings remain in English (industry standard)
- Detailed explanations are provided in both languages
- Technical terms are kept consistent across languages

## Version Management (PR-based Development)

### Development Flow
1. Create feature branch: `git checkout -b feature/feature-name`
2. Make changes and commit (do NOT run `npm version`)
3. Create PR and merge to main
4. **After PR merge**, on main branch:
   ```bash
   git pull origin main
   npm version patch|minor|major  # Creates commit + tag
   npm publish                    # Publishes to npm
   git push origin main --tags    # Pushes to GitHub
   ```

### Version Types
- **patch**: Bug fixes, typos, description improvements
- **minor**: New features, improvements (backwards compatible)
- **major**: Breaking changes, API changes

### Critical Rules
- Only perform `npm version` and `npm publish` on main branch after PR merge
- Always use `git push origin main --tags` to sync npm and GitHub versions
- Never version bump in feature branches

## TypeScript Configuration

- ES2020 target with ESNext modules
- Bundler module resolution (required for Ink compatibility)
- Strict mode enabled
- JSX set to React

## Code Formatting

After frontend modifications, always run code formatting as specified in the project instructions.

## Distribution

The app is distributed as a global npm package with CLI binary. The `dist/` folder contains the built application, and `package.json` defines `httpiq` as the executable command.