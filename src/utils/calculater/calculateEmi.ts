// utils/calculateEmi.ts

export interface EmiInput {
    principal?: number;
    rate?: number;
    months?: number;
}

export function parseEmiInput(input: string): EmiInput {
    const amountMatch = input.match(/(?:amount|loan|राशि)\s*[:\-]?\s*₹?([\d,]+)/i);
    const interestMatch = input.match(/(?:interest|rate|ब्याज)\s*[:\-]?\s*(\d+(\.\d+)?)/i);
    const durationMatch = input.match(/(?:duration|months|अवधि|tenure|माह)\s*[:\-]?\s*(\d+)/i);

    const principal = amountMatch ? parseFloat(amountMatch[1].replace(/,/g, '')) : undefined;
    const rate = interestMatch ? parseFloat(interestMatch[1]) : undefined;
    const months = durationMatch ? parseInt(durationMatch[1], 10) : undefined;

    return { principal, rate, months };
}

export function calculateEmi({ principal, rate, months }: EmiInput): string | null {
    if (!principal || !rate || !months) return null;

    const monthlyRate = rate / (12 * 100);
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    return (
        `📊 *EMI Loan Calculation*

Loan Amount     : ₹${principal.toLocaleString()}
Interest Rate   : ${rate}%
Loan Tenure     : ${months} months

━━━━━━━━━━━━━━━━━━
💡 Monthly EMI    : ₹${Math.round(emi).toLocaleString()}
💰 Total Payment  : ₹${Math.round(totalPayment).toLocaleString()}
📈 Total Interest : ₹${Math.round(totalInterest).toLocaleString()}
━━━━━━━━━━━━━━━━━━`
    );
}
