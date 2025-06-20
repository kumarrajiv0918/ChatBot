export interface InvestmentInfo {
    keywords: string[];
    definition_en: string;
    example_en: string;
    link_en: string;
    definition_hi: string;
    example_hi: string;
    link_hi: string;
}

export const investmentData: InvestmentInfo[] = [
    /** 📈 General Investment **/
    {
        keywords: [
            'investment', 'what is investment', 'investment meaning', 'how to invest',
            'types of investment', 'best investment', 'investment ideas', 'long term investment',
            'mutual fund', 'stocks', 'real estate investment', 'safe investment', 'investment info',
            'निवेश', 'निवेश क्या है', 'इनवेस्टमेंट', 'इनवेस्टमेंट के प्रकार', 'पैसा कहां लगाएं',
            'इनवेस्ट कैसे करें', 'लाभदायक निवेश', 'निवेश जानकारी'
        ],
        definition_en: `Investment means putting money into financial products or assets like stocks, real estate, or mutual funds with the goal of generating returns or profits over time.
    
    **Popular Investment Types:**
    • Mutual Funds – managed portfolios for beginners  
    • Stocks – ownership in companies with high risk/reward  
    • Real Estate – property investments for rent or resale  
    • Fixed Deposits – low-risk, fixed-interest returns  
    • Gold – traditional and inflation-resistant  
    
    Investing wisely helps grow wealth and meet future goals like buying a house, retirement, or education.`,
        example_en: `Example: ₹1 lakh invested in mutual funds at 12% annual return for 5 years = ~₹1.76 lakh.`,
        link_en: 'https://www.investindia.gov.in',

        definition_hi: `निवेश का अर्थ है अपने पैसे को ऐसे साधनों या संपत्तियों में लगाना जो भविष्य में लाभ या आय उत्पन्न करें, जैसे कि स्टॉक्स, म्यूचुअल फंड्स या रियल एस्टेट।
    
    **लोकप्रिय निवेश प्रकार:**
    • म्यूचुअल फंड – शुरुआती निवेशकों के लिए सरल विकल्प  
    • स्टॉक्स – कंपनियों में हिस्सेदारी (उच्च जोखिम व लाभ)  
    • रियल एस्टेट – संपत्ति में निवेश  
    • फिक्स्ड डिपॉजिट – कम जोखिम वाले सुनिश्चित रिटर्न  
    • सोना – पारंपरिक व मुद्रास्फीति से सुरक्षित निवेश  
    
    स्मार्ट निवेश से आप भविष्य के लिए धन जोड़ सकते हैं जैसे घर खरीदना, रिटायरमेंट, या बच्चों की शिक्षा।`,
        example_hi: `उदाहरण: ₹1 लाख को म्यूचुअल फंड में 12% वार्षिक रिटर्न पर 5 साल तक निवेश करने पर ~₹1.76 लाख मिल सकता है।`,
        link_hi: 'https://www.investindia.gov.in/hi'
    },

    /** 🧾 Mutual Fund **/
    {
        keywords: [
            'mutual fund', 'sip', 'systematic investment plan', 'mf investment', 'mutual fund return',
            'best mutual funds', 'mutual fund india', 'mutual fund sip',
            'म्यूचुअल फंड', 'सिप', 'निवेश योजना', 'बेस्ट म्यूचुअल फंड', 'म्यूचुअल फंड में निवेश'
        ],
        definition_en: `Mutual funds pool money from multiple investors to invest in stocks, bonds, or other assets. SIP (Systematic Investment Plan) is a way to invest fixed amounts regularly.`,
        example_en: `Example: SIP of ₹5,000/month in a fund giving 12% annual return = ~₹11.6 lakh in 10 years.`,
        link_en: 'https://www.amfiindia.com/',
        definition_hi: `म्यूचुअल फंड एक निवेश साधन है जिसमें कई निवेशकों का पैसा मिलाकर शेयर, बॉन्ड आदि में लगाया जाता है। SIP यानी 'सिस्टमैटिक इन्वेस्टमेंट प्लान' से नियमित निवेश किया जाता है।`,
        example_hi: `उदाहरण: ₹5,000 की मासिक SIP अगर 12% रिटर्न दे तो 10 वर्षों में ~₹11.6 लाख मिल सकते हैं।`,
        link_hi: 'https://www.amfiindia.com/hindi'
    },

    /** 🏦 Fixed Deposit (FD) **/
    {
        keywords: [
            'fixed deposit', 'fd investment', 'safe investment', 'fd interest rate', 'bank deposit',
            'term deposit', 'fd account',
            'फिक्स्ड डिपॉज़िट', 'एफडी', 'बचत निवेश', 'ब्याज दर', 'बैंक एफडी', 'निश्चित जमा'
        ],
        definition_en: `Fixed Deposit (FD) is a secure investment where money is deposited in a bank for a fixed tenure and earns interest. It's ideal for low-risk investors.`,
        example_en: `Example: ₹1 lakh FD at 7% for 5 years gives ₹1.4 lakh on maturity.`,
        link_en: 'https://www.rbi.org.in/',
        definition_hi: `फिक्स्ड डिपॉज़िट (FD) एक सुरक्षित निवेश होता है जिसमें एक निश्चित समय के लिए बैंक में पैसा जमा किया जाता है और उस पर ब्याज मिलता है। यह कम जोखिम वाले निवेशकों के लिए उपयुक्त है।`,
        example_hi: `उदाहरण: ₹1 लाख की FD पर 7% ब्याज दर से 5 वर्षों में ₹1.4 लाख मिल सकते हैं।`,
        link_hi: 'https://www.rbi.org.in/hindi'
    },

    /** 📉 Stock Market **/
    {
        keywords: [
            'stock market', 'share market', 'invest in shares', 'nse', 'bse', 'buy stocks',
            'equity investment', 'stock return', 'trading',
            'शेयर बाजार', 'स्टॉक मार्केट', 'शेयर में निवेश', 'इक्विटी निवेश', 'शेयर खरीदना'
        ],
        definition_en: `Stock market investment involves buying shares of companies to earn returns through price appreciation or dividends. It has higher risk and higher potential rewards.`,
        example_en: `Example: ₹1 lakh invested in stock XYZ grew to ₹1.5 lakh in 1 year (50% return).`,
        link_en: 'https://www.nseindia.com/',
        definition_hi: `शेयर बाजार में निवेश का मतलब है कंपनियों के शेयर खरीदना जिससे मूल्य वृद्धि या डिविडेंड के रूप में रिटर्न प्राप्त होता है। इसमें जोखिम अधिक होता है लेकिन रिटर्न की संभावना भी अधिक होती है।`,
        example_hi: `उदाहरण: ₹1 लाख निवेश कर 1 वर्ष में ₹1.5 लाख हो गया (50% रिटर्न)।`,
        link_hi: 'https://www.nseindia.com/'
    },

    /** 👴 Retirement / Pension **/
    {
        keywords: [
            'retirement planning', 'nps', 'pension plan', 'ppf', 'employee provident fund',
            'long term savings', 'senior citizen savings',
            'रिटायरमेंट योजना', 'पेंशन योजना', 'एनपीएस', 'पीपीएफ', 'वरिष्ठ नागरिक योजना'
        ],
        definition_en: `Retirement investments like NPS, PPF, and pension plans help accumulate funds for post-retirement life. These are long-term and tax-efficient options.`,
        example_en: `Example: NPS gives ~8-10% annual return and offers tax benefits under Section 80CCD.`,
        link_en: 'https://www.npscra.nsdl.co.in/',
        definition_hi: `रिटायरमेंट निवेश जैसे NPS, PPF और पेंशन योजनाएं सेवानिवृत्ति के बाद के जीवन के लिए धन संचित करने में मदद करती हैं। ये दीर्घकालिक और कर-बचत योजनाएं होती हैं।`,
        example_hi: `उदाहरण: NPS लगभग 8-10% वार्षिक रिटर्न देता है और धारा 80CCD के तहत कर लाभ भी देता है।`,
        link_hi: 'https://www.npscra.nsdl.co.in/hindi.php'
    },
    {
        keywords: ['types of investments', 'investment options', 'how to invest', 'best investments', 'निवेश के प्रकार', 'निवेश विकल्प'],
        definition_en: 'There are various types of investments including stocks, bonds, mutual funds, real estate, gold, and fixed deposits.',
        example_en: 'Example: Mutual funds offer a diversified investment across different stocks.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'निवेश के कई प्रकार होते हैं जैसे शेयर, बॉन्ड, म्यूचुअल फंड, रियल एस्टेट, सोना और फिक्स्ड डिपॉजिट।',
        example_hi: 'उदाहरण: म्यूचुअल फंड विभिन्न शेयरों में विविध निवेश प्रदान करता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['stock investment', 'share market investment', 'how to invest in stocks', 'शेयर में निवेश', 'स्टॉक मार्केट निवेश'],
        definition_en: 'Stock investment involves buying shares of publicly traded companies with the expectation of gaining dividends or capital appreciation.',
        example_en: 'Example: Buying shares of TCS or Infosys through a stock broker.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'स्टॉक में निवेश का अर्थ है सार्वजनिक कंपनियों के शेयर खरीदना, जिससे लाभांश या पूंजी में वृद्धि की आशा होती है।',
        example_hi: 'उदाहरण: टीसीएस या इन्फोसिस के शेयर शेयर बाजार के माध्यम से खरीदना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual funds', 'sip investment', 'mutual fund kya hai', 'what is SIP', 'एसआईपी क्या है', 'म्यूचुअल फंड'],
        definition_en: 'Mutual funds pool money from many investors to invest in diversified securities. SIP (Systematic Investment Plan) is a method of investing in mutual funds periodically.',
        example_en: 'Example: A ₹1000 monthly SIP in equity mutual funds.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'म्यूचुअल फंड कई निवेशकों से धन एकत्र कर उसे विविध जगहों पर निवेश करता है। एसआईपी एक नियमित रूप से निवेश करने की प्रक्रिया है।',
        example_hi: 'उदाहरण: ₹1000 प्रतिमाह की एसआईपी एक इक्विटी म्यूचुअल फंड में।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['real estate investment', 'property investment', 'property return', 'रियल एस्टेट निवेश', 'संपत्ति में निवेश'],
        definition_en: 'Real estate investment involves buying property with the aim of earning rental income or long-term capital gains.',
        example_en: 'Example: Buying a flat and renting it out.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'रियल एस्टेट निवेश में संपत्ति खरीदना शामिल है, जिससे किराये की आय या दीर्घकालिक लाभ मिल सकता है।',
        example_hi: 'उदाहरण: एक फ्लैट खरीदकर उसे किराए पर देना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['gold investment', 'sovereign gold bonds', 'buying gold', 'सोने में निवेश', 'गोल्ड में निवेश'],
        definition_en: 'Investing in gold can be done through physical gold, ETFs, or Sovereign Gold Bonds. It helps hedge against inflation.',
        example_en: 'Example: Investing in 5 grams of Sovereign Gold Bonds.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'सोने में निवेश फिजिकल गोल्ड, ईटीएफ या सॉवरेन गोल्ड बॉन्ड्स के माध्यम से किया जा सकता है। यह महंगाई से सुरक्षा प्रदान करता है।',
        example_hi: 'उदाहरण: 5 ग्राम के सॉवरेन गोल्ड बॉन्ड्स में निवेश।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['fixed deposit', 'fd investment', 'what is fd', 'फिक्स्ड डिपॉजिट', 'एफडी क्या है'],
        definition_en: 'A Fixed Deposit (FD) is a secure investment where money is deposited for a fixed period and earns a fixed rate of interest.',
        example_en: 'Example: A 1-year FD at 6.5% interest in SBI.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'फिक्स्ड डिपॉजिट (एफडी) एक सुरक्षित निवेश है जिसमें एक निर्धारित अवधि के लिए पैसा जमा किया जाता है और उस पर निश्चित ब्याज मिलता है।',
        example_hi: 'उदाहरण: एसबीआई में 6.5% ब्याज दर पर 1 वर्ष की एफडी।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['ppf account', 'public provident fund', 'long term saving', 'पीपीएफ खाता', 'पब्लिक प्रोविडेंट फंड'],
        definition_en: 'PPF is a long-term savings and tax-saving investment backed by the government, offering tax-free returns.',
        example_en: 'Example: Investing ₹1.5 lakh annually in PPF saves tax under section 80C.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'पीपीएफ एक दीर्घकालिक बचत और टैक्स सेविंग योजना है जिसमें सरकार की गारंटी होती है और ब्याज कर मुक्त होता है।',
        example_hi: 'उदाहरण: हर साल ₹1.5 लाख पीपीएफ में निवेश कर के 80C के तहत टैक्स छूट प्राप्त करना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['risk in investment', 'investment risk types', 'निवेश जोखिम', 'जोखिम के प्रकार', 'how to manage risk'],
        definition_en: 'Every investment carries some level of risk, such as market risk, credit risk, or liquidity risk. Diversification helps manage risk.',
        example_en: 'Example: Investing only in one stock is riskier than a diversified mutual fund.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'हर निवेश में कुछ न कुछ जोखिम होता है जैसे कि मार्केट रिस्क, क्रेडिट रिस्क या लिक्विडिटी रिस्क। विविधता से जोखिम कम होता है।',
        example_hi: 'उदाहरण: एक ही शेयर में निवेश करना एक विविध म्यूचुअल फंड की तुलना में अधिक जोखिम भरा होता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['returns on investment', 'investment return types', 'how much return', 'निवेश पर रिटर्न', 'इन्वेस्टमेंट रिटर्न'],
        definition_en: 'Return on investment (ROI) is the gain or loss made from an investment relative to its cost. It can be in the form of interest, dividends, or capital gain.',
        example_en: 'Example: Getting 12% annual return from an equity mutual fund.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'निवेश पर रिटर्न (ROI) निवेश पर हुए लाभ या हानि को दर्शाता है जो उसकी लागत के अनुपात में होता है। यह ब्याज, लाभांश या पूंजी लाभ के रूप में हो सकता है।',
        example_hi: 'उदाहरण: एक इक्विटी म्यूचुअल फंड से सालाना 12% रिटर्न प्राप्त होना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['retirement investment', 'retirement planning', 'best retirement plans', 'रिटायरमेंट निवेश', 'पेंशन योजना'],
        definition_en: 'Retirement investment helps build a financial cushion for your post-retirement years through options like NPS, PPF, annuity plans, etc.',
        example_en: 'Example: National Pension Scheme (NPS) allows monthly investments for retirement income.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'रिटायरमेंट निवेश आपके सेवानिवृत्ति के बाद के जीवन के लिए आर्थिक सुरक्षा प्रदान करता है। इसके विकल्पों में एनपीएस, पीपीएफ, वार्षिकी योजनाएं शामिल हैं।',
        example_hi: 'उदाहरण: नेशनल पेंशन स्कीम (एनपीएस) मासिक निवेश के माध्यम से पेंशन आय देती है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['emergency fund investment', 'short term fund', 'liquid fund', 'इमरजेंसी फंड', 'आपातकालीन निधि निवेश'],
        definition_en: 'Emergency fund investments should be liquid and low-risk, typically in savings, liquid mutual funds, or fixed deposits.',
        example_en: 'Example: Keeping 3–6 months of expenses in a liquid fund.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'आपातकालीन निधि निवेश को तरल और कम जोखिम वाला होना चाहिए, जैसे सेविंग अकाउंट, लिक्विड फंड या एफडी।',
        example_hi: 'उदाहरण: 3–6 महीने का खर्च लिक्विड फंड में रखना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['ulip plan', 'unit linked insurance plan', 'ulip vs mutual fund', 'यूएलआईपी योजना', 'बीमा और निवेश'],
        definition_en: 'ULIP (Unit Linked Insurance Plan) combines insurance and investment where a part of the premium is invested in equity or debt markets.',
        example_en: 'Example: A ₹50,000 annual ULIP premium partially goes to insurance and partially to equity funds.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'यूएलआईपी (यूनिट लिंक्ड इंश्योरेंस प्लान) एक योजना है जिसमें बीमा और निवेश दोनों शामिल होते हैं। इसमें एक भाग बीमा और दूसरा भाग शेयर बाजार में निवेश होता है।',
        example_hi: 'उदाहरण: ₹50,000 की वार्षिक यूएलआईपी प्रीमियम का कुछ भाग बीमा और बाकी भाग इक्विटी फंड में निवेश होता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['nps investment', 'national pension scheme', 'nps benefits', 'एनपीएस क्या है', 'नेशनल पेंशन योजना'],
        definition_en: 'NPS is a government-backed retirement savings plan offering tax benefits and market-linked returns through equity and debt options.',
        example_en: 'Example: Investing ₹6000/year in NPS qualifies for additional 80CCD(1B) tax deduction.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'एनपीएस सरकार द्वारा समर्थित एक रिटायरमेंट योजना है जिसमें कर लाभ और बाजार-आधारित रिटर्न मिलते हैं।',
        example_hi: 'उदाहरण: एनपीएस में ₹6000 प्रति वर्ष निवेश करने पर 80CCD(1B) के तहत अतिरिक्त टैक्स छूट मिलती है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['tax saving investments', 'save tax under 80C', 'best tax saving schemes', 'कर बचत निवेश', '80सी निवेश'],
        definition_en: 'Tax-saving investments help reduce taxable income under Section 80C. Popular options include ELSS, PPF, NPS, and 5-year FD.',
        example_en: 'Example: ELSS mutual funds offer market returns and tax benefits up to ₹1.5 lakh.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'कर बचत निवेश से आप धारा 80सी के तहत कर योग्य आय को कम कर सकते हैं। इसके विकल्पों में ईएलएसएस, पीपीएफ, एनपीएस और 5 साल की एफडी शामिल हैं।',
        example_hi: 'उदाहरण: ईएलएसएस म्यूचुअल फंड्स ₹1.5 लाख तक का कर लाभ और बाज़ार आधारित रिटर्न देते हैं।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['elss funds', 'equity linked savings scheme', 'elss vs ppf', 'ईएलएसएस फंड', 'टैक्स सेविंग म्यूचुअल फंड'],
        definition_en: 'ELSS funds are equity mutual funds with a 3-year lock-in, eligible for tax deduction under Section 80C.',
        example_en: 'Example: ₹50,000 invested in ELSS gives tax savings and market returns.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'ईएलएसएस फंड एक इक्विटी म्यूचुअल फंड है जिसमें 3 साल की लॉक-इन अवधि होती है और यह 80सी के तहत टैक्स कटौती योग्य है।',
        example_hi: 'उदाहरण: ₹50,000 का निवेश ईएलएसएस में टैक्स बचत और बाज़ार आधारित लाभ देता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['sip benefits', 'advantages of sip', 'why sip is better', 'एसआईपी के फायदे', 'एसआईपी क्यों बेहतर है'],
        definition_en: 'SIPs offer disciplined investing, rupee-cost averaging, and compounding benefits by investing a fixed amount regularly.',
        example_en: 'Example: Investing ₹2000/month for 10 years via SIP in equity funds.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'एसआईपी नियमित निवेश करने की आदत को बढ़ावा देता है और इसमें रुपया लागत औसत और चक्रवृद्धि का लाभ मिलता है।',
        example_hi: 'उदाहरण: इक्विटी फंड में 10 वर्षों तक ₹2000/माह एसआईपी करना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['recurring deposit', 'rd account', 'monthly savings rd', 'आरडी खाता', 'रिकरिंग डिपॉजिट'],
        definition_en: 'Recurring Deposit (RD) is a fixed monthly investment for a fixed tenure with a fixed interest rate, ideal for disciplined savings.',
        example_en: 'Example: Monthly ₹1000 RD in post office for 5 years.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'आरडी एक निश्चित मासिक निवेश योजना है जिसमें निश्चित अवधि और निश्चित ब्याज दर होती है। यह अनुशासित बचत के लिए उपयुक्त है।',
        example_hi: 'उदाहरण: पोस्ट ऑफिस में ₹1000 प्रति माह की आरडी 5 साल के लिए।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['inflation and investment', 'inflation hedge', 'inflation beating returns', 'मुद्रास्फीति और निवेश', 'महंगाई में निवेश'],
        definition_en: 'Investments should aim to beat inflation. Equity and real estate often provide inflation-beating returns over the long term.',
        example_en: 'Example: Fixed deposit at 6% may not beat inflation at 7%.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'निवेश को मुद्रास्फीति को मात देने वाला होना चाहिए। इक्विटी और रियल एस्टेट दीर्घकाल में बेहतर रिटर्न दे सकते हैं।',
        example_hi: 'उदाहरण: 6% ब्याज की एफडी यदि मुद्रास्फीति 7% है तो वास्तविक लाभ नहीं होगा।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['demat account', 'how to open demat account', 'share trading account', 'डीमैट खाता', 'स्टॉक खाता'],
        definition_en: 'A Demat account holds your shares and securities in electronic format, required for buying/selling stocks online.',
        example_en: 'Example: Zerodha and Groww offer easy Demat account opening.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'डीमैट खाता आपके शेयरों और प्रतिभूतियों को इलेक्ट्रॉनिक रूप में रखने का खाता होता है, जो ऑनलाइन ट्रेडिंग के लिए जरूरी है।',
        example_hi: 'उदाहरण: Zerodha और Groww जैसे प्लेटफॉर्म पर डीमैट खाता आसानी से खोला जा सकता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['stock market investment', 'how to invest in stocks', 'शेयर बाजार में निवेश', 'स्टॉक्स में पैसा कैसे लगाएं'],
        definition_en: 'Stock market investment involves buying shares of companies to earn profits through price appreciation and dividends.',
        example_en: 'Example: Buying Reliance shares and holding them for long-term growth.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'शेयर बाजार में निवेश का मतलब कंपनियों के शेयर खरीदना होता है ताकि मूल्य वृद्धि और डिविडेंड के ज़रिए लाभ कमाया जा सके।',
        example_hi: 'उदाहरण: रिलायंस के शेयर खरीदकर उन्हें दीर्घकाल के लिए होल्ड करना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['dividend stocks', 'stocks with dividends', 'डिविडेंड स्टॉक्स', 'लाभांश देने वाले शेयर'],
        definition_en: 'Dividend stocks are shares of companies that regularly pay a portion of their profits to shareholders.',
        example_en: 'Example: ITC regularly pays dividends to its shareholders.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'डिविडेंड स्टॉक्स ऐसी कंपनियों के शेयर होते हैं जो नियमित रूप से अपने मुनाफे का एक हिस्सा लाभांश के रूप में निवेशकों को देती हैं।',
        example_hi: 'उदाहरण: ITC अपने शेयरधारकों को नियमित रूप से लाभांश देती है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['debt mutual funds', 'low risk funds', 'डेब्ट म्यूचुअल फंड', 'कम जोखिम वाला निवेश'],
        definition_en: 'Debt mutual funds invest in fixed income instruments like bonds, treasury bills, and are ideal for conservative investors.',
        example_en: 'Example: A liquid fund in the debt category is used for short-term parking.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'डेब्ट म्यूचुअल फंड बॉन्ड्स, ट्रेज़री बिल्स जैसे निश्चित आय वाले साधनों में निवेश करते हैं और यह कम जोखिम वाले निवेशकों के लिए उपयुक्त होते हैं।',
        example_hi: 'उदाहरण: लिक्विड फंड्स को शॉर्ट-टर्म निवेश के लिए इस्तेमाल किया जाता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['growth vs dividend mutual fund', 'difference between growth and dividend', 'ग्रोथ बनाम डिविडेंड फंड', 'म्यूचुअल फंड में ग्रोथ या डिविडेंड'],
        definition_en: 'In growth plans, returns are reinvested, while in dividend plans, profits are paid out regularly. Growth is better for long-term compounding.',
        example_en: 'Example: Growth option gives more value over 10 years due to compounding.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'ग्रोथ प्लान में रिटर्न को दोबारा निवेश किया जाता है जबकि डिविडेंड प्लान में लाभांश समय-समय पर भुगतान किया जाता है। ग्रोथ प्लान दीर्घकाल के लिए बेहतर होता है।',
        example_hi: 'उदाहरण: ग्रोथ विकल्प 10 वर्षों में चक्रवृद्धि के कारण अधिक रिटर्न देता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['index funds', 'nifty 50 fund', 'low cost mutual fund', 'इंडेक्स फंड क्या है', 'निफ्टी में निवेश'],
        definition_en: 'Index funds are mutual funds that track a market index like Nifty or Sensex. They are low-cost and passive investment options.',
        example_en: 'Example: Nifty 50 Index Fund mirrors performance of top 50 listed companies.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'इंडेक्स फंड ऐसे म्यूचुअल फंड होते हैं जो निफ्टी या सेंसेक्स जैसे बाजार सूचकांक को फॉलो करते हैं। ये कम लागत वाले और निष्क्रिय निवेश होते हैं।',
        example_hi: 'उदाहरण: निफ्टी 50 इंडेक्स फंड शीर्ष 50 कंपनियों के प्रदर्शन को दर्शाता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['real estate investment', 'property investment', 'रियल एस्टेट में निवेश', 'प्रॉपर्टी में पैसा कैसे लगाएं'],
        definition_en: 'Real estate investment involves buying, renting, or selling property for returns through rental income or price appreciation.',
        example_en: 'Example: Buying a flat and renting it for ₹15,000/month income.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'रियल एस्टेट निवेश का मतलब संपत्ति खरीदना, किराए पर देना या भविष्य में बेचकर मुनाफा कमाना होता है।',
        example_hi: 'उदाहरण: फ्लैट खरीदकर उसे ₹15,000 प्रतिमाह पर किराए पर देना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['reit investment', 'real estate investment trust', 'reit returns', 'रीट क्या है', 'रियल एस्टेट निवेश ट्रस्ट'],
        definition_en: 'REITs allow individuals to invest in real estate projects and earn rental income or dividends without directly owning property.',
        example_en: 'Example: Embassy REIT offers rental-linked returns and dividends.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'रीट एक ऐसा माध्यम है जिससे आम निवेशक रियल एस्टेट प्रोजेक्ट्स में निवेश करके किराया और डिविडेंड के रूप में रिटर्न कमा सकते हैं।',
        example_hi: 'उदाहरण: एम्बेसी रीट किराया आधारित रिटर्न और लाभांश देती है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['gold investment', 'how to invest in gold', 'गोल्ड में निवेश', 'सोने में निवेश कैसे करें'],
        definition_en: 'Gold investment includes physical gold, ETFs, sovereign gold bonds. It acts as a hedge against inflation and market volatility.',
        example_en: 'Example: Sovereign Gold Bonds offer 2.5% interest and capital appreciation.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'सोने में निवेश के रूप में फिजिकल गोल्ड, गोल्ड ईटीएफ, या सॉवरेन गोल्ड बॉन्ड आते हैं। यह मुद्रास्फीति और बाज़ार अस्थिरता के खिलाफ सुरक्षा देता है।',
        example_hi: 'उदाहरण: सॉवरेन गोल्ड बॉन्ड 2.5% ब्याज और मूल्य वृद्धि दोनों देता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['sovereign gold bonds', 'sbg investment', 'gold bonds return', 'सॉवरेन गोल्ड बॉन्ड', 'एसजीबी निवेश'],
        definition_en: 'Sovereign Gold Bonds are RBI-issued securities offering fixed interest and gold price appreciation. They are held in Demat or paper form.',
        example_en: 'Example: SGB bought in 2020 at ₹4000 per gram now trades at ₹6200.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'सॉवरेन गोल्ड बॉन्ड आरबीआई द्वारा जारी बॉन्ड हैं जो निश्चित ब्याज और सोने की कीमत के साथ रिटर्न देते हैं। इन्हें डिमैट या पेपर फॉर्म में रखा जाता है।',
        example_hi: 'उदाहरण: ₹4000 प्रति ग्राम पर खरीदा गया एसजीबी अब ₹6200 पर ट्रेड कर रहा है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['sip calculator', 'investment calculator', 'how to calculate returns', 'एसआईपी कैलकुलेटर', 'निवेश गणना'],
        definition_en: 'An SIP calculator helps you estimate future value of your SIP investments based on monthly amount, tenure, and expected returns.',
        example_en: 'Example: ₹5000/month SIP for 10 years at 12% gives approx ₹11.6 lakh.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'एसआईपी कैलकुलेटर आपके मासिक निवेश, अवधि और अनुमानित रिटर्न के आधार पर भविष्य का मूल्य बताता है।',
        example_hi: 'उदाहरण: ₹5000/माह एसआईपी, 10 साल, 12% रिटर्न पर लगभग ₹11.6 लाख देती है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['how to start investing', 'beginner investment tips', 'शुरुआती निवेश कैसे करें', 'निवेश की शुरुआत'],
        definition_en: 'To start investing, identify your goals, understand your risk appetite, and choose instruments like mutual funds, SIPs, or FDs accordingly.',
        example_en: 'Example: A beginner can start SIPs of ₹1000/month in a balanced fund.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'निवेश शुरू करने के लिए अपने लक्ष्य, जोखिम सहनशीलता को समझें और म्यूचुअल फंड, SIP या FD जैसे विकल्प चुनें।',
        example_hi: 'उदाहरण: कोई भी ₹1000/माह का SIP बैलेंस्ड फंड में शुरू कर सकता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['retirement planning investment', 'how to invest for retirement', 'रिटायरमेंट के लिए निवेश', 'पेंशन निवेश योजना'],
        definition_en: 'Retirement planning involves building a corpus for your post-retirement life using long-term instruments like NPS, PPF, or retirement funds.',
        example_en: 'Example: Investing ₹6000/month in NPS for 25 years builds a solid pension fund.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'रिटायरमेंट प्लानिंग का मतलब होता है रिटायरमेंट के बाद की ज़िंदगी के लिए फंड तैयार करना। इसके लिए एनपीएस, पीपीएफ जैसे लंबे समय के निवेश होते हैं।',
        example_hi: 'उदाहरण: 25 साल तक ₹6000/माह NPS में निवेश से अच्छा पेंशन फंड बनता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['high risk investment', 'aggressive investment strategy', 'उच्च जोखिम निवेश', 'तेज रिटर्न निवेश'],
        definition_en: 'High-risk investments include stocks, crypto, small-cap funds. They offer higher returns but also higher volatility.',
        example_en: 'Example: Small-cap mutual funds can give 20%+ returns but are volatile.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'उच्च जोखिम निवेश जैसे स्टॉक्स, क्रिप्टो या स्मॉल-कैप फंड्स तेज रिटर्न दे सकते हैं, लेकिन इनमें अस्थिरता अधिक होती है।',
        example_hi: 'उदाहरण: स्मॉल-कैप फंड्स 20%+ रिटर्न दे सकते हैं पर इनमें उतार-चढ़ाव ज़्यादा होता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['low risk investment', 'safe investment options', 'कम जोखिम वाला निवेश', 'सुरक्षित निवेश'],
        definition_en: 'Low-risk investments include FDs, PPF, government bonds, and debt mutual funds. These are suitable for conservative investors.',
        example_en: 'Example: PPF gives fixed 7–8% returns with tax benefits.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'कम जोखिम वाले निवेश जैसे FD, PPF, सरकारी बॉन्ड और डेब्ट म्यूचुअल फंड सुरक्षित निवेश माने जाते हैं।',
        example_hi: 'उदाहरण: पीपीएफ 7–8% निश्चित रिटर्न देता है और टैक्स लाभ भी देता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['investment for children', 'child education plan', 'बच्चों के लिए निवेश', 'शिक्षा निवेश योजना'],
        definition_en: 'Investment for children focuses on long-term needs like education or marriage, using Sukanya Samriddhi, PPF, or child ULIPs.',
        example_en: 'Example: Sukanya Samriddhi Yojana is ideal for girl child savings.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'बच्चों के लिए निवेश दीर्घकालिक ज़रूरतों जैसे शिक्षा या विवाह के लिए होता है, जिसमें सुकन्या समृद्धि, पीपीएफ आदि आते हैं।',
        example_hi: 'उदाहरण: सुकन्या समृद्धि योजना बेटियों के लिए बेहतरीन सेविंग स्कीम है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['investment for tax saving', 'best tax saving instruments', 'टैक्स सेविंग के लिए निवेश', 'टैक्स बचाने का तरीका'],
        definition_en: 'Investments like ELSS, PPF, NPS, and insurance qualify for tax deductions under Section 80C or 80CCD.',
        example_en: 'Example: ELSS allows ₹1.5 lakh deduction with potential equity returns.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'ELSS, PPF, NPS और बीमा जैसी योजनाएं टैक्स बचाने के लिए धारा 80C और 80CCD के तहत छूट देती हैं।',
        example_hi: 'उदाहरण: ELSS में ₹1.5 लाख तक की कटौती मिलती है और इक्विटी रिटर्न भी मिल सकता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['nps investment', 'national pension system', 'एनपीएस निवेश', 'नेशनल पेंशन योजना'],
        definition_en: 'NPS is a government-backed pension plan that helps individuals accumulate a retirement corpus and offers tax benefits.',
        example_en: 'Example: You can invest ₹6000/year and claim tax under 80CCD(1B).',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'एनपीएस एक सरकारी पेंशन योजना है जो रिटायरमेंट के लिए कोष बनाने में मदद करती है और टैक्स में छूट भी देती है।',
        example_hi: 'उदाहरण: आप ₹6000/वर्ष निवेश करके 80CCD(1B) के तहत टैक्स में छूट पा सकते हैं।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['ulip plans', 'unit linked insurance plan', 'यूलिप प्लान', 'यूनिट लिंक्ड बीमा योजना'],
        definition_en: 'ULIPs are hybrid products offering both insurance and market-linked returns. They have a lock-in of 5 years and tax benefits.',
        example_en: 'Example: ULIP returns depend on equity market performance.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'यूलिप एक हाइब्रिड प्रोडक्ट होता है जो बीमा और निवेश दोनों प्रदान करता है। इसमें 5 साल का लॉक-इन और टैक्स लाभ होता है।',
        example_hi: 'उदाहरण: यूलिप में रिटर्न इक्विटी मार्केट के प्रदर्शन पर निर्भर करता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['investment for passive income', 'how to earn passive income', 'पैसिव इनकम के लिए निवेश', 'निरंतर आय के लिए निवेश'],
        definition_en: 'To build passive income, invest in rental properties, dividend stocks, REITs, or SWP in mutual funds.',
        example_en: 'Example: Monthly SWP of ₹10,000 from ₹20 lakh debt fund.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'निरंतर आय के लिए किराए की प्रॉपर्टी, डिविडेंड स्टॉक्स, REITs या म्यूचुअल फंड में SWP से निवेश किया जाता है।',
        example_hi: 'उदाहरण: ₹20 लाख के डेब्ट फंड से ₹10,000 मासिक SWP किया जा सकता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['sip vs lumpsum', 'which is better sip or lumpsum', 'एसआईपी बनाम लंपसम', 'निवेश का सही तरीका'],
        definition_en: 'SIP invests small amounts regularly while lumpsum is one-time. SIP suits salaried individuals; lumpsum suits when funds are ready.',
        example_en: 'Example: ₹5000/month SIP may outperform a lumpsum in volatile markets.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP नियमित छोटी राशि में निवेश करता है जबकि लंपसम एक बार में बड़ा निवेश होता है। SIP नौकरीपेशा लोगों के लिए उपयुक्त है।',
        example_hi: 'उदाहरण: अस्थिर बाज़ार में SIP लंपसम से बेहतर रिटर्न दे सकता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['investment in bonds', 'government bonds', 'safe bond investment', 'बॉन्ड में निवेश', 'सरकारी बॉन्ड'],
        definition_en: 'Bonds are fixed-income instruments where you lend money to the government or companies and earn periodic interest.',
        example_en: 'Example: Government bonds offering 7.5% annually with 5-year lock-in.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'बॉन्ड एक निश्चित आय वाला निवेश है जहाँ आप सरकार या कंपनियों को पैसे उधार देते हैं और नियमित ब्याज प्राप्त करते हैं।',
        example_hi: 'उदाहरण: सरकारी बॉन्ड 7.5% वार्षिक ब्याज के साथ 5 साल के लॉक-इन के साथ आते हैं।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['what is reit', 'reit investment', 'real estate investment trust', 'रीट क्या है', 'रीट में निवेश'],
        definition_en: 'REITs (Real Estate Investment Trusts) allow you to invest in commercial real estate and earn dividends from rental income.',
        example_en: 'Example: Embassy REIT distributes regular dividends from office rentals.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'रीट (REIT) आपको व्यावसायिक अचल संपत्ति में निवेश करने और किराए की आय से डिविडेंड प्राप्त करने की सुविधा देता है।',
        example_hi: 'उदाहरण: एम्बेसी REIT कार्यालय किराए से नियमित डिविडेंड देता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['investment for house', 'saving for home down payment', 'घर खरीदने के लिए निवेश', 'होम लोन निवेश योजना'],
        definition_en: 'To save for buying a house, invest in low-risk instruments like RDs, FDs, or debt funds with a 3–5 year goal horizon.',
        example_en: 'Example: A recurring deposit for 5 years can help build a house down payment fund.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'घर खरीदने के लिए आप 3–5 साल के लक्ष्य के साथ आरडी, एफडी या डेब्ट फंड जैसे सुरक्षित विकल्पों में निवेश कर सकते हैं।',
        example_hi: 'उदाहरण: 5 साल की आरडी से होम डाउन पेमेंट के लिए अच्छा फंड तैयार किया जा सकता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['international mutual funds', 'global investment', 'विदेशी म्यूचुअल फंड', 'ग्लोबल निवेश'],
        definition_en: 'International mutual funds invest in foreign markets such as US or China, offering geographic diversification and potential high returns.',
        example_en: 'Example: A US equity mutual fund provides exposure to companies like Apple and Google.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'अंतरराष्ट्रीय म्यूचुअल फंड विदेशी बाजारों (जैसे अमेरिका या चीन) में निवेश करते हैं और विविधता के साथ उच्च रिटर्न का अवसर देते हैं।',
        example_hi: 'उदाहरण: एक अमेरिकी इक्विटी फंड Apple और Google जैसी कंपनियों में निवेश करता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['gold investment', 'how to invest in gold', 'सोनें में निवेश', 'गोल्ड ईटीएफ', 'सोने का फंड'],
        definition_en: 'Gold investment can be done through digital gold, sovereign gold bonds, gold ETFs, or physical gold. It acts as a hedge against inflation.',
        example_en: 'Example: Sovereign Gold Bonds offer 2.5% interest plus price appreciation.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'सोने में निवेश डिजिटल गोल्ड, सॉवरेन गोल्ड बॉन्ड, गोल्ड ETF या भौतिक सोने के रूप में किया जा सकता है। यह महंगाई से बचाव करता है।',
        example_hi: 'उदाहरण: सॉवरेन गोल्ड बॉन्ड्स में 2.5% ब्याज और सोने की कीमत में वृद्धि का लाभ मिलता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['how to build wealth', 'long term wealth creation', 'वेल्थ कैसे बनाएं', 'धन संचय का तरीका'],
        definition_en: 'Wealth is built over time by consistent investing in high-performing assets like equity mutual funds, stocks, or real estate.',
        example_en: 'Example: Investing ₹10,000/month in equity for 15 years can build over ₹50 lakhs.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'धन धीरे-धीरे बनाया जाता है, नियमित रूप से इक्विटी, म्यूचुअल फंड या अचल संपत्ति में निवेश करके।',
        example_hi: 'उदाहरण: ₹10,000/माह के निवेश से 15 वर्षों में ₹50 लाख से अधिक का कोष बन सकता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['sip duration', 'how long to do sip', 'SIP कितने समय तक करें', 'SIP निवेश अवधि'],
        definition_en: 'For best results, SIPs should be done for at least 5–10 years. Longer durations help compound wealth and reduce market volatility.',
        example_en: 'Example: A 10-year SIP gives better returns than a 3-year SIP due to compounding.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP को कम से कम 5–10 साल तक करना चाहिए ताकि कंपाउंडिंग और अस्थिरता का असर कम हो।',
        example_hi: 'उदाहरण: 10 साल की SIP, 3 साल की SIP से ज़्यादा बेहतर रिटर्न देती है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['can nri invest in india', 'nri mutual fund investment', 'एनआरआई भारत में निवेश', 'NRI म्यूचुअल फंड'],
        definition_en: 'Yes, NRIs can invest in India through NRE/NRO accounts in mutual funds, stocks, and bonds under FEMA guidelines.',
        example_en: 'Example: An NRI can invest in Indian equity mutual funds via NRE account.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'हां, एनआरआई NRE/NRO खाते के माध्यम से भारत में म्यूचुअल फंड, स्टॉक्स और बॉन्ड्स में निवेश कर सकते हैं।',
        example_hi: 'उदाहरण: एक एनआरआई अपने NRE खाते से भारतीय इक्विटी फंड्स में निवेश कर सकता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['best investment options in india', 'top 5 investments', 'भारत में सबसे अच्छा निवेश', 'शीर्ष निवेश विकल्प'],
        definition_en: 'Top investment options include mutual funds, FDs, gold, real estate, and PPF—based on your financial goals and risk profile.',
        example_en: 'Example: For safety, go with PPF. For high returns, consider equity mutual funds.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'भारत में प्रमुख निवेश विकल्प हैं – म्यूचुअल फंड, FD, सोना, अचल संपत्ति और PPF। यह आपके लक्ष्य और जोखिम पर निर्भर करता है।',
        example_hi: 'उदाहरण: सुरक्षा के लिए PPF अच्छा है, और ऊँचे रिटर्न के लिए इक्विटी फंड चुनें।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['what is diversification in investment', 'diversify your portfolio', 'निवेश में विविधता क्या है', 'पोर्टफोलियो डाइवर्सिफिकेशन'],
        definition_en: 'Diversification means spreading your investments across different asset classes to reduce overall risk and improve returns.',
        example_en: 'Example: Investing in equity, gold, debt, and real estate together ensures balance.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'विविधता का मतलब है निवेश को विभिन्न एसेट क्लास में बांटना ताकि जोखिम कम हो और रिटर्न संतुलित मिले।',
        example_hi: 'उदाहरण: इक्विटी, गोल्ड, डेब्ट और प्रॉपर्टी में निवेश से संतुलित पोर्टफोलियो बनता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['real estate vs mutual funds', 'property vs mutual fund', 'म्यूचुअल फंड बनाम प्रॉपर्टी', 'रियल एस्टेट बनाम फंड'],
        definition_en: 'Real estate offers physical ownership and rental income, while mutual funds offer liquidity, diversification, and professional management. Choose based on your goals.',
        example_en: 'Example: Mutual funds are better for short-term goals, property suits long-term wealth creation.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'रियल एस्टेट से भौतिक संपत्ति और किराया मिलता है, जबकि म्यूचुअल फंड से तरलता, विविधता और पेशेवर प्रबंधन मिलता है।',
        example_hi: 'उदाहरण: म्यूचुअल फंड शॉर्ट टर्म के लिए बेहतर है, प्रॉपर्टी लॉन्ग टर्म वेल्थ के लिए।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['what is NAV', 'mutual fund NAV', 'NAV in SIP', 'एनएवी क्या है', 'फंड NAV का मतलब'],
        definition_en: 'NAV (Net Asset Value) is the per-unit value of a mutual fund. It’s calculated by dividing the total assets by total number of units.',
        example_en: 'Example: If fund value is ₹1 crore and units are 10 lakh, NAV = ₹10.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'NAV (नेट एसेट वैल्यू) म्यूचुअल फंड की प्रति यूनिट कीमत होती है। यह कुल एसेट को यूनिट्स से विभाजित कर के निकाली जाती है।',
        example_hi: 'उदाहरण: अगर फंड का मूल्य ₹1 करोड़ है और यूनिट्स 10 लाख, तो NAV = ₹10।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['stock vs mutual fund', 'should I invest in stock or fund', 'स्टॉक या म्यूचुअल फंड', 'फंड या शेयर में निवेश'],
        definition_en: 'Stocks require individual selection and carry high risk. Mutual funds are diversified and managed by experts, making them safer for beginners.',
        example_en: 'Example: A new investor should start with mutual funds instead of directly investing in stocks.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'शेयर में निवेश में उच्च जोखिम होता है और खुद से चयन करना पड़ता है, जबकि म्यूचुअल फंड में विविधता और विशेषज्ञ प्रबंधन होता है।',
        example_hi: 'उदाहरण: नया निवेशक शेयर के बजाय म्यूचुअल फंड से शुरुआत करे।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['compound interest in investment', 'what is compounding', 'कंपाउंडिंग का मतलब', 'ब्याज पर ब्याज', 'चक्रवृद्धि ब्याज'],
        definition_en: 'Compound interest is the interest you earn on your principal and the accumulated interest. It grows wealth faster over time.',
        example_en: 'Example: ₹1 lakh invested at 10% for 10 years with compounding grows to ₹2.59 lakh.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'चक्रवृद्धि ब्याज वह ब्याज है जो मूलधन और पिछले ब्याज पर मिलता है। इससे धन तेज़ी से बढ़ता है।',
        example_hi: 'उदाहरण: ₹1 लाख, 10% पर 10 साल में ₹2.59 लाख बन जाता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['investment for education', 'education planning', 'बच्चे की पढ़ाई के लिए निवेश', 'एजुकेशन फंडिंग'],
        definition_en: 'For child’s education, start early using SIPs in balanced mutual funds or PPF. This ensures a large corpus by the time they need it.',
        example_en: 'Example: ₹5,000 SIP for 15 years at 12% return can grow to ₹25+ lakhs.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'बच्चों की शिक्षा के लिए SIP या PPF में जल्दी निवेश शुरू करें ताकि समय पर बड़ा फंड तैयार हो सके।',
        example_hi: 'उदाहरण: ₹5,000 की SIP से 15 वर्षों में ₹25+ लाख का कोष बन सकता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['risk profiling', 'investment risk level', 'आपकी जोखिम क्षमता', 'रिस्क प्रोफाइल क्या है'],
        definition_en: 'Risk profiling determines your comfort level with market ups and downs. It helps match investments to your risk appetite.',
        example_en: 'Example: A conservative investor may prefer debt funds over equities.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'रिस्क प्रोफाइल यह तय करता है कि आप बाजार के उतार-चढ़ाव से कितने सहज हैं, जिससे आपके निवेश निर्णय सही होते हैं।',
        example_hi: 'उदाहरण: जोखिम से बचने वाला निवेशक इक्विटी के बजाय डेब्ट फंड चुनेगा।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund direct vs regular', 'direct plan vs regular plan', 'डायरेक्ट फंड और रेगुलर फंड में अंतर'],
        definition_en: 'Direct plans are bought directly from fund houses with no commission, leading to higher returns. Regular plans are via distributors.',
        example_en: 'Example: A direct fund may give 1% more return annually than regular.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'डायरेक्ट फंड सीधे AMC से खरीदे जाते हैं और इनमें कमीशन नहीं लगता, इसलिए रिटर्न ज्यादा होता है। रेगुलर फंड में एजेंट के ज़रिए निवेश होता है।',
        example_hi: 'उदाहरण: डायरेक्ट फंड हर साल रेगुलर फंड से 1% अधिक रिटर्न दे सकता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['investment for senior citizens', 'best investment for old age', 'वरिष्ठ नागरिक के लिए निवेश', 'बुजुर्गों के लिए सुरक्षित निवेश'],
        definition_en: 'Senior citizens should invest in low-risk options like SCSS, PMVVY, FDs, and debt mutual funds for stable income and safety.',
        example_en: 'Example: Senior Citizens Saving Scheme (SCSS) gives over 8% interest with government backing.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'वरिष्ठ नागरिकों को सुरक्षित विकल्प जैसे SCSS, PMVVY, FD या डेब्ट फंड में निवेश करना चाहिए जिससे स्थिर आय मिल सके।',
        example_hi: 'उदाहरण: SCSS 8% से अधिक ब्याज देता है और सरकारी गारंटी वाला होता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['short term vs long term investment', 'लघुकालिक बनाम दीर्घकालिक निवेश', 'अल्पकालिक निवेश', 'दीर्घकालिक योजना'],
        definition_en: 'Short-term investments are held for <3 years and focus on safety (like FDs or debt funds). Long-term (>5 years) aims for growth (like equity funds).',
        example_en: 'Example: FD for short-term parking, equity mutual fund for retirement.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'अल्पकालिक निवेश (<3 वर्ष) सुरक्षा पर केंद्रित होता है जैसे FD; दीर्घकालिक निवेश (>5 वर्ष) में वृद्धि पर ध्यान होता है जैसे इक्विटी फंड।',
        example_hi: 'उदाहरण: FD शॉर्ट टर्म के लिए और इक्विटी फंड रिटायरमेंट के लिए उपयुक्त हैं।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['how to track investment', 'portfolio tracker', 'निवेश कैसे ट्रैक करें', 'पोर्टफोलियो मैनेजमेंट'],
        definition_en: 'Use apps or websites like Groww, Zerodha, or CAMS to track your investment returns, SIPs, and portfolio health.',
        example_en: 'Example: CAMS app shows all your mutual fund holdings in one place.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'Groww, Zerodha या CAMS जैसे प्लेटफॉर्म से आप अपने निवेश को ट्रैक कर सकते हैं।',
        example_hi: 'उदाहरण: CAMS ऐप सभी म्यूचुअल फंड निवेश को एक जगह दिखाता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['systematic investment plan', 'SIP meaning', 'what is SIP', 'SIP in mutual funds', 'SIP क्या है', 'सिस्टेमैटिक इन्वेस्टमेंट प्लान'],
        definition_en: 'SIP (Systematic Investment Plan) lets you invest a fixed amount regularly in mutual funds, helping build wealth gradually with rupee cost averaging.',
        example_en: 'Example: Investing ₹5,000 monthly via SIP in an equity fund can generate significant corpus over 10+ years.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP (सिस्टेमैटिक इन्वेस्टमेंट प्लान) के तहत आप नियमित रूप से म्यूचुअल फंड में फिक्स्ड राशि निवेश करते हैं, जिससे धीरे-धीरे धन बढ़ता है।',
        example_hi: 'उदाहरण: ₹5,000 मासिक SIP से 10 वर्षों में बड़ा निवेश कोष बन सकता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['what is mutual fund', 'mutual fund definition', 'म्यूचुअल फंड क्या है', 'म्यूचुअल फंड की जानकारी'],
        definition_en: 'A mutual fund pools money from investors to invest in diversified securities managed by professionals, reducing risk and increasing access to markets.',
        example_en: 'Example: A diversified equity mutual fund invests in shares of multiple companies to spread risk.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'म्यूचुअल फंड कई निवेशकों का पैसा एकत्र कर पेशेवरों द्वारा विभिन्न शेयरों और बांड में निवेश करता है, जिससे जोखिम कम होता है।',
        example_hi: 'उदाहरण: एक डाइवर्सिफाइड इक्विटी फंड कई कंपनियों के शेयरों में निवेश करता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['equity mutual funds', 'what is equity fund', 'इक्विटी म्यूचुअल फंड', 'शेयर बाजार फंड'],
        definition_en: 'Equity mutual funds invest primarily in stocks to provide high growth potential over the long term, with moderate to high risk.',
        example_en: 'Example: An equity fund investing in technology companies can grow significantly if the sector performs well.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'इक्विटी फंड मुख्य रूप से शेयरों में निवेश करता है ताकि लंबी अवधि में अच्छा रिटर्न मिल सके, लेकिन जोखिम भी अधिक होता है।',
        example_hi: 'उदाहरण: टेक्नोलॉजी सेक्टर में निवेश करने वाला इक्विटी फंड अच्छा लाभ दे सकता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['debt mutual funds', 'what is debt fund', 'डेब्ट म्यूचुअल फंड', 'बॉन्ड फंड'],
        definition_en: 'Debt mutual funds invest in fixed income securities like bonds and government securities, offering regular income with lower risk than equity funds.',
        example_en: 'Example: A debt fund investing in government bonds provides stable but moderate returns.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'डेब्ट फंड बांड, सरकारी सिक्योरिटीज़ जैसे फिक्स्ड इनकम सेक्योरिटीज़ में निवेश करता है, जिससे कम जोखिम और नियमित आय मिलती है।',
        example_hi: 'उदाहरण: सरकारी बांड में निवेश करने वाला डेब्ट फंड स्थिर रिटर्न देता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['balanced mutual fund', 'hybrid mutual fund', 'बैलेंस्ड फंड', 'हाइब्रिड म्यूचुअल फंड'],
        definition_en: 'Balanced or hybrid funds invest in a mix of equity and debt to balance risk and returns, suitable for moderate risk investors.',
        example_en: 'Example: A balanced fund may allocate 60% to equity and 40% to debt instruments.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'बैलेंस्ड या हाइब्रिड फंड इक्विटी और डेब्ट दोनों में निवेश करता है ताकि जोखिम और रिटर्न में संतुलन बना रहे।',
        example_hi: 'उदाहरण: 60% इक्विटी और 40% डेब्ट वाला बैलेंस्ड फंड मध्यम जोखिम वाले निवेशकों के लिए अच्छा है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['gold investment', 'investing in gold', 'सोना में निवेश', 'गोल्ड ETF', 'गोल्ड बॉन्ड'],
        definition_en: 'Gold investment includes physical gold, gold ETFs, and sovereign gold bonds, often used as a hedge against inflation and market volatility.',
        example_en: 'Example: Sovereign Gold Bonds offer interest along with gold price appreciation.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'सोने में निवेश भौतिक सोना, गोल्ड ETF और सरकारी गोल्ड बॉन्ड के रूप में किया जा सकता है, जो मुद्रास्फीति और बाजार अस्थिरता से सुरक्षा देते हैं।',
        example_hi: 'उदाहरण: सरकारी गोल्ड बॉन्ड पर ब्याज मिलता है साथ ही सोने की कीमत बढ़ने का लाभ भी।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['public provident fund', 'PPF', 'पीपीएफ क्या है', 'पीपीएफ निवेश'],
        definition_en: 'PPF is a government-backed long-term savings scheme offering tax benefits and guaranteed returns with a lock-in of 15 years.',
        example_en: 'Example: Investing ₹1.5 lakh annually in PPF can give tax-free returns with compounded interest.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'पीपीएफ एक सरकारी बचत योजना है जो 15 साल की लॉक-इन अवधि के साथ टैक्स बेनिफिट और निश्चित रिटर्न देती है।',
        example_hi: 'उदाहरण: ₹1.5 लाख वार्षिक निवेश पर टैक्स-फ्री रिटर्न मिलता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['National Pension System', 'NPS', 'NPS क्या है', 'नेशनल पेंशन सिस्टम'],
        definition_en: 'NPS is a government-backed retirement savings scheme offering market-linked returns with tax benefits and flexibility in fund management.',
        example_en: 'Example: Contributions to NPS get tax deductions under Section 80CCD.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'NPS एक सरकारी पेंशन योजना है जो बाजार से जुड़ा रिटर्न, टैक्स बेनिफिट और फंड मैनेजमेंट में लचीलापन देती है।',
        example_hi: 'उदाहरण: NPS में निवेश करने पर धारा 80CCD के तहत टैक्स छूट मिलती है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['fixed deposits', 'FD investment', 'फिक्स्ड डिपॉजिट', 'FD क्या है'],
        definition_en: 'Fixed deposits are bank or NBFC deposits with a fixed tenure and interest rate, offering safety and guaranteed returns.',
        example_en: 'Example: A 1-year FD at 6.5% interest gives guaranteed returns after maturity.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'फिक्स्ड डिपॉजिट बैंक या NBFC में तय अवधि और ब्याज दर के साथ निवेश है, जो सुरक्षित और निश्चित रिटर्न देता है।',
        example_hi: 'उदाहरण: 1 साल की FD पर 6.5% ब्याज मिलता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['tax saving investment', 'tax planning investment', 'टैक्स बचत निवेश', '80C निवेश'],
        definition_en: 'Investments under Section 80C like PPF, ELSS, and life insurance help reduce taxable income and save taxes.',
        example_en: 'Example: Investing ₹1.5 lakh in ELSS offers potential market-linked returns with tax benefits.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'धारा 80C के अंतर्गत पीपीएफ, ELSS, और जीवन बीमा जैसे निवेश से टैक्स में छूट मिलती है।',
        example_hi: 'उदाहरण: ₹1.5 लाख ELSS में निवेश कर टैक्स बचाया जा सकता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['elss mutual fund', 'equity linked saving scheme', 'ELSS meaning', 'ELSS क्या है', 'ELSS टैक्स बचत'],
        definition_en: 'ELSS funds are equity mutual funds with a lock-in period of 3 years and offer tax benefits under Section 80C.',
        example_en: 'Example: Investing ₹50,000 annually in ELSS can save taxes and grow wealth through equity markets.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'ELSS म्यूचुअल फंड 3 साल की लॉक-इन अवधि वाले इक्विटी फंड होते हैं, जो धारा 80C के तहत टैक्स छूट देते हैं।',
        example_hi: 'उदाहरण: ₹50,000 वार्षिक ELSS में निवेश कर टैक्स बचत के साथ धन वृद्धि भी।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['investment diversification', 'portfolio diversification', 'निवेश में विविधता', 'डाइवर्सिफिकेशन क्या है'],
        definition_en: 'Diversification means spreading investments across asset classes and sectors to reduce risk.',
        example_en: 'Example: Combining equity, debt, and gold in your portfolio balances risk and returns.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'विविधता का मतलब है अलग-अलग परिसंपत्ति वर्गों और क्षेत्रों में निवेश फैलाना जिससे जोखिम कम हो।',
        example_hi: 'उदाहरण: इक्विटी, डेब्ट और सोने का मिश्रण जोखिम और रिटर्न को संतुलित करता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['capital gains tax', 'long term capital gains', 'LTCG tax', 'कैपिटल गेन टैक्स क्या है', 'लॉन्ग टर्म कैपिटल गेन टैक्स'],
        definition_en: 'Capital gains tax is tax on profit from sale of assets. LTCG on equities above ₹1 lakh is taxed at 10%.',
        example_en: 'Example: Selling stocks and earning ₹2 lakh LTCG means paying 10% tax on ₹1 lakh gain.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'कैपिटल गेन टैक्स संपत्ति की बिक्री पर लाभ पर लगने वाला टैक्स है। इक्विटी LTCG ₹1 लाख से ऊपर 10% टैक्स है।',
        example_hi: 'उदाहरण: ₹2 लाख LTCG पर ₹1 लाख पर 10% टैक्स देना होगा।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['sip vs lump sum', 'investment SIP or lump sum', 'SIP बनाम लंपसम', 'कब SIP करें कब लंपसम'],
        definition_en: 'SIP spreads investment over time reducing market timing risk; lump sum invests full amount at once aiming for higher returns.',
        example_en: 'Example: SIP suits volatile markets; lump sum works well when markets are down.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP समय के साथ निवेश फैलाता है, जबकि लंपसम एक बार में पूरा निवेश करता है।',
        example_hi: 'उदाहरण: बाजार उतार-चढ़ाव वाले हों तो SIP बेहतर, गिरावट पर लंपसम।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['debt vs equity', 'difference between debt and equity', 'डेब्ट और इक्विटी में अंतर', 'क्या है डेब्ट और इक्विटी'],
        definition_en: 'Debt investment involves lending money with fixed returns; equity means ownership with variable returns and higher risk.',
        example_en: 'Example: Bonds are debt; stocks are equity.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'डेब्ट में आप पैसे उधार देते हैं फिक्स्ड रिटर्न के लिए; इक्विटी में हिस्सेदारी लेकर रिटर्न मिलता है।',
        example_hi: 'उदाहरण: बॉन्ड्स डेब्ट हैं, स्टॉक्स इक्विटी।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['real estate investment', 'property investment', 'रियल एस्टेट निवेश', 'प्रॉपर्टी में निवेश कैसे करें'],
        definition_en: 'Investing in real estate involves buying property for rental income or capital appreciation.',
        example_en: 'Example: Buying a flat to rent out can generate monthly passive income.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'रियल एस्टेट में प्रॉपर्टी खरीद कर किराया या मूल्य वृद्धि से लाभ कमाते हैं।',
        example_hi: 'उदाहरण: फ्लैट खरीदकर किराया पाना एक आम तरीका है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['portfolio rebalancing', 'what is rebalancing', 'पोर्टफोलियो रीबैलेंसिंग', 'रीबैलेंसिंग का महत्व'],
        definition_en: 'Rebalancing adjusts portfolio to maintain target asset allocation, ensuring risk level remains consistent.',
        example_en: 'Example: Selling some equity and buying debt to restore 60:40 ratio.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'रीबैलेंसिंग से पोर्टफोलियो की संपत्ति वितरण सही स्तर पर लाते हैं जिससे जोखिम संतुलित रहे।',
        example_hi: 'उदाहरण: 60:40 अनुपात बनाए रखने के लिए इक्विटी बेचकर डेब्ट खरीदना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['inflation and investment', 'effect of inflation', 'महंगाई और निवेश', 'इन्फ्लेशन का निवेश पर प्रभाव'],
        definition_en: 'Inflation erodes purchasing power, so investments must aim to beat inflation to grow real wealth.',
        example_en: 'Example: Fixed deposits may lose value if inflation is higher than interest rate.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'महंगाई से पैसे की कीमत घटती है, इसलिए निवेश को महंगाई से अधिक रिटर्न देना जरूरी है।',
        example_hi: 'उदाहरण: FD में अगर ब्याज कम हो तो वास्तविक मूल्य घट सकता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['dividend vs growth mutual fund', 'डिविडेंड बनाम ग्रोथ फंड', 'म्यूचुअल फंड में डिविडेंड और ग्रोथ'],
        definition_en: 'Dividend funds pay regular dividends; growth funds reinvest earnings to increase NAV and capital value.',
        example_en: 'Example: Dividend funds suit income needs; growth funds suit long-term wealth creation.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'डिविडेंड फंड नियमित लाभांश देते हैं, ग्रोथ फंड NAV बढ़ाकर पूंजी बढ़ाते हैं।',
        example_hi: 'उदाहरण: आय के लिए डिविडेंड, धन वृद्धि के लिए ग्रोथ फंड।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund expense ratio', 'fund expense ratio', 'म्यूचुअल फंड खर्च अनुपात', 'एक्सपेंस रेशियो क्या है'],
        definition_en: 'Expense ratio is the annual fee charged by a mutual fund for managing your investment, impacting overall returns.',
        example_en: 'Example: A fund with 2% expense ratio will reduce your returns by that amount yearly.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'एक्सपेंस रेशियो वह शुल्क है जो फंड प्रबंधन के लिए वार्षिक लिया जाता है, जो रिटर्न कम कर सकता है।',
        example_hi: 'उदाहरण: 2% एक्सपेंस रेशियो वाले फंड में रिटर्न कम होगा।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['systematic withdrawal plan', 'SWP mutual fund', 'SIP withdrawal', 'सिस्टमेटिक विदड्रॉल प्लान', 'SWP क्या है'],
        definition_en: 'SWP allows investors to withdraw a fixed amount regularly from their mutual fund investment.',
        example_en: 'Example: Withdrawing ₹10,000 monthly from an equity mutual fund for steady income.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SWP निवेशकों को म्यूचुअल फंड से नियमित रूप से एक निश्चित राशि निकालने की अनुमति देता है।',
        example_hi: 'उदाहरण: ₹10,000 मासिक निकालना एक इक्विटी फंड से स्थिर आय के लिए।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['capital protection fund', 'safe mutual funds', 'कैपिटल प्रोटेक्शन फंड', 'सेफ म्यूचुअल फंड'],
        definition_en: 'Capital protection funds invest primarily in debt instruments with some equity exposure to protect principal.',
        example_en: 'Example: Investing ₹1 lakh in a fund that aims to safeguard principal with limited risk.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'कैपिटल प्रोटेक्शन फंड मुख्यतः डेब्ट में निवेश करते हैं और थोड़ा इक्विटी जोखिम भी लेते हैं।',
        example_hi: 'उदाहरण: ₹1 लाख का निवेश जो पूंजी सुरक्षा के साथ सीमित जोखिम देता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['inflation indexed bonds', 'inflation linked securities', 'मुद्रास्फीति सम्बंधित बॉन्ड', 'इन्फ्लेशन इंडेक्स्ड सिक्योरिटीज़'],
        definition_en: 'Inflation indexed bonds provide returns linked to inflation rate, protecting purchasing power.',
        example_en: 'Example: Government bonds that adjust principal and interest based on inflation.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'मुद्रास्फीति सम्बंधित बॉन्ड ऐसे बॉन्ड होते हैं जो रिटर्न मुद्रास्फीति के अनुसार देते हैं।',
        example_hi: 'उदाहरण: सरकारी बॉन्ड जो मुद्रास्फीति के अनुसार प्रिंसिपल और ब्याज समायोजित करते हैं।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['systematic transfer plan', 'STP mutual fund', 'SIP transfer', 'सिस्टमेटिक ट्रांसफर प्लान', 'STP क्या है'],
        definition_en: 'STP lets investors transfer fixed amounts from one mutual fund scheme to another at regular intervals.',
        example_en: 'Example: Moving ₹5,000 monthly from a debt fund to an equity fund to gradually increase equity exposure.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'STP निवेशकों को एक फंड से दूसरे फंड में नियमित अंतराल पर राशि ट्रांसफर करने की सुविधा देता है।',
        example_hi: 'उदाहरण: ₹5,000 मासिक डेब्ट से इक्विटी फंड में स्थानांतरित करना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['pension fund investment', 'retirement mutual funds', 'पेंशन फंड', 'रिटायरमेंट फंड'],
        definition_en: 'Pension funds help build retirement corpus by investing in diversified assets over a long term.',
        example_en: 'Example: Investing ₹10,000 monthly in a pension fund for retirement income.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'पेंशन फंड दीर्घकालीन निवेश के जरिए सेवानिवृत्ति के लिए धन जुटाने में मदद करते हैं।',
        example_hi: 'उदाहरण: ₹10,000 मासिक निवेश पेंशन फंड में रिटायरमेंट के लिए।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['ulip investment', 'unit linked insurance plan', 'यूलिप क्या है', 'ULIP mutual fund'],
        definition_en: 'ULIP combines investment and insurance, offering market-linked returns with life cover.',
        example_en: 'Example: ₹1 lakh annual premium with part invested in equity and part for insurance cover.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'यूलिप निवेश और बीमा का संयोजन है, जो बाजार आधारित रिटर्न के साथ जीवन बीमा भी देता है।',
        example_hi: 'उदाहरण: ₹1 लाख प्रीमियम जिसमें कुछ इक्विटी में निवेश और कुछ बीमा के लिए।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['recurring deposit', 'RD investment', 'फिक्स्ड डिपॉजिट विकल्प', 'Recurring Deposit क्या है'],
        definition_en: 'Recurring Deposit allows regular fixed monthly deposits earning fixed interest for a fixed term.',
        example_en: 'Example: Depositing ₹5,000 every month for 1 year at 6.5% interest.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'Recurring Deposit में हर महीने निश्चित राशि जमा कर निश्चित ब्याज और अवधि पर लाभ मिलता है।',
        example_hi: 'उदाहरण: ₹5,000 मासिक जमा 1 साल के लिए 6.5% ब्याज दर पर।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['systematic investment plan', 'SIP benefits', 'SIP meaning', 'सिस्टमेटिक इन्वेस्टमेंट प्लान', 'SIP क्या है'],
        definition_en: 'SIP lets you invest fixed amounts periodically in mutual funds, helping in disciplined investing and rupee cost averaging.',
        example_en: 'Example: ₹2,000 monthly SIP in equity mutual funds to build wealth gradually.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP से आप नियमित अंतराल पर म्यूचुअल फंड में निवेश कर सकते हैं, जिससे निवेश में अनुशासन आता है।',
        example_hi: 'उदाहरण: ₹2,000 मासिक SIP इक्विटी फंड में दीर्घकालीन धन निर्माण के लिए।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['risk tolerance', 'investment risk profile', 'जोखिम सहिष्णुता', 'निवेश जोखिम प्रोफाइल'],
        definition_en: 'Risk tolerance is an investor’s ability and willingness to endure market volatility and potential losses.',
        example_en: 'Example: Conservative investors prefer low-risk debt funds; aggressive investors choose equities.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'जोखिम सहिष्णुता निवेशक की बाजार उतार-चढ़ाव और संभावित नुकसान सहने की क्षमता है।',
        example_hi: 'उदाहरण: संरक्षित निवेशक डेब्ट फंड पसंद करते हैं, आक्रामक इक्विटी।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund ratings', 'fund rating agencies', 'म्यूचुअल फंड रेटिंग', 'फंड रेटिंग एजेंसियां'],
        definition_en: 'Mutual fund ratings assess fund performance, risk, and consistency to help investors choose suitable funds.',
        example_en: 'Example: A 5-star rated fund generally performs better than lower-rated peers.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'म्यूचुअल फंड रेटिंग फंड के प्रदर्शन और जोखिम को दर्शाती है जिससे निवेशक सही चुनाव कर सके।',
        example_hi: 'उदाहरण: 5-स्टार रेटेड फंड आमतौर पर बेहतर प्रदर्शन करता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['dividend yield', 'mutual fund dividend', 'डिविडेंड यील्ड', 'म्यूचुअल फंड डिविडेंड'],
        definition_en: 'Dividend yield is the percentage of dividend paid relative to the fund’s current NAV.',
        example_en: 'Example: A fund NAV is ₹100, dividend ₹5, dividend yield is 5%.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'डिविडेंड यील्ड उस प्रतिशत को दर्शाता है जो फंड अपने वर्तमान NAV के मुकाबले डिविडेंड के रूप में देता है।',
        example_hi: 'उदाहरण: फंड NAV ₹100 है और डिविडेंड ₹5, तो डिविडेंड यील्ड 5% है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['expense ratio', 'mutual fund charges', 'म्यूचुअल फंड चार्जेस', 'एक्सपेंस रेशियो'],
        definition_en: 'Expense ratio is the annual fee charged by the fund house for managing the mutual fund.',
        example_en: 'Example: A fund with 1% expense ratio charges ₹1 annually per ₹100 invested.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'एक्सपेंस रेशियो वह वार्षिक शुल्क है जो फंड हाउस म्यूचुअल फंड प्रबंधन के लिए लेता है।',
        example_hi: 'उदाहरण: 1% एक्सपेंस रेशियो वाला फंड ₹100 निवेश पर ₹1 वार्षिक शुल्क लेता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP vs lump sum', 'SIP or lump sum investment', 'SIP बनाम लंप सम', 'म्यूचुअल फंड निवेश'],
        definition_en: 'SIP involves periodic small investments, while lump sum is a one-time large investment.',
        example_en: 'Example: ₹5000 monthly SIP vs ₹1,00,000 lump sum investment.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP नियमित छोटे निवेश होते हैं, जबकि लंप सम एक बार बड़ी राशि निवेश होती है।',
        example_hi: 'उदाहरण: ₹5000 मासिक SIP और ₹1,00,000 एक बार लंप सम निवेश।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund NAV', 'net asset value', 'म्यूचुअल फंड NAV', 'नेट असेट वैल्यू'],
        definition_en: 'NAV is the per-unit price of a mutual fund, calculated daily based on assets minus liabilities.',
        example_en: 'Example: If total assets are ₹10 crores and units are 1 crore, NAV is ₹10.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'NAV एक म्यूचुअल फंड की प्रति यूनिट कीमत है जो रोज़ाना संपत्ति से देनदारियां घटाकर निकाली जाती है।',
        example_hi: 'उदाहरण: यदि कुल संपत्ति ₹10 करोड़ और यूनिट 1 करोड़ हैं, तो NAV ₹10 होगा।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund lock-in period', 'ELSS lock-in', 'लॉक-इन अवधि', 'म्यूचुअल फंड लॉक-इन'],
        definition_en: 'Lock-in period is the minimum time an investor must hold certain funds before redemption.',
        example_en: 'Example: ELSS funds have a 3-year lock-in period for tax benefits.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'लॉक-इन अवधि वह न्यूनतम समय है जिसमें निवेशक को फंड बनाए रखना होता है।',
        example_hi: 'उदाहरण: ELSS फंड में 3 साल की लॉक-इन अवधि होती है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP calculator', 'SIP returns calculator', 'SIP कैलकुलेटर', 'म्यूचुअल फंड कैलकुलेटर'],
        definition_en: 'SIP calculator estimates future returns based on monthly investment, rate of return, and tenure.',
        example_en: 'Example: ₹5,000 monthly for 10 years at 12% CAGR results in approximately ₹14.5 lakhs.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP कैलकुलेटर मासिक निवेश, रिटर्न और अवधि के आधार पर भविष्य के रिटर्न का अनुमान लगाता है।',
        example_hi: 'उदाहरण: ₹5,000 मासिक 10 साल के लिए 12% CAGR पर ₹14.5 लाख तक पहुंच सकता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund exit load', 'exit load meaning', 'एग्जिट लोड', 'निकासी शुल्क'],
        definition_en: 'Exit load is a fee charged by mutual funds if units are redeemed before a specified period.',
        example_en: 'Example: A 1% exit load if redeemed within 1 year of investment.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'एग्जिट लोड वह शुल्क है जो फंड जल्दी रिडीम करने पर लिया जाता है।',
        example_hi: 'उदाहरण: 1 साल के अंदर रिडीम करने पर 1% एग्जिट लोड।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['asset allocation', 'investment diversification', 'एसेट अलोकेशन', 'निवेश विविधीकरण'],
        definition_en: 'Asset allocation is the strategy of dividing investments among different asset categories to balance risk and reward.',
        example_en: 'Example: 60% equity, 30% debt, 10% gold in a diversified portfolio.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'एसेट अलोकेशन विभिन्न परिसंपत्ति वर्गों में निवेश विभाजित करने की रणनीति है।',
        example_hi: 'उदाहरण: 60% इक्विटी, 30% डेब्ट, 10% गोल्ड वाला पोर्टफोलियो।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP advantages', 'benefits of SIP', 'SIP के फायदे', 'म्यूचुअल फंड लाभ'],
        definition_en: 'SIP advantages include rupee cost averaging, disciplined investing, and flexibility in investment amount.',
        example_en: 'Example: Investing ₹2,000 monthly regardless of market conditions.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP के फायदे हैं रुपये की औसत लागत, निवेश में अनुशासन, और लचीलापन।',
        example_hi: 'उदाहरण: बाजार की स्थिति से बिना प्रभावित हुए ₹2,000 मासिक निवेश।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund taxation', 'capital gains tax mutual fund', 'म्यूचुअल फंड टैक्स', 'कैपिटल गेन टैक्स'],
        definition_en: 'Mutual fund gains are taxable as per holding period and type of fund (equity or debt).',
        example_en: 'Example: Equity funds held over 1 year attract long-term capital gains tax of 10%.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'म्यूचुअल फंड पर टैक्स होल्डिंग अवधि और फंड के प्रकार पर निर्भर करता है।',
        example_hi: 'उदाहरण: इक्विटी फंड 1 साल से अधिक रखने पर LTCG टैक्स 10%।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['systematic withdrawal plan', 'SWP mutual fund', 'सिस्टमेटिक विड्रॉल प्लान', 'म्यूचुअल फंड SWP'],
        definition_en: 'SWP allows investors to withdraw a fixed amount from their mutual fund at regular intervals.',
        example_en: 'Example: ₹10,000 monthly withdrawal from your investment corpus.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SWP निवेशकों को नियमित अंतराल पर म्यूचुअल फंड से निश्चित राशि निकालने की सुविधा देता है।',
        example_hi: 'उदाहरण: आपके निवेश से ₹10,000 मासिक निकासी।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['systematic transfer plan', 'STP mutual fund', 'सिस्टमेटिक ट्रांसफर प्लान', 'म्यूचुअल फंड STP'],
        definition_en: 'STP lets investors transfer fixed amounts from one mutual fund scheme to another periodically.',
        example_en: 'Example: ₹5,000 monthly from debt fund to equity fund.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'STP निवेशकों को एक फंड से दूसरे फंड में नियमित राशि ट्रांसफर करने की अनुमति देता है।',
        example_hi: 'उदाहरण: ₹5,000 मासिक डेब्ट फंड से इक्विटी फंड में ट्रांसफर।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP calculator', 'SIP returns', 'SIP कैलकुलेटर', 'म्यूचुअल फंड SIP रिटर्न'],
        definition_en: 'SIP calculator estimates potential returns based on investment amount, tenure, and expected growth rate.',
        example_en: 'Example: ₹5,000 monthly for 10 years at 12% CAGR could grow to around ₹14.5 lakhs.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP कैलकुलेटर निवेश राशि, अवधि और वृद्धि दर के आधार पर संभावित रिटर्न का अनुमान लगाता है।',
        example_hi: 'उदाहरण: ₹5,000 मासिक 10 साल के लिए 12% CAGR पर ₹14.5 लाख तक बढ़ सकता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund risk factors', 'risk in mutual funds', 'म्यूचुअल फंड जोखिम', 'म्यूचुअल फंड रिस्क'],
        definition_en: 'Mutual funds carry risks like market risk, credit risk, interest rate risk, and liquidity risk.',
        example_en: 'Example: Equity funds are riskier but offer higher returns compared to debt funds.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'म्यूचुअल फंड में बाजार, क्रेडिट, ब्याज दर और तरलता जोखिम होते हैं।',
        example_hi: 'उदाहरण: इक्विटी फंड अधिक जोखिम वाले लेकिन उच्च रिटर्न देते हैं।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP advantages', 'benefits of SIP', 'SIP के फायदे', 'म्यूचुअल फंड लाभ'],
        definition_en: 'SIP helps in rupee cost averaging, disciplined investing, and compounding returns over time.',
        example_en: 'Example: Investing ₹2,000 monthly regardless of market fluctuations.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP रुपये की औसत लागत, अनुशासित निवेश और चक्रवृद्धि लाभ में मदद करता है।',
        example_hi: 'उदाहरण: बाजार उतार-चढ़ाव से प्रभावित हुए बिना ₹2,000 मासिक निवेश।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund taxation', 'tax on mutual funds', 'म्यूचुअल फंड टैक्स', 'कैपिटल गेन टैक्स'],
        definition_en: 'Tax treatment depends on the type of fund and holding period; equity and debt funds have different tax rules.',
        example_en: 'Example: Long-term capital gains on equity funds are taxed at 10% beyond ₹1 lakh exemption.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'टैक्स नियम फंड के प्रकार और होल्डिंग अवधि पर निर्भर करते हैं।',
        example_hi: 'उदाहरण: इक्विटी फंड के LTCG पर ₹1 लाख से ऊपर 10% टैक्स लगता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund NAV', 'net asset value', 'NAV क्या है', 'म्यूचुअल फंड मूल्य'],
        definition_en: 'NAV is the per-unit market value of a mutual fund scheme, calculated by dividing total assets minus liabilities by total units.',
        example_en: 'Example: Total assets ₹10 crore, liabilities ₹1 crore, total units 90 lakh, NAV = ₹(10-1)/90 = ₹10.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'NAV एक फंड के प्रति यूनिट बाजार मूल्य को दर्शाता है, जो कुल संपत्ति से देनदारियां घटाकर यूनिट संख्या से भाग देकर निकाला जाता है।',
        example_hi: 'उदाहरण: कुल संपत्ति ₹10 करोड़, देनदारियां ₹1 करोड़, 90 लाख यूनिट, NAV = ₹10।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund exit load', 'exit load meaning', 'निकासी शुल्क', 'एग्जिट लोड'],
        definition_en: 'Exit load is a fee charged when an investor redeems units before a specified period.',
        example_en: 'Example: 1% exit load if redeemed within 1 year.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'एग्जिट लोड वह शुल्क है जो जल्दी निवेश वापस लेने पर लिया जाता है।',
        example_hi: 'उदाहरण: 1 साल के अंदर निकासी पर 1% शुल्क।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund diversification', 'investment diversification', 'म्यूचुअल फंड विविधीकरण', 'निवेश विविधीकरण'],
        definition_en: 'Diversification reduces risk by spreading investments across various sectors, asset classes, or geographies.',
        example_en: 'Example: Investing in equity, debt, and gold funds to balance risk and returns.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'विविधीकरण जोखिम को कम करता है, निवेशों को विभिन्न क्षेत्रों और परिसंपत्तियों में फैलाकर।',
        example_hi: 'उदाहरण: इक्विटी, डेब्ट, और गोल्ड फंड में निवेश।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP vs lump sum', 'SIP or lump sum investment', 'SIP बनाम लंप सम', 'निवेश विकल्प'],
        definition_en: 'SIP involves regular investments over time; lump sum is a one-time investment. SIP reduces timing risk.',
        example_en: 'Example: ₹5000 monthly SIP vs ₹1,00,000 lump sum investment.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP नियमित निवेश है, जबकि लंप सम एक बार का निवेश होता है। SIP समय जोखिम कम करता है।',
        example_hi: 'उदाहरण: ₹5000 मासिक SIP बनाम ₹1,00,000 एक बार निवेश।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund dividend', 'dividend payout', 'म्यूचुअल फंड डिविडेंड', 'लाभांश वितरण'],
        definition_en: 'Dividend is a distribution of a portion of mutual fund earnings to investors, paid out periodically.',
        example_en: 'Example: Quarterly dividend payout of ₹2 per unit.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'डिविडेंड म्यूचुअल फंड की आय का निवेशकों में समय-समय पर वितरण होता है।',
        example_hi: 'उदाहरण: प्रति यूनिट ₹2 त्रैमासिक लाभांश वितरण।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund expense ratio', 'expense ratio meaning', 'म्यूचुअल फंड खर्च अनुपात', 'खर्च अनुपात'],
        definition_en: 'Expense ratio is the annual fee charged by the fund house to manage the mutual fund.',
        example_en: 'Example: A 1.5% expense ratio means ₹1.5 per ₹100 invested is deducted annually.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'खर्च अनुपात वह वार्षिक शुल्क है जो फंड हाउस प्रबंधन के लिए लेता है।',
        example_hi: 'उदाहरण: 1.5% खर्च अनुपात का मतलब है ₹100 निवेश पर ₹1.5 सालाना कटौती।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP tips', 'SIP investment tips', 'SIP निवेश सुझाव', 'म्यूचुअल फंड SIP टिप्स'],
        definition_en: 'Tips include starting early, staying consistent, reviewing periodically, and increasing SIP amount with income.',
        example_en: 'Example: Increasing SIP by 10% annually with salary hikes.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'टिप्स में जल्दी शुरू करना, नियमित निवेश करना, समय-समय पर समीक्षा करना शामिल है।',
        example_hi: 'उदाहरण: वेतन बढ़ने पर SIP राशि 10% सालाना बढ़ाना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund risk profile', 'investor risk profile', 'निवेशक जोखिम प्रोफ़ाइल', 'म्यूचुअल फंड रिस्क प्रोफ़ाइल'],
        definition_en: 'Risk profile is an assessment of an investor’s risk tolerance and investment goals.',
        example_en: 'Example: Conservative investors prefer debt funds; aggressive ones prefer equity funds.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'जोखिम प्रोफ़ाइल निवेशक की जोखिम सहनशीलता और लक्ष्यों का मूल्यांकन है।',
        example_hi: 'उदाहरण: रक्षात्मक निवेशक डेब्ट फंड पसंद करते हैं।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund categories', 'types of mutual funds', 'म्यूचुअल फंड श्रेणियाँ', 'म्यूचुअल फंड प्रकार'],
        definition_en: 'Mutual funds are categorized by asset class: equity, debt, hybrid, liquid, etc.',
        example_en: 'Example: Equity funds invest mainly in stocks; debt funds invest in bonds.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'म्यूचुअल फंड को परिसंपत्ति वर्ग के अनुसार वर्गीकृत किया जाता है।',
        example_hi: 'उदाहरण: इक्विटी फंड स्टॉक्स में निवेश करते हैं।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP advantages', 'benefits of SIP', 'SIP के फायदे', 'म्यूचुअल फंड SIP लाभ'],
        definition_en: 'SIP helps in rupee cost averaging, disciplined investing, and compounding wealth over time.',
        example_en: 'Example: ₹2,000 monthly SIP averages market fluctuations and builds corpus.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP रुपये की औसत लागत, अनुशासित निवेश, और चक्रवृद्धि से लाभ देता है।',
        example_hi: 'उदाहरण: ₹2,000 मासिक SIP बाजार उतार-चढ़ाव को संतुलित करता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund redemption', 'redemption process', 'म्यूचुअल फंड रिडेम्पशन', 'निवेश वापसी प्रक्रिया'],
        definition_en: 'Redemption is selling mutual fund units to get back your invested money.',
        example_en: 'Example: Redeeming ₹50,000 units after 3 years.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'रिडेम्पशन म्यूचुअल फंड की इकाइयों को बेचने की प्रक्रिया है।',
        example_hi: 'उदाहरण: 3 साल बाद ₹50,000 इकाइयां रिडीम करना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund portfolio', 'portfolio diversification', 'म्यूचुअल फंड पोर्टफोलियो', 'पोर्टफोलियो विविधीकरण'],
        definition_en: 'Portfolio is a collection of investments held by an investor or fund.',
        example_en: 'Example: A portfolio may include stocks, bonds, and commodities.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'पोर्टफोलियो निवेशकों या फंड द्वारा रखी गई संपत्तियों का समूह है।',
        example_hi: 'उदाहरण: पोर्टफोलियो में स्टॉक, बॉन्ड और कमोडिटीज़ शामिल हो सकते हैं।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP frequency', 'SIP monthly quarterly', 'SIP आवृत्ति', 'SIP मासिक त्रैमासिक'],
        definition_en: 'SIP can be invested monthly, quarterly, or at other intervals based on investor preference.',
        example_en: 'Example: Choosing monthly SIP of ₹3,000 or quarterly SIP of ₹9,000.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP मासिक, त्रैमासिक या अन्य आवृत्तियों पर निवेश किया जा सकता है।',
        example_hi: 'उदाहरण: ₹3,000 मासिक या ₹9,000 त्रैमासिक SIP चुनना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP mistakes', 'common SIP errors', 'SIP सामान्य गलतियाँ', 'म्यूचुअल फंड SIP गलतियाँ'],
        definition_en: 'Common mistakes include stopping SIP early, not reviewing performance, and investing without goals.',
        example_en: 'Example: Halting SIP due to short-term market volatility.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'आम गलतियों में SIP जल्दी रोकना, प्रदर्शन की समीक्षा न करना शामिल है।',
        example_hi: 'उदाहरण: बाजार उतार-चढ़ाव पर SIP रोकना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP vs lump sum', 'SIP or lump sum investment', 'SIP बनाम लंप सम', 'निवेश विकल्प'],
        definition_en: 'SIP involves investing small amounts regularly; lump sum is a one-time large investment. SIP reduces timing risk.',
        example_en: 'Example: ₹5,000 monthly SIP vs ₹1,00,000 lump sum investment.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP नियमित रूप से छोटी राशि निवेश करना है; लंप सम एक बार बड़ी राशि निवेश करना है। SIP समय जोखिम कम करता है।',
        example_hi: 'उदाहरण: ₹5,000 मासिक SIP बनाम ₹1,00,000 एक बार निवेश।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund portfolio rebalancing', 'portfolio rebalancing', 'पोर्टफोलियो पुनर्संतुलन', 'म्यूचुअल फंड पुनर्संतुलन'],
        definition_en: 'Rebalancing involves adjusting portfolio asset allocation to maintain desired risk levels.',
        example_en: 'Example: Selling some equity to buy debt when equity allocation exceeds target.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'पुनर्संतुलन में जोखिम स्तर बनाए रखने के लिए पोर्टफोलियो समायोजन शामिल है।',
        example_hi: 'उदाहरण: इक्विटी अधिक होने पर कुछ इक्विटी बेचकर डेब्ट खरीदना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund risk tolerance', 'investor risk tolerance', 'जोखिम सहनशीलता', 'निवेशक जोखिम सहनशीलता'],
        definition_en: 'Risk tolerance is an investor’s ability and willingness to endure market fluctuations.',
        example_en: 'Example: High risk tolerance investors prefer equity funds.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'जोखिम सहनशीलता निवेशक की बाजार उतार-चढ़ाव सहने की क्षमता है।',
        example_hi: 'उदाहरण: उच्च जोखिम सहनशीलता वाले इक्विटी फंड चुनते हैं।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP automation', 'auto debit SIP', 'स्वचालित SIP', 'ऑटो डेबिट SIP'],
        definition_en: 'Automated SIP deducts investment amount automatically from bank account at scheduled intervals.',
        example_en: 'Example: ₹3,000 auto debit on 5th of every month.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'स्वचालित SIP बैंक खाते से निर्धारित राशि स्वचालित रूप से काटता है।',
        example_hi: 'उदाहरण: हर महीने 5 तारीख को ₹3,000 ऑटो डेबिट।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund fund house', 'fund manager', 'फंड हाउस', 'फंड प्रबंधक'],
        definition_en: 'Fund house is the company managing the mutual fund; fund manager makes investment decisions.',
        example_en: 'Example: Reliance Mutual Fund managed by professional fund managers.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'फंड हाउस वह कंपनी है जो म्यूचुअल फंड का प्रबंधन करती है।',
        example_hi: 'उदाहरण: रिलायंस म्यूचुअल फंड।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund lock-in period', 'lock-in meaning', 'लॉक-इन अवधि', 'निवेश लॉक-इन'],
        definition_en: 'Lock-in is the minimum period during which investment cannot be redeemed.',
        example_en: 'Example: ELSS funds have a 3-year lock-in period.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'लॉक-इन वह न्यूनतम अवधि है जिसके दौरान निवेश वापस नहीं लिया जा सकता।',
        example_hi: 'उदाहरण: ELSS फंड्स में 3 साल का लॉक-इन।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP top-up', 'increase SIP amount', 'SIP टॉप-अप', 'SIP राशि बढ़ाना'],
        definition_en: 'SIP top-up allows increasing the monthly SIP amount periodically.',
        example_en: 'Example: Increasing SIP from ₹2,000 to ₹3,000 annually.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP टॉप-अप नियमित SIP राशि को बढ़ाने की सुविधा है।',
        example_hi: 'उदाहरण: ₹2,000 से ₹3,000 वार्षिक SIP बढ़ाना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund capital gains', 'capital gains tax', 'कैपिटल गेन टैक्स', 'पूंजी लाभ कर'],
        definition_en: 'Capital gains arise from sale of mutual fund units and are taxed based on holding period.',
        example_en: 'Example: Short-term capital gains on equity taxed at 15%.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'पूंजी लाभ म्यूचुअल फंड इकाइयों की बिक्री से होता है और होल्डिंग अवधि पर टैक्स लगता है।',
        example_hi: 'उदाहरण: इक्विटी पर शॉर्ट-टर्म कैपिटल गेन 15% टैक्स।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund dividend reinvestment', 'DRIP mutual fund', 'डिविडेंड पुनर्निवेश', 'डिविडेंड पुनर्निवेश योजना'],
        definition_en: 'Dividend Reinvestment Plan (DRIP) automatically reinvests dividends to buy more units.',
        example_en: 'Example: ₹2 dividend reinvested to buy additional mutual fund units.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'डिविडेंड पुनर्निवेश योजना में लाभांश स्वचालित रूप से पुनर्निवेशित होते हैं।',
        example_hi: 'उदाहरण: ₹2 लाभांश से अतिरिक्त इकाइयां खरीदना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP start', 'how to start SIP', 'SIP कैसे शुरू करें', 'म्यूचुअल फंड SIP शुरू करना'],
        definition_en: 'Starting SIP involves selecting a scheme, deciding amount & tenure, and registering with auto debit.',
        example_en: 'Example: Choose equity fund, invest ₹5,000 monthly for 5 years.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP शुरू करने के लिए योजना चुनें, राशि तय करें और ऑटो डेबिट सेट करें।',
        example_hi: 'उदाहरण: इक्विटी फंड में ₹5,000 मासिक 5 साल के लिए निवेश।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund exit load', 'exit load meaning', 'म्यूचुअल फंड एग्जिट लोड', 'एग्जिट लोड क्या है'],
        definition_en: 'Exit load is a fee charged by mutual funds if units are redeemed before a specified period.',
        example_en: 'Example: 1% exit load if redeemed within 1 year of investment.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'एग्जिट लोड वह शुल्क है जो म्यूचुअल फंड निवेश पर नियत अवधि से पहले रिडीम करने पर लिया जाता है।',
        example_hi: 'उदाहरण: 1 वर्ष के अंदर रिडीम करने पर 1% एग्जिट लोड।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund NAV', 'Net Asset Value meaning', 'म्यूचुअल फंड NAV', 'नेट एसेट वैल्यू'],
        definition_en: 'NAV is the per unit market value of a mutual fund calculated daily.',
        example_en: 'Example: NAV of ₹25 means each unit costs ₹25 on that day.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'NAV म्यूचुअल फंड की प्रति यूनिट बाजार मूल्य होता है, जो दैनिक रूप से गणना किया जाता है।',
        example_hi: 'उदाहरण: ₹25 का NAV मतलब एक यूनिट ₹25 की है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund asset allocation', 'asset allocation strategy', 'म्यूचुअल फंड एसेट अलोकेशन', 'संपत्ति आवंटन'],
        definition_en: 'Asset allocation is distributing investments across asset classes like equity, debt, and gold.',
        example_en: 'Example: 60% equity, 30% debt, 10% gold in a balanced fund.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'संपत्ति आवंटन में निवेश को इक्विटी, डेब्ट, और गोल्ड जैसी वर्गों में बांटना शामिल है।',
        example_hi: 'उदाहरण: बैलेंस्ड फंड में 60% इक्विटी, 30% डेब्ट, 10% गोल्ड।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund systematic transfer plan', 'STP meaning', 'सिस्टमैटिक ट्रांसफर प्लान', 'STP क्या है'],
        definition_en: 'STP allows systematic transfer of fixed amounts from one fund to another.',
        example_en: 'Example: Transferring ₹5,000 monthly from debt fund to equity fund.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'STP एक योजना है जिसमें एक फंड से दूसरे फंड में नियमित राशि ट्रांसफर होती है।',
        example_hi: 'उदाहरण: ₹5,000 मासिक डेब्ट फंड से इक्विटी फंड में ट्रांसफर।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund dividend payout', 'dividend option', 'म्यूचुअल फंड डिविडेंड पेरोल', 'डिविडेंड विकल्प'],
        definition_en: 'Dividend payout option pays declared dividends to investors as cash.',
        example_en: 'Example: ₹10 dividend per unit credited to bank account.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'डिविडेंड पेरोल विकल्प में लाभांश निवेशकों को नकद भुगतान किया जाता है।',
        example_hi: 'उदाहरण: ₹10 लाभांश प्रति यूनिट बैंक खाते में।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP calculator', 'SIP calculator', 'SIP कैलकुलेटर', 'म्यूचुअल फंड SIP कैलकुलेटर'],
        definition_en: 'SIP calculator helps estimate future value of SIP investments based on amount, tenure, and return rate.',
        example_en: 'Example: ₹5,000 monthly for 10 years at 12% returns grows to approx ₹14.4 lakhs.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP कैलकुलेटर राशि, अवधि और रिटर्न के आधार पर भविष्य मूल्य का अनुमान लगाता है।',
        example_hi: 'उदाहरण: ₹5,000 मासिक 10 साल 12% रिटर्न पर लगभग ₹14.4 लाख।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund dividend reinvestment plan', 'DRIP', 'डिविडेंड पुनर्निवेश योजना', 'ड्रिप क्या है'],
        definition_en: 'DRIP automatically reinvests dividends into purchasing more units instead of cash payout.',
        example_en: 'Example: Dividends used to buy additional mutual fund units increasing holdings.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'DRIP में लाभांश नकद के बजाय पुनर्निवेशित होकर अतिरिक्त इकाइयाँ खरीदता है।',
        example_hi: 'उदाहरण: लाभांश से अतिरिक्त इकाइयाँ खरीदकर होल्डिंग बढ़ाना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund direct plan vs regular plan', 'direct plan', 'regular plan', 'डायरेक्ट और रेगुलर प्लान'],
        definition_en: 'Direct plans are bought directly from fund houses with lower expense ratio; regular plans via distributors.',
        example_en: 'Example: Direct plan returns are higher due to lower fees.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'डायरेक्ट प्लान सीधे फंड हाउस से खरीदे जाते हैं, जिसमें फीस कम होती है।',
        example_hi: 'उदाहरण: डायरेक्ट प्लान में कम खर्च के कारण अधिक रिटर्न।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund tax benefits', 'mutual fund tax saving', 'म्यूचुअल फंड टैक्स लाभ', 'ELSS'],
        definition_en: 'Certain mutual funds like ELSS offer tax benefits under Section 80C with 3-year lock-in.',
        example_en: 'Example: Invest ₹1.5 lakh in ELSS to reduce taxable income.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'कुछ म्यूचुअल फंड जैसे ELSS सेक्शन 80C के तहत टैक्स लाभ देते हैं।',
        example_hi: 'उदाहरण: ELSS में ₹1.5 लाख निवेश कर टैक्स कम करें।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP advantages', 'benefits of SIP', 'SIP के फायदे', 'म्यूचुअल फंड SIP के लाभ'],
        definition_en: 'SIP offers rupee cost averaging, disciplined investing, and convenience.',
        example_en: 'Example: Investing ₹2,000 monthly reduces market timing risk.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP रुपये की औसत लागत, अनुशासित निवेश और सुविधा प्रदान करता है।',
        example_hi: 'उदाहरण: ₹2,000 मासिक निवेश से बाजार समय जोखिम कम होता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund systematic withdrawal plan', 'SWP', 'सिस्टमैटिक विदड्रॉल प्लान', 'SWP क्या है'],
        definition_en: 'SWP allows investors to withdraw a fixed amount regularly from their mutual fund investments.',
        example_en: 'Example: ₹5,000 monthly withdrawal from accumulated mutual fund units.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SWP निवेशकों को म्यूचुअल फंड निवेश से नियमित राशि निकालने की अनुमति देता है।',
        example_hi: 'उदाहरण: ₹5,000 मासिक निकासी।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund systematic transfer plan', 'STP meaning', 'सिस्टमैटिक ट्रांसफर प्लान', 'STP क्या है'],
        definition_en: 'STP lets investors transfer fixed amounts systematically between mutual fund schemes.',
        example_en: 'Example: ₹3,000 transferred monthly from debt fund to equity fund.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'STP निवेशकों को फंड्स के बीच नियमित राशि ट्रांसफर करने की अनुमति देता है।',
        example_hi: 'उदाहरण: ₹3,000 मासिक ट्रांसफर।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund expense ratio', 'expense ratio meaning', 'एक्सपेंस रेशियो', 'म्यूचुअल फंड खर्च अनुपात'],
        definition_en: 'Expense ratio is the annual fee charged by mutual funds for managing investments.',
        example_en: 'Example: Expense ratio of 1.5% means ₹1.5 per ₹100 invested is charged yearly.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'एक्सपेंस रेशियो वह वार्षिक शुल्क है जो म्यूचुअल फंड प्रबंधन के लिए लिया जाता है।',
        example_hi: 'उदाहरण: 1.5% एक्सपेंस रेशियो मतलब ₹100 में से ₹1.5 प्रति वर्ष शुल्क।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund turnover ratio', 'turnover ratio meaning', 'टर्नओवर रेशियो', 'म्यूचुअल फंड टर्नओवर अनुपात'],
        definition_en: 'Turnover ratio indicates how frequently fund holdings are bought and sold.',
        example_en: 'Example: 75% turnover ratio means 75% of portfolio changed in a year.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'टर्नओवर रेशियो दर्शाता है कि कितनी बार फंड होल्डिंग्स को खरीदा और बेचा गया।',
        example_hi: 'उदाहरण: 75% टर्नओवर मतलब साल में 75% पोर्टफोलियो बदला।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund benchmark index', 'benchmark meaning', 'बेंचमार्क इंडेक्स', 'म्यूचुअल फंड बेंचमार्क'],
        definition_en: 'Benchmark is a standard index used to compare fund performance.',
        example_en: 'Example: Nifty 50 is a common benchmark for equity funds.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'बेंचमार्क एक मानक सूचकांक है जिससे फंड प्रदर्शन की तुलना की जाती है।',
        example_hi: 'उदाहरण: इक्विटी फंड के लिए Nifty 50।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund risk vs return', 'risk return tradeoff', 'जोखिम और लाभ', 'म्यूचुअल फंड जोखिम बनाम रिटर्न'],
        definition_en: 'Higher returns usually come with higher risk; lower risk investments yield lower returns.',
        example_en: 'Example: Equity funds have higher risk and higher potential returns than debt funds.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'अधिक लाभ के साथ आमतौर पर अधिक जोखिम होता है; कम जोखिम वाले निवेश में कम लाभ होता है।',
        example_hi: 'उदाहरण: इक्विटी फंड में उच्च जोखिम और उच्च लाभ की संभावना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP benefits', 'advantages of SIP', 'SIP के लाभ', 'म्यूचुअल फंड SIP फायदे'],
        definition_en: 'SIP helps in disciplined investing, rupee cost averaging, and compounding benefits.',
        example_en: 'Example: ₹2,000 monthly SIP smooths market volatility impact.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP अनुशासित निवेश, औसत लागत और कंपाउंडिंग लाभ देता है।',
        example_hi: 'उदाहरण: ₹2,000 मासिक SIP से बाजार उतार-चढ़ाव कम होता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund lock-in period', 'lock-in meaning', 'लॉक-इन अवधि', 'म्यूचुअल फंड लॉक-इन'],
        definition_en: 'Lock-in is the minimum duration for which investments cannot be redeemed.',
        example_en: 'Example: ELSS funds have a 3-year lock-in period.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'लॉक-इन वह न्यूनतम अवधि है जिसके दौरान निवेश वापस नहीं लिया जा सकता।',
        example_hi: 'उदाहरण: ELSS में 3 साल का लॉक-इन।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund dividend payout', 'dividend option', 'डिविडेंड विकल्प', 'म्यूचुअल फंड डिविडेंड'],
        definition_en: 'Dividend payout option gives investors periodic cash payouts instead of reinvestment.',
        example_en: 'Example: Quarterly dividend payouts credited to bank account.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'डिविडेंड विकल्प निवेशकों को नकद लाभांश देता है।',
        example_hi: 'उदाहरण: तिमाही लाभांश भुगतान।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP amount', 'how much to invest SIP', 'SIP राशि', 'म्यूचुअल फंड SIP कितना निवेश करें'],
        definition_en: 'SIP amount depends on financial goals, risk appetite, and income.',
        example_en: 'Example: Start with ₹2,000 monthly and increase over time.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP राशि वित्तीय लक्ष्यों, जोखिम क्षमता और आय पर निर्भर करती है।',
        example_hi: 'उदाहरण: ₹2,000 से शुरू करें और समय के साथ बढ़ाएं।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund exit load', 'exit load meaning', 'निकासी शुल्क', 'म्यूचुअल फंड एग्जिट लोड'],
        definition_en: 'Exit load is a fee charged when you redeem mutual fund units before a specified period.',
        example_en: 'Example: 1% exit load if redeemed within 1 year of investment.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'निकासी शुल्क वह राशि है जो फंड यूनिट्स को जल्दी बेचने पर लगती है।',
        example_hi: 'उदाहरण: 1 साल के अंदर रिडीम करने पर 1% निकासी शुल्क।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund NAV', 'Net Asset Value', 'निवल संपत्ति मूल्य', 'म्यूचुअल फंड NAV'],
        definition_en: 'NAV is the per-unit market value of a mutual fund on a given date.',
        example_en: 'Example: NAV ₹50 means each unit is valued at ₹50.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'NAV एक दिनांक पर फंड की प्रति यूनिट बाजार मूल्य होती है।',
        example_hi: 'उदाहरण: NAV ₹50 मतलब हर यूनिट ₹50 की कीमत।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP vs lump sum', 'SIP or lump sum investment', 'SIP बनाम लंपसम', 'म्यूचुअल फंड SIP बनाम लंपसम'],
        definition_en: 'SIP invests regularly in small amounts; lump sum invests a large amount at once.',
        example_en: 'Example: ₹2,000 monthly SIP versus ₹50,000 lump sum investment.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP नियमित छोटी राशि निवेश है; लंपसम एक बार बड़ी राशि।',
        example_hi: 'उदाहरण: ₹2,000 मासिक SIP बनाम ₹50,000 लंपसम।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund risk factors', 'mutual fund risk types', 'म्यूचुअल फंड जोखिम', 'म्यूचुअल फंड जोखिम प्रकार'],
        definition_en: 'Risks include market risk, credit risk, liquidity risk, and interest rate risk.',
        example_en: 'Example: Equity funds face high market risk compared to debt funds.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'जोखिमों में बाजार, क्रेडिट, तरलता और ब्याज दर जोखिम शामिल हैं।',
        example_hi: 'उदाहरण: इक्विटी फंड में उच्च बाजार जोखिम।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP benefits', 'advantages of SIP investing', 'SIP निवेश के फायदे', 'म्यूचुअल फंड SIP लाभ'],
        definition_en: 'SIP allows rupee cost averaging, disciplined investing, and compounding over time.',
        example_en: 'Example: ₹3,000 monthly SIP reduces impact of market volatility.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP रुपये की औसत लागत, अनुशासित निवेश और कंपाउंडिंग लाभ देता है।',
        example_hi: 'उदाहरण: ₹3,000 मासिक SIP से बाजार उतार-चढ़ाव कम होता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund dividend reinvestment', 'dividend reinvest option', 'डिविडेंड पुनर्निवेश', 'म्यूचुअल फंड डिविडेंड पुनर्निवेश'],
        definition_en: 'Dividend reinvestment means dividends are used to buy more units instead of cash payout.',
        example_en: 'Example: Quarterly dividends reinvested increase total units held.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'डिविडेंड पुनर्निवेश में लाभांश से और यूनिट्स खरीदी जाती हैं।',
        example_hi: 'उदाहरण: तिमाही लाभांश पुनर्निवेश से यूनिट्स बढ़ती हैं।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund portfolio diversification', 'diversify mutual fund', 'पोर्टफोलियो विविधीकरण', 'म्यूचुअल फंड डाइवर्सिफिकेशन'],
        definition_en: 'Diversification spreads investments across assets to reduce risk.',
        example_en: 'Example: Investing in equity, debt, and gold funds reduces overall risk.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'विविधीकरण जोखिम कम करने के लिए निवेश को फैला देता है।',
        example_hi: 'उदाहरण: इक्विटी, डेट, गोल्ड फंड में निवेश।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP withdrawal', 'how to withdraw SIP', 'SIP निकासी', 'म्यूचुअल फंड SIP कैसे निकालें'],
        definition_en: 'SIP withdrawal can be partial or full redemption of units at any time after investment.',
        example_en: 'Example: Redeem ₹10,000 from mutual fund units accumulated via SIP.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP निकासी निवेश के बाद कभी भी आंशिक या पूरी हो सकती है।',
        example_hi: 'उदाहरण: ₹10,000 की SIP यूनिट्स को निकासी।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund taxation', 'tax on mutual funds', 'म्यूचुअल फंड टैक्स', 'म्यूचुअल फंड पर कर'],
        definition_en: 'Tax depends on fund type and holding period; long-term and short-term capital gains tax apply.',
        example_en: 'Example: Equity funds held over 1 year are taxed at 10% LTCG.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'टैक्स फंड प्रकार और होल्डिंग अवधि पर निर्भर करता है।',
        example_hi: 'उदाहरण: 1 साल से अधिक इक्विटी फंड LTCG 10%।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP registration', 'how to start SIP', 'SIP पंजीकरण', 'म्यूचुअल फंड SIP कैसे शुरू करें'],
        definition_en: 'Start SIP by choosing scheme, amount, frequency, and providing KYC details.',
        example_en: 'Example: Register for ₹2,000 monthly SIP online with PAN and bank details.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP शुरू करने के लिए योजना, राशि, आवृत्ति चुनें और KYC दें।',
        example_hi: 'उदाहरण: ₹2,000 मासिक SIP ऑनलाइन पैन और बैंक से।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['equity mutual fund', 'stock mutual fund', 'इक्विटी म्यूचुअल फंड', 'स्टॉक म्यूचुअल फंड'],
        definition_en: 'Equity mutual funds invest primarily in stocks and aim for capital growth over the long term.',
        example_en: 'Example: Investing in an Nifty 50 index fund for wealth creation.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'इक्विटी म्यूचुअल फंड मुख्य रूप से स्टॉक्स में निवेश करता है और लंबी अवधि में पूंजी वृद्धि का लक्ष्य रखता है।',
        example_hi: 'उदाहरण: निफ्टी 50 इंडेक्स फंड में निवेश।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['debt mutual fund', 'bond mutual fund', 'डेट म्यूचुअल फंड', 'बॉन्ड म्यूचुअल फंड'],
        definition_en: 'Debt mutual funds invest in fixed income securities like bonds and government securities for stable returns.',
        example_en: 'Example: Investing in short-term debt funds to earn steady interest.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'डेट म्यूचुअल फंड फिक्स्ड इनकम सिक्योरिटीज़ जैसे बॉन्ड और सरकारी सिक्योरिटीज़ में निवेश करता है।',
        example_hi: 'उदाहरण: शॉर्ट-टर्म डेट फंड में निवेश।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['balanced mutual fund', 'hybrid mutual fund', 'बैलेंस्ड म्यूचुअल फंड', 'हाइब्रिड म्यूचुअल फंड'],
        definition_en: 'Balanced funds invest in a mix of equity and debt to balance risk and returns.',
        example_en: 'Example: 60% equity and 40% debt allocation in a hybrid fund.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'बैलेंस्ड फंड इक्विटी और डेट का मिश्रण निवेश करता है।',
        example_hi: 'उदाहरण: 60% इक्विटी और 40% डेट।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['index fund', 'passive mutual fund', 'इंडेक्स फंड', 'पैसिव म्यूचुअल फंड'],
        definition_en: 'Index funds replicate a market index like Nifty or Sensex to provide returns similar to the market.',
        example_en: 'Example: Nifty 50 index fund tracks the Nifty 50 index performance.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'इंडेक्स फंड बाजार सूचकांक की नकल करता है।',
        example_hi: 'उदाहरण: निफ्टी 50 इंडेक्स फंड।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['sector mutual fund', 'industry specific fund', 'सेक्टर म्यूचुअल फंड', 'इंडस्ट्री स्पेसिफिक फंड'],
        definition_en: 'Sector funds invest in specific industries like banking, IT, or pharma for focused exposure.',
        example_en: 'Example: Banking sector fund investing in banks and financial institutions.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'सेक्टर फंड विशिष्ट उद्योगों में निवेश करता है।',
        example_hi: 'उदाहरण: बैंकिंग सेक्टर फंड।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP calculator', 'SIP investment calculator', 'SIP कैलकुलेटर', 'म्यूचुअल फंड SIP कैलकुलेटर'],
        definition_en: 'SIP calculator helps estimate future value of SIP investments based on amount, rate, and tenure.',
        example_en: 'Example: ₹2,000 monthly SIP for 10 years at 12% returns grows to ₹5.6 lakh.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP कैलकुलेटर निवेश की भविष्य मूल्य का अनुमान लगाता है।',
        example_hi: 'उदाहरण: ₹2,000 मासिक SIP, 10 वर्ष, 12% रिटर्न।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund direct plan', 'direct mutual fund', 'डायरेक्ट म्यूचुअल फंड', 'डायरेक्ट प्लान'],
        definition_en: 'Direct plans are purchased directly from the fund house with lower expense ratio and no distributor commission.',
        example_en: 'Example: Investing via AMC website instead of broker.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'डायरेक्ट प्लान सीधे फंड हाउस से खरीदा जाता है, खर्च कम होता है।',
        example_hi: 'उदाहरण: AMC वेबसाइट से निवेश।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund regular plan', 'regular mutual fund', 'रेगुलर म्यूचुअल फंड', 'रेगुलर प्लान'],
        definition_en: 'Regular plans are purchased via distributors and have higher expense ratio due to commissions.',
        example_en: 'Example: Buying through an agent or broker.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'रेगुलर प्लान वितरकों के माध्यम से खरीदा जाता है, खर्च अधिक होता है।',
        example_hi: 'उदाहरण: एजेंट के माध्यम से निवेश।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP date', 'SIP installment date', 'SIP तारीख', 'म्यूचुअल फंड SIP किस्त की तारीख'],
        definition_en: 'SIP date is the day of the month when the SIP installment is debited from your bank account.',
        example_en: 'Example: SIP date can be 1st, 5th, 10th, etc.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP तारीख वह दिन है जब राशि बैंक से डेबिट होती है।',
        example_hi: 'उदाहरण: 1 तारीख, 5 तारीख, 10 तारीख।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP pause', 'pause SIP', 'SIP रोकना', 'म्यूचुअल फंड SIP को रोकना'],
        definition_en: 'SIP pause allows you to temporarily stop SIP installments without cancelling the plan.',
        example_en: 'Example: Pausing SIP for 3 months due to financial reasons.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP रोकना आपको अस्थायी रूप से SIP बंद करने देता है।',
        example_hi: 'उदाहरण: 3 महीने के लिए SIP रोकना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP stop', 'stop SIP permanently', 'SIP बंद करना', 'म्यूचुअल फंड SIP स्थायी रूप से बंद करना'],
        definition_en: 'Stopping SIP means permanently discontinuing the monthly installments for your mutual fund investment.',
        example_en: 'Example: You can stop SIP anytime by informing your fund house or through your distributor.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP बंद करने का मतलब मासिक किस्तों को स्थायी रूप से रोकना है।',
        example_hi: 'उदाहरण: आप फंड हाउस को सूचना देकर कभी भी SIP बंद कर सकते हैं।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP top-up', 'SIP increase', 'SIP टॉप-अप', 'SIP राशि बढ़ाना'],
        definition_en: 'SIP top-up is an option to increase your SIP installment amount periodically to grow your investment.',
        example_en: 'Example: Increasing SIP from ₹2,000 to ₹3,000 after one year.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP टॉप-अप से आप SIP राशि को समय-समय पर बढ़ा सकते हैं।',
        example_hi: 'उदाहरण: एक साल बाद ₹2,000 से ₹3,000 तक बढ़ाना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund lock-in period', 'lock-in meaning', 'लॉक-इन अवधि', 'म्यूचुअल फंड लॉक-इन'],
        definition_en: 'Lock-in period is the minimum time you must hold your investment before withdrawal is allowed.',
        example_en: 'Example: ELSS funds have a 3-year lock-in period.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'लॉक-इन अवधि वह न्यूनतम समय है जब निवेश नहीं निकाला जा सकता।',
        example_hi: 'उदाहरण: ELSS फंड का 3 साल का लॉक-इन।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund expense ratio', 'fund expense ratio', 'एक्सपेंस रेशियो', 'म्यूचुअल फंड खर्च अनुपात'],
        definition_en: 'Expense ratio is the annual fee charged by the fund house to manage the mutual fund.',
        example_en: 'Example: 1.5% expense ratio means ₹1.5 per ₹100 invested is charged annually.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'एक्सपेंस रेशियो वह वार्षिक शुल्क है जो फंड हाउस लेता है।',
        example_hi: 'उदाहरण: 1.5% एक्सपेंस रेशियो।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP benefits', 'advantages of SIP', 'SIP के फायदे', 'म्यूचुअल फंड SIP लाभ'],
        definition_en: 'SIP offers rupee cost averaging, disciplined investing, and power of compounding.',
        example_en: 'Example: Monthly ₹2,000 SIP helps reduce impact of market volatility.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP रुपये की औसत लागत, अनुशासित निवेश और कंपाउंडिंग प्रदान करता है।',
        example_hi: 'उदाहरण: ₹2,000 मासिक SIP बाजार उतार-चढ़ाव को कम करता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund exit load', 'exit load fee', 'निकासी शुल्क', 'म्यूचुअल फंड एग्जिट लोड'],
        definition_en: 'Exit load is a fee charged for redeeming mutual fund units before a specific period.',
        example_en: 'Example: 1% exit load if redeemed before 1 year.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'निकासी शुल्क निवेश को जल्दी निकालने पर लिया जाता है।',
        example_hi: 'उदाहरण: 1 साल से पहले निकासी पर 1% शुल्क।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP calculator', 'SIP return calculator', 'SIP कैलकुलेटर', 'म्यूचुअल फंड SIP रिटर्न कैलकुलेटर'],
        definition_en: 'SIP calculator estimates future value of your SIP based on amount, tenure, and expected returns.',
        example_en: 'Example: ₹2,000 monthly SIP for 10 years at 12% return grows to ₹5.6 lakh.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP कैलकुलेटर निवेश की भविष्य मूल्य का अनुमान लगाता है।',
        example_hi: 'उदाहरण: ₹2,000 मासिक SIP, 10 वर्ष, 12% रिटर्न।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund NAV', 'net asset value meaning', 'निवल संपत्ति मूल्य', 'म्यूचुअल फंड NAV'],
        definition_en: 'NAV is the per unit market value of a mutual fund on a given date.',
        example_en: 'Example: NAV ₹50 means each unit is worth ₹50.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'NAV एक दिनांक पर फंड की प्रति यूनिट बाजार मूल्य है।',
        example_hi: 'उदाहरण: NAV ₹50 मतलब प्रत्येक यूनिट ₹50।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund portfolio diversification', 'diversification in mutual funds', 'पोर्टफोलियो विविधीकरण', 'म्यूचुअल फंड डाइवर्सिफिकेशन'],
        definition_en: 'Diversification spreads investment across assets to reduce risk.',
        example_en: 'Example: Equity, debt and gold funds for balanced risk.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'विविधीकरण निवेश को फैलाकर जोखिम कम करता है।',
        example_hi: 'उदाहरण: इक्विटी, डेट और गोल्ड फंड।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund systematic withdrawal plan', 'SWP meaning', 'सिस्टमैटिक विदड्रॉल प्लान', 'म्यूचुअल फंड SWP'],
        definition_en: 'SWP allows you to withdraw a fixed amount periodically from your mutual fund.',
        example_en: 'Example: ₹5,000 monthly withdrawal as regular income.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SWP से आप निश्चित राशि नियमित रूप से निकाल सकते हैं।',
        example_hi: 'उदाहरण: ₹5,000 मासिक निकासी।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund systematic transfer plan', 'STP meaning', 'सिस्टमैटिक ट्रांसफर प्लान', 'म्यूचुअल फंड STP'],
        definition_en: 'STP allows transferring a fixed amount periodically from one mutual fund scheme to another.',
        example_en: 'Example: Monthly transfer of ₹10,000 from debt fund to equity fund.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'STP से आप एक फंड से दूसरे फंड में नियमित राशि ट्रांसफर कर सकते हैं।',
        example_hi: 'उदाहरण: ₹10,000 मासिक ट्रांसफर डेट फंड से इक्विटी फंड में।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund lump sum investment', 'one-time mutual fund investment', 'लंप सम निवेश', 'एकमुश्त म्यूचुअल फंड निवेश'],
        definition_en: 'Lump sum investment is a one-time investment in mutual funds instead of periodic SIP.',
        example_en: 'Example: Investing ₹1,00,000 in a fund at once.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'लंप सम निवेश एक बार में म्यूचुअल फंड में निवेश करना है।',
        example_hi: 'उदाहरण: ₹1,00,000 एक बार निवेश।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund risk factors', 'risk in mutual funds', 'म्यूचुअल फंड जोखिम', 'निवेश जोखिम'],
        definition_en: 'Mutual funds carry market risks including equity risk, interest rate risk, and credit risk.',
        example_en: 'Example: Equity funds are subject to market volatility.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'म्यूचुअल फंड में बाजार से जुड़े जोखिम होते हैं।',
        example_hi: 'उदाहरण: इक्विटी फंड में उतार-चढ़ाव जोखिम।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP benefits', 'advantages of SIP', 'SIP के फायदे', 'म्यूचुअल फंड SIP लाभ'],
        definition_en: 'SIP helps in rupee cost averaging, disciplined investing, and harnessing power of compounding.',
        example_en: 'Example: Investing ₹5,000 monthly reduces impact of market fluctuations.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP रुपये की औसत लागत, अनुशासित निवेश और कंपाउंडिंग में मदद करता है।',
        example_hi: 'उदाहरण: ₹5,000 मासिक निवेश बाजार उतार-चढ़ाव को कम करता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund NAV', 'net asset value meaning', 'NAV क्या है', 'म्यूचुअल फंड NAV'],
        definition_en: 'NAV is the per unit value of a mutual fund scheme at a given time.',
        example_en: 'Example: NAV of ₹100 means each unit is worth ₹100.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'NAV एक निश्चित समय पर फंड की प्रति यूनिट कीमत है।',
        example_hi: 'उदाहरण: NAV ₹100 मतलब एक यूनिट ₹100 की है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund taxation', 'tax on mutual fund gains', 'म्यूचुअल फंड टैक्स', 'निवेश पर कर'],
        definition_en: 'Mutual fund gains are taxed as per holding period and type of fund under capital gains tax.',
        example_en: 'Example: Short-term capital gains tax is 15% for equity funds.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'म्यूचुअल फंड के लाभ पर कर लागू होता है।',
        example_hi: 'उदाहरण: इक्विटी फंड पर 15% शॉर्ट टर्म कैपिटल गेन टैक्स।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund exit load', 'exit load meaning', 'निकासी शुल्क', 'म्यूचुअल फंड एग्जिट लोड'],
        definition_en: 'Exit load is a fee charged for redeeming mutual fund units within a specific period.',
        example_en: 'Example: 1% exit load if redeemed within one year.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'निकासी शुल्क वह शुल्क है जो जल्द निकासी पर लगता है।',
        example_hi: 'उदाहरण: 1 साल के भीतर निकासी पर 1% शुल्क।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP frequency', 'SIP installment frequency', 'SIP आवृत्ति', 'SIP किस्त की आवृत्ति'],
        definition_en: 'SIP frequency is how often the SIP installment is debited — monthly, quarterly, etc.',
        example_en: 'Example: Monthly SIP is most common among investors.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP आवृत्ति से तात्पर्य किस्तों की अवधि से है।',
        example_hi: 'उदाहरण: मासिक SIP सबसे सामान्य है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP start date', 'SIP begin date', 'SIP आरंभ तिथि', 'SIP शुरुआत की तारीख'],
        definition_en: 'SIP start date is the date when the first SIP installment is deducted.',
        example_en: 'Example: SIP started on 1st January.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP आरंभ तिथि वह दिन है जब पहली किस्त कटती है।',
        example_hi: 'उदाहरण: SIP 1 जनवरी को शुरू।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP top-up', 'increase SIP amount', 'SIP टॉप-अप', 'SIP राशि बढ़ाना'],
        definition_en: 'SIP top-up lets you increase the monthly SIP amount periodically.',
        example_en: 'Example: Increasing SIP from ₹2000 to ₹3000 after 6 months.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP टॉप-अप से आप SIP राशि बढ़ा सकते हैं।',
        example_hi: 'उदाहरण: 6 महीने बाद ₹2000 से ₹3000 बढ़ाना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund investment strategies', 'investment planning', 'म्यूचुअल फंड निवेश रणनीतियाँ', 'निवेश योजना'],
        definition_en: 'Investment strategies help to align mutual fund investments with financial goals and risk tolerance.',
        example_en: 'Example: Diversifying across equity and debt funds for balance.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'निवेश रणनीतियाँ वित्तीय लक्ष्यों और जोखिम सहिष्णुता के अनुसार निवेश को समायोजित करती हैं।',
        example_hi: 'उदाहरण: इक्विटी और डेट फंड में विविधीकरण।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP vs lump sum', 'SIP or lump sum', 'SIP बनाम एकमुश्त', 'SIP और एकमुश्त निवेश'],
        definition_en: 'SIP is investing smaller amounts periodically, lump sum is investing a large amount at once.',
        example_en: 'Example: SIP of ₹5,000 monthly vs ₹60,000 lump sum.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP छोटे-छोटे निवेश होते हैं, एकमुश्त एक बार का बड़ा निवेश।',
        example_hi: 'उदाहरण: ₹5,000 मासिक SIP बनाम ₹60,000 एकमुश्त।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund risk and return', 'investment risk', 'जोखिम और लाभ', 'म्यूचुअल फंड जोखिम'],
        definition_en: 'Higher returns usually involve higher risk in mutual fund investments.',
        example_en: 'Example: Equity funds offer higher returns with volatility.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'अधिक लाभ के लिए अधिक जोखिम लेना पड़ता है।',
        example_hi: 'उदाहरण: इक्विटी फंड में उच्च लाभ और उतार-चढ़ाव।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP benefits', 'advantages of SIP investing', 'SIP निवेश के लाभ', 'म्यूचुअल फंड SIP फायदे'],
        definition_en: 'SIP provides rupee cost averaging, discipline, and compounding benefits.',
        example_en: 'Example: ₹3,000 monthly SIP reduces impact of market volatility.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP रुपये की औसत लागत, अनुशासन और कंपाउंडिंग देता है।',
        example_hi: 'उदाहरण: ₹3,000 मासिक SIP से बाजार उतार-चढ़ाव कम होता है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP start', 'how to start SIP', 'SIP कैसे शुरू करें', 'म्यूचुअल फंड SIP आरंभ'],
        definition_en: 'Starting SIP involves selecting fund, amount, date, and setting up auto-debit.',
        example_en: 'Example: Setting ₹2,000 monthly SIP on 5th of each month.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP शुरू करने के लिए फंड, राशि, तारीख और ऑटो-डेबिट सेट करें।',
        example_hi: 'उदाहरण: हर महीने 5 तारीख को ₹2,000 SIP।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP benefits for beginners', 'SIP beginner advantages', 'शुरुआत के लिए SIP फायदे', 'नवीन निवेशकों के लिए SIP'],
        definition_en: 'SIP is ideal for beginners due to low investment amount and disciplined savings.',
        example_en: 'Example: Starting with ₹500 monthly SIP.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP शुरुआती लोगों के लिए आसान और नियमित बचत है।',
        example_hi: 'उदाहरण: ₹500 मासिक SIP से शुरुआत।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP benefits long term', 'long-term SIP advantages', 'दीर्घकालिक SIP फायदे', 'लंबे समय के लिए SIP'],
        definition_en: 'Long-term SIP benefits include compounding and wealth creation.',
        example_en: 'Example: ₹2,000 monthly SIP for 15 years grows significantly.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'दीर्घकालिक SIP कंपाउंडिंग और संपत्ति निर्माण में मदद करता है।',
        example_hi: 'उदाहरण: 15 वर्षों के लिए ₹2,000 मासिक SIP।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP vs RD', 'SIP compared to recurring deposit', 'SIP बनाम आरडी', 'SIP और आरडी तुलना'],
        definition_en: 'SIP invests in market-linked funds; RD offers fixed returns but less growth.',
        example_en: 'Example: SIP may give 12% returns vs RD’s 6-7%.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP बाजार आधारित है, RD निश्चित ब्याज देता है।',
        example_hi: 'उदाहरण: SIP 12% बनाम RD 6-7%।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP tax benefits', 'tax saving SIP', 'SIP टैक्स लाभ', 'म्यूचुअल फंड टैक्स बचत'],
        definition_en: 'Certain mutual funds like ELSS offer tax benefits under Section 80C.',
        example_en: 'Example: Investing ₹1.5 lakh in ELSS reduces taxable income.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'ELSS जैसे फंड 80C के तहत टैक्स बचत देते हैं।',
        example_hi: 'उदाहरण: ₹1.5 लाख ELSS में निवेश।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP risks', 'risks of SIP', 'SIP जोखिम', 'म्यूचुअल फंड SIP खतरे'],
        definition_en: 'SIP is subject to market risk and does not guarantee returns.',
        example_en: 'Example: Market downturn may reduce SIP returns temporarily.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP में बाजार जोखिम रहता है और लाभ निश्चित नहीं।',
        example_hi: 'उदाहरण: बाजार गिरावट से SIP पर प्रभाव।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP withdrawal', 'how to withdraw SIP', 'SIP निकासी कैसे करें', 'म्यूचुअल फंड SIP निकासी'],
        definition_en: 'You can redeem SIP units partially or fully anytime, subject to fund terms.',
        example_en: 'Example: Partial withdrawal of ₹10,000 from your SIP investments.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'आप SIP यूनिट्स को पूरी तरह या आंशिक रूप से रिडीम कर सकते हैं।',
        example_hi: 'उदाहरण: ₹10,000 की आंशिक निकासी।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP pause', 'pause SIP', 'SIP रोकना', 'म्यूचुअल फंड SIP अस्थायी रोक'],
        definition_en: 'Most funds allow pausing SIP installments temporarily without closing the plan.',
        example_en: 'Example: Pausing SIP for 3 months during financial difficulty.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'अधिकांश फंड SIP को अस्थायी रूप से रोकने की सुविधा देते हैं।',
        example_hi: 'उदाहरण: वित्तीय कठिनाई में 3 महीने के लिए SIP रोकना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP restart', 'restart SIP', 'SIP फिर शुरू करें', 'म्यूचुअल फंड SIP पुनः आरंभ'],
        definition_en: 'After pausing, SIP can be restarted anytime by informing the fund house.',
        example_en: 'Example: Restarting SIP after a 3-month break.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'रोकने के बाद, SIP को कभी भी पुनः शुरू किया जा सकता है।',
        example_hi: 'उदाहरण: 3 महीने बाद SIP फिर शुरू करना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP step-up', 'SIP amount increase', 'SIP राशि बढ़ाना', 'म्यूचुअल फंड SIP वृद्धि'],
        definition_en: 'Step-up SIP increases your monthly investment automatically at defined intervals.',
        example_en: 'Example: Increasing SIP by ₹500 every year.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'स्टेप-अप SIP में निवेश राशि स्वतः बढ़ती है।',
        example_hi: 'उदाहरण: हर साल ₹500 की वृद्धि।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP maturity', 'SIP end date', 'SIP समाप्ति', 'म्यूचुअल फंड SIP मैच्योरिटी'],
        definition_en: 'SIP maturity is when you stop investing and redeem units as per your plan.',
        example_en: 'Example: After 5 years of SIP, redeem your investments.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP मैच्योरिटी वह समय है जब निवेश समाप्त होता है।',
        example_hi: 'उदाहरण: 5 साल बाद निवेश निकालना।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP minimum amount', 'minimum SIP investment', 'न्यूनतम SIP राशि', 'म्यूचुअल फंड SIP न्यूनतम'],
        definition_en: 'Minimum SIP amount varies by fund, often starting from ₹500.',
        example_en: 'Example: Some funds allow SIP from ₹500 monthly.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'न्यूनतम SIP राशि फंड के अनुसार अलग होती है।',
        example_hi: 'उदाहरण: ₹500 से SIP शुरू हो सकती है।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP late payment', 'delayed SIP', 'SIP देर से भुगतान', 'म्यूचुअल फंड SIP देरी'],
        definition_en: 'Some funds allow a grace period for SIP payment delay, else SIP may fail.',
        example_en: 'Example: 7-day grace period for SIP debit.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'कुछ फंड SIP भुगतान में देरी के लिए अवधि देते हैं।',
        example_hi: 'उदाहरण: 7 दिन की ग्रेस अवधि।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP auto-debit', 'SIP payment method', 'SIP ऑटो-डेबिट', 'म्यूचुअल फंड SIP भुगतान'],
        definition_en: 'SIP installments are usually paid via auto-debit from your bank account.',
        example_en: 'Example: Setting up auto-debit on 10th every month.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP भुगतान बैंक खाते से ऑटो-डेबिट द्वारा होता है।',
        example_hi: 'उदाहरण: हर महीने 10 तारीख को ऑटो-डेबिट।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP failed transaction', 'failed SIP', 'SIP असफल लेनदेन', 'म्यूचुअल फंड SIP विफल'],
        definition_en: 'Failed SIP occurs due to insufficient funds or technical errors.',
        example_en: 'Example: Bank balance insufficient, SIP fails for the month.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'SIP विफल तब होता है जब खाते में पैसा नहीं होता।',
        example_hi: 'उदाहरण: खाते में कम बैलेंस से SIP असफल।',
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['mutual fund SIP vs direct plan', 'SIP direct plan difference', 'SIP बनाम डायरेक्ट प्लान', 'डायरेक्ट और नियमित SIP'],
        definition_en: 'Direct plans have lower expense ratio than regular plans, increasing returns.',
        example_en: 'Example: Direct SIP plan charges lower fees than regular SIP.',
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: 'डायरेक्ट प्लान में फीस कम होती है, जिससे रिटर्न बढ़ता है।',
        example_hi: 'उदाहरण: डायरेक्ट SIP में कम शुल्क।',
        link_hi: 'https://connectindiaenterprises.com/'
    }
];
