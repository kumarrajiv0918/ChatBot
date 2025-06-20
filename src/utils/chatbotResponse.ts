// getBotResponse.ts
import { routeToHandler } from './router/domainRouter';

export interface Message {
    sender: 'user' | 'bot';
    text: string;
}

export function getBotResponse(input: string): Message {
    const lowerInput = input.toLowerCase();
    const isHindi =
        /[\u0900-\u097F]/.test(input) || lowerInput.includes('hindi') || lowerInput.includes('हिंदी');

    const nameMatch = input.match(/(?:i am|my name is|this is|मैं|मेरा नाम)\s+([A-Za-z\u0900-\u097F]+)/i);
    const userName = nameMatch ? nameMatch[1].trim().replace(/[^A-Za-z\u0900-\u097F]/g, '') : null;

    const result = routeToHandler(input, isHindi);

    if (result) {
        const greeting = userName && result.type === 'general'
            ? isHindi
                ? `नमस्ते ${userName} जी! 😊\n\n`
                : `Hi ${userName} Sir! 😊\n\n`
            : '';
        return {
            sender: 'bot',
            text: greeting + result.text
        };
    }

    if (userName) {
        return {
            sender: 'bot',
            text: isHindi
                ? `नमस्ते ${userName} जी! 😊 मैं आपकी कैसे मदद कर सकता हूँ?`
                : `Hi ${userName} Sir! 😊 How can I help you today?`
        };
    }

    return {
        sender: 'bot',
        text: isHindi
            ? 'माफ़ कीजिए, आपकी क्वेरी से संबंधित कोई जानकारी नहीं मिली। कृपया स्पष्ट रूप से पूछें।'
            : "Sorry, I couldn't understand your query. Please ask more clearly."
    };
}

// import { loanData } from './data/loanData';
// import { generalData, getTodayDateResponse } from './data/generalQuestionsData';
// import { investmentData } from './data/investmentData';
// import { insuranceData } from './data/insuranceData';
// import { policyData } from './data/policyData';
// import { emiPrompts } from './data/emiData';
// import { parseEmiInput, calculateEmi } from '../utils/calculater/calculateEmi';
// import { saveEmiSession, getEmiSession, clearEmiSession } from '../utils/session';

// export interface Message {
//     sender: 'user' | 'bot';
//     text: string;
// }

// function getMatchScore(inputWords: string[], keyword: string): number {
//     const keywordWords = keyword.toLowerCase().split(/\s+/);
//     return keywordWords.filter(word => inputWords.includes(word)).length;
// }

// function getBestMatch<T extends { keywords: string[] }>(
//     inputWords: string[],
//     data: T[],
//     isHindi: boolean,
//     threshold: number = 2
// ): T | null {
//     let bestMatch: T | null = null;
//     let highestScore = 0;

//     for (const item of data) {
//         for (const keyword of item.keywords) {
//             const score = getMatchScore(inputWords, keyword);
//             if (score > highestScore) {
//                 highestScore = score;
//                 bestMatch = item;
//             }
//         }
//     }

//     return highestScore >= threshold ? bestMatch : null;
// }

// export function getBotResponse(input: string): Message {
//     const lowerInput = input.toLowerCase();
//     const inputWords = lowerInput.split(/\s+/);

//     const isHindi =
//         /[\u0900-\u097F]/.test(input) ||
//         lowerInput.includes(' in hindi') ||
//         lowerInput.includes('hindi') ||
//         lowerInput.includes('हिंदी');

//     // EMI prompts
//     const foundEmiPrompt = getBestMatch(inputWords, emiPrompts, isHindi);
//     if (foundEmiPrompt) {
//         return {
//             sender: 'bot',
//             text: isHindi ? foundEmiPrompt.prompt_hi : foundEmiPrompt.prompt_en
//         };
//     }

//     // EMI calculator inputs
//     const parsedEmi = parseEmiInput(input);
//     if (parsedEmi.principal && parsedEmi.rate && parsedEmi.months) {
//         clearEmiSession();
//         const result = calculateEmi(parsedEmi);
//         return { sender: 'bot', text: result! };
//     }
//     if (parsedEmi.principal && parsedEmi.rate && !parsedEmi.months) {
//         saveEmiSession({ principal: parsedEmi.principal, rate: parsedEmi.rate });
//         return {
//             sender: 'bot',
//             text: isHindi
//                 ? 'कृपया बताएं आप कितने महीनों के लिए EMI लेना चाहते हैं?'
//                 : 'Please tell me how many months the EMI should be for.'
//         };
//     }
//     if (!parsedEmi.principal && !parsedEmi.rate && parsedEmi.months) {
//         const session = getEmiSession();
//         if (session.principal && session.rate) {
//             clearEmiSession();
//             const result = calculateEmi({
//                 principal: session.principal,
//                 rate: session.rate,
//                 months: parsedEmi.months
//             });
//             return { sender: 'bot', text: result! };
//         }
//     }

