export interface GeneralInfo {
    keywords: string[];
    definition_en: string;
    example_en: string;
    link_en: string;
    definition_hi: string;
    example_hi: string;
    link_hi: string;
}

// 📅 Dynamic Date Response Function
export const getTodayDateResponse = (): GeneralInfo => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-IN', options); // e.g., 20 June 2025

    return {
        keywords: ['today date', 'aaj ka date', 'aj ka date', 'what date is today', 'आज की तारीख', 'आज कौनसी तारीख है'],
        definition_en: `Today is ${formattedDate}.`,
        example_en: ``,
        link_en: '',
        definition_hi: `आज की तारीख है ${formattedDate}.`,
        example_hi: ``,
        link_hi: ''
    };
};
export const generalData: GeneralInfo[] = [

    /** 👋 Greetings */
    {
        keywords: ['hi', 'hello', 'hey', 'good morning', 'good evening', 'namaste', 'नमस्ते', 'नमस्कार'],
        definition_en: `Hi Sir, how can I help you?`,
        example_en: ``,
        link_en: '',
        definition_hi: `नमस्ते सर, मैं आपकी कैसे मदद कर सकता हूँ?`,
        example_hi: ``,
        link_hi: ''
    },

    /** 🙏 Gratitude */
    {
        keywords: ['thanks', 'thank you', 'shukriya', 'dhanyawad', 'धन्यवाद', 'शुक्रिया'],
        definition_en: `You're most welcome! Feel free to ask anything.`,
        definition_hi: `आपका स्वागत है! आप कुछ भी पूछ सकते हैं।`,
        example_en: '',
        example_hi: '',
        link_en: '',
        link_hi: ''
    },
    {
        keywords: ['who are you', 'what is your name', 'are you bot', 'तुम कौन हो', 'आप कौन हैं'],
        definition_en: `I am your AI assistant designed to guide you in finance, loans, and support queries.`,
        definition_hi: `मैं आपका एआई सहायक हूँ जो लोन, वित्त और सहायता से जुड़ी जानकारी देने के लिए बना हूँ।`,
        example_en: '',
        example_hi: '',
        link_en: '',
        link_hi: ''
    },

    /** 🤝 Help */
    {
        keywords: ['help', 'i need help', 'can you help me', 'please help', 'मदद चाहिए', 'सहायता करें', 'मेरी मदद करो'],
        definition_en: `Of course! I'm here to assist you. Please tell me what you need help with.`,
        definition_hi: `ज़रूर! मैं आपकी मदद के लिए यहाँ हूँ। कृपया बताएं किसमें मदद चाहिए।`,
        example_en: '',
        example_hi: '',
        link_en: '',
        link_hi: ''
    },

    /** ❓ What can you do */
    {
        keywords: ['what can you do', 'your features', 'तुम क्या कर सकते हो', 'आप क्या कर सकते हैं'],
        definition_en: `I can help with loan info, EMI, bank details, basic queries, and more.`,
        definition_hi: `मैं लोन की जानकारी, EMI, बैंक से जुड़ी बातों और सामान्य सवालों में मदद कर सकता हूँ।`,
        example_en: '',
        example_hi: '',
        link_en: '',
        link_hi: ''
    },
    {
        keywords: ['weather', 'today weather', 'मौसम', 'आज का मौसम', 'बारिश हो रही है क्या'],
        definition_en: `You can check weather updates on your local weather app or website.`,
        definition_hi: `आप अपने स्थानीय मौसम ऐप या वेबसाइट से जानकारी प्राप्त कर सकते हैं।`,
        example_en: '',
        example_hi: '',
        link_en: 'https://www.weather.com/',
        link_hi: 'https://weather.com/hi-IN'
    },

    /** 😄 Joke */
    {
        keywords: ['tell me a joke', 'joke', 'मजाक सुनाओ', 'जोकर बात', 'funny'],
        definition_en: `Why did the banker switch careers? He lost interest. 😄`,
        definition_hi: `बैंककर्मी ने नौकरी क्यों छोड़ी? क्योंकि उसका "interest" चला गया! 😄`,
        example_en: '',
        example_hi: '',
        link_en: '',
        link_hi: ''
    },

    /** ❌ Bye */
    {
        keywords: ['bye', 'goodbye', 'see you', 'बाय', 'अलविदा'],
        definition_en: `Goodbye! Have a nice day.`,
        definition_hi: `अलविदा! आपका दिन शुभ हो।`,
        example_en: '',
        example_hi: '',
        link_en: '',
        link_hi: ''
    },

    /** 🔁 Repeat */
    {
        keywords: ['say again', 'repeat', 'फिर से कहो', 'दोहराओ', 'repeat that please'],
        definition_en: `Sure, here’s the information again...`,
        definition_hi: `बिलकुल, मैं दोबारा बताता हूँ...`,
        example_en: '',
        example_hi: '',
        link_en: '',
        link_hi: ''
    },

    /** 📲 App-related */
    {
        keywords: ['app not working', 'issue with app', 'app problem', 'ऐप नहीं खुल रहा', 'ऐप बंद हो गया'],
        definition_en: `Sorry for the trouble. Please try restarting the app or checking your internet connection.`,
        definition_hi: `परेशानी के लिए खेद है। कृपया ऐप को दोबारा चालू करें या इंटरनेट कनेक्शन जांचें।`,
        example_en: '',
        example_hi: '',
        link_en: '',
        link_hi: ''
    },

    /** 💸 Loan Help */
    {
        keywords: ['loan help', 'need loan info', 'लोन जानकारी', 'लोन चाहिए', 'लोन कैसे लें'],
        definition_en: `Sure! I can guide you through car, home, personal, and education loans. Please specify.`,
        definition_hi: `ज़रूर! मैं कार, होम, पर्सनल और एजुकेशन लोन में आपकी मदद कर सकता हूँ। कृपया बताएं किस प्रकार का लोन चाहिए।`,
        example_en: '',
        example_hi: '',
        link_en: '',
        link_hi: ''
    },

    /** 💼 Contact Human Support */
    {
        keywords: ['talk to human', 'customer support', 'contact agent', 'मानव से बात', 'कस्टमर केयर'],
        definition_en: `Our human support team will be available shortly. Please wait...`,
        definition_hi: `हमारी मानव सहायता टीम जल्द ही उपलब्ध होगी। कृपया प्रतीक्षा करें...`,
        example_en: '',
        example_hi: '',
        link_en: '',
        link_hi: ''
    },
    {
        keywords: ['i don’t understand', 'not clear', 'what do you mean', 'समझ नहीं आया', 'क्या मतलब है'],
        definition_en: `Let me try explaining again. Could you tell me which part was unclear? 🤔`,
        example_en: `You can say: "What is EMI?"`,
        link_en: '',
        definition_hi: `कोई बात नहीं! मैं फिर से समझाता हूँ। कृपया बताएं कौन सा हिस्सा समझ नहीं आया। 🤔`,
        example_hi: `आप कह सकते हैं: "EMI क्या होता है?"`,
        link_hi: ''
    },
    {
        keywords: ['how are you', 'what’s up', 'कैसे हो', 'क्या चल रहा है'],
        definition_en: `I'm great! Always ready to help you. 😊\nWould you like to know about loans, investments, or something else?`,
        definition_hi: `मैं बढ़िया हूँ! हमेशा आपकी मदद के लिए तैयार हूँ। 😊\nक्या आप लोन, निवेश या कुछ और जानना चाहते हैं?`,
        example_en: '',
        example_hi: '',
        link_en: '',
        link_hi: ''
    },
    {
        keywords: ['working hours', 'timing', 'kab khulte ho', 'working time', 'office hours', 'समय क्या है'],
        definition_en: `Our services are available 24/7. You can ask anything, anytime! 🕒\nWould you like to know about our features?`,
        definition_hi: `हमारी सेवाएं 24x7 उपलब्ध हैं। आप कभी भी सवाल पूछ सकते हैं! 🕒\nक्या आप हमारे फीचर्स के बारे में जानना चाहेंगे?`,
        example_en: '',
        example_hi: '',
        link_en: '',
        link_hi: ''
    },
    {
        keywords: ['restart', 'start again', 'reset', 'chat again', 'दोबारा शुरू करो', 'रीसेट'],
        definition_en: `Sure, let's start fresh! 🔄\nWhat would you like to explore—loans, policies, policy, investment or general support?`,
        definition_hi: `ज़रूर, हम फिर से शुरू करते हैं! 🔄\nआप क्या जानना चाहेंगे—लोन, पॉलिसी या सामान्य सहायता?`,
        example_en: '',
        example_hi: '',
        link_en: '',
        link_hi: ''
    }

];
