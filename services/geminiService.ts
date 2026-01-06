
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const getAIPartAdvice = async (userDescription: string) => {
  if (!API_KEY) return "API Key is missing. Please check your configuration.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `사용자의 목소리 특징이나 노래 성향을 바탕으로 더잼콰이어(소프라노, 알토, 테너, 베이스) 중 어떤 파트가 어울릴지 따뜻하고 전문적인 어조로 조언해줘. 
      사용자 입력: "${userDescription}"`,
      config: {
        systemInstruction: "당신은 12년 경력의 베테랑 합창 지휘자 배윤경입니다. 사용자의 고민에 대해 따뜻하고 격려하는 어조로 답변하며, 마지막에 꼭 '더잼콰이어는 여러분의 도전을 기다립니다'라는 메시지를 포함하세요.",
      }
    });

    return response.text || "죄송합니다. 분석에 실패했습니다. 하지만 여러분의 열정은 언제나 환영입니다!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "현재 AI 상담이 어렵습니다. 하지만 지휘자님께 직접 연락주시면 언제든 친절히 상담해 드립니다!";
  }
};
