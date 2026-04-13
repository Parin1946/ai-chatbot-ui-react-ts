# AI Chatbot UI (React + TypeScript)

A modern, responsive AI chatbot user interface built with React and TypeScript. Integrates with various backend AI services and features a clean, intuitive design.

## Project Overview

This project provides a front-end user interface for interacting with AI chatbots. Developed using React with TypeScript for type safety and maintainability, it offers a highly customizable and responsive design. The UI is designed to be easily integrated with different backend AI services (e.g., OpenAI, Google Gemini, custom APIs) through a flexible API client. It focuses on a smooth user experience, clear conversation flow, and an aesthetically pleasing interface.

## Features

-   **Responsive Design**: Optimized for desktop and mobile devices.
-   **TypeScript**: Enhanced code quality and developer experience.
-   **Modular Components**: Easy to extend and customize.
-   **Backend Agnostic**: Designed to connect with any RESTful chatbot API.
-   **Real-time Messaging**: Smooth display of chat messages.
-   **Markdown Support**: Renders rich text responses from the AI.

## Getting Started

### Prerequisites

-   Node.js (LTS version)
-   npm or Yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Parin1946/ai-chatbot-ui-react-ts.git
    cd ai-chatbot-ui-react-ts
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or yarn install
    ```

### Usage

1.  Configure your API endpoint in `src/config.ts` (or similar).
2.  Start the development server:
    ```bash
    npm start
    # or yarn start
    ```
3.  Open your browser to `http://localhost:3000`.

## Project Structure

```
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── services/         # API integration logic
│   ├── styles/           # Global styles and utility classes
│   ├── App.tsx           # Main application component
│   ├── index.tsx         # Entry point
│   └── react-app-env.d.ts
├── .env                # Environment variables
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
