// chatbot/handlers/emiHandler.ts
import { emiPrompts } from '../data/emiData';
import { parseEmiInput, calculateEmi } from '../../utils/calculater/calculateEmi';
import { getEmiSession, saveEmiSession, clearEmiSession } from '../../utils/session';
import { getBestMatch } from '../../utils/getBestMatch';

export function handleEmi(input: string, isHindi: boolean) {
    const inputWords = input.toLowerCase().split(/\s+/);
    const prompt = getBestMatch(inputWords, emiPrompts);
    if (prompt) {
        return { type: 'emi', text: isHindi ? prompt.prompt_hi : prompt.prompt_en };
    }

    const parsed = parseEmiInput(input);
    if (parsed.principal && parsed.rate && parsed.months) {
        clearEmiSession();
        const result = calculateEmi(parsed);
        return { type: 'emi', text: result! };
    }

    if (parsed.principal && parsed.rate && !parsed.months) {
        saveEmiSession({ principal: parsed.principal, rate: parsed.rate });
        return {
            type: 'emi',
            text: isHindi
                ? 'कृपया बताएं आप कितने महीनों के लिए EMI लेना चाहते हैं?'
                : 'Please tell me how many months the EMI should be for.'
        };
    }

    if (!parsed.principal && !parsed.rate && parsed.months) {
        const session = getEmiSession();
        if (session.principal && session.rate) {
            clearEmiSession();
            const result = calculateEmi({
                principal: session.principal,
                rate: session.rate,
                months: parsed.months
            });
            return { type: 'emi', text: result! };
        }
    }

    return null;
}
