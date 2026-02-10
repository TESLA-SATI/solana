// sati_agent.ts
import * as dotenv from 'dotenv';
import { OpenAI } from "openai";
import { AgentExecutor } from "langchain/agents";

// Initialize environment variables from .env file
dotenv.config();

export class SatiAgent {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  // Your agent logic here...
}
