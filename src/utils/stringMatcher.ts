// chatbot/utils/stringMatcher.ts
export function getBestMatchedItem<T extends { keywords: string[] }>(
    input: string,
    data: T[]
): T | null {
    const inputWords = input.toLowerCase().split(/\s+/);
    let bestItem: T | null = null;
    let bestScore = 0;

    for (const item of data) {
        let score = 0;
        for (const keyword of item.keywords) {
            const keywordWords = keyword.toLowerCase().split(/\s+/);
            const match = keywordWords.filter(w => inputWords.includes(w)).length;
            score = Math.max(score, match);
        }
        if (score > bestScore) {
            bestScore = score;
            bestItem = item;
        }
    }

    return bestScore > 0 ? bestItem : null;
}