//     // Today Date
//     const today = getTodayDateResponse();
//     const todayScore = today.keywords.reduce((score, keyword) => {
//         return Math.max(score, getMatchScore(inputWords, keyword));
//     }, 0);
//     if (todayScore >= 2) {
//         const text = isHindi
//             ? `${today.definition_hi}${today.example_hi ? `\n${today.example_hi}` : ''}${today.link_hi ? `\n${today.link_hi}` : ''}`
//             : `${today.definition_en}${today.example_en ? `\n${today.example_en}` : ''}${today.link_en ? `\n${today.link_en}` : ''}`;
//         return { sender: 'bot', text };
//     }

//     // Loan
//     const foundLoan = getBestMatch(inputWords, loanData, isHindi);
//     if (foundLoan) {
//         const text = isHindi
//             ? `${foundLoan.definition_hi}${foundLoan.example_hi ? `\n${foundLoan.example_hi}` : ''}${foundLoan.link_hi ? `\n${foundLoan.link_hi}` : ''}`
//             : `${foundLoan.definition_en}${foundLoan.example_en ? `\n${foundLoan.example_en}` : ''}${foundLoan.link_en ? `\n${foundLoan.link_en}` : ''}`;
//         return { sender: 'bot', text };
//     }

//     // Policy
//     const foundPolicy = getBestMatch(inputWords, policyData, isHindi);
//     if (foundPolicy) {
//         const text = isHindi
//             ? `${foundPolicy.definition_hi}${foundPolicy.example_hi ? `\n${foundPolicy.example_hi}` : ''}${foundPolicy.link_hi ? `\n${foundPolicy.link_hi}` : ''}`
//             : `${foundPolicy.definition_en}${foundPolicy.example_en ? `\n${foundPolicy.example_en}` : ''}${foundPolicy.link_en ? `\n${foundPolicy.link_en}` : ''}`;
//         return { sender: 'bot', text };
//     }

//     // Insurance
//     const foundInsurance = getBestMatch(inputWords, insuranceData, isHindi);
//     if (foundInsurance) {
//         const text = isHindi
//             ? `${foundInsurance.definition_hi}${foundInsurance.example_hi ? `\n${foundInsurance.example_hi}` : ''}${foundInsurance.link_hi ? `\n${foundInsurance.link_hi}` : ''}`
//             : `${foundInsurance.definition_en}${foundInsurance.example_en ? `\n${foundInsurance.example_en}` : ''}${foundInsurance.link_en ? `\n${foundInsurance.link_en}` : ''}`;
//         return { sender: 'bot', text };
//     }

//     // Investment
//     const foundInvestment = getBestMatch(inputWords, investmentData, isHindi);
//     if (foundInvestment) {
//         const text = isHindi
//             ? `${foundInvestment.definition_hi}${foundInvestment.example_hi ? `\n${foundInvestment.example_hi}` : ''}${foundInvestment.link_hi ? `\n${foundInvestment.link_hi}` : ''}`
//             : `${foundInvestment.definition_en}${foundInvestment.example_en ? `\n${foundInvestment.example_en}` : ''}${foundInvestment.link_en ? `\n${foundInvestment.link_en}` : ''}`;
//         return { sender: 'bot', text };
//     }

//     // General
//     const foundGeneral = getBestMatch(inputWords, generalData, isHindi);
//     const nameMatch = input.match(/(?:i am|my name is|मैं हूँ|मेरा नाम)\s+([A-Za-zअ-ह]+)/i);
//     const userNameRaw = nameMatch ? nameMatch[1].trim() : null;
//     const userName = userNameRaw ? userNameRaw.charAt(0).toUpperCase() + userNameRaw.slice(1) : null;

//     if (foundGeneral) {
//         let definition = isHindi ? foundGeneral.definition_hi : foundGeneral.definition_en;
//         if (userName) {
//             definition = isHindi
//                 ? `नमस्ते ${userName} सर, आपसे मिलकर खुशी हुई! मैं आपकी कैसे मदद कर सकता हूँ?`
//                 : `Hi ${userName} Sir, nice to meet you! How can I assist you?`;
//         }

//         const example = isHindi ? foundGeneral.example_hi : foundGeneral.example_en;
//         const link = isHindi ? foundGeneral.link_hi : foundGeneral.link_en;

//         const text = `${definition}${example ? `\n${example}` : ''}${link ? `\n${link}` : ''}`;
//         return { sender: 'bot', text };
//     }

//     // Only Name
//     if (userName) {
//         const text = isHindi
//             ? `नमस्ते ${userName} सर, आपसे मिलकर खुशी हुई! मैं आपकी कैसे मदद कर सकता हूँ?`
//             : `Hi ${userName} Sir, nice to meet you! How can I assist you?`;
//         return { sender: 'bot', text };
//     }

//     // Default Fallback
//     return {
//         sender: 'bot',
//         text: isHindi
//             ? 'माफ़ कीजिए, आपकी क्वेरी से संबंधित कोई जानकारी नहीं मिली। कृपया लोन, निवेश, बीमा, पॉलिसी, या सामान्य सवाल पूछें।'
//             : "Sorry, I couldn't find any information related to your query. Try asking about loans, investments, insurance, policies, or general questions."
//     };
// }
