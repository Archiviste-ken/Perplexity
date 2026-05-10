# 🚀 Perplexity - Project Plan

Welcome to the development plan for the Perplexity clone! This document outlines the step-by-step roadmap to build the core features of the application, broken down into manageable levels.

---

## 🎯 Implementation Levels & Steps

### Level 1: 🔐 Authentication
*The foundation of the app, ensuring users have their own secure workspace.*

*   **Step 1:** Set up the `User` database model (e.g., in `src/models/user.model.js`).
*   **Step 2:** Implement user registration and login API endpoints.
*   **Step 3:** Use JWT (JSON Web Tokens) or session cookies for secure session management.
*   **Step 4:** Create authentication middleware to protect private API routes.

### Level 2: 💬 Chat with AI (Core)
*The basic conversational interface.*

*   **Step 1:** Choose and integrate a primary LLM API (e.g., OpenAI, Anthropic, Gemini).
*   **Step 2:** Create a chat endpoint to receive user prompts.
*   **Step 3:** Send the prompt to the LLM and stream or return the AI's response to the client.
*   **Step 4:** Implement basic error handling and rate limiting.

### Level 3: 💾 Message Storage
*Saving the conversations for future reference.*

*   **Step 1:** Design and create `ChatSession` and `Message` database models.
*   **Step 2:** Update the chat endpoint to save the user's input to the database.
*   **Step 3:** Save the AI's generated response to the database, linking both to the active chat session and the authenticated user.

### Level 4: 🕰️ Chat History
*Allowing users to revisit past interactions.*

*   **Step 1:** Build an API endpoint to retrieve a list of past chat sessions for the logged-in user.
*   **Step 2:** Build an API endpoint to fetch all messages belonging to a specific chat session.
*   **Step 3:** (Optional) Implement pagination or infinite scroll for users with extensive chat histories.

### Level 5: 🌐 AI with Internet Research (The "Perplexity" Feature)
*Empowering the AI to browse the web and cite sources.*

*   **Step 1:** Integrate a web search API (e.g., Tavily, Brave Search, SerpApi, or Bing).
*   **Step 2:** Implement a routing/agentic step: analyze the user's query to determine if a web search is needed.
*   **Step 3:** Execute the search query and parse the top results (titles, snippets, URLs).
*   **Step 4:** Inject the search results into the LLM's system prompt as context.
*   **Step 5:** Instruct the LLM to generate a comprehensive answer based on the search context and include inline citations linked to the source URLs.

---

## 🛠️ Next Steps
Begin with **Level 1**, setting up the MongoDB connection in `src/config/db.js` and finishing the User model in `src/models/user.model.js`. Let me know when you're ready to dive into the code! 💻✨