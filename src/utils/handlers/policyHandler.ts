// chatbot/handlers/policyHandler.ts
import { policyData } from '../data/policyData';
import { getBestMatch } from '../../utils/getBestMatch';

export function handlePolicy(input: string, isHindi: boolean) {
    const inputWords = input.toLowerCase().split(/\s+/);
    const match = getBestMatch(inputWords, policyData);
    if (!match) return null;

    const text = isHindi
        ? `${match.definition_hi}${match.example_hi ? `\n${match.example_hi}` : ''}${match.link_hi ? `\n${match.link_hi}` : ''}`
        : `${match.definition_en}${match.example_en ? `\n${match.example_en}` : ''}${match.link_en ? `\n${match.link_en}` : ''}`;

    return { type: 'policy', text };
}
