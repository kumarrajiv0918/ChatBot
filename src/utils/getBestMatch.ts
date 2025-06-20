// 🔍 Word-to-word match scorer
export function getMatchScore(inputWords: string[], keyword: string): number {
    const keywordWords = keyword.toLowerCase().split(/\s+/);
    return keywordWords.filter(word => inputWords.includes(word)).length;
}

// ✅ Static data matcher
export function getBestMatch<T extends { keywords: string[] }>(
    inputWords: string[],
    data: T[],
    threshold = 1
): T | null {
    let bestMatch: T | null = null;
    let highestScore = 0;

    for (const item of data) {
        for (const keyword of item.keywords) {
            const score = getMatchScore(inputWords, keyword);
            if (score > highestScore) {
                highestScore = score;
                bestMatch = item;
            }
        }
    }

    return highestScore >= threshold ? bestMatch : null;
}

// ✅ Dynamic data matcher (date, time, etc.)
export function getBestDynamicMatch<T extends { keywords: string[]; getResponse: Function }>(
    inputWords: string[],
    data: T[],
    threshold = 1
): T | null {
    let bestMatch: T | null = null;
    let highestScore = 0;

    for (const item of data) {
        for (const keyword of item.keywords) {
            const score = getMatchScore(inputWords, keyword);
            if (score > highestScore) {
                highestScore = score;
                bestMatch = item;
            }
        }
    }

    return highestScore >= threshold ? bestMatch : null;
}
