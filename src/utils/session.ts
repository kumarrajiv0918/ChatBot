// utils/session.ts (NEW FILE)
export interface EmiSession {
    principal?: number;
    rate?: number;
}

let sessionData: EmiSession = {};

export function saveEmiSession(data: EmiSession) {
    sessionData = { ...sessionData, ...data };
}

export function getEmiSession(): EmiSession {
    return sessionData;
}

export function clearEmiSession() {
    sessionData = {};
}
