// chatbot/handlers/index.ts
import { handleGeneral } from './generalHandler';
import { handleLoan } from './loanHandler';
import { handleEmi } from './emiHandler';
import { handlePolicy } from './policyHandler';
import { handleInsurance } from './insuranceHandler';
import { handleInvestment } from './investmentHandler';

export function detectAndHandle(input: string, isHindi: boolean) {
    return (
        handleEmi(input, isHindi) ||
        handleLoan(input, isHindi) ||
        handlePolicy(input, isHindi) ||
        handleInsurance(input, isHindi) ||
        handleInvestment(input, isHindi) ||
        handleGeneral(input, isHindi) ||
        null
    );
}
