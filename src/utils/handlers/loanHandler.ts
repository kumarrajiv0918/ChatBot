// chatbot/handlers/loanHandler.ts
import { loanData } from '../data/loanData';
import { getBestMatch } from '../../utils/getBestMatch';

export function handleLoan(input: string, isHindi: boolean) {
    const inputWords = input.toLowerCase().split(/\s+/);
    const match = getBestMatch(inputWords, loanData);
    if (!match) return null;

    const text = isHindi
        ? `${match.definition_hi}${match.example_hi ? `\n${match.example_hi}` : ''}${match.link_hi ? `\n${match.link_hi}` : ''}`
        : `${match.definition_en}${match.example_en ? `\n${match.example_en}` : ''}${match.link_en ? `\n${match.link_en}` : ''}`;

    return { type: 'loan', text };
}
