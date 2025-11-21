import { GoogleGenAI } from "@google/genai";
import { AgentPersona } from "../types";

const apiKey = process.env.API_KEY || '';

// Initialize with a check to prevent immediate crashes if env is missing, 
// but functionality will be limited.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generatePersonaResponse = async (
  persona: AgentPersona, 
  userMessage: string,
  history: {role: string, parts: {text: string}[]}[]
) => {
  if (!ai) {
    throw new Error("API Key is missing. Cannot interact with Gemini.");
  }

  try {
    // Using gemini-2.5-flash for speed and efficiency in this demo context,
    // enabling thinking to simulate the "meta-cognition" aspect.
    const model = 'gemini-2.5-flash';
    
    const response = await ai.models.generateContent({
      model: model,
      contents: [
        ...history.map(h => ({
            role: h.role,
            parts: h.parts
        })),
        {
            role: 'user',
            parts: [{ text: userMessage }]
        }
      ],
      config: {
        systemInstruction: persona.systemInstruction + " \n\nMaintain a highly intelligent, meta-cognitive persona. Explicitly state your internal thought process (meta-cognition) in parentheses or distinct blocks if necessary to show self-reflection.",
        temperature: 0.7,
        thinkingConfig: { thinkingBudget: 1024 }, // Simulate "Savant" deep thinking
      }
    });

    return response.text || "I am currently recalibrating my neural pathways. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection to the neural link disrupted.";
  }
};