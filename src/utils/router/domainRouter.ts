// router/domainRouter.ts

import { handleLoan } from '../handlers/loanHandler';
import { handlePolicy } from '../handlers/policyHandler';
import { handleInvestment } from '../handlers/investmentHandler';
import { handleInsurance } from '../handlers/insuranceHandler';
import { handleGeneral } from '../handlers/generalHandler';
import { handleEmi } from '../handlers/emiHandler';

export type Domain = 'loan' | 'policy' | 'insurance' | 'investment' | 'emi' | 'general';

// ✅ Explicitly type the keywords object
const domainKeywords: Record<Domain, string[]> = {
    loan: ['loan', 'interest', 'emi', 'लोन', 'ईएमआई', 'home loan', 'personal loan'],
    policy: ['policy', 'term plan', 'premium', 'पॉलिसी'],
    insurance: ['insurance', 'बीमा', 'health', 'life cover'],
    investment: ['investment', 'mutual fund', 'sip', 'निवेश'],
    emi: ['emi', 'installment', 'monthly payment', 'किस्त'],
    general: ['date', 'time', 'hello', 'thanks', 'weather', 'नाम', 'तारीख', 'समय']
};

export function detectDomain(input: string): Domain {
    const inputWords = input.toLowerCase().split(/\s+/);

    let bestMatch: Domain = 'general';
    let highestScore = 0;

    for (const domain of Object.keys(domainKeywords) as Domain[]) {
        const keywords = domainKeywords[domain];

        const score = keywords.reduce((count: number, keyword: string) => {
            const words = keyword.toLowerCase().split(/\s+/);
            const matchedWords = words.filter((word: string) => inputWords.includes(word));
            return count + matchedWords.length;
        }, 0);

        if (score > highestScore) {
            highestScore = score;
            bestMatch = domain;
        }
    }

    return bestMatch;
}

export function routeToHandler(input: string, isHindi: boolean) {
    const domain = detectDomain(input);

    switch (domain) {
        case 'loan':
            return handleLoan(input, isHindi);
        case 'policy':
            return handlePolicy(input, isHindi);
        case 'insurance':
            return handleInsurance(input, isHindi);
        case 'investment':
            return handleInvestment(input, isHindi);
        case 'emi':
            return handleEmi(input, isHindi);
        case 'general':
        default:
            return handleGeneral(input, isHindi);
    }
}
