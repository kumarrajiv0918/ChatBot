export interface LoanInfo {
    keywords: string[];
    definition_en: string;
    example_en: string;
    link_en: string;
    definition_hi: string;
    example_hi: string;
    link_hi: string;
}

export const loanData: LoanInfo[] = [
    /** 🚗 Car Loan **/
    {
        keywords: [
            'car loan', 'vehicle loan', 'four wheeler loan', 'loan for car', 'car emi',
            'auto loan', 'car finance', 'car installment', 'car purchase loan',
            'loan to buy car', 'new car loan', 'used car loan',
            'कार लोन', 'कार के लिए लोन', 'कार ईएमआई', 'गाड़ी का लोन'
        ],
        definition_en: `A car loan is money borrowed to buy a vehicle, repaid through EMIs over a fixed period. Typically, banks or finance companies provide it.`,
        example_en: `Example: ₹7 lakh car loan at 9% interest over 5 years = ~₹14,213 EMI.`,
        link_en: 'https://www.rbi.org.in',
        definition_hi: `कार लोन वह राशि होती है जो वाहन खरीदने के लिए बैंक या वित्त कंपनी से ली जाती है, जिसे मासिक किश्तों में निश्चित अवधि में चुकाया जाता है।`,
        example_hi: `उदाहरण: ₹7 लाख का कार लोन 9% ब्याज पर 5 वर्षों के लिए = ~₹14,213 मासिक किश्त।`,
        link_hi: 'https://www.rbi.org.in/hindi'
    },

    /** 🏠 Home Loan **/
    {
        keywords: [
            'home loan', 'housing loan', 'property loan', 'loan for home', 'real estate loan',
            'flat loan', 'house loan', 'home finance', 'loan to buy house',
            'construction loan', 'loan for building home',
            'मकान लोन', 'घर के लिए लोन', 'होम लोन', 'हाउसिंग लोन'
        ],
        definition_en: `A home loan is a secured loan taken to buy or build a house/property. It usually has a long repayment period with lower interest rates.`,
        example_en: `Example: ₹50 lakh home loan at 8% interest over 20 years = ~₹41,868 EMI.`,
        link_en: 'https://www.nhb.org.in',
        definition_hi: `होम लोन वह सुरक्षित ऋण होता है जो घर या संपत्ति खरीदने/बनाने के लिए लिया जाता है, जिसकी अवधि लंबी होती है और ब्याज दर कम होती है।`,
        example_hi: `उदाहरण: ₹50 लाख का होम लोन 8% ब्याज पर 20 वर्षों के लिए = ~₹41,868 मासिक किश्त।`,
        link_hi: 'https://www.nhb.org.in/hindi'
    },
    {
        keywords: [
            'education loan', 'student loan', 'loan for study', 'higher education loan',
            'study abroad loan', 'college loan', 'loan for college', 'loan for tuition',
            'loan for university', 'loan for mba', 'loan for engineering',
            'एजुकेशन लोन', 'शिक्षा लोन', 'विदेश में पढ़ाई लोन', 'स्टूडेंट लोन'
        ],
        definition_en: `An education loan covers tuition and related expenses for higher studies in India or abroad, repaid after course completion.`,
        example_en: `Example: ₹10 lakh education loan for USA studies at 11% over 7 years = ~₹18,631 EMI.`,
        link_en: 'https://www.vidyalakshmi.co.in',
        definition_hi: `एजुकेशन लोन वह ऋण है जो उच्च शिक्षा (भारत या विदेश) की फीस और अन्य खर्चों को कवर करने के लिए लिया जाता है, और कोर्स खत्म होने के बाद चुकाया जाता है।`,
        example_hi: `उदाहरण: अमेरिका में पढ़ाई के लिए ₹10 लाख का लोन, 11% ब्याज पर 7 वर्षों के लिए = ~₹18,631 मासिक किश्त।`,
        link_hi: 'https://www.vidyalakshmi.co.in/hindi'
    },

    /** 👫 Personal Loan **/
    {
        keywords: [
            'personal loan', 'instant loan', 'cash loan', 'loan without security',
            'unsecured loan', 'emergency loan', 'loan for wedding', 'loan for travel',
            'loan for medical', 'festival loan', 'personal finance',
            'पर्सनल लोन', 'व्यक्तिगत ऋण', 'इमरजेंसी लोन', 'शादी के लिए लोन'
        ],
        definition_en: `A personal loan is an unsecured loan for any personal need—wedding, travel, emergencies—approved quickly.`,
        example_en: `Example: ₹2 lakh personal loan at 13% interest for 3 years = ~₹6,740 EMI.`,
        link_en: 'https://www.india.gov.in/personal-loan',
        definition_hi: `पर्सनल लोन वह ऋण है जो बिना किसी गारंटी के किसी व्यक्तिगत खर्च के लिए लिया जा सकता है—जैसे शादी, यात्रा या इमरजेंसी—और इसे जल्दी स्वीकृति मिलती है।`,
        example_hi: `उदाहरण: ₹2 लाख का पर्सनल लोन 13% ब्याज पर 3 वर्षों के लिए = ~₹6,740 मासिक किश्त।`,
        link_hi: 'https://www.india.gov.in/hi/personal-loan'
    },

    /** 💰 Generic Loan Explanation **/
    {
        keywords: [
            'loan', 'loan meaning', 'what is loan', 'लोन क्या है', 'लोन', 'ऋण',
            'loan info', 'loan details', 'loan explanation', 'about loans', 'loan help',
            'basic loan info'
        ],
        definition_en: `A loan is money borrowed that must be paid back with interest.
  
   **Key Features:**
  • Principal – original sum  
  • Interest – fee to lender  
  • Term – repayment period  
  • EMI – monthly repayment  
  • Collateral *(secures a loan)*  
  
   **Common Types:**
  • Personal  
  • Home  
  • Car  
  • Education  
  • Business  
  
  Need an example or EMI explanation?`,
        example_en: `Example: Borrow ₹1 lakh at 12% for 12 months = ~₹8,885 EMI.`,
        link_en: 'https://www.investopedia.com/terms/l/loan.asp',
        definition_hi: `लोन वह राशि होती है जो उधार ली जाती है और ब्याज सहित वापस चुकानी होती है।
  
  🔑 **मुख्य विशेषताएँ:**
  • प्रमुख राशि (Principal)  
  • ब्याज (Interest)  
  • अवधि (Term)  
  • EMI – मासिक भुगतान  
  • जमानत *(सिक्योर्ड लोन के लिए)*  
  
  💡 **प्रमुख प्रकार:**
  • पर्सनल  
  • होम  
  • कार  
  • एजुकेशन  
  • बिजनेस  
  
  क्या आपको उदाहरण या EMI जानना है?`,
        example_hi: `उदाहरण: ₹1 लाख लोन 12% पर 12 महीनों के लिए = ~₹8,885 EMI।`,
        link_hi: 'https://www.investopedia.com/terms/l/loan.asp'
    },
    {
        keywords: [
            'EMI', 'equated monthly installment', 'loan EMI meaning',
            'ईएमआई', 'मासिक किस्त', 'ऋण मासिक किस्त'
        ],
        definition_en: `EMI is a fixed monthly payment made by the borrower to repay the loan over a specified tenure.`,
        example_en: `Example: ₹15,000 EMI for a ₹5 lakh home loan over 20 years.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ईएमआई वह निश्चित मासिक भुगतान है जो ऋण चुकाने के लिए किया जाता है।`,
        example_hi: `उदाहरण: ₹5 लाख के होम लोन के लिए ₹15,000 मासिक किस्त।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan tenure', 'loan period', 'loan repayment duration',
            'ऋण अवधि', 'लोन अवधि', 'ऋण चुकाने की अवधि'
        ],
        definition_en: `Loan tenure is the duration over which the borrower agrees to repay the loan.`,
        example_en: `Example: A personal loan tenure of 5 years.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ऋण अवधि वह समय होता है जिसमें ऋण चुकाना होता है।`,
        example_hi: `उदाहरण: 5 साल की पर्सनल लोन अवधि।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan prepayment', 'loan foreclosure', 'loan prepayment meaning',
            'लोन पूर्व भुगतान', 'लोन फोरक्लोजर', 'ऋण पूर्व भुगतान'
        ],
        definition_en: `Loan prepayment is paying off the loan before the scheduled tenure ends.`,
        example_en: `Example: Clearing a home loan after 10 years on a 20-year tenure.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन पूर्व भुगतान वह राशि है जो समय से पहले चुकाई जाती है।`,
        example_hi: `उदाहरण: 20 साल की अवधि में 10 साल बाद होम लोन चुकाना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'secured loan', 'unsecured loan', 'types of loans',
            'सुरक्षित ऋण', 'असुरक्षित ऋण', 'लोन के प्रकार'
        ],
        definition_en: `Secured loans require collateral, while unsecured loans do not require any security.`,
        example_en: `Example: Home loan is secured; personal loan is unsecured.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `सुरक्षित ऋण के लिए संपत्ति देना पड़ता है, असुरक्षित ऋण बिना सुरक्षा के होता है।`,
        example_hi: `उदाहरण: होम लोन सुरक्षित, पर्सनल लोन असुरक्षित।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan eligibility', 'how to qualify for loan', 'loan eligibility criteria',
            'लोन पात्रता', 'लोन के लिए योग्यता', 'ऋण पात्रता मानदंड'
        ],
        definition_en: `Loan eligibility defines the criteria that borrowers must meet to qualify for a loan, including income, credit score, and employment status.`,
        example_en: `Example: Minimum income of ₹25,000/month and credit score above 700 for personal loan eligibility.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन पात्रता वह मानदंड है जिसे पूरा करके व्यक्ति ऋण के लिए योग्य होता है, जैसे आय, क्रेडिट स्कोर और रोजगार स्थिति।`,
        example_hi: `उदाहरण: पर्सनल लोन के लिए ₹25,000 मासिक आय और 700 से ऊपर क्रेडिट स्कोर।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan application process', 'how to apply loan', 'loan documents required',
            'लोन आवेदन प्रक्रिया', 'लोन कैसे आवेदन करें', 'लोन के लिए आवश्यक दस्तावेज'
        ],
        definition_en: `The loan application process involves submitting documents like identity proof, income proof, and completing the application form with the lender.`,
        example_en: `Example: Submit Aadhaar card, salary slips, and bank statements to apply for a loan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन आवेदन प्रक्रिया में पहचान, आय प्रमाण और फॉर्म भरना शामिल है।`,
        example_hi: `उदाहरण: आधार कार्ड, सैलरी स्लिप और बैंक स्टेटमेंट जमा करके आवेदन करें।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan approval time', 'loan processing time', 'how long for loan approval',
            'लोन स्वीकृति समय', 'लोन प्रक्रिया समय', 'लोन कब तक मंजूर होगा'
        ],
        definition_en: `Loan approval time is the duration lenders take to verify documents and sanction the loan after application.`,
        example_en: `Example: Personal loans typically get approval within 1 to 3 working days.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन स्वीकृति समय वह अवधि है जिसमें ऋणदाता आवेदन की जांच कर ऋण स्वीकृत करता है।`,
        example_hi: `उदाहरण: पर्सनल लोन आमतौर पर 1 से 3 दिन में मंजूर हो जाता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan default', 'loan non-payment', 'what happens if loan not paid',
            'लोन डिफॉल्ट', 'लोन भुगतान न करना', 'लोन न चुकाने पर क्या होगा'
        ],
        definition_en: `Loan default occurs when the borrower fails to repay EMIs on time, leading to penalties, higher interest, or legal action.`,
        example_en: `Example: Missing 3 EMIs in a row may result in loan default status.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन डिफॉल्ट तब होता है जब ऋणधारक EMI समय पर नहीं चुकाता, जिससे जुर्माना और कानूनी कार्रवाई हो सकती है।`,
        example_hi: `उदाहरण: लगातार 3 EMI न चुकाने पर डिफॉल्ट स्थिति बनती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },

    {
        keywords: [
            'loan top-up', 'top up loan meaning', 'additional loan on existing loan',
            'लोन टॉप-अप', 'टॉप-अप लोन क्या है', 'मौजूदा लोन पर अतिरिक्त ऋण'
        ],
        definition_en: `A loan top-up is an additional loan offered on an existing loan, allowing borrowers to get more funds without reapplying entirely.`,
        example_en: `Example: Requesting ₹1 lakh top-up on an ongoing home loan for renovations.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन टॉप-अप मौजूदा ऋण पर अतिरिक्त राशि लेने की सुविधा है।`,
        example_hi: `उदाहरण: चल रहे होम लोन पर ₹1 लाख का टॉप-अप लेना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'co-applicant loan', 'joint loan', 'loan with co-borrower',
            'सह-आवेदक लोन', 'संयुक्त लोन', 'को-बोरोअर लोन'
        ],
        definition_en: `A co-applicant loan is applied jointly by two or more people, usually to increase eligibility or loan amount.`,
        example_en: `Example: Husband and wife applying together for a home loan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `सह-आवेदक लोन दो या अधिक लोगों द्वारा मिलकर लिया जाता है।`,
        example_hi: `उदाहरण: पति-पत्नी साथ में होम लोन के लिए आवेदन।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan statement', 'loan account statement', 'loan details statement',
            'लोन स्टेटमेंट', 'ऋण विवरण पत्र', 'लोन खाता विवरण'
        ],
        definition_en: `A loan statement is a detailed document showing your loan balance, EMI paid, interest, and payment history.`,
        example_en: `Example: Monthly statement showing ₹10,000 EMI paid and ₹4 lakh balance remaining.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन स्टेटमेंट वह दस्तावेज है जिसमें ऋण की पूरी जानकारी होती है।`,
        example_hi: `उदाहरण: मासिक स्टेटमेंट जिसमें EMI और बची राशि दिखती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan interest rate', 'interest on loan', 'loan EMI calculation',
            'लोन ब्याज दर', 'लोन पर ब्याज', 'लोन ईएमआई कैलकुलेशन'
        ],
        definition_en: `Loan interest rate is the percentage charged by lender on the loan principal amount, affecting your EMI and total repayment.`,
        example_en: `Example: 10% annual interest rate on ₹5 lakh personal loan results in EMI of ₹10,600 approx for 5 years.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन ब्याज दर वह प्रतिशत है जो ऋणदाता लोन राशि पर लेता है, जो EMI और कुल भुगतान को प्रभावित करता है।`,
        example_hi: `उदाहरण: ₹5 लाख पर्सनल लोन पर 10% वार्षिक ब्याज दर से 5 साल के लिए EMI ₹10,600 लगभग होता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'fixed vs floating interest', 'fixed rate loan', 'floating rate loan',
            'फिक्स्ड और फ्लोटिंग ब्याज दर', 'फिक्स्ड रेट लोन', 'फ्लोटिंग रेट लोन'
        ],
        definition_en: `Fixed interest rate remains constant through the loan tenure, while floating rate varies with market conditions.`,
        example_en: `Example: Fixed rate of 9% means EMI remains same, floating rate may fluctuate with RBI repo rate changes.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `फिक्स्ड ब्याज दर लोन अवधि भर स्थिर रहती है, फ्लोटिंग ब्याज दर बाजार के अनुसार बदलती रहती है।`,
        example_hi: `उदाहरण: 9% फिक्स्ड रेट पर EMI समान रहती है, फ्लोटिंग रेट RBI रेट के अनुसार बदल सकती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan tenure', 'loan term', 'loan duration',
            'लोन अवधि', 'लोन टर्म', 'लोन समय सीमा'
        ],
        definition_en: `Loan tenure is the total duration over which the borrower has to repay the loan via EMIs.`,
        example_en: `Example: Home loan tenure of 20 years means EMIs are paid monthly for 20 years.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन अवधि वह समय है जिसमें लोन चुकाना होता है।`,
        example_hi: `उदाहरण: 20 साल की होम लोन अवधि में मासिक EMI भरे जाते हैं।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'EMI calculation', 'monthly installment', 'equated monthly installment',
            'ईएमआई कैलकुलेशन', 'मासिक किस्त', 'समान मासिक किस्त'
        ],
        definition_en: `EMI is the fixed monthly payment made by the borrower to repay loan principal and interest.`,
        example_en: `Example: ₹10,000 EMI on ₹5 lakh loan at 10% interest for 5 years.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ईएमआई वह मासिक भुगतान है जो लोन चुकाने के लिए किया जाता है।`,
        example_hi: `उदाहरण: ₹5 लाख लोन पर 10% ब्याज के लिए ₹10,000 मासिक EMI।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan balance', 'outstanding loan', 'remaining loan amount',
            'लोन बैलेंस', 'बकाया लोन', 'शेष लोन राशि'
        ],
        definition_en: `Loan balance is the remaining principal amount yet to be paid by the borrower.`,
        example_en: `Example: After 2 years of EMI payments, outstanding loan balance might be ₹3 lakh.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन बैलेंस वह राशि है जो अभी भी चुकानी बाकी है।`,
        example_hi: `उदाहरण: 2 साल EMI भुगतान के बाद ₹3 लाख शेष हो सकता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'secured loan', 'unsecured loan', 'types of loans',
            'सिक्योर्ड लोन', 'अनसिक्योर्ड लोन', 'लोन के प्रकार'
        ],
        definition_en: `Secured loans require collateral; unsecured loans do not require collateral but may have higher interest rates.`,
        example_en: `Example: Home loan is secured; personal loan usually unsecured.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `सिक्योर्ड लोन में संपत्ति गारंटी होती है, अनसिक्योर्ड में नहीं।`,
        example_hi: `उदाहरण: होम लोन सिक्योर्ड होता है, पर्सनल लोन अनसिक्योर्ड।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan co-applicant', 'joint loan', 'co-borrower',
            'को-अप्लिकेंट', 'संयुक्त लोन', 'सह-ऋणी'
        ],
        definition_en: `Co-applicant is a person who jointly applies for a loan and shares repayment responsibility.`,
        example_en: `Example: Spouse can be co-applicant on home loan for better eligibility.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `को-अप्लिकेंट वह व्यक्ति होता है जो लोन के लिए संयुक्त रूप से आवेदन करता है।`,
        example_hi: `उदाहरण: गृह ऋण में बेहतर पात्रता के लिए पति/पत्नी को-अप्लिकेंट हो सकते हैं।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan guarantor', 'loan security', 'loan collateral',
            'लोन गारंटर', 'लोन सुरक्षा', 'लोन जमानत'
        ],
        definition_en: `Guarantor is a person who promises to repay loan if borrower defaults, providing additional security to lender.`,
        example_en: `Example: A guarantor may be required for unsecured personal loans.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `गारंटर वह व्यक्ति होता है जो लोन न चुकाने पर भुगतान का वचन देता है।`,
        example_hi: `उदाहरण: अनसिक्योर्ड पर्सनल लोन के लिए गारंटर जरूरी हो सकता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan statement', 'account statement', 'loan details',
            'लोन स्टेटमेंट', 'खाता विवरण', 'लोन जानकारी'
        ],
        definition_en: `Loan statement is a detailed report of loan account showing EMIs paid, outstanding balance, and interest paid.`,
        example_en: `Example: Monthly loan statement helps track repayments and outstanding amount.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन स्टेटमेंट वह रिपोर्ट है जो EMI, बकाया राशि और ब्याज दिखाती है।`,
        example_hi: `उदाहरण: मासिक लोन स्टेटमेंट से भुगतान और बकाया पता चलता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan application', 'apply for loan', 'how to apply loan',
            'लोन आवेदन', 'लोन के लिए आवेदन कैसे करें', 'लोन अप्लाई'
        ],
        definition_en: `Loan application is the process of submitting required documents and details to a lender to get loan approval.`,
        example_en: `Example: Submit identity proof, income proof, and address proof for personal loan application.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन आवेदन वह प्रक्रिया है जिसमें ऋणी अपने दस्तावेज़ और जानकारी जमा कर लोन स्वीकृति प्राप्त करता है।`,
        example_hi: `उदाहरण: पर्सनल लोन के लिए पहचान, आय और पता प्रमाण जमा करें।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'interest rate', 'loan interest', 'rate of interest on loan',
            'ब्याज दर', 'लोन पर ब्याज', 'ऋण ब्याज दर'
        ],
        definition_en: `Interest rate is the percentage charged by lenders on the principal loan amount for borrowing funds.`,
        example_en: `Example: A loan with 10% annual interest means ₹10,000 interest on ₹1 lakh loan per year.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ब्याज दर वह प्रतिशत है जो ऋणदाता लोन राशि पर ऋण लेने के लिए लेते हैं।`,
        example_hi: `उदाहरण: ₹1 लाख पर 10% वार्षिक ब्याज का मतलब है ₹10,000 ब्याज हर साल।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan tenure', 'loan duration', 'repayment period',
            'लोन अवधि', 'लोन की अवधि', 'ऋण चुकौती समय'
        ],
        definition_en: `Loan tenure is the period over which the borrower agrees to repay the loan amount with interest.`,
        example_en: `Example: A 5-year loan tenure means monthly EMIs for 60 months.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन अवधि वह समय है जिसके अंदर ऋणी लोन राशि ब्याज सहित चुकाता है।`,
        example_hi: `उदाहरण: 5 साल की लोन अवधि का मतलब है 60 महीनों तक मासिक किश्तें।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'EMI calculation', 'equated monthly installment', 'how to calculate EMI',
            'ईएमआई गणना', 'मासिक किश्त कैसे निकालें', 'ईएमआई कैलकुलेटर'
        ],
        definition_en: `EMI is the fixed monthly amount paid by borrower to lender to repay loan principal and interest over tenure.`,
        example_en: `Example: ₹1 lakh loan at 12% interest for 1 year has EMI ₹8,885 approx.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ईएमआई वह निश्चित मासिक राशि है जो ऋणी लोन की मूल राशि और ब्याज चुकाने के लिए देता है।`,
        example_hi: `उदाहरण: ₹1 लाख लोन 12% ब्याज पर 1 वर्ष के लिए लगभग ₹8,885 मासिक किश्त।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan collateral', 'security for loan', 'secured loan',
            'लोन सुरक्षा', 'सिक्योरिटी', 'सुरक्षित लोन'
        ],
        definition_en: `Collateral is an asset pledged by borrower to lender as security for loan repayment in case of default.`,
        example_en: `Example: Home or vehicle can be collateral for a secured loan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `सिक्योरिटी वह संपत्ति होती है जो ऋणी लोन चुकाने के लिए गिरवी रखता है।`,
        example_hi: `उदाहरण: होम या वाहन सुरक्षित लोन के लिए सिक्योरिटी हो सकते हैं।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'unsecured loan', 'no collateral loan', 'personal loan',
            'अनसिक्योर्ड लोन', 'बिना सुरक्षा लोन', 'पर्सनल लोन'
        ],
        definition_en: `Unsecured loan does not require collateral but depends on creditworthiness of borrower for approval.`,
        example_en: `Example: Personal loans and credit card loans are unsecured loans.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `अनसिक्योर्ड लोन बिना सिक्योरिटी के दिया जाता है, जो क्रेडिट स्कोर पर निर्भर करता है।`,
        example_hi: `उदाहरण: पर्सनल लोन और क्रेडिट कार्ड लोन अनसिक्योर्ड होते हैं।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'prepayment', 'loan prepayment', 'early repayment',
            'पूर्व भुगतान', 'लोन प्रीपेमेंट', 'जल्दी भुगतान'
        ],
        definition_en: `Prepayment means paying part or full loan amount before scheduled due dates, reducing interest burden.`,
        example_en: `Example: Prepay ₹50,000 on loan to reduce tenure and total interest.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पूर्व भुगतान का मतलब लोन की राशि को तय समय से पहले चुकाना है।`,
        example_hi: `उदाहरण: ₹50,000 पूर्व भुगतान से लोन अवधि और ब्याज कम होता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan foreclosure', 'preclosure', 'close loan early',
            'लोन फोरक्लोजर', 'प्रीक्लोजर', 'जल्दी लोन बंद करना'
        ],
        definition_en: `Loan foreclosure is repaying full outstanding loan amount before tenure ends, sometimes incurring penalty.`,
        example_en: `Example: Foreclose home loan after 5 years with a ₹10,000 foreclosure fee.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन फोरक्लोजर का मतलब है लोन की पूरी बची राशि समय से पहले चुका देना।`,
        example_hi: `उदाहरण: 5 साल बाद होम लोन फोरक्लोजर पर ₹10,000 शुल्क लग सकता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan balance transfer', 'transfer loan', 'balance transfer',
            'लोन बैलेंस ट्रांसफर', 'लोन ट्रांसफर', 'बैलेंस ट्रांसफर'
        ],
        definition_en: `Balance transfer means moving existing loan to another lender with better terms like lower interest rate.`,
        example_en: `Example: Transfer ₹5 lakh personal loan to a bank offering 9% interest instead of 12%.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बैलेंस ट्रांसफर का मतलब पुराने लोन को बेहतर शर्तों वाले नए लोनदाता के पास ट्रांसफर करना।`,
        example_hi: `उदाहरण: ₹5 लाख पर्सनल लोन 12% से 9% ब्याज पर ट्रांसफर करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan default', 'missed loan payment', 'loan non payment',
            'लोन डिफॉल्ट', 'लोन भुगतान न करना', 'किस्त चूकना'
        ],
        definition_en: `Loan default occurs when borrower fails to repay loan installments on time, impacting credit score.`,
        example_en: `Example: Missing 2 EMIs may lead to penalty and credit score drop.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन डिफॉल्ट तब होता है जब ऋणी समय पर किश्तें नहीं चुकाता।`,
        example_hi: `उदाहरण: 2 EMI चूकने पर पेनल्टी और क्रेडिट स्कोर गिर सकता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'co-applicant loan', 'joint loan', 'loan with co-borrower',
            'को-अप्लिकेंट लोन', 'संयुक्त ऋण', 'सह-ऋणी के साथ लोन'
        ],
        definition_en: `Co-applicant loan is one where a second person jointly applies and shares responsibility for repayment.`,
        example_en: `Example: Husband and wife applying jointly for home loan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `को-अप्लिकेंट लोन में दो व्यक्ति मिलकर आवेदन करते हैं और जिम्मेदारी साझा करते हैं।`,
        example_hi: `उदाहरण: पति-पत्नी मिलकर होम लोन लेते हैं।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan guarantor', 'loan security', 'guarantor meaning',
            'लोन गारंटर', 'लोन सुरक्षा', 'गारंटर का अर्थ'
        ],
        definition_en: `A guarantor is a third party who promises to repay loan if borrower defaults, enhancing approval chances.`,
        example_en: `Example: A parent acting as guarantor for child's education loan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `गारंटर वह व्यक्ति होता है जो लोन डिफॉल्ट पर भुगतान की गारंटी देता है।`,
        example_hi: `उदाहरण: बच्चे के शिक्षा लोन के लिए माता-पिता गारंटर बनना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan tenure extension', 'loan restructuring', 'extend loan period',
            'लोन अवधि बढ़ाना', 'लोन पुनर्गठन', 'लोन अवधि विस्तार'
        ],
        definition_en: `Loan tenure extension allows borrowers to increase repayment period to reduce EMI burden but increase total interest.`,
        example_en: `Example: Extending loan tenure from 5 to 7 years to lower EMI.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन अवधि बढ़ाने से किश्त कम होती है लेकिन कुल ब्याज बढ़ता है।`,
        example_hi: `उदाहरण: 5 साल से 7 साल के लिए लोन अवधि बढ़ाना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan EMI bounce', 'EMI failed', 'missed EMI penalty',
            'ईएमआई बाउंस', 'किस्त असफल', 'मिस्ड ईएमआई पेनल्टी'
        ],
        definition_en: `EMI bounce means payment failure due to insufficient funds or technical issues, often leading to penalties.`,
        example_en: `Example: EMI bounce due to insufficient balance can cause late fee and credit score impact.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ईएमआई बाउंस तब होता है जब भुगतान तकनीकी कारणों से फेल हो।`,
        example_hi: `उदाहरण: बैलेंस न होने से EMI बाउंस और पेनल्टी लगना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan interest calculation', 'how interest calculated on loan',
            'लोन पर ब्याज कैसे गणना करें', 'ब्याज गणना'
        ],
        definition_en: `Loan interest is calculated on principal amount using methods like reducing balance or flat rate.`,
        example_en: `Example: Reducing balance method charges interest on outstanding loan amount monthly.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन ब्याज मूलधन पर घटते-बैलेंस या फ्लैट रेट से गणना होता है।`,
        example_hi: `उदाहरण: घटते-बैलेंस विधि से मासिक बकाया राशि पर ब्याज।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan moratorium', 'loan repayment holiday', 'EMI deferment',
            'लोन मोराटोरियम', 'लोन भुगतान अवकाश', 'ईएमआई स्थगन'
        ],
        definition_en: `Moratorium is a temporary period during which borrower can pause EMI payments without penalty.`,
        example_en: `Example: COVID-19 moratorium allowed 6 months EMI deferment for eligible borrowers.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `मोराटोरियम वह अवधि है जिसमें ईएमआई भुगतान स्थगित किया जा सकता है।`,
        example_hi: `उदाहरण: COVID-19 में 6 महीने ईएमआई स्थगन।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan statement', 'loan account statement', 'loan repayment history',
            'लोन स्टेटमेंट', 'लोन खाता विवरण', 'लोन भुगतान इतिहास'
        ],
        definition_en: `Loan statement details all transactions, payments, outstanding balance, and interest paid on loan account.`,
        example_en: `Example: Request monthly loan statement from bank to track repayments.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन स्टेटमेंट में सभी भुगतान और शेष राशि की जानकारी होती है।`,
        example_hi: `उदाहरण: बैंक से मासिक लोन स्टेटमेंट मांगना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan disbursal', 'loan amount release', 'loan payout',
            'लोन वितरण', 'लोन राशि जारी', 'लोन भुगतान'
        ],
        definition_en: `Loan disbursal is the process of transferring sanctioned loan amount to borrower’s account.`,
        example_en: `Example: After approval, ₹5 lakh loan amount disbursed within 3 working days.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन वितरण वह प्रक्रिया है जिसमें स्वीकृत राशि खाते में आती है।`,
        example_hi: `उदाहरण: ₹5 लाख लोन 3 कार्य दिवस में वितरित।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan foreclosure charges', 'prepayment penalty', 'loan closure fee',
            'लोन फोरक्लोजर शुल्क', 'प्रीपेमेंट पेनल्टी', 'लोन बंद करने का शुल्क'
        ],
        definition_en: `Foreclosure charges are fees imposed by lender for early repayment of loan before tenure completion.`,
        example_en: `Example: ₹5,000 foreclosure charge on pre-closing a home loan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `फोरक्लोजर शुल्क वह राशि है जो समय से पहले लोन चुकाने पर लगती है।`,
        example_hi: `उदाहरण: होम लोन प्रीक्लोजर पर ₹5,000 शुल्क।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan tenure impact', 'loan duration effect', 'loan term effect',
            'लोन अवधि प्रभाव', 'लोन समय प्रभाव', 'ऋण अवधि प्रभाव'
        ],
        definition_en: `Longer loan tenure reduces monthly EMI but increases total interest payable over the loan period.`,
        example_en: `Example: 10-year loan tenure lowers EMI compared to 5 years but increases interest paid.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लंबी लोन अवधि से मासिक किश्त कम होती है लेकिन कुल ब्याज अधिक देना पड़ता है।`,
        example_hi: `उदाहरण: 10 साल की अवधि पर EMI कम होती है लेकिन ब्याज ज्यादा देना पड़ता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'processing time for loan', 'loan approval time', 'loan sanction duration',
            'लोन प्रोसेसिंग समय', 'लोन मंजूरी समय', 'लोन स्वीकृति अवधि'
        ],
        definition_en: `Loan processing time is the duration taken by lender to verify documents and approve or reject loan application.`,
        example_en: `Example: Personal loan processing time is usually 2-5 working days.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन प्रोसेसिंग समय वह अवधि है जिसमें लोनदाता आवेदन की जांच करता है।`,
        example_hi: `उदाहरण: पर्सनल लोन प्रोसेसिंग समय 2-5 कार्य दिवस।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'interest subvention scheme', 'interest subsidy on loan',
            'ब्याज सबवेंशन योजना', 'लोन पर ब्याज सब्सिडी'
        ],
        definition_en: `Interest subvention is a government scheme offering subsidized interest rates on loans to eligible borrowers.`,
        example_en: `Example: Farmers getting loans at subsidized 4% interest under government schemes.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ब्याज सबवेंशन वह योजना है जिसमें सरकार लोन पर ब्याज दर कम करती है।`,
        example_hi: `उदाहरण: किसान सरकार की योजना के तहत 4% ब्याज दर पर लोन प्राप्त करते हैं।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan insurance', 'loan protection insurance', 'loan repayment insurance',
            'लोन बीमा', 'लोन सुरक्षा बीमा', 'ऋण पुनर्भुगतान बीमा'
        ],
        definition_en: `Loan insurance covers loan repayment in case of unforeseen events like death or disability of borrower.`,
        example_en: `Example: Loan insurance pays outstanding amount if borrower loses life during tenure.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन बीमा वह बीमा है जो लोन भुगतान को अप्रत्याशित घटनाओं में कवर करता है।`,
        example_hi: `उदाहरण: ऋणी की मृत्यु पर लोन बीमा शेष राशि का भुगतान करता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan interest deduction', 'tax benefit on loan interest',
            'लोन ब्याज कटौती', 'लोन ब्याज पर टैक्स लाभ'
        ],
        definition_en: `Interest paid on certain loans (like home loans) is eligible for tax deduction under Income Tax laws.`,
        example_en: `Example: ₹2 lakh interest paid on home loan can be claimed for tax deduction under Section 24.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `कुछ लोन पर भुगतान किया गया ब्याज आयकर में कटौती योग्य होता है।`,
        example_hi: `उदाहरण: होम लोन पर ₹2 लाख ब्याज टैक्स कटौती के लिए क्लेम कर सकते हैं।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan foreclosure impact', 'early closure consequences',
            'लोन फोरक्लोजर प्रभाव', 'जल्दी लोन बंद करने के परिणाम'
        ],
        definition_en: `Foreclosure may reduce interest cost but sometimes involves penalty charges reducing overall savings.`,
        example_en: `Example: Early closure fee of 2% may reduce benefit of lower interest outflow.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `फोरक्लोजर से ब्याज कम होता है लेकिन पेनल्टी से बचत घट सकती है।`,
        example_hi: `उदाहरण: 2% प्रीक्लोजर शुल्क से कुल लाभ कम हो सकता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan interest rate types', 'fixed vs floating interest',
            'लोन ब्याज दर प्रकार', 'फिक्स्ड और फ्लोटिंग ब्याज'
        ],
        definition_en: `Fixed interest remains constant for tenure, floating interest varies with market rates.`,
        example_en: `Example: Home loan with 7% fixed or 6.5% floating interest rates.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `फिक्स्ड ब्याज स्थिर रहता है, फ्लोटिंग बाजार दर के अनुसार बदलता है।`,
        example_hi: `उदाहरण: 7% फिक्स्ड या 6.5% फ्लोटिंग ब्याज दर वाला होम लोन।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan statement request', 'how to get loan statement',
            'लोन स्टेटमेंट अनुरोध', 'लोन स्टेटमेंट कैसे प्राप्त करें'
        ],
        definition_en: `Loan statement can be requested from lender’s portal or branch to view payment history and balance.`,
        example_en: `Example: Download monthly loan statement from net banking.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन स्टेटमेंट ऑनलाइन या शाखा से प्राप्त किया जा सकता है।`,
        example_hi: `उदाहरण: नेट बैंकिंग से मासिक लोन स्टेटमेंट डाउनलोड करें।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan prepayment charges', 'fees for early payment',
            'प्रीपेमेंट शुल्क', 'जल्दी भुगतान शुल्क'
        ],
        definition_en: `Prepayment charges are fees lenders may charge for partial or full loan repayment before due date.`,
        example_en: `Example: 1% prepayment charge on personal loan amount prepaid.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `प्रीपेमेंट शुल्क वह राशि है जो समय से पहले भुगतान पर लगती है।`,
        example_hi: `उदाहरण: पर्सनल लोन प्रीपेमेंट पर 1% शुल्क।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan EMIs due date', 'loan installment date',
            'ईएमआई की नियत तारीख', 'लोन किश्त की तारीख'
        ],
        definition_en: `EMI due date is the fixed date by which borrower must pay monthly installment to avoid penalty.`,
        example_en: `Example: EMI due date is 10th of every month for home loan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ईएमआई नियत तारीख वह तारीख है जब किश्त देनी होती है।`,
        example_hi: `उदाहरण: होम लोन की ईएमआई हर महीने 10 तारीख को देनी होती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan repayment methods', 'ways to repay loan',
            'लोन चुकाने के तरीके', 'लोन भुगतान के तरीके'
        ],
        definition_en: `Loan repayment can be done via ECS, cheque, online transfer or auto-debit facility.`,
        example_en: `Example: Setting up auto-debit from bank account for EMI payments.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन चुकाने के लिए ECS, चेक, ऑनलाइन ट्रांसफर या ऑटो-डेबिट का उपयोग होता है।`,
        example_hi: `उदाहरण: EMI के लिए बैंक खाते से ऑटो-डेबिट सेट करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan overdraft facility', 'overdraft on loan account',
            'लोन ओवरड्राफ्ट सुविधा', 'लोन खाते पर ओवरड्राफ्ट'
        ],
        definition_en: `Overdraft facility allows borrower to withdraw more than account balance up to sanctioned limit.`,
        example_en: `Example: Business loan overdraft to manage cash flow fluctuations.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ओवरड्राफ्ट सुविधा से ऋणी खाते से बैलेंस से अधिक राशि निकाल सकता है।`,
        example_hi: `उदाहरण: कैश फ्लो प्रबंधन के लिए व्यवसाय लोन ओवरड्राफ्ट।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan tenure reduction', 'shorten loan duration',
            'लोन अवधि कम करना', 'लोन अवधि घटाना'
        ],
        definition_en: `Loan tenure reduction means paying higher EMIs to finish loan repayment earlier than scheduled.`,
        example_en: `Example: Increasing EMI to close loan in 3 years instead of 5.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन अवधि कम करने का मतलब अधिक EMI देकर जल्दी लोन खत्म करना।`,
        example_hi: `उदाहरण: 5 साल की बजाय 3 साल में लोन चुकाना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'personal loan', 'unsecured personal loan', 'instant personal loan',
            'पर्सनल लोन', 'अनसिक्योर्ड पर्सनल लोन', 'तत्काल पर्सनल लोन'
        ],
        definition_en: `Personal loan is an unsecured loan granted based on borrower’s creditworthiness without collateral.`,
        example_en: `Example: Instant personal loan approval with minimal documents for emergency funds.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पर्सनल लोन बिना सुरक्षा के दिया जाने वाला लोन है।`,
        example_hi: `उदाहरण: कम दस्तावेजों के साथ तत्काल पर्सनल लोन।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'home loan', 'housing loan', 'property loan',
            'होम लोन', 'आवास लोन', 'संपत्ति लोन'
        ],
        definition_en: `Home loan is a secured loan to purchase or construct residential property with the property as collateral.`,
        example_en: `Example: ₹30 lakh home loan at 7.5% interest for 20 years tenure.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `होम लोन वह सुरक्षित लोन है जो घर खरीदने या बनाने के लिए मिलता है।`,
        example_hi: `उदाहरण: ₹30 लाख होम लोन 7.5% ब्याज पर 20 साल के लिए।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'education loan', 'student loan', 'loan for education',
            'शिक्षा लोन', 'विद्यार्थी ऋण', 'शिक्षा के लिए लोन'
        ],
        definition_en: `Education loan finances higher education expenses, including tuition, books, and living costs.`,
        example_en: `Example: ₹10 lakh education loan for engineering studies at 8% interest.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `शिक्षा लोन उच्च शिक्षा खर्च के लिए दिया जाता है।`,
        example_hi: `उदाहरण: ₹10 लाख शिक्षा लोन 8% ब्याज पर।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'business loan', 'loan for business', 'working capital loan',
            'व्यवसाय लोन', 'बिजनेस लोन', 'कार्यशील पूंजी लोन'
        ],
        definition_en: `Business loan funds capital expenditure, expansion or working capital needs for a business.`,
        example_en: `Example: ₹50 lakh business loan to expand manufacturing unit.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `व्यवसाय लोन व्यापार के विस्तार या पूंजी जरूरत के लिए मिलता है।`,
        example_hi: `उदाहरण: ₹50 लाख व्यवसाय लोन निर्माण इकाई विस्तार के लिए।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan EMI due date extension', 'extend EMI payment date',
            'ईएमआई की तारीख बढ़ाना', 'ईएमआई भुगतान तिथि बढ़ाएं'
        ],
        definition_en: `EMI due date extension allows borrowers to postpone EMI payment deadlines temporarily under lender’s approval.`,
        example_en: `Example: Banks may allow 1-month EMI extension during financial hardship.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ईएमआई तिथि विस्तार से ऋणी EMI भुगतान की तारीख कुछ समय के लिए बढ़ा सकते हैं।`,
        example_hi: `उदाहरण: आर्थिक समस्या में बैंक 1 महीने की EMI तिथि बढ़ा सकते हैं।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan default consequences', 'effects of defaulting loan',
            'लोन डिफॉल्ट के परिणाम', 'लोन चूक के प्रभाव'
        ],
        definition_en: `Loan default may lead to penalty charges, damaged credit score, and legal action by lender.`,
        example_en: `Example: Missing 3 EMIs can cause loan to be classified as NPA (Non-Performing Asset).`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन डिफॉल्ट से जुर्माना, खराब क्रेडिट स्कोर और कानूनी कार्रवाई हो सकती है।`,
        example_hi: `उदाहरण: 3 EMI मिस होने पर लोन NPA बन जाता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan interest calculation formula', 'how interest is calculated on loan',
            'लोन ब्याज गणना सूत्र', 'लोन पर ब्याज कैसे गणना करें'
        ],
        definition_en: `Loan interest is calculated using formulas like simple interest or reducing balance method.`,
        example_en: `Example: Reducing balance interest = principal × rate × time, adjusted monthly.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन ब्याज सरल या घटते-बैलेंस तरीके से गणना किया जाता है।`,
        example_hi: `उदाहरण: घटते-बैलेंस ब्याज = मूलधन × दर × समय, मासिक समायोजन।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan co-applicant', 'co-borrower on loan',
            'लोन सह-आवेदक', 'लोन सह-उधारकर्ता'
        ],
        definition_en: `Co-applicant shares responsibility for loan repayment along with the primary borrower.`,
        example_en: `Example: Spouse often acts as co-applicant on home loans for better eligibility.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `सह-आवेदक मुख्य उधारकर्ता के साथ लोन की जिम्मेदारी साझा करता है।`,
        example_hi: `उदाहरण: होम लोन में पति/पत्नी सह-आवेदक हो सकते हैं।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan top-up interest rates', 'top-up loan interest',
            'टॉप-अप लोन ब्याज दर', 'टॉप-अप लोन ब्याज'
        ],
        definition_en: `Top-up loans usually have slightly higher interest rates than the original loan.`,
        example_en: `Example: Original loan at 9%, top-up loan at 10% interest rate.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `टॉप-अप लोन की ब्याज दर मूल लोन से थोड़ी अधिक होती है।`,
        example_hi: `उदाहरण: मूल लोन 9%, टॉप-अप लोन 10% ब्याज दर।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan pre-closure penalty', 'charges for early loan closure',
            'प्री-क्लोजर पेनल्टी', 'जल्दी लोन बंद करने का जुर्माना'
        ],
        definition_en: `Pre-closure penalty is a fee charged by lender if loan is closed before agreed tenure.`,
        example_en: `Example: Bank charges 2% pre-closure fee on outstanding amount.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `प्री-क्लोजर पेनल्टी वह शुल्क है जो समय से पहले लोन बंद करने पर लगता है।`,
        example_hi: `उदाहरण: बैंक शेष राशि पर 2% प्री-क्लोजर शुल्क लेता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan deferral', 'defer loan payment',
            'लोन भुगतान स्थगन', 'लोन भुगतान स्थगित करें'
        ],
        definition_en: `Loan deferral allows temporary postponement of loan EMI payments without penalty.`,
        example_en: `Example: Government offers loan deferral for COVID-19 impacted borrowers.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन भुगतान स्थगन से EMI भुगतान अस्थायी रूप से टाला जा सकता है।`,
        example_hi: `उदाहरण: COVID-19 के दौरान लोन भुगतान स्थगन।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan restructuring', 'loan modification',
            'लोन पुनर्गठन', 'लोन संशोधन'
        ],
        definition_en: `Loan restructuring involves changing loan terms to make repayment easier for borrower.`,
        example_en: `Example: Extending tenure or reducing interest rate as part of restructuring.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन पुनर्गठन में लोन की शर्तें आसान बनाने के लिए बदली जाती हैं।`,
        example_hi: `उदाहरण: अवधि बढ़ाना या ब्याज दर कम करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan EMI bounce', 'EMI returned',
            'ईएमआई बाउंस', 'ईएमआई वापस होना'
        ],
        definition_en: `EMI bounce occurs when EMI payment is returned unpaid due to insufficient funds or technical issues.`,
        example_en: `Example: Insufficient balance causes EMI bounce leading to penalty and credit score impact.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ईएमआई बाउंस तब होता है जब भुगतान असफल रहता है।`,
        example_hi: `उदाहरण: बैलेंस न होने पर ईएमआई बाउंस होता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan secured vs unsecured', 'difference between secured and unsecured loans',
            'सिक्योर्ड और अनसिक्योर्ड लोन', 'सुरक्षित और असुरक्षित लोन में अंतर'
        ],
        definition_en: `Secured loans are backed by collateral; unsecured loans have no asset backing and higher interest.`,
        example_en: `Example: Home loan is secured; personal loan is unsecured.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `सिक्योर्ड लोन में संपत्ति गारंटी होती है, अनसिक्योर्ड में नहीं।`,
        example_hi: `उदाहरण: होम लोन सिक्योर्ड, पर्सनल लोन अनसिक्योर्ड।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan EMI payment modes', 'ways to pay EMI',
            'ईएमआई भुगतान के तरीके', 'ईएमआई चुकाने के तरीके'
        ],
        definition_en: `EMI can be paid via electronic transfer, cheque, demand draft, or auto debit.`,
        example_en: `Example: Auto-debit from savings account for timely EMI payment.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ईएमआई इलेक्ट्रॉनिक ट्रांसफर, चेक या ऑटो-डेबिट से भरी जा सकती है।`,
        example_hi: `उदाहरण: बचत खाते से ऑटो-डेबिट के जरिए EMI भुगतान।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan document checklist', 'documents required for loan',
            'लोन दस्तावेज़ सूची', 'लोन के लिए आवश्यक दस्तावेज़'
        ],
        definition_en: `Common documents include identity proof, address proof, income proof, and property documents if applicable.`,
        example_en: `Example: Aadhaar card, salary slips, bank statements required for personal loan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `आधार, आय प्रमाण पत्र, पता प्रमाण लोन दस्तावेज़ों में शामिल हैं।`,
        example_hi: `उदाहरण: पर्सनल लोन के लिए आधार कार्ड, सैलरी स्लिप।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan overdue consequences', 'effects of overdue loan',
            'लोन बकाया परिणाम', 'अवैतनिक लोन के प्रभाव'
        ],
        definition_en: `Overdue loan EMIs can lead to penalty, increased interest, and negative credit report.`,
        example_en: `Example: Loan account marked as overdue after 30 days delay.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बकाया EMI से जुर्माना और क्रेडिट स्कोर प्रभावित होता है।`,
        example_hi: `उदाहरण: 30 दिन से देर पर लोन ओवरड्यू माना जाता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan EMI calculation formula', 'calculate EMI',
            'ईएमआई गणना सूत्र', 'ईएमआई कैसे निकालें'
        ],
        definition_en: `EMI = [P × R × (1+R)^N] / [(1+R)^N – 1], where P=principal, R=monthly interest rate, N=number of installments.`,
        example_en: `Example: For ₹5 lakh loan, 10% annual interest, 36 months tenure, EMI is ₹16,132.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ईएमआई = [P × R × (1+R)^N] / [(1+R)^N – 1]।`,
        example_hi: `उदाहरण: ₹5 लाख, 10% ब्याज, 36 माह में EMI ₹16,132।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan EMI calculator app', 'loan calculator online',
            'ईएमआई कैलकुलेटर ऐप', 'ऑनलाइन लोन कैलकुलेटर'
        ],
        definition_en: `EMI calculator apps help estimate monthly loan payments quickly using inputs like loan amount and tenure.`,
        example_en: `Example: Many banks provide EMI calculator tools on their websites.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ईएमआई कैलकुलेटर ऐप से आसानी से EMI पता लगाया जा सकता है।`,
        example_hi: `उदाहरण: बैंक वेबसाइट पर EMI कैलकुलेटर उपलब्ध होता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan interest rate comparison', 'compare loan interest rates',
            'लोन ब्याज दर तुलना', 'लोन ब्याज दर की तुलना करें'
        ],
        definition_en: `Comparing interest rates across lenders helps find the cheapest loan option.`,
        example_en: `Example: Comparing 10 banks’ home loan rates before choosing.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `विभिन्न बैंकों की ब्याज दरों की तुलना करना बेहतर विकल्प चुनने में मदद करता है।`,
        example_hi: `उदाहरण: 10 बैंकों के होम लोन ब्याज दरों की तुलना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan eligibility calculator', 'check loan eligibility',
            'लोन पात्रता कैलकुलेटर', 'लोन पात्रता कैसे जांचें'
        ],
        definition_en: `Eligibility calculator estimates maximum loan amount based on income and expenses.`,
        example_en: `Example: Calculator shows ₹30 lakh eligibility for home loan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पात्रता कैलकुलेटर आय और खर्चों के आधार पर लोन तय करता है।`,
        example_hi: `उदाहरण: ₹30 लाख की पात्रता दिखाना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan foreclosure benefit', 'advantages of foreclosure',
            'लोन फोरक्लोजर के लाभ', 'फोरक्लोजर के फायदे'
        ],
        definition_en: `Foreclosure reduces total interest paid by closing loan early.`,
        example_en: `Example: Saving ₹2 lakh interest by foreclosing home loan after 5 years.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `फोरक्लोजर से ब्याज की बचत होती है।`,
        example_hi: `उदाहरण: 5 साल में फोरक्लोजर से ₹2 लाख बचत।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan EMI due date reminder', 'EMI payment reminder',
            'EMI भुगतान अनुस्मारक', 'EMI की तारीख याद दिलाना'
        ],
        definition_en: `Lenders send reminders via SMS or email for upcoming EMI payments to avoid defaults.`,
        example_en: `Example: Bank SMS alerts 3 days before EMI due date.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बैंक EMI भुगतान की याद दिलाने के लिए संदेश भेजते हैं।`,
        example_hi: `उदाहरण: EMI की तारीख से 3 दिन पहले SMS अलर्ट।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan interest waiver', 'waiver on loan interest',
            'लोन ब्याज माफी', 'लोन ब्याज छूट'
        ],
        definition_en: `Waiver means lender forgives part or full interest due on loan under special conditions.`,
        example_en: `Example: Interest waiver during COVID-19 moratorium period.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `माफी का मतलब कुछ ब्याज छूट देना।`,
        example_hi: `उदाहरण: COVID-19 के दौरान ब्याज माफी।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan EMI structure', 'breakup of EMI',
            'EMI संरचना', 'EMI का विभाजन'
        ],
        definition_en: `EMI consists of principal and interest components that change over tenure.`,
        example_en: `Example: Initial EMIs have higher interest and lower principal.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `EMI में मूलधन और ब्याज दोनों शामिल होते हैं।`,
        example_hi: `उदाहरण: शुरू के EMI में ज्यादा ब्याज होता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan sanction letter', 'sanction letter meaning',
            'लोन स्वीकृति पत्र', 'सैंक्शन लेटर क्या होता है'
        ],
        definition_en: `A sanction letter is a document issued by the lender approving your loan with specified terms.`,
        example_en: `Example: Sanction letter confirms a ₹20 lakh home loan with 7.5% interest.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `सैंक्शन लेटर वह दस्तावेज होता है जिसमें बैंक लोन की स्वीकृति और शर्तें देता है।`,
        example_hi: `उदाहरण: ₹20 लाख होम लोन के लिए 7.5% ब्याज दर वाला सैंक्शन लेटर।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan pre-closure', 'loan prepayment full',
            'लोन प्री-क्लोजर', 'लोन पहले चुकाना'
        ],
        definition_en: `Pre-closure is when you repay the entire outstanding loan amount before the end of tenure.`,
        example_en: `Example: Paying off personal loan completely in 3 years instead of 5.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `प्री-क्लोजर का मतलब है लोन की बची राशि समय से पहले चुकाना।`,
        example_hi: `उदाहरण: 5 साल का लोन 3 साल में पूरा चुकाना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan prepayment', 'loan part payment',
            'लोन आंशिक भुगतान', 'लोन प्रीपेमेंट'
        ],
        definition_en: `Prepayment refers to paying an extra amount towards the loan principal to reduce overall interest.`,
        example_en: `Example: Making ₹1 lakh extra payment on top of regular EMIs.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `प्रीपेमेंट वह राशि है जो मूलधन में अतिरिक्त दी जाती है ताकि ब्याज कम लगे।`,
        example_hi: `उदाहरण: EMI के अलावा ₹1 लाख अतिरिक्त भुगतान।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'secured vs unsecured loan', 'difference between secured and unsecured loan',
            'सिक्योर और अनसिक्योर लोन', 'गिरवी और बिना गिरवी लोन'
        ],
        definition_en: `Secured loans require collateral, unsecured loans don’t and are based on credit score.`,
        example_en: `Example: Home loan is secured; personal loan is unsecured.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `सिक्योर लोन में गिरवी की ज़रूरत होती है, अनसिक्योर लोन में नहीं।`,
        example_hi: `उदाहरण: होम लोन सिक्योर होता है, पर्सनल लोन अनसिक्योर।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan tenure meaning', 'loan duration',
            'लोन अवधि', 'लोन टेन्योर क्या होता है'
        ],
        definition_en: `Loan tenure is the time period over which the loan must be repaid.`,
        example_en: `Example: A car loan may have tenure of 3 to 7 years.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन की अवधि वह समय होती है जिसमें लोन वापस चुकाना होता है।`,
        example_hi: `उदाहरण: कार लोन की अवधि 3 से 7 साल तक हो सकती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan restructuring', 'restructure loan',
            'लोन रिस्ट्रक्चरिंग', 'लोन पुनर्गठन'
        ],
        definition_en: `Loan restructuring allows changes to repayment terms for borrowers under financial stress.`,
        example_en: `Example: Extending loan tenure to reduce EMI burden during income loss.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन रिस्ट्रक्चरिंग में लोन की शर्तों को बदला जा सकता है जब उधारकर्ता संकट में हो।`,
        example_hi: `उदाहरण: EMI घटाने के लिए अवधि बढ़ाना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan disbursement process', 'loan disbursement steps',
            'लोन वितरण प्रक्रिया', 'लोन डिसबर्समेंट कैसे होता है'
        ],
        definition_en: `Disbursement is the process of releasing the loan amount to the borrower’s account.`,
        example_en: `Example: After signing agreement, ₹5 lakh education loan credited to your bank.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `डिसबर्समेंट का मतलब है लोन राशि का उधारकर्ता को मिलना।`,
        example_hi: `उदाहरण: ₹5 लाख की एजुकेशन लोन राशि बैंक खाते में भेजना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan agreement document', 'loan agreement terms',
            'लोन एग्रीमेंट', 'लोन समझौता दस्तावेज'
        ],
        definition_en: `A loan agreement is a legal document containing loan terms and conditions signed by borrower and lender.`,
        example_en: `Example: Agreement mentions loan amount, tenure, EMI, interest rate.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन एग्रीमेंट वह दस्तावेज होता है जिसमें लोन की सभी शर्तें होती हैं।`,
        example_hi: `उदाहरण: एग्रीमेंट में ब्याज दर, EMI और अवधि का उल्लेख होता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan insurance', 'credit protection insurance',
            'लोन बीमा', 'क्रेडिट इंश्योरेंस'
        ],
        definition_en: `Loan insurance protects the borrower’s family from repaying loan in case of death or disability.`,
        example_en: `Example: A term insurance linked to home loan clears loan if borrower dies.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन बीमा से उधारकर्ता की मृत्यु या अक्षमता की स्थिति में लोन चुकता हो जाता है।`,
        example_hi: `उदाहरण: होम लोन के साथ टर्म इंश्योरेंस।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan under CIBIL score', 'loan with low credit score',
            'कम CIBIL स्कोर पर लोन', 'क्रेडिट स्कोर और लोन'
        ],
        definition_en: `Getting a loan with low credit score is difficult; higher score increases approval chances.`,
        example_en: `Example: A CIBIL score below 650 may lead to rejection or higher interest.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `कम CIBIL स्कोर पर लोन मिलने में कठिनाई होती है।`,
        example_hi: `उदाहरण: 650 से कम स्कोर पर ब्याज दर ज्यादा हो सकती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan documentation checklist', 'documents for loan',
            'लोन के लिए दस्तावेज', 'लोन डॉक्यूमेंट लिस्ट'
        ],
        definition_en: `Common documents include ID proof, address proof, income proof, and bank statements.`,
        example_en: `Example: PAN card, Aadhaar, salary slip, and ITR required for personal loan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन के लिए पहचान पत्र, पते का प्रमाण, आय का प्रमाण, बैंक स्टेटमेंट आदि चाहिए।`,
        example_hi: `उदाहरण: पर्सनल लोन के लिए PAN, आधार, सैलरी स्लिप, ITR।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan pre-approved offer', 'pre-approved personal loan',
            'प्री-अप्रूव्ड लोन ऑफर', 'बिना दस्तावेज लोन'
        ],
        definition_en: `Pre-approved loans are offered to existing customers based on credit score and history.`,
        example_en: `Example: Bank offers ₹5 lakh pre-approved personal loan via SMS.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `प्री-अप्रूव्ड लोन पहले से स्वीकृत होते हैं और जल्दी मिलते हैं।`,
        example_hi: `उदाहरण: बैंक द्वारा भेजा गया ₹5 लाख का प्री-अप्रूव्ड लोन ऑफर।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan rejection reasons', 'why loan gets rejected',
            'लोन रिजेक्ट क्यों होता है', 'लोन अस्वीकृति कारण'
        ],
        definition_en: `Loans may be rejected due to low credit score, insufficient income, or documentation issues.`,
        example_en: `Example: Rejection due to mismatched documents or unstable income.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `कम स्कोर, गलत दस्तावेज या कम आय के कारण लोन रिजेक्ट हो सकता है।`,
        example_hi: `उदाहरण: आय प्रमाण में कमी के कारण लोन अस्वीकृत।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan top-up eligibility', 'who can take top-up loan',
            'टॉप-अप लोन पात्रता', 'टॉप-अप लोन कौन ले सकता है'
        ],
        definition_en: `You can get a top-up if you have a good repayment history and sufficient eligibility.`,
        example_en: `Example: After repaying 12 EMIs on time, you may qualify for top-up loan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `अच्छी चुकौती हिस्ट्री पर टॉप-अप लोन मिल सकता है।`,
        example_hi: `उदाहरण: समय पर 12 EMI देने पर टॉप-अप लोन पात्रता।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan refinancing', 'loan refinance meaning',
            'लोन रीफाइनेंसिंग', 'लोन दोबारा फाइनेंस करना'
        ],
        definition_en: `Refinancing means replacing an old loan with a new one at better interest rate or terms.`,
        example_en: `Example: Shifting existing car loan to a new bank for lower interest.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `रीफाइनेंसिंग का मतलब है पुराने लोन को बेहतर शर्तों पर नए लोन से बदलना।`,
        example_hi: `उदाहरण: कार लोन को नए बैंक में ट्रांसफर करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'EMI meaning', 'what is EMI in loan',
            'ईएमआई क्या होती है', 'लोन ईएमआई'
        ],
        definition_en: `EMI (Equated Monthly Installment) is the fixed amount paid monthly to repay your loan over the selected tenure.`,
        example_en: `Example: For a ₹5 lakh loan at 10% for 5 years, EMI is approx ₹10,624/month.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `EMI (समान मासिक किस्त) वह निश्चित राशि है जो हर महीने लोन चुकाने के लिए दी जाती है।`,
        example_hi: `उदाहरण: ₹5 लाख के लोन पर 5 साल में लगभग ₹10,624/माह EMI बनती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'floating vs fixed rate', 'loan interest type',
            'फ्लोटिंग और फिक्स्ड ब्याज दर', 'ब्याज प्रकार'
        ],
        definition_en: `Fixed interest stays constant throughout tenure, floating may change with market rates.`,
        example_en: `Example: Fixed 9% interest stays the same, floating may rise or fall.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `फिक्स्ड ब्याज दर स्थिर रहती है, जबकि फ्लोटिंग दर बाजार के अनुसार बदलती है।`,
        example_hi: `उदाहरण: फिक्स्ड 9% स्थायी, फ्लोटिंग ऊपर-नीचे हो सकती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan guarantor meaning', 'who can be loan guarantor',
            'लोन गारंटर कौन होता है', 'गारंटर की भूमिका'
        ],
        definition_en: `A loan guarantor is someone who promises to repay the loan if the borrower fails.`,
        example_en: `Example: A parent signing as guarantor for child’s education loan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `गारंटर वह व्यक्ति होता है जो उधारकर्ता द्वारा भुगतान न करने पर लोन चुकाने की जिम्मेदारी लेता है।`,
        example_hi: `उदाहरण: माता-पिता द्वारा एजुकेशन लोन के लिए गारंटर बनना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'education loan', 'student loan',
            'एजुकेशन लोन', 'स्टूडेंट लोन'
        ],
        definition_en: `An education loan helps finance academic expenses for higher studies in India or abroad.`,
        example_en: `Example: ₹10 lakh loan for engineering degree with 1-year moratorium.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `एजुकेशन लोन उच्च शिक्षा के लिए शैक्षणिक खर्चों को पूरा करने में मदद करता है।`,
        example_hi: `उदाहरण: इंजीनियरिंग डिग्री के लिए ₹10 लाख लोन और 1 साल का मोरेटोरियम।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'gold loan', 'loan against gold',
            'सोने पर लोन', 'गोल्ड लोन'
        ],
        definition_en: `Gold loan is a secured loan where your gold ornaments are pledged as collateral.`,
        example_en: `Example: ₹2 lakh loan against 50 grams of gold for 12 months.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `गोल्ड लोन एक सुरक्षित लोन है जिसमें सोना गिरवी रखा जाता है।`,
        example_hi: `उदाहरण: 50 ग्राम सोने पर ₹2 लाख का लोन 12 महीने के लिए।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'home loan', 'housing finance',
            'होम लोन', 'मकान खरीदने का लोन'
        ],
        definition_en: `Home loan is a long-term loan used to buy or construct a house or flat.`,
        example_en: `Example: ₹35 lakh loan for a 2 BHK flat at 8.5% interest for 20 years.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `होम लोन एक लंबी अवधि का लोन होता है जिसका उपयोग घर खरीदने या बनाने में होता है।`,
        example_hi: `उदाहरण: ₹35 लाख का लोन 2 BHK फ्लैट के लिए 8.5% ब्याज दर पर।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'personal loan', 'unsecured personal finance',
            'पर्सनल लोन', 'व्यक्तिगत ऋण'
        ],
        definition_en: `Personal loan is an unsecured loan that can be used for any purpose like travel, wedding, etc.`,
        example_en: `Example: ₹3 lakh personal loan at 12% interest for 3 years.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पर्सनल लोन एक बिना सुरक्षा वाला लोन होता है जिसे किसी भी कार्य के लिए लिया जा सकता है।`,
        example_hi: `उदाहरण: ₹3 लाख का पर्सनल लोन 12% ब्याज पर 3 साल के लिए।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'business loan', 'MSME loan',
            'व्यवसाय लोन', 'बिजनेस ऋण', 'एमएसएमई लोन'
        ],
        definition_en: `Business loan provides capital to start or expand small and medium enterprises (SMEs).`,
        example_en: `Example: ₹15 lakh MSME loan for expanding factory setup.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बिजनेस लोन व्यापार शुरू करने या बढ़ाने के लिए पूंजी प्रदान करता है।`,
        example_hi: `उदाहरण: फैक्ट्री बढ़ाने के लिए ₹15 लाख का MSME लोन।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan foreclosure charges', 'prepayment penalty',
            'लोन फोरक्लोजर चार्जेस', 'पूर्व भुगतान शुल्क'
        ],
        definition_en: `Some lenders charge a penalty when a loan is paid off early before tenure completion.`,
        example_en: `Example: 3% foreclosure fee on ₹5 lakh outstanding amount.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `कुछ बैंक समय से पहले लोन चुकाने पर शुल्क लगाते हैं।`,
        example_hi: `उदाहरण: ₹5 लाख की बची राशि पर 3% फोरक्लोजर शुल्क।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan EMI calculator', 'monthly EMI tool',
            'ईएमआई कैलकुलेटर', 'लोन कैलकुलेटर'
        ],
        definition_en: `An EMI calculator helps determine your monthly payments based on amount, interest, and tenure.`,
        example_en: `Example: ₹10 lakh loan, 9% interest, 15 years = ₹10,143 EMI.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `EMI कैलकुलेटर से आप जान सकते हैं कि आपकी मासिक किस्त कितनी होगी।`,
        example_hi: `उदाहरण: ₹10 लाख का लोन, 9% ब्याज, 15 साल = ₹10,143 EMI।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'repayment schedule', 'loan amortization',
            'लोन पुनर्भुगतान अनुसूची', 'एमॉर्टाइजेशन'
        ],
        definition_en: `Repayment schedule shows how much of each EMI goes to principal and interest over time.`,
        example_en: `Example: First year EMIs mostly pay interest; principal increases later.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `रिपेमेंट शेड्यूल से पता चलता है हर EMI में कितना मूलधन और ब्याज है।`,
        example_hi: `उदाहरण: शुरू में EMI का ज्यादातर हिस्सा ब्याज होता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'secured vs unsecured loan', 'loan security types',
            'सिक्योर और अनसिक्योर लोन', 'लोन में गिरवी और बिना गिरवी'
        ],
        definition_en: `Secured loans are backed by assets like property, while unsecured loans require no collateral.`,
        example_en: `Example: Home loan is secured; personal loan is unsecured.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `सिक्योर लोन में संपत्ति गिरवी रखी जाती है, अनसिक्योर लोन बिना किसी सुरक्षा के होता है।`,
        example_hi: `उदाहरण: होम लोन सिक्योर है, जबकि पर्सनल लोन अनसिक्योर होता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan margin money', 'what is margin in loan',
            'लोन मार्जिन मनी', 'लोन में मार्जिन क्या होता है'
        ],
        definition_en: `Margin money is the borrower’s contribution towards the total cost, the rest is financed by the bank.`,
        example_en: `Example: For ₹10 lakh home, if margin is 20%, loan given is ₹8 lakh.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `मार्जिन मनी वह राशि होती है जो उधारकर्ता खुद लगाता है, बाकी बैंक लोन देता है।`,
        example_hi: `उदाहरण: ₹10 लाख के घर पर 20% मार्जिन हो तो बैंक ₹8 लाख लोन देगा।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan disbursement', 'loan release process',
            'लोन वितरण', 'लोन डिसबर्समेंट'
        ],
        definition_en: `Disbursement is the actual release of loan amount to your bank or seller after approval.`,
        example_en: `Example: Loan for flat paid directly to builder after registration.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `डिसबर्समेंट वह प्रक्रिया है जिसमें स्वीकृत लोन राशि जारी की जाती है।`,
        example_hi: `उदाहरण: फ्लैट के लोन की राशि बिल्डर को सीधे ट्रांसफर होती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan tenure meaning', 'what is loan duration',
            'लोन अवधि', 'लोन की समयसीमा'
        ],
        definition_en: `Loan tenure is the time period within which the loan must be repaid. Shorter tenures mean higher EMIs but lower interest paid overall.`,
        example_en: `Example: 5-year vs 15-year tenure for a home loan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन अवधि वह समय है जिसमें लोन चुकाना होता है। छोटी अवधि में EMI ज्यादा लेकिन ब्याज कम लगता है।`,
        example_hi: `उदाहरण: होम लोन के लिए 5 साल बनाम 15 साल की अवधि।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'co-applicant in loan', 'loan joint applicant',
            'को-एप्लिकेंट लोन में', 'संयुक्त लोन आवेदक'
        ],
        definition_en: `A co-applicant shares the responsibility of repaying the loan with the primary borrower.`,
        example_en: `Example: Husband and wife jointly applying for a home loan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `को-एप्लिकेंट वह व्यक्ति होता है जो लोन के लिए मुख्य उधारकर्ता के साथ जिम्मेदारी साझा करता है।`,
        example_hi: `उदाहरण: पति-पत्नी द्वारा मिलकर होम लोन लेना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan moratorium meaning', 'moratorium period',
            'लोन मोरेटोरियम', 'लोन में छूट अवधि'
        ],
        definition_en: `Moratorium is a temporary relief period where the borrower isn’t required to make payments.`,
        example_en: `Example: Education loan with 1-year moratorium after course completion.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `मोरेटोरियम वह अवधि होती है जिसमें लोन पर भुगतान नहीं करना होता है।`,
        example_hi: `उदाहरण: कोर्स पूरा होने के 1 साल बाद एजुकेशन लोन चुकाना शुरू करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'prepayment of loan', 'loan prepayment rules',
            'लोन प्रीपेमेंट', 'लोन जल्दी चुकाना'
        ],
        definition_en: `Prepayment is paying a part or full loan amount before the tenure ends, reducing interest burden.`,
        example_en: `Example: Paying ₹1 lakh extra towards your home loan after a bonus.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `प्रीपेमेंट वह प्रक्रिया है जिसमें लोन की कुछ या पूरी राशि कार्यकाल से पहले चुका दी जाती है। इससे ब्याज बोझ घटता है।`,
        example_hi: `उदाहरण: बोनस मिलने के बाद होम लोन में ₹1 लाख का अतिरिक्त भुगतान करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan foreclosure', 'foreclosure meaning',
            'लोन फोरक्लोजर', 'लोन जल्दी बंद करना'
        ],
        definition_en: `Foreclosure means closing the entire loan before the agreed tenure by repaying the full balance.`,
        example_en: `Example: Paying ₹4 lakh to close a personal loan 2 years early.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `फोरक्लोजर का अर्थ है लोन की पूरी राशि तय समय से पहले चुका देना और लोन बंद कर देना।`,
        example_hi: `उदाहरण: पर्सनल लोन को 2 साल पहले ₹4 लाख चुकाकर बंद करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'fixed vs floating interest', 'loan interest type',
            'फिक्स्ड और फ्लोटिंग ब्याज', 'ब्याज दर प्रकार'
        ],
        definition_en: `Fixed interest remains the same during the loan tenure; floating interest changes as per market rates.`,
        example_en: `Example: Fixed at 9% or floating from 8% to 10% over time.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `फिक्स्ड ब्याज पूरे लोन समय के लिए स्थिर रहता है, जबकि फ्लोटिंग ब्याज बाजार के अनुसार बदलता है।`,
        example_hi: `उदाहरण: 9% फिक्स्ड या 8% से 10% तक फ्लोटिंग रेट।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'home loan eligibility', 'loan eligibility calculator',
            'होम लोन पात्रता', 'लोन पात्रता मापना'
        ],
        definition_en: `Loan eligibility is calculated based on your income, age, credit score, and liabilities.`,
        example_en: `Example: ₹60,000 salary with no existing loans makes you eligible for ₹25–30 lakh.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन पात्रता आपकी आय, उम्र, क्रेडिट स्कोर और पहले से लिए गए लोन के आधार पर तय होती है।`,
        example_hi: `उदाहरण: ₹60,000 की सैलरी पर ₹25–30 लाख तक का होम लोन मिल सकता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'education loan coverage', 'loan for studies',
            'एजुकेशन लोन में क्या कवर होता है', 'पढ़ाई के लिए लोन'
        ],
        definition_en: `Education loan covers tuition fees, hostel charges, books, and sometimes travel for international education.`,
        example_en: `Example: ₹20 lakh loan for foreign MBA includes ticket, tuition, and laptop cost.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `एजुकेशन लोन में ट्यूशन फीस, हॉस्टल शुल्क, किताबें और अंतरराष्ट्रीय पढ़ाई के लिए यात्रा व्यय शामिल होते हैं।`,
        example_hi: `उदाहरण: विदेशी MBA के लिए ₹20 लाख का लोन जिसमें टिकट, ट्यूशन और लैपटॉप भी शामिल हैं।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'gold loan process', 'how gold loan works',
            'गोल्ड लोन प्रक्रिया', 'सोने पर लोन'
        ],
        definition_en: `Gold loan is a secured loan where you pledge gold jewellery to get instant cash.`,
        example_en: `Example: ₹1 lakh loan against 30 grams of gold for 12 months.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `गोल्ड लोन एक सुरक्षित लोन होता है जिसमें आप अपने सोने के बदले तत्काल नकद प्राप्त करते हैं।`,
        example_hi: `उदाहरण: 30 ग्राम सोने पर ₹1 लाख का लोन 12 महीने के लिए।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan EMI default', 'missed EMI penalty',
            'EMI भुगतान नहीं करने पर क्या होगा', 'लोन डिफॉल्ट'
        ],
        definition_en: `Missing an EMI leads to late payment charges, credit score drop, and recovery actions.`,
        example_en: `Example: ₹500 fine and 50-point credit drop after missing one EMI.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `EMI नहीं भरने पर जुर्माना, क्रेडिट स्कोर में गिरावट और वसूली प्रक्रिया शुरू हो सकती है।`,
        example_hi: `उदाहरण: एक EMI नहीं भरने पर ₹500 जुर्माना और 50 पॉइंट स्कोर में गिरावट।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan guarantor responsibilities', 'guarantor role',
            'लोन गारंटर की जिम्मेदारी', 'गारंटर का रोल'
        ],
        definition_en: `A guarantor is legally responsible to repay the loan if the main borrower defaults.`,
        example_en: `Example: If friend doesn’t pay ₹3 lakh personal loan, guarantor must repay.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `गारंटर वह होता है जो लोन की गारंटी देता है और उधारकर्ता न चुकाए तो भुगतान की जिम्मेदारी लेता है।`,
        example_hi: `उदाहरण: यदि मित्र ₹3 लाख का लोन नहीं चुकाता तो गारंटर को भरना पड़ेगा।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan repayment schedule', 'EMI table',
            'लोन भुगतान अनुसूची', 'EMI चार्ट'
        ],
        definition_en: `A loan repayment schedule shows each EMI amount, principal and interest breakup, and timeline.`,
        example_en: `Example: EMI table for ₹10 lakh over 5 years shows how much principal is paid each month.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन भुगतान अनुसूची EMI की राशि, मूलधन और ब्याज का विवरण और समयरेखा दिखाती है।`,
        example_hi: `उदाहरण: ₹10 लाख लोन के लिए 5 साल की EMI तालिका जिसमें हर महीने कितना मूलधन चुकाया गया वो दिखता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'business loan eligibility', 'loan for business start',
            'व्यवसाय के लिए लोन पात्रता', 'बिजनेस लोन कैसे लें'
        ],
        definition_en: `Business loan eligibility depends on your business income, vintage, and creditworthiness.`,
        example_en: `Example: A business running for 2+ years with ₹10L annual turnover may qualify for ₹5L loan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बिजनेस लोन की पात्रता आपके व्यवसाय की आय, अवधि और क्रेडिट प्रोफाइल पर निर्भर करती है।`,
        example_hi: `उदाहरण: 2+ साल से चल रहे ₹10 लाख वार्षिक टर्नओवर वाले व्यवसाय को ₹5 लाख का लोन मिल सकता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'personal loan without collateral', 'unsecured loan',
            'बिना गारंटी का लोन', 'पर्सनल लोन बिना संपत्ति के'
        ],
        definition_en: `Unsecured personal loans don’t need any asset as collateral and are based on income and credit score.`,
        example_en: `Example: ₹2 lakh loan approved based on ₹40k monthly salary and 750 credit score.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बिना गारंटी के पर्सनल लोन में कोई संपत्ति गिरवी नहीं रखनी पड़ती और यह आय व क्रेडिट स्कोर पर आधारित होता है।`,
        example_hi: `उदाहरण: ₹40k मासिक वेतन और 750 स्कोर पर ₹2 लाख का पर्सनल लोन स्वीकृत।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'agriculture loan', 'loan for farmers',
            'कृषि ऋण', 'किसानों के लिए लोन'
        ],
        definition_en: `Agriculture loans are offered to farmers for buying seeds, equipment, or land cultivation.`,
        example_en: `Example: ₹1 lakh loan to buy seeds and fertilizer for farming 2 acres.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `कृषि ऋण किसानों को बीज, उपकरण या खेती के लिए दिए जाते हैं।`,
        example_hi: `उदाहरण: 2 एकड़ की खेती के लिए बीज व उर्वरक खरीदने हेतु ₹1 लाख ऋण।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan against property', 'mortgage loan',
            'संपत्ति पर लोन', 'लोन अगेंस्ट प्रॉपर्टी'
        ],
        definition_en: `Loan against property is a secured loan where you mortgage residential or commercial property for funds.`,
        example_en: `Example: ₹15 lakh loan sanctioned by pledging a ₹50 lakh flat.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `संपत्ति पर लोन एक सुरक्षित ऋण है जिसमें आप अपनी आवासीय या व्यावसायिक संपत्ति गिरवी रखते हैं।`,
        example_hi: `उदाहरण: ₹50 लाख के फ्लैट पर ₹15 लाख का लोन स्वीकृत।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'credit score for loan', 'minimum CIBIL score',
            'लोन के लिए क्रेडिट स्कोर', 'CIBIL स्कोर क्या होना चाहिए'
        ],
        definition_en: `Most banks prefer a CIBIL score of 700+ for easy loan approval.`,
        example_en: `Example: A score of 650 may lead to rejection or higher interest.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `अधिकांश बैंक आसान लोन स्वीकृति के लिए 700+ CIBIL स्कोर को प्राथमिकता देते हैं।`,
        example_hi: `उदाहरण: 650 स्कोर होने पर लोन रिजेक्ट हो सकता है या ब्याज दर अधिक हो सकती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'bike loan', 'loan for two-wheeler',
            'बाइक लोन', 'दो‑पहिया वाहन लोन'
        ],
        definition_en: `Bike loans help you buy a two-wheeler by financing up to 90-95% of its cost.`,
        example_en: `Example: ₹90,000 loan for ₹1 lakh bike with EMI of ₹3,000 per month.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बाइक लोन दो-पहिया वाहन खरीदने के लिए होता है जिसमें वाहन की लागत का 90-95% तक फाइनेंस हो सकता है।`,
        example_hi: `उदाहरण: ₹1 लाख की बाइक के लिए ₹90,000 का लोन, ₹3,000 मासिक EMI पर।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'car loan process', 'how to get car loan',
            'कार लोन कैसे लें', 'कार लोन प्रक्रिया'
        ],
        definition_en: `Car loans are secured loans where the car acts as collateral until repayment.`,
        example_en: `Example: ₹6 lakh loan for a ₹7 lakh car at 9% interest for 5 years.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `कार लोन एक सुरक्षित लोन है जिसमें कार ही गिरवी रहती है जब तक लोन चुकता नहीं हो जाता।`,
        example_hi: `उदाहरण: ₹7 लाख की कार के लिए ₹6 लाख का लोन 9% ब्याज पर, 5 साल में चुकता।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan processing fee', 'loan application charges',
            'लोन प्रोसेसिंग फीस', 'लोन आवेदन शुल्क'
        ],
        definition_en: `Processing fee is a one-time charge deducted by the lender at the time of loan disbursal.`,
        example_en: `Example: ₹1,000–₹5,000 fee for personal loan depending on amount.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `प्रोसेसिंग फीस वह एकमुश्त शुल्क होता है जो लोन मिलने पर बैंक द्वारा काटा जाता है।`,
        example_hi: `उदाहरण: ₹1,000–₹5,000 की फीस पर्सनल लोन पर, राशि के अनुसार।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'repayment tenure', 'loan duration',
            'लोन अवधि', 'EMI कितने साल तक'
        ],
        definition_en: `Repayment tenure is the period during which you repay the loan in EMIs, typically ranging from 1 to 30 years.`,
        example_en: `Example: A home loan can be repaid over 20 years.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन अवधि वह समय होता है जिसमें आप EMI के माध्यम से ऋण चुकाते हैं, यह आमतौर पर 1 से 30 साल तक होती है।`,
        example_hi: `उदाहरण: होम लोन को 20 वर्षों में चुकाया जा सकता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan disbursement time', 'loan approval to disbursement',
            'लोन मिलने में कितना समय लगता है', 'लोन डिस्बर्समेंट टाइम'
        ],
        definition_en: `Loan disbursement usually happens within 1 to 7 days after approval, depending on the lender.`,
        example_en: `Example: Personal loan disbursed in 2 days after documents are verified.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन स्वीकृति के बाद आमतौर पर 1 से 7 दिनों में ऋण का वितरण हो जाता है, बैंक पर निर्भर करता है।`,
        example_hi: `उदाहरण: दस्तावेज़ सत्यापन के 2 दिन बाद पर्सनल लोन जारी।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'student loan', 'education loan', 'loan for higher studies',
            'विद्यार्थी ऋण', 'एजुकेशन लोन'
        ],
        definition_en: `Education loans help students pay for college or university tuition, exams, books, and living expenses.`,
        example_en: `Example: ₹10 lakh education loan for an MBA program in India or abroad.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `एजुकेशन लोन विद्यार्थियों को कॉलेज, यूनिवर्सिटी, ट्यूशन फीस, किताबें और रहने के खर्चों के लिए मदद करता है।`,
        example_hi: `उदाहरण: भारत या विदेश में एमबीए के लिए ₹10 लाख का शिक्षा ऋण।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan foreclosure', 'early loan closure',
            'लोन फोरक्लोजर', 'लोन पहले चुकाने पर क्या होता है'
        ],
        definition_en: `Loan foreclosure is when you repay your entire loan amount before the agreed tenure ends.`,
        example_en: `Example: Prepaying a personal loan in 2 years instead of 5 years.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन फोरक्लोजर तब होता है जब आप तय समय से पहले पूरा लोन चुका देते हैं।`,
        example_hi: `उदाहरण: 5 साल के पर्सनल लोन को 2 साल में चुका देना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan prepayment charges', 'is there penalty for prepayment',
            'लोन प्रीपेमेंट चार्ज', 'जल्दी लोन चुकाने का शुल्क'
        ],
        definition_en: `Some banks charge a penalty fee if you repay your loan earlier than scheduled.`,
        example_en: `Example: 2% prepayment charge on the remaining balance.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `कुछ बैंक समय से पहले लोन चुकाने पर प्रीपेमेंट शुल्क लेते हैं।`,
        example_hi: `उदाहरण: बचे हुए लोन अमाउंट पर 2% प्रीपेमेंट शुल्क।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'top-up loan', 'topup on existing loan',
            'टॉप-अप लोन क्या होता है', 'मौजूदा लोन पर अतिरिक्त लोन'
        ],
        definition_en: `Top-up loans are additional loans given on existing loans if you have a good repayment record.`,
        example_en: `Example: Taking ₹2 lakh top-up on an ongoing ₹8 lakh home loan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `टॉप-अप लोन मौजूदा लोन पर अच्छा भुगतान इतिहास होने पर अतिरिक्त ऋण के रूप में दिया जाता है।`,
        example_hi: `उदाहरण: ₹8 लाख के चल रहे होम लोन पर ₹2 लाख का टॉप-अप लोन लेना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'EMI bounce', 'missed EMI penalty',
            'EMI बाउंस', 'EMI ना चुकाने पर जुर्माना'
        ],
        definition_en: `If your EMI bounces due to insufficient funds, banks charge a penalty and it impacts your credit score.`,
        example_en: `Example: ₹500–₹1000 EMI bounce fee plus CIBIL score drop.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `अगर खाते में पैसा नहीं होने के कारण EMI बाउंस होती है, तो बैंक जुर्माना लगाते हैं और क्रेडिट स्कोर पर असर पड़ता है।`,
        example_hi: `उदाहरण: ₹500–₹1000 EMI बाउंस शुल्क और CIBIL स्कोर में गिरावट।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'joint loan', 'loan with co-applicant',
            'संयुक्त ऋण', 'को-एप्लीकेंट के साथ लोन'
        ],
        definition_en: `Joint loans are taken with a co-applicant like spouse or parent to increase loan eligibility.`,
        example_en: `Example: Husband and wife apply together for ₹50 lakh home loan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `संयुक्त ऋण में एक से अधिक व्यक्ति (जैसे पति-पत्नी) मिलकर लोन लेते हैं जिससे पात्रता बढ़ती है।`,
        example_hi: `उदाहरण: पति-पत्नी मिलकर ₹50 लाख का होम लोन लेते हैं।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'fixed vs floating interest', 'loan interest types',
            'फिक्स्ड बनाम फ्लोटिंग ब्याज दर', 'ब्याज दर प्रकार'
        ],
        definition_en: `Fixed interest remains constant during the loan tenure, while floating can vary based on market rates.`,
        example_en: `Example: 8.5% fixed vs floating starting at 7.9% but can rise or fall.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `फिक्स्ड ब्याज दर लोन अवधि में नहीं बदलती, जबकि फ्लोटिंग दर बाजार के अनुसार बदलती रहती है।`,
        example_hi: `उदाहरण: फिक्स्ड 8.5% जबकि फ्लोटिंग 7.9% से शुरू होकर ऊपर-नीचे हो सकती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan EMI calculator', 'calculate monthly EMI',
            'EMI कैलकुलेटर', 'मासिक किस्त कैलकुलेटर'
        ],
        definition_en: `EMI calculators help estimate your monthly payment based on loan amount, interest rate, and tenure.`,
        example_en: `Example: ₹5 lakh loan at 10% for 3 years = ₹16,134 EMI/month.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `EMI कैलकुलेटर लोन राशि, ब्याज दर और अवधि के आधार पर मासिक किस्त का अनुमान लगाने में मदद करता है।`,
        example_hi: `उदाहरण: ₹5 लाख का लोन, 10% ब्याज, 3 वर्षों के लिए = ₹16,134 प्रति माह EMI।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'home loan subsidy', 'PMAY loan benefit',
            'होम लोन सब्सिडी', 'प्रधानमंत्री आवास योजना लाभ'
        ],
        definition_en: `Under PMAY, eligible applicants can get interest subsidy on home loans for first-time house purchase.`,
        example_en: `Example: 6.5% interest subsidy on loan up to ₹6 lakh for EWS/LIG categories.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `प्रधानमंत्री आवास योजना के तहत पात्र आवेदकों को पहली बार घर खरीदने पर ब्याज सब्सिडी मिलती है।`,
        example_hi: `उदाहरण: EWS/LIG को ₹6 लाख तक के लोन पर 6.5% की ब्याज सब्सिडी मिलती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'loan rejection reasons', 'why was my loan rejected',
            'लोन रिजेक्ट क्यों हुआ', 'लोन रिजेक्शन के कारण'
        ],
        definition_en: `Loans can be rejected due to low credit score, unstable income, or incomplete documents.`,
        example_en: `Example: Loan rejected because CIBIL score was below 600.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोन्स कम क्रेडिट स्कोर, अस्थिर आय या अधूरे दस्तावेजों के कारण रिजेक्ट हो सकते हैं।`,
        example_hi: `उदाहरण: CIBIL स्कोर 600 से कम होने के कारण लोन रिजेक्ट हुआ।`,
        link_hi: 'https://connectindiaenterprises.com/'
    }

];
