# httpiq 📡

Interactive HTTP status code quiz for your terminal, built with [Ink](https://github.com/vadimdemedes/ink).

![npm version](https://img.shields.io/npm/v/httpiq)
![license](https://img.shields.io/npm/l/httpiq)

## Features

- 🎯 Three difficulty levels: Beginner, Intermediate, and Advanced
- 🔄 Two quiz modes: Code→Meaning and Meaning→Code
- 🌐 **Bilingual support**: English and Japanese with instant language switching
- 📊 Score tracking with rank system (S/A/B/C/D)
- 💡 Detailed explanations for each status code in both languages
- 🎨 Beautiful terminal UI with color-coded feedback
- ⚡ Real-time language switching with Shift+Tab

## Installation

```bash
npm install -g httpiq
```

## Usage

Simply run:

```bash
httpiq
```

### Language Switching

- **Default language**: English
- **Switch language**: Press `Shift+Tab` at any time before starting a quiz
- **Language persistence**: Language setting is not saved between sessions (always starts in English)
- **Available languages**: English (EN) and Japanese (日本語)

## Quiz Modes

### Difficulty Levels

- **Beginner** (5 questions): Common status codes you see daily
- **Intermediate** (10 questions): Developer-focused status codes
- **Advanced** (20 questions): Rare and specialized status codes

### Question Types

- **Code → Meaning**: Given a status code (e.g., 404), select its meaning
- **Meaning → Code**: Given a meaning (e.g., "Not Found"), select its code

## Development

Clone the repository:

```bash
git clone https://github.com/yourusername/httpiq.git
cd httpiq
npm install
```

Run in development mode:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Author

Created with ❤️ for developers learning HTTP status codes.