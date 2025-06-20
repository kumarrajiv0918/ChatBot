// chatbot/handlers/investmentHandler.ts
import { investmentData } from '../data/investmentData';
import { getBestMatchedItem } from '../../utils/stringMatcher';

export function handleInvestment(input: string, isHindi: boolean) {
    const match = getBestMatchedItem(input, investmentData);
    if (match) {
        const text = isHindi
            ? `${match.definition_hi}${match.example_hi ? `\n${match.example_hi}` : ''}${match.link_hi ? `\n${match.link_hi}` : ''}`
            : `${match.definition_en}${match.example_en ? `\n${match.example_en}` : ''}${match.link_en ? `\n${match.link_en}` : ''}`;
        return { type: 'investment', text };
    }
    return null;
}
