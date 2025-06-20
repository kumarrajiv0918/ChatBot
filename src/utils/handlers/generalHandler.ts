// handlers/generalHandler.ts
import { generalData } from '../data/generalQuestionsData';
import { dynamicGeneralData } from '../data/dynamicGeneralData';
import { getBestMatch, getBestDynamicMatch } from '../../utils/getBestMatch';

export function handleGeneral(input: string, isHindi: boolean) {
    const inputWords = input.toLowerCase().split(/\s+/);

    // ✅ Step 1: Dynamic General Matching (date, time, greeting, etc.)
    const dynamicMatch = getBestDynamicMatch(inputWords, dynamicGeneralData);
    if (dynamicMatch) {
        const text = dynamicMatch.getResponse(isHindi);
        return { type: 'general', text };
    }

    // ✅ Step 2: Static General Matching (standard definitions)
    const staticMatch = getBestMatch(inputWords, generalData);
    if (staticMatch) {
        const text = isHindi
            ? `${staticMatch.definition_hi}${staticMatch.example_hi ? `\n${staticMatch.example_hi}` : ''}${staticMatch.link_hi ? `\n${staticMatch.link_hi}` : ''}`
            : `${staticMatch.definition_en}${staticMatch.example_en ? `\n${staticMatch.example_en}` : ''}${staticMatch.link_en ? `\n${staticMatch.link_en}` : ''}`;
        return { type: 'general', text };
    }

    // ❌ No match found
    return null;
}
