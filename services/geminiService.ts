import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateTradieContent = async (trade: string, location: string, tone: string): Promise<{ headline: string, bio: string }> => {
  if (!apiKey) {
    console.warn("API Key is missing. Returning mock data.");
    return {
      headline: `The Best ${trade} in ${location}`,
      bio: `We provide top-tier ${trade} services across ${location}. Reliable, affordable, and professional.`
    };
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are a copywriter for an Australian trade business website.
      Write a catchy, short Homepage Headline (max 8 words) and a short "About Us" bio (max 60 words).
      
      Business Details:
      Trade: ${trade}
      Location: ${location}
      Tone: ${tone} (Australian, friendly, professional)
      
      Return ONLY valid JSON in this format:
      {
        "headline": "...",
        "bio": "..."
      }
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text);

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      headline: `Expert ${trade} Services in ${location}`,
      bio: `Serving ${location} with professional ${trade} solutions. We turn up on time and get the job done right. Contact us today for a free quote.`
    };
  }
};