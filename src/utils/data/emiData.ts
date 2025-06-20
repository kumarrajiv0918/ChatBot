// data/emiData.ts
export interface EmiPrompt {
    keywords: string[];
    prompt_en: string;
    prompt_hi: string;
}

export const emiPrompts: EmiPrompt[] = [
    {
        keywords: [
            'emi calculator', 'emi loan calculator', 'calculate emi', 'emi', 'loan emi',
            'ईएमआई कैलकुलेटर', 'ईएमआई', 'लोन ईएमआई', 'किस्त कैलकुलेटर'
        ],
        prompt_en: `To calculate EMI, please enter details like:\nAmount: ₹\nInterest Rate: %\nDuration: in months (e.g. 12)\n\nExample:\nloan amount 100000 interest 12 duration 12`,
        prompt_hi: `EMI निकालने के लिए कृपया जानकारी दें:\nराशि: ₹\nब्याज दर: %\nअवधि: महीनों में (जैसे 12)\n\nउदाहरण:\nलोन राशि 100000 ब्याज 12 अवधि 12`
    }
];
