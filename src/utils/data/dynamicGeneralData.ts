export interface DynamicGeneralInfo {
    keywords: string[];
    getResponse: (isHindi: boolean) => string;
}

// 📅 Current Date
const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
};

// ⏰ Current Time
const getCurrentTime = () => {
    const date = new Date();
    return date.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });
};

// 📆 Current Day
const getCurrentDay = () => {
    const date = new Date();
    return date.toLocaleDateString('en-IN', {
        weekday: 'long',
    });
};

// ☀️ Dynamic Greeting
const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    else if (hour < 18) return 'Good afternoon';
    else return 'Good evening';
};

export const dynamicGeneralData: DynamicGeneralInfo[] = [
    {
        keywords: ['today date', 'aaj ka date', 'what date is today', 'आज की तारीख'],
        getResponse: isHindi =>
            isHindi ? `आज की तारीख है ${getCurrentDate()}।` : `Today's date is ${getCurrentDate()}.`,
    },
    {
        keywords: ['current time', 'what time is it', 'abhi time kya hai', 'अभी कितना समय हुआ है'],
        getResponse: isHindi =>
            isHindi ? `अभी का समय है ${getCurrentTime()}।` : `The current time is ${getCurrentTime()}.`,
    },
    {
        keywords: ['what day is today', 'today day', 'aaj ka din', 'आज कौन सा दिन है'],
        getResponse: isHindi =>
            isHindi ? `आज ${getCurrentDay()} है।` : `Today is ${getCurrentDay()}.`,
    },
    {
        keywords: ['good morning', 'good afternoon', 'good evening', 'शुभ प्रभात', 'नमस्कार'],
        getResponse: isHindi =>
            isHindi ? `नमस्कार! आपको ${getGreeting()}।` : `${getGreeting()}! How can I help you today?`,
    },
    {
        keywords: ['your name', 'who are you', 'तुम कौन हो', 'तुम्हारा नाम क्या है'],
        getResponse: isHindi =>
            isHindi ? `मैं आपका एआई सहायक हूँ जो आपकी मदद के लिए हमेशा तैयार है।` : `I'm your AI assistant here to help you anytime.`,
    },
    {
        keywords: ['how are you', 'क्या हाल है', 'कैसे हो'],
        getResponse: isHindi =>
            isHindi ? `मैं बढ़िया हूँ! आपकी कैसे मदद कर सकता हूँ?` : `I'm doing great! How can I assist you today?`,
    },
    {
        keywords: ['thank you', 'thanks', 'शुक्रिया', 'धन्यवाद'],
        getResponse: isHindi => isHindi ? `आपका स्वागत है! 😊` : `You're welcome! 😊`,
    },
    {
        keywords: ['joke', 'tell me a joke', 'मजाक सुनाओ', 'funny'],
        getResponse: isHindi =>
            isHindi
                ? `बैंककर्मी ने नौकरी क्यों छोड़ी? क्योंकि उसका "interest" चला गया! 😂`
                : `Why did the banker quit his job? Because he lost interest! 😂`,
    },
    {
        keywords: ['weather', 'आज मौसम कैसा है', 'weather today', 'मौसम'],
        getResponse: isHindi =>
            isHindi
                ? `कृपया मौसम की जानकारी के लिए https://weather.com/hi-IN पर जाएं।`
                : `Please visit https://weather.com for weather updates.`,
    },
    {
        keywords: ['your work', 'what can you do', 'तुम क्या कर सकते हो'],
        getResponse: isHindi =>
            isHindi
                ? `मैं आपकी मदद कर सकता हूँ लोन, निवेश, बीमा, पॉलिसी और सामान्य सवालों में।`
                : `I can help you with loans, investments, insurance, policies, and general questions.`,
    },
    {
        keywords: ['reset', 'start again', 'रीसेट', 'दोबारा शुरू करो'],
        getResponse: isHindi =>
            isHindi
                ? `बिलकुल! चलिए फिर से शुरू करते हैं। आप क्या जानना चाहते हैं?`
                : `Sure! Let's start again. What would you like to know?`,
    },
    {
        keywords: ['time in hindi', 'date in hindi'],
        getResponse: () =>
            `कृपया बताएं आपको समय या तारीख की जानकारी किस भाषा में चाहिए।`,
    },
    {
        keywords: ['are you robot', 'are you ai', 'bot ho kya', 'तुम बोट हो'],
        getResponse: isHindi =>
            isHindi
                ? `हाँ, मैं एक AI बोट हूँ जो आपकी मदद के लिए बना हूँ।`
                : `Yes, I'm an AI bot created to help you.`,
    },
    {
        keywords: ['hello', 'hi', 'namaste', 'नमस्ते'],
        getResponse: isHindi =>
            isHindi ? `नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ?` : `Hello! How can I help you today?`,
    },
    {
        keywords: ['who made you', 'you are created by whom', 'तुम्हें किसने बनाया'],
        getResponse: isHindi =>
            isHindi
                ? `मुझे Connect India Enterprises की टीम ने बनाया है ताकि मैं आपकी सहायता कर सकूं।`
                : `I was created by the team at Connect India Enterprises to assist you.`,
    },
    {
        keywords: ['can you speak hindi', 'hindi bol sakte ho', 'do you know hindi'],
        getResponse: () =>
            `हाँ, मैं हिंदी और इंग्लिश दोनों में जवाब दे सकता हूँ।`,
    },
    {
        keywords: ['tell me time and date', 'समय और तारीख बताओ', 'aaj ki date aur time'],
        getResponse: isHindi =>
            isHindi
                ? `आज की तारीख है ${getCurrentDate()} और समय है ${getCurrentTime()}।`
                : `Today's date is ${getCurrentDate()} and the time is ${getCurrentTime()}.`,
    },
    {
        keywords: ['bye', 'goodbye', 'see you', 'बाय', 'अलविदा'],
        getResponse: isHindi =>
            isHindi ? `अलविदा! फिर मिलते हैं।` : `Goodbye! See you again.`,
    },
    {
        keywords: ['who is your developer', 'creator of chatbot', 'chatbot kisne banaya'],
        getResponse: isHindi =>
            isHindi
                ? `मुझे Connect India Enterprises की AI टीम ने डेवेलप किया है।`
                : `I was developed by the AI team at Connect India Enterprises.`,
    },
    {
        keywords: ['how to contact support', 'संपर्क कैसे करें', 'contact details'],
        getResponse: isHindi =>
            isHindi
                ? `आप हमारी वेबसाइट के माध्यम से सपोर्ट टीम से संपर्क कर सकते हैं: https://connectindiaenterprises.com/`
                : `You can contact our support via our website: https://connectindiaenterprises.com/`,
    },
];
