export interface InsuranceInfo {
    keywords: string[];
    definition_en: string;
    example_en?: string;
    link_en?: string;
    definition_hi: string;
    example_hi?: string;
    link_hi?: string;
}

export const insuranceData: InsuranceInfo[] = [
    {
        keywords: [
            'insurance', 'what is insurance', 'insurance meaning', 'types of insurance',
            'general insurance info', 'insurance explanation', 'बीमा', 'बीमा क्या है', 'इंश्योरेंस',
            'बीमा जानकारी', 'बीमा की जानकारी', 'बीमा के प्रकार'
        ],
        definition_en: `Insurance is a financial agreement that protects you from unexpected losses. By paying a premium, you get coverage against risks such as illness, accidents, or death.
    
    **Key Types:**
    • Health Insurance – covers medical expenses  
    • Life Insurance – offers payout to family after death  
    • Vehicle Insurance – protects car/bike from damages  
    • Travel Insurance – covers trip-related risks  
    • Property Insurance – covers damage to home/business  
      
    Insurance helps manage financial risk and brings peace of mind.`,
        example_en: `Example: A health insurance policy with ₹5 lakh coverage can cover surgeries, medicines, and hospitalization bills.`,
        link_en: 'https://www.irdai.gov.in',

        definition_hi: `बीमा एक वित्तीय अनुबंध होता है जो आपको अचानक होने वाले नुकसान से सुरक्षा देता है। आप प्रीमियम का भुगतान करके बीमारी, दुर्घटना या मृत्यु जैसे जोखिमों से कवर प्राप्त करते हैं।
    
    **प्रमुख प्रकार:**
    • स्वास्थ्य बीमा – चिकित्सा खर्चों को कवर करता है  
    • जीवन बीमा – मृत्यु के बाद परिवार को भुगतान  
    • वाहन बीमा – गाड़ी की क्षति से सुरक्षा  
    • यात्रा बीमा – यात्रा से जुड़ी समस्याओं का कवर  
    • संपत्ति बीमा – घर या व्यवसाय की क्षति का कवर  
      
    बीमा वित्तीय जोखिम को कम करने में मदद करता है और मानसिक शांति देता है।`,
        example_hi: `उदाहरण: ₹5 लाख की स्वास्थ्य बीमा पॉलिसी सर्जरी, दवाओं और अस्पताल के खर्चों को कवर कर सकती है।`,
        link_hi: 'https://www.irdai.gov.in/hi'
    },
    /** 🏥 Health Insurance **/
    {
        keywords: [
            'health insurance', 'medical insurance', 'hospital coverage', 'insurance for treatment',
            'insurance for surgery', 'cashless treatment', 'health policy', 'mediclaim',
            'स्वास्थ्य बीमा', 'हेल्थ इंश्योरेंस', 'बीमारी का बीमा', 'मेडिकल बीमा', 'इलाज का बीमा'
        ],
        definition_en: `Health insurance is a policy that covers medical expenses such as hospitalization, surgery, and treatments, either cashless or through reimbursement.`,
        example_en: `Example: A ₹5 lakh health insurance plan may cover hospitalization, tests, and medicines under cashless service.`,
        link_en: 'https://www.irdai.gov.in',
        definition_hi: `स्वास्थ्य बीमा एक पॉलिसी है जो अस्पताल में भर्ती, सर्जरी और इलाज जैसे चिकित्सा खर्चों को कवर करती है, या तो कैशलेस या प्रतिपूर्ति के रूप में।`,
        example_hi: `उदाहरण: ₹5 लाख की हेल्थ इंश्योरेंस पॉलिसी अस्पताल में भर्ती, टेस्ट और दवाओं को कैशलेस सेवा के तहत कवर कर सकती है।`,
        link_hi: 'https://www.irdai.gov.in/hi'
    },

    /** 🚗 Vehicle Insurance **/
    {
        keywords: [
            'vehicle insurance', 'car insurance', 'bike insurance', 'motor insurance',
            'third party insurance', 'own damage cover', 'motor vehicle insurance',
            'गाड़ी का बीमा', 'वाहन बीमा', 'कार इंश्योरेंस', 'बाइक इंश्योरेंस'
        ],
        definition_en: `Vehicle insurance protects you against financial losses in case your car, bike, or other vehicle is damaged or involved in an accident.`,
        example_en: `Example: Third-party insurance is mandatory for vehicles in India and covers damage to others.`,
        link_en: 'https://parivahan.gov.in',
        definition_hi: `वाहन बीमा आपको वित्तीय नुकसान से सुरक्षा देता है यदि आपकी गाड़ी दुर्घटना में क्षतिग्रस्त हो या किसी तीसरे पक्ष को नुकसान हो।`,
        example_hi: `उदाहरण: भारत में थर्ड-पार्टी बीमा अनिवार्य है और यह दूसरों को हुए नुकसान को कवर करता है।`,
        link_hi: 'https://parivahan.gov.in/parivahan/'
    },

    /** 👨‍👩‍👧‍👦 Life Insurance **/
    {
        keywords: [
            'life insurance', 'term plan', 'insurance after death', 'lic policy',
            'death coverage', 'life cover', 'term insurance plan',
            'जीवन बीमा', 'लाइफ इंश्योरेंस', 'बीमा पॉलिसी', 'मृत्यु के बाद बीमा'
        ],
        definition_en: `Life insurance provides financial security to your family in case of your untimely death. Term plans are a common form with high coverage at low cost.`,
        example_en: `Example: A ₹1 crore term plan at age 30 may cost ₹10,000 per year.`,
        link_en: 'https://licindia.in',
        definition_hi: `जीवन बीमा आपकी असामयिक मृत्यु की स्थिति में आपके परिवार को वित्तीय सुरक्षा प्रदान करता है। टर्म प्लान कम लागत में अधिक कवरेज देते हैं।`,
        example_hi: `उदाहरण: 30 वर्ष की आयु में ₹1 करोड़ का टर्म प्लान ₹10,000 प्रतिवर्ष में लिया जा सकता है।`,
        link_hi: 'https://licindia.in/hi'
    },

    /** 🏢 General Insurance (Overview) **/
    {
        keywords: [
            'general insurance', 'types of insurance', 'insurance meaning', 'insurance details',
            'बीमा', 'बीमा के प्रकार', 'इंश्योरेंस क्या है', 'बीमा की जानकारी'
        ],
        definition_en: `Insurance is a contract that provides financial protection against various risks—such as health, life, vehicle, or property—by paying premiums.`,
        example_en: `Example: Health, vehicle, and life insurance are the most common in India.`,
        link_en: 'https://www.policybazaar.com/general-insurance/',
        definition_hi: `बीमा एक अनुबंध है जो विभिन्न जोखिमों—जैसे स्वास्थ्य, जीवन, वाहन या संपत्ति—के खिलाफ वित्तीय सुरक्षा देता है, इसके लिए प्रीमियम का भुगतान किया जाता है।`,
        example_hi: `उदाहरण: भारत में स्वास्थ्य, वाहन और जीवन बीमा सबसे अधिक लिए जाते हैं।`,
        link_hi: 'https://www.policybazaar.com/general-insurance/'
    },
    {
        keywords: ['third party insurance', 'third-party cover', 'what is 3rd party insurance', 'motor third party insurance', 'vehicle third party', 'mandatory insurance india', 'बीमा थर्ड पार्टी', 'थर्ड पार्टी इंश्योरेंस', 'थर्ड पार्टी क्या होता है', 'मोटर थर्ड पार्टी बीमा', '3rd party इंश्योरेंस'],
        definition_en: 'Third-party insurance is a mandatory motor insurance that covers damage or injury caused to another person, vehicle, or property by your insured vehicle. It does not cover your own damages.',
        example_en: 'Example: If your car hits a pedestrian or damages another car, third-party insurance will pay for their medical or repair bills.',
        link_en: 'https://www.irdai.gov.in/third-party',
        definition_hi: 'थर्ड पार्टी बीमा एक अनिवार्य मोटर बीमा होता है जो आपकी गाड़ी से किसी तीसरे व्यक्ति, वाहन या संपत्ति को हुए नुकसान या चोट को कवर करता है। यह आपकी खुद की गाड़ी को हुए नुकसान को कवर नहीं करता।',
        example_hi: 'उदाहरण: यदि आपकी कार किसी पैदल यात्री को टक्कर मार देती है या किसी दूसरी गाड़ी को नुकसान पहुंचाती है, तो थर्ड पार्टी बीमा उनके मेडिकल या मरम्मत खर्चों को कवर करेगा।',
        link_hi: 'https://www.irdai.gov.in/hi/third-party',
    },
    {
        keywords: ['comprehensive insurance', 'full cover insurance', 'own damage and third party', 'comprehensive motor insurance', 'कॉम्प्रिहेंसिव इंश्योरेंस', 'कंप्लीट इंश्योरेंस', 'कॉम्प्रिहेंसिव वाहन बीमा', 'पूर्ण बीमा', 'comprehensive cover', 'full coverage insurance'],
        definition_en: 'Comprehensive insurance offers broad coverage for your vehicle. It includes both third-party liability and protection for your own vehicle against theft, fire, accidents, and natural disasters.',
        example_en: 'Example: If your car is damaged in a flood or involved in an accident, comprehensive insurance pays for repair expenses.',
        link_en: 'https://www.policybazaar.com/motor-insurance/comprehensive-insurance/',
        definition_hi: 'कॉम्प्रिहेंसिव बीमा आपके वाहन के लिए व्यापक सुरक्षा प्रदान करता है। इसमें थर्ड पार्टी ज़िम्मेदारी के साथ-साथ आपकी गाड़ी को चोरी, आग, दुर्घटना या प्राकृतिक आपदा से हुए नुकसान का कवर भी शामिल होता है।',
        example_hi: 'उदाहरण: यदि आपकी कार बाढ़ में क्षतिग्रस्त हो जाती है या दुर्घटनाग्रस्त होती है, तो कॉम्प्रिहेंसिव बीमा मरम्मत के खर्च को कवर करेगा।',
        link_hi: 'https://www.policybazaar.com/motor-insurance/comprehensive-insurance/',
    },
    {
        keywords: ['IDV in insurance', 'insured declared value', 'vehicle IDV', 'bike IDV', 'car insurance IDV meaning', 'IDV क्या होता है', 'IDV बीमा', 'वाहन बीमा IDV', 'IDV का मतलब', 'IDV in Hindi'],
        definition_en: 'IDV (Insured Declared Value) is the maximum sum your insurer will pay if your vehicle is stolen or totally damaged. It is based on the market value of the vehicle minus depreciation.',
        example_en: "Example: If your 3-year-old car's IDV is ₹4 lakh and it gets stolen, the insurer pays ₹4 lakh (minus deductibles).",
        link_en: 'https://www.policybazaar.com/motor-insurance/idv-in-insurance/',
        definition_hi: 'आईडीवी (बीमित घोषित मूल्य) वह अधिकतम राशि है जो आपकी गाड़ी के चोरी हो जाने या पूरी तरह नष्ट होने पर बीमा कंपनी आपको देगी। यह राशि बाजार मूल्य से मूल्यह्रास घटाकर तय की जाती है।',
        example_hi: 'उदाहरण: यदि आपकी 3 साल पुरानी कार की IDV ₹4 लाख है और वह चोरी हो जाती है, तो बीमा कंपनी ₹4 लाख (डिडक्टिबल छोड़कर) का भुगतान करेगी।',
        link_hi: 'https://www.policybazaar.com/motor-insurance/idv-in-insurance/',
    },
    {
        keywords: [
            'what is car insurance', 'car insurance meaning', 'vehicle insurance', 'motor insurance', 'automobile insurance',
            'four wheeler insurance', 'बीमा कार का', 'कार बीमा क्या है', 'गाड़ी का बीमा', 'वाहन बीमा',
            'car insurance explanation', 'इंश्योरेंस क्या होता है', 'motor vehicle insurance'
        ],
        definition_en: 'Car insurance is a contract between a vehicle owner and an insurance company that provides financial protection against loss or damage to the car due to accidents, theft, natural disasters, or third-party liability.',
        example_en: 'Example: If your car meets with an accident and is damaged, your car insurance can cover the repair costs depending on the type of policy.',
        link_en: 'https://www.policybazaar.com/motor-insurance/car-insurance/',
        definition_hi: 'कार बीमा वाहन मालिक और बीमा कंपनी के बीच एक अनुबंध होता है जो दुर्घटना, चोरी, प्राकृतिक आपदा या तीसरे पक्ष को नुकसान होने पर कार की क्षति या हानि के खिलाफ वित्तीय सुरक्षा प्रदान करता है।',
        example_hi: 'उदाहरण: यदि आपकी कार दुर्घटनाग्रस्त हो जाती है, तो कार बीमा उसकी मरम्मत का खर्च कवर कर सकता है, यह आपकी पॉलिसी के प्रकार पर निर्भर करता है।',
        link_hi: 'https://www.policybazaar.com/motor-insurance/car-insurance/',
    },
    {
        keywords: [
            'is car insurance mandatory in India', 'motor insurance rule India', 'vehicle insurance law', 'car insurance legal requirement',
            'third party insurance law India', 'क्या कार बीमा जरूरी है', 'भारत में वाहन बीमा', 'बीमा अनिवार्य भारत', 'इंश्योरेंस भारत में जरूरी है क्या',
            'motor insurance act', 'IRDAI car insurance rules'
        ],
        definition_en: 'Yes, car insurance is mandatory in India under the Motor Vehicles Act, 1988. At least third-party insurance is required to legally drive a vehicle on Indian roads.',
        example_en: 'Example: If you are caught driving without insurance, you may face a fine of ₹2,000 and/or imprisonment.',
        link_en: 'https://parivahan.gov.in/parivahan/',
        definition_hi: 'हां, भारत में मोटर वाहन अधिनियम, 1988 के तहत कार बीमा अनिवार्य है। कम से कम थर्ड-पार्टी बीमा आवश्यक है ताकि आप कानूनी रूप से सड़क पर वाहन चला सकें।',
        example_hi: 'उदाहरण: यदि आप बिना बीमा के गाड़ी चलाते पकड़े जाते हैं तो ₹2,000 जुर्माना या जेल हो सकती है।',
        link_hi: 'https://parivahan.gov.in/parivahan/',
    },
    {
        keywords: [
            'third party insurance', 'motor third party insurance', '3rd party vehicle insurance', 'mandatory insurance India',
            'third party coverage', 'थर्ड पार्टी बीमा', 'बीमा थर्ड पार्टी', 'थर्ड पार्टी इंश्योरेंस क्या है', 'मोटर बीमा थर्ड पार्टी',
            'गाड़ी का थर्ड पार्टी बीमा'
        ],
        definition_en: 'Third-party insurance covers financial liability for damages or injuries caused to another person, vehicle, or property by your insured vehicle. It is mandatory by law in India.',
        example_en: 'Example: If your car hits a pedestrian and they are injured, your third-party insurance will cover their medical costs.',
        link_en: 'https://www.irdai.gov.in/third-party',
        definition_hi: 'थर्ड-पार्टी बीमा आपकी गाड़ी से किसी अन्य व्यक्ति, वाहन या संपत्ति को हुए नुकसान के लिए वित्तीय जिम्मेदारी को कवर करता है। यह भारत में कानूनी रूप से अनिवार्य है।',
        example_hi: 'उदाहरण: अगर आपकी कार किसी व्यक्ति को टक्कर मार देती है और उसे चोट लगती है, तो थर्ड-पार्टी बीमा उसकी चिकित्सा लागत को कवर करेगा।',
        link_hi: 'https://www.irdai.gov.in/hi/third-party',
    },
    {
        keywords: [
            'comprehensive car insurance', 'full coverage vehicle insurance', 'own damage and third party', 'comprehensive motor insurance',
            'comprehensive vs third party', 'कम्प्रिहेंसिव इंश्योरेंस क्या है', 'संपूर्ण बीमा', 'गाड़ी का फुल कवरेज बीमा',
            'फुल कवर बीमा', 'कम्प्रिहेंसिव बीमा लाभ'
        ],
        definition_en: 'Comprehensive insurance provides coverage for both own-damage and third-party liability. It covers theft, fire, natural disasters, vandalism, and accidents involving your own car.',
        example_en: 'Example: If your car is damaged in a flood or gets stolen, your comprehensive policy will cover the loss.',
        link_en: 'https://www.policybazaar.com/motor-insurance/comprehensive-insurance/',
        definition_hi: 'कम्प्रिहेंसिव बीमा अपने वाहन की क्षति और थर्ड-पार्टी जिम्मेदारी दोनों को कवर करता है। इसमें चोरी, आग, प्राकृतिक आपदा, तोड़फोड़ और दुर्घटनाएं शामिल होती हैं।',
        example_hi: 'उदाहरण: यदि आपकी कार बाढ़ में क्षतिग्रस्त हो जाती है या चोरी हो जाती है, तो कम्प्रिहेंसिव पॉलिसी उसकी भरपाई करेगी।',
        link_hi: 'https://www.policybazaar.com/motor-insurance/comprehensive-insurance/',
    },
    {
        keywords: [
            'third party vs comprehensive', 'best car insurance type', 'compare insurance coverage', 'which motor insurance is better',
            'third party या comprehensive', 'कौन सा बीमा बेहतर है', 'थर्ड पार्टी बनाम सम्पूर्ण बीमा', 'कौन सा इंश्योरेंस लेना चाहिए',
            'कम्प्रिहेंसिव या थर्ड पार्टी'
        ],
        definition_en: 'Comprehensive insurance offers broader coverage including own damage, while third-party covers only liability. If your vehicle is new or high-value, comprehensive is recommended.',
        example_en: 'Example: A new car owner should choose comprehensive insurance to cover both theft and accidental damage.',
        link_en: 'https://www.bankbazaar.com/motor-insurance/compare.html',
        definition_hi: 'कम्प्रिहेंसिव बीमा व्यापक सुरक्षा देता है जिसमें खुद की गाड़ी की क्षति भी शामिल होती है, जबकि थर्ड-पार्टी बीमा केवल दूसरों को हुए नुकसान को कवर करता है। नई या महंगी गाड़ी के लिए कम्प्रिहेंसिव बीमा बेहतर होता है।',
        example_hi: 'उदाहरण: यदि आपकी नई कार है, तो कम्प्रिहेंसिव बीमा लेना उचित होगा ताकि चोरी और दुर्घटना दोनों कवर हो सकें।',
        link_hi: 'https://www.bankbazaar.com/motor-insurance/compare.html',
    },
    {
        keywords: [
            'what is covered in third party insurance', 'third party insurance coverage', 'third party claim', 'third party policy benefits',
            'थर्ड पार्टी बीमा क्या कवर करता है', 'थर्ड पार्टी बीमा फायदे', 'गाड़ी का थर्ड पार्टी बीमा', 'थर्ड पार्टी क्लेम क्या होता है'
        ],
        definition_en: 'Third-party insurance covers legal liabilities arising from damages or injuries to another person, vehicle, or property caused by your insured vehicle. It does not cover your own vehicle’s damage.',
        example_en: 'Example: If your car damages a wall or injures a pedestrian, third-party insurance will cover the repair or medical costs.',
        link_en: 'https://www.policybazaar.com/motor-insurance/third-party-car-insurance/',
        definition_hi: 'थर्ड-पार्टी बीमा आपकी गाड़ी द्वारा किसी अन्य व्यक्ति, वाहन या संपत्ति को हुए नुकसान या चोट के लिए कानूनी जिम्मेदारी को कवर करता है। यह आपकी गाड़ी की क्षति को कवर नहीं करता।',
        example_hi: 'उदाहरण: अगर आपकी गाड़ी किसी दीवार को नुकसान पहुंचाती है या पैदल यात्री को चोट लगती है, तो थर्ड पार्टी बीमा उसके खर्च को कवर करेगा।',
        link_hi: 'https://www.policybazaar.com/motor-insurance/third-party-car-insurance/',
    },
    {
        keywords: [
            'comprehensive policy coverage', 'what is covered in full insurance', 'comprehensive insurance benefits',
            'comp insurance includes', 'कम्प्रिहेंसिव बीमा में क्या होता है', 'कम्प्रिहेंसिव क्या कवर करता है',
            'फुल इंश्योरेंस कवर', 'बीमा सम्पूर्ण कवरेज'
        ],
        definition_en: 'Comprehensive insurance includes third-party liability and own damage coverage. It also covers events like theft, fire, vandalism, natural disasters, falling objects, and accidental damage.',
        example_en: 'Example: If your car is hit by a tree during a storm, your comprehensive insurance will cover the repair cost.',
        link_en: 'https://www.bajajallianz.com/motor-insurance/car-insurance/comprehensive.html',
        definition_hi: 'कम्प्रिहेंसिव बीमा में थर्ड-पार्टी जिम्मेदारी और अपनी गाड़ी की क्षति दोनों शामिल होती हैं। यह चोरी, आग, तोड़फोड़, प्राकृतिक आपदा, गिरती वस्तुएं और दुर्घटनाओं को कवर करता है।',
        example_hi: 'उदाहरण: यदि तूफान में पेड़ गिरने से आपकी गाड़ी क्षतिग्रस्त हो जाती है, तो कम्प्रिहेंसिव बीमा मरम्मत का खर्च देगा।',
        link_hi: 'https://www.bajajallianz.com/motor-insurance/car-insurance/comprehensive.html',
    },
    {
        keywords: [
            'how is car insurance premium calculated', 'premium formula vehicle insurance', 'factors affecting insurance premium',
            'insurance cost calculation', 'car insurance rate', 'प्रीमियम कैसे तय होता है', 'गाड़ी का बीमा प्रीमियम कैसे बनता है',
            'बीमा राशि निर्धारण', 'premium गणना'
        ],
        definition_en: 'Car insurance premium is calculated based on factors such as the type of policy, vehicle’s IDV, age, make and model, fuel type, location, and owner’s claim history.',
        example_en: 'Example: A new SUV in a metro city will have a higher premium than a 5-year-old hatchback in a rural area.',
        link_en: 'https://www.policybazaar.com/motor-insurance/car-insurance/premium-calculator/',
        definition_hi: 'कार बीमा प्रीमियम वाहन के प्रकार, IDV, उम्र, मॉडल, ईंधन प्रकार, स्थान और मालिक की क्लेम हिस्ट्री जैसे कारकों के आधार पर तय होता है।',
        example_hi: 'उदाहरण: एक नया SUV मेट्रो शहर में पुराने हैचबैक की तुलना में अधिक प्रीमियम पर बीमित होगा।',
        link_hi: 'https://www.policybazaar.com/motor-insurance/car-insurance/premium-calculator/',
    },
    {
        keywords: [
            'no claim bonus', 'what is NCB', 'how to get NCB in car insurance', 'NCB percentage', 'बीमा नो क्लेम बोनस', 'एनसीबी क्या है',
            'नो क्लेम बोनस कैसे मिलता है', 'गाड़ी बीमा NCB', 'NCB in motor insurance'
        ],
        definition_en: 'No Claim Bonus (NCB) is a discount offered on car insurance premium for not making any claims during the previous policy year. It increases every claim-free year, up to 50%.',
        example_en: 'Example: If you did not raise any claim last year, you may get 20% discount on your renewal premium.',
        link_en: 'https://www.policybazaar.com/motor-insurance/ncb-in-car-insurance/',
        definition_hi: 'नो क्लेम बोनस (NCB) वह छूट है जो पिछले पॉलिसी वर्ष में कोई क्लेम न करने पर अगले साल के प्रीमियम पर दी जाती है। यह हर क्लेम-फ्री वर्ष के साथ बढ़ती है, अधिकतम 50% तक।',
        example_hi: 'उदाहरण: यदि आपने पिछले वर्ष कोई क्लेम नहीं किया, तो इस वर्ष आपके प्रीमियम में 20% की छूट मिल सकती है।',
        link_hi: 'https://www.policybazaar.com/motor-insurance/ncb-in-car-insurance/',
    },
    {
        keywords: [
            'transfer NCB to another insurance company', 'shift car insurance NCB', 'NCB portability', 'how to use NCB with new insurer',
            'एनसीबी ट्रांसफर कैसे करें', 'नो क्लेम बोनस दूसरी बीमा कंपनी में कैसे लें', 'NCB नई पॉलिसी में कैसे जोड़ें', 'car insurance NCB shift'
        ],
        definition_en: 'To transfer NCB, get an NCB certificate from your previous insurer. Submit it to your new insurance company while purchasing or renewing your policy to avail the discount.',
        example_en: 'Example: If you switch from Insurer A to B, submit your NCB certificate to continue your bonus benefits.',
        link_en: 'https://www.hdfcergo.com/blogs/car-insurance/how-to-transfer-ncb',
        definition_hi: 'एनसीबी ट्रांसफर करने के लिए पुराने बीमा प्रदाता से एनसीबी सर्टिफिकेट लें और नई बीमा कंपनी को यह पॉलिसी खरीदते समय दें ताकि छूट जारी रह सके।',
        example_hi: 'उदाहरण: यदि आप इंश्योरर A से B में जा रहे हैं, तो एनसीबी सर्टिफिकेट देकर आप अपनी छूट बनाए रख सकते हैं।',
        link_hi: 'https://www.hdfcergo.com/blogs/car-insurance/how-to-transfer-ncb',
    },
    {
        keywords: ['IDV in insurance', 'insured declared value', 'vehicle IDV', 'bike IDV', 'car insurance IDV meaning', 'IDV क्या होता है', 'IDV बीमा', 'वाहन बीमा IDV', 'IDV का मतलब', 'IDV in Hindi'],
        definition_en: 'IDV (Insured Declared Value) is the maximum sum your insurer will pay if your vehicle is stolen or totally damaged. It is based on the market value of the vehicle minus depreciation.',
        example_en: "Example: If your 3-year-old car's IDV is ₹4 lakh and it gets stolen, the insurer pays ₹4 lakh (minus deductibles).",
        link_en: 'https://www.policybazaar.com/motor-insurance/idv-in-insurance/',
        definition_hi: 'आईडीवी (बीमित घोषित मूल्य) वह अधिकतम राशि है जो आपकी गाड़ी के चोरी हो जाने या पूरी तरह नष्ट होने पर बीमा कंपनी आपको देगी। यह राशि बाजार मूल्य से मूल्यह्रास घटाकर तय की जाती है।',
        example_hi: 'उदाहरण: यदि आपकी 3 साल पुरानी कार की IDV ₹4 लाख है और वह चोरी हो जाती है, तो बीमा कंपनी ₹4 लाख (डिडक्टिबल छोड़कर) का भुगतान करेगी।',
        link_hi: 'https://www.policybazaar.com/motor-insurance/idv-in-insurance/',
    },
    {
        keywords: [
            'how to renew car insurance', 'vehicle insurance renewal steps', 'bike insurance renewal', 'motor insurance online renewal',
            'car policy renew', 'बीमा नवीनीकरण कैसे करें', 'कार बीमा रिन्यू', 'गाड़ी बीमा कैसे रिन्यू करें', 'online vehicle insurance renewal'
        ],
        definition_en: 'You can renew your vehicle insurance by visiting the insurer’s website or using aggregator platforms. Enter policy details, choose your plan, verify IDV, and pay the premium online.',
        example_en: 'Example: Use PolicyBazaar or the insurer’s portal to renew your car insurance in under 10 minutes.',
        link_en: 'https://www.policybazaar.com/motor-insurance/car-insurance/renewal/',
        definition_hi: 'आप बीमा कंपनी की वेबसाइट या किसी एग्रीगेटर प्लेटफ़ॉर्म के जरिए गाड़ी का बीमा नवीनीकरण कर सकते हैं। पॉलिसी विवरण भरें, योजना चुनें, IDV देखें और ऑनलाइन प्रीमियम भुगतान करें।',
        example_hi: 'उदाहरण: आप PolicyBazaar या बीमा कंपनी के पोर्टल से 10 मिनट में बीमा रिन्यू कर सकते हैं।',
        link_hi: 'https://www.policybazaar.com/motor-insurance/car-insurance/renewal/',
    },
    {
        keywords: [
            'missed insurance renewal', 'car insurance expired', 'renew expired policy', 'vehicle insurance lapse',
            'बीमा समय पर रिन्यू न हो', 'गाड़ी का बीमा समाप्त', 'बीमा चूक जाने पर क्या करें', 'insurance grace period'
        ],
        definition_en: 'If you miss renewing your policy, your vehicle remains uninsured. You may lose No Claim Bonus and will have to undergo vehicle inspection before reactivation.',
        example_en: 'Example: If your policy expired 10 days ago, you need a fresh inspection to get it reissued.',
        link_en: 'https://www.acko.com/car-insurance/what-happens-if-car-insurance-expires/',
        definition_hi: 'यदि आप समय पर बीमा नवीनीकरण नहीं करते हैं, तो आपकी गाड़ी बिना बीमा के रह जाती है। इससे नो क्लेम बोनस खत्म हो सकता है और दोबारा बीमा चालू कराने के लिए वाहन निरीक्षण जरूरी हो सकता है।',
        example_hi: 'उदाहरण: यदि बीमा 10 दिन पहले समाप्त हो गया है, तो दोबारा चालू करने के लिए वाहन निरीक्षण की आवश्यकता होगी।',
        link_hi: 'https://www.acko.com/car-insurance/what-happens-if-car-insurance-expires/',
    },
    {
        keywords: [
            'personal accident cover car insurance', 'PA cover motor policy', 'driver accident cover',
            'PA in insurance', 'व्यक्तिगत दुर्घटना बीमा', 'कार बीमा में दुर्घटना कवर', 'पर्सनल एक्सीडेंट इंश्योरेंस', 'PA क्या होता है बीमा में'
        ],
        definition_en: 'Personal Accident (PA) cover provides financial compensation in case of death or disability due to a car accident. It is mandatory for owner-drivers under Indian law.',
        example_en: 'Example: If the driver dies in an accident, PA cover offers ₹15 lakh compensation to the nominee.',
        link_en: 'https://www.irdai.gov.in/pa-cover',
        definition_hi: 'पर्सनल एक्सीडेंट (PA) कवर वाहन दुर्घटना के कारण मृत्यु या विकलांगता होने पर वित्तीय मुआवजा प्रदान करता है। यह मालिक-चालक के लिए अनिवार्य है।',
        example_hi: 'उदाहरण: अगर दुर्घटना में चालक की मृत्यु हो जाती है, तो पर्सनल एक्सीडेंट कवर के तहत ₹15 लाख का मुआवजा मिलता है।',
        link_hi: 'https://www.irdai.gov.in/pa-cover',
    },
    {
        keywords: [
            'is PA cover included by default', 'personal accident mandatory', 'car insurance PA cover',
            'PA cover auto include', 'क्या पर्सनल एक्सीडेंट कवर अपने आप मिलता है', 'बीमा में PA अपने आप आता है',
            'पर्सनल एक्सीडेंट कवर शामिल है क्या', 'mandatory PA car insurance'
        ],
        definition_en: 'No, PA cover is not always included automatically. It must be purchased separately if not bundled with the main policy. It’s mandatory under law, but not always added by default.',
        example_en: 'Example: When buying a policy online, check if PA cover is selected. You may need to add it manually.',
        link_en: 'https://www.bankbazaarinsurance.com/car-insurance/pa-cover.html',
        definition_hi: 'नहीं, पर्सनल एक्सीडेंट कवर हमेशा ऑटोमेटिक शामिल नहीं होता। यदि यह मुख्य पॉलिसी में शामिल न हो तो इसे अलग से खरीदना पड़ता है। यह कानूनन आवश्यक है लेकिन अपने आप नहीं आता।',
        example_hi: 'उदाहरण: ऑनलाइन पॉलिसी खरीदते समय देखें कि क्या PA कवर शामिल है या नहीं। आपको इसे अलग से जोड़ना पड़ सकता है।',
        link_hi: 'https://www.bankbazaarinsurance.com/car-insurance/pa-cover.html',
    },
    {
        keywords: [
            'add-ons in car insurance', 'how to add roadside assistance', 'insurance extra coverage', 'car policy additional covers',
            'रोज़साइड असिस्टेंस कैसे जोड़ें', 'कार बीमा ऐड-ऑन', 'बीमा अतिरिक्त सुरक्षा', 'गाड़ी बीमा कवर बढ़ाना', 'roadside help insurance'
        ],
        definition_en: 'Additional coverages, called add-ons, can be included in your policy during purchase or renewal. Popular options include roadside assistance, zero depreciation, engine protection, and more.',
        example_en: 'Example: While renewing your car insurance, select "Roadside Assistance" to include services like towing, battery jumpstart, or tire change.',
        link_en: 'https://www.policybazaar.com/motor-insurance/car-insurance/add-on-covers/',
        definition_hi: 'अतिरिक्त कवरेज जिन्हें ऐड-ऑन कहा जाता है, पॉलिसी खरीदते या रिन्यू करते समय जोड़े जा सकते हैं। लोकप्रिय विकल्पों में रोडसाइड असिस्टेंस, जीरो डेप्रिसिएशन, इंजन प्रोटेक्शन आदि शामिल हैं।',
        example_hi: 'उदाहरण: कार बीमा रिन्यू करते समय "रोडसाइड असिस्टेंस" चुनें ताकि टोइंग, बैटरी जंपस्टार्ट या टायर चेंज जैसी सेवाएं मिलें।',
        link_hi: 'https://www.policybazaar.com/motor-insurance/car-insurance/add-on-covers/',
    },
    {
        keywords: [
            'depreciation in car insurance', 'how depreciation affects claim', 'vehicle value reduction', 'insurance deduction due to age',
            'डिप्रिशिएशन क्या होता है', 'बीमा में मूल्यह्रास', 'क्लेम में डिप्रिशिएशन का असर', 'वाहन मूल्य में गिरावट'
        ],
        definition_en: 'Depreciation reduces the claim amount as the vehicle parts lose value over time. The older the car, the higher the depreciation and the lower the compensation during a claim.',
        example_en: 'Example: For a 5-year-old car, the insurer may pay only 50–60% of the cost of damaged parts during a claim.',
        link_en: 'https://www.tataaig.com/knowledge-center/motor-insurance/depreciation-in-car-insurance',
        definition_hi: 'बीमा में डिप्रिशिएशन यानी मूल्यह्रास से आपके क्लेम की राशि कम हो सकती है क्योंकि समय के साथ वाहन की कीमत घटती है। जितनी पुरानी गाड़ी, उतना ज्यादा मूल्यह्रास और उतना ही कम क्लेम भुगतान।',
        example_hi: 'उदाहरण: 5 साल पुरानी कार में बीमा कंपनी क्षतिग्रस्त पार्ट्स की लागत का केवल 50–60% ही क्लेम में देती है।',
        link_hi: 'https://www.tataaig.com/knowledge-center/motor-insurance/depreciation-in-car-insurance',
    },
    {
        keywords: [
            'depreciation calculation in car insurance', 'how depreciation works', 'motor vehicle value loss', 'insurance deduction age-wise',
            'डिप्रिशिएशन की गणना', 'बीमा में डिप्रिशिएशन प्रतिशत', 'वर्ष अनुसार मूल्यह्रास', 'पुरानी गाड़ी का मूल्य कैसे घटता है'
        ],
        definition_en: 'Depreciation is calculated based on the age of the vehicle. For example, 0–6 months = 5%, 6 months–1 year = 15%, and so on. IRDAI provides fixed depreciation slabs.',
        example_en: 'Example: If your car is 3 years old, the depreciation on parts could be around 40%.',
        link_en: 'https://www.irdai.gov.in/document-detail?documentId=1246927',
        definition_hi: 'डिप्रिशिएशन गाड़ी की उम्र के अनुसार तय होता है। उदाहरण के लिए, 0–6 महीने = 5%, 6 महीने–1 साल = 15% आदि। IRDAI ने तय स्लैब दिए हैं।',
        example_hi: 'उदाहरण: यदि आपकी कार 3 साल पुरानी है, तो उसमें पार्ट्स पर लगभग 40% मूल्यह्रास लागू होगा।',
        link_hi: 'https://www.irdai.gov.in/document-detail?documentId=1246927',
    },
    {
        keywords: [
            'voluntary excess in insurance', 'deductible car insurance', 'voluntary deductible', 'what is voluntary excess',
            'वोलंटरी एक्ससेस क्या है', 'बीमा में अतिरिक्त कटौती', 'स्वैच्छिक कटौती', 'deductible meaning insurance'
        ],
        definition_en: 'Voluntary excess is the fixed amount the policyholder agrees to pay out of pocket during a claim. Opting for this can reduce your premium, but increases your share of the claim cost.',
        example_en: 'Example: If you have a ₹2,000 voluntary excess and a claim of ₹10,000, the insurer pays ₹8,000.',
        link_en: 'https://www.reliancegeneral.co.in/insurance/knowledge-center/insurance-articles/what-is-voluntary-deductible-in-car-insurance.aspx',
        definition_hi: 'वोलंटरी एक्ससेस वह राशि है जिसे आप क्लेम के समय खुद वहन करने के लिए सहमत होते हैं। इससे प्रीमियम घटता है, लेकिन क्लेम राशि में आपकी हिस्सेदारी बढ़ती है।',
        example_hi: 'उदाहरण: यदि आपने ₹2,000 वोलंटरी एक्ससेस चुना है और आपका क्लेम ₹10,000 का है, तो बीमा कंपनी ₹8,000 देगी।',
        link_hi: 'https://www.reliancegeneral.co.in/insurance/knowledge-center/insurance-articles/what-is-voluntary-deductible-in-car-insurance.aspx',
    },
    {
        keywords: [
            'should I take voluntary deductible', 'benefits of voluntary excess', 'is excess worth in car insurance',
            'वोलंटरी एक्ससेस लेना चाहिए क्या', 'बीमा में स्वैच्छिक कटौती सही है क्या', 'कम प्रीमियम के लिए एक्ससेस लेना'
        ],
        definition_en: 'Voluntary excess is ideal if you have a good driving history and rarely make claims. It lowers your premium but increases out-of-pocket expense during a claim. Use it only if you’re confident in safe driving.',
        example_en: 'Example: A careful driver who hasn’t claimed in years may benefit from voluntary excess to save on premiums.',
        link_en: 'https://www.hdfcergo.com/knowledge-center/car-insurance/should-you-opt-for-voluntary-deductible',
        definition_hi: 'अगर आपकी ड्राइविंग हिस्ट्री अच्छी है और आप कम क्लेम करते हैं, तो वोलंटरी एक्ससेस लेना फायदेमंद हो सकता है। यह प्रीमियम घटाता है लेकिन क्लेम के समय जेब से खर्च बढ़ाता है।',
        example_hi: 'उदाहरण: जो व्यक्ति सावधानी से गाड़ी चलाता है और वर्षों से क्लेम नहीं किया, वह प्रीमियम बचाने के लिए वोलंटरी एक्ससेस ले सकता है।',
        link_hi: 'https://www.hdfcergo.com/knowledge-center/car-insurance/should-you-opt-for-voluntary-deductible',
    },
    {
        keywords: [
            'how to file car insurance claim', 'vehicle insurance claim process', 'submit car claim', 'insurance settlement steps',
            'कार बीमा क्लेम कैसे करें', 'गाड़ी बीमा दावा', 'बीमा क्लेम प्रक्रिया', 'क्लेम कैसे भरें'
        ],
        definition_en: 'To file a car insurance claim, contact your insurer, submit the claim form, upload required documents (like RC, DL, FIR), and get your vehicle inspected. After verification, repair or reimbursement is processed.',
        example_en: 'Example: After an accident, call your insurer, register the claim, and follow the steps shown in the app or website.',
        link_en: 'https://www.policybazaar.com/motor-insurance/articles/how-to-file-car-insurance-claim/',
        definition_hi: 'कार बीमा क्लेम दर्ज करने के लिए बीमा कंपनी से संपर्क करें, क्लेम फॉर्म और ज़रूरी दस्तावेज़ (RC, DL, FIR) जमा करें और वाहन निरीक्षण कराएं। सत्यापन के बाद मरम्मत या भुगतान किया जाता है।',
        example_hi: 'उदाहरण: दुर्घटना के बाद बीमा कंपनी को कॉल करें, क्लेम रजिस्टर करें और वेबसाइट या ऐप पर दिए गए निर्देशों का पालन करें।',
        link_hi: 'https://www.policybazaar.com/motor-insurance/articles/how-to-file-car-insurance-claim/',
    },
    {
        keywords: [
            'documents required for car insurance claim', 'claim paperwork', 'car claim checklist',
            'बीमा क्लेम में क्या दस्तावेज़ लगते हैं', 'कार बीमा क्लेम डॉक्यूमेंट्स', 'क्लेम के लिए क्या चाहिए'
        ],
        definition_en: 'Required documents include insurance policy copy, RC (Registration Certificate), driving license, FIR (in case of theft/accident), claim form, and repair bills (for reimbursement).',
        example_en: 'Example: After a theft, you must submit an FIR, policy document, RC, DL, and claim form.',
        link_en: 'https://www.hdfcergo.com/claims/motor-insurance-claims',
        definition_hi: 'बीमा क्लेम के लिए पॉलिसी कॉपी, गाड़ी की आरसी, ड्राइविंग लाइसेंस, एफआईआर (चोरी या दुर्घटना में), क्लेम फॉर्म और मरम्मत बिल (रिइम्बर्समेंट के लिए) आवश्यक होते हैं।',
        example_hi: 'उदाहरण: चोरी की स्थिति में एफआईआर, पॉलिसी, आरसी, लाइसेंस और क्लेम फॉर्म जमा करना होगा।',
        link_hi: 'https://www.hdfcergo.com/claims/motor-insurance-claims',
    },
    {
        keywords: [
            'claim settlement time car insurance', 'how long claim takes', 'car insurance approval duration',
            'बीमा क्लेम में समय', 'क्लेम कब तक आता है', 'गाड़ी बीमा क्लेम प्रोसेसिंग टाइम'
        ],
        definition_en: 'Claim processing usually takes 7–14 days after submitting all required documents. For cashless claims, it may be faster (1–3 days) depending on inspection and garage approval.',
        example_en: 'Example: A cashless claim at a network garage may be approved within 48 hours.',
        link_en: 'https://www.reliancegeneral.co.in/insurance/knowledge-center/car-insurance/car-insurance-claim-settlement-process.aspx',
        definition_hi: 'सभी आवश्यक दस्तावेज़ जमा करने के बाद क्लेम प्रोसेस में सामान्यतः 7–14 दिन लगते हैं। नेटवर्क गैराज में कैशलेस क्लेम 1–3 दिन में निपट सकता है।',
        example_hi: 'उदाहरण: नेटवर्क गैराज में कैशलेस क्लेम 48 घंटे में भी स्वीकृत हो सकता है।',
        link_hi: 'https://www.reliancegeneral.co.in/insurance/knowledge-center/car-insurance/car-insurance-claim-settlement-process.aspx',
    },
    {
        keywords: [
            'can I choose repair shop', 'select garage for insurance claim', 'car insurance repair options',
            'गैरेज खुद चुन सकते हैं क्या', 'मरम्मत कार्यशाला का चयन', 'इंश्योरेंस क्लेम में अपना गैराज'
        ],
        definition_en: 'Yes, you can choose any garage for repairs. If it’s a network garage, you may get cashless service. Otherwise, you’ll pay upfront and get reimbursed later by your insurer.',
        example_en: 'Example: Choosing a network garage allows cashless claim, while a non-network garage will require reimbursement claim.',
        link_en: 'https://www.bajajallianz.com/motor-insurance/car-insurance/network-garages.html',
        definition_hi: 'हां, आप मरम्मत के लिए कोई भी गैराज चुन सकते हैं। नेटवर्क गैराज में कैशलेस सुविधा मिलती है, अन्यथा पहले खुद भुगतान करके बाद में बीमा कंपनी से रिइम्बर्समेंट कराना होता है।',
        example_hi: 'उदाहरण: नेटवर्क गैराज में कैशलेस क्लेम संभव है, लेकिन गैर-नेटवर्क गैराज में रिइम्बर्समेंट की आवश्यकता होती है।',
        link_hi: 'https://www.bajajallianz.com/motor-insurance/car-insurance/network-garages.html',
    },
    {
        keywords: [
            'what is cashless garage', 'cashless insurance claim', 'car insurance network garage',
            'कैशलेस गैराज मतलब', 'कैशलेस क्लेम क्या होता है', 'बीमा नेटवर्क गैराज'
        ],
        definition_en: 'A cashless garage is a repair center affiliated with your insurer, where repair costs are directly settled between garage and insurance company, so you don’t pay anything except deductibles.',
        example_en: 'Example: After an accident, your car is sent to a cashless garage, and repairs are done without you paying upfront.',
        link_en: 'https://www.icicilombard.com/motor-insurance/network-garages',
        definition_hi: 'कैशलेस गैराज वह मरम्मत केंद्र होता है जो बीमा कंपनी से जुड़ा होता है। वहां मरम्मत का खर्च बीमा कंपनी सीधे भुगतान करती है, और आपको केवल डिडक्टिबल देना होता है।',
        example_hi: 'उदाहरण: दुर्घटना के बाद गाड़ी को नेटवर्क कैशलेस गैराज में भेजा गया और बिना पैसे दिए मरम्मत करवा ली गई।',
        link_hi: 'https://www.icicilombard.com/motor-insurance/network-garages',
    },
    {
        keywords: [
            'cashless vs reimbursement claim', 'difference between claim types', 'insurance settlement types',
            'कैशलेस क्लेम क्या होता है', 'रिइम्बर्समेंट क्लेम क्या है', 'कैशलेस और रिइम्बर्समेंट बीमा क्लेम अंतर', 'बीमा क्लेम के प्रकार'
        ],
        definition_en: 'In a cashless claim, the insurer directly settles the bill with the garage. In a reimbursement claim, you pay the repair cost first, and the insurer refunds the amount after verifying documents.',
        example_en: 'Example: Cashless claim = insurer pays garage directly. Reimbursement = you pay, then claim back.',
        link_en: 'https://www.tataaig.com/knowledge-center/motor-insurance/cashless-vs-reimbursement-car-insurance',
        definition_hi: 'कैशलेस क्लेम में बीमा कंपनी सीधे गैराज को भुगतान करती है। रिइम्बर्समेंट क्लेम में आप पहले खुद भुगतान करते हैं और फिर दस्तावेज़ देकर बीमा कंपनी से पैसे वापस लेते हैं।',
        example_hi: 'उदाहरण: कैशलेस क्लेम = बीमा कंपनी सीधे भुगतान करती है। रिइम्बर्समेंट = पहले आप भुगतान करें, फिर दावा करें।',
        link_hi: 'https://www.tataaig.com/knowledge-center/motor-insurance/cashless-vs-reimbursement-car-insurance',
    },
    {
        keywords: [
            'claim settlement ratio insurance', 'CSR insurance meaning', 'insurer claim ratio', 'बीमा कंपनी क्लेम सेटलमेंट रेट',
            'क्लेम सेटलमेंट रेशियो क्या होता है', 'क्लेम रेशियो बीमा में', 'बीमा दावा निपटान प्रतिशत'
        ],
        definition_en: 'Claim Settlement Ratio (CSR) is the percentage of claims an insurance company has successfully paid out in a year. Higher CSR indicates better reliability.',
        example_en: 'Example: If an insurer received 1,000 claims and settled 980, the CSR is 98%.',
        link_en: 'https://www.policybazaar.com/general-insurance/articles/claim-settlement-ratio/',
        definition_hi: 'क्लेम सेटलमेंट रेशियो (CSR) वह प्रतिशत है जितने बीमा दावे कंपनी ने एक वर्ष में सफलतापूर्वक निपटाए। उच्च रेशियो का मतलब है अधिक भरोसेमंद कंपनी।',
        example_hi: 'उदाहरण: यदि बीमा कंपनी को 1,000 क्लेम मिले और 980 का भुगतान हुआ, तो CSR 98% होगा।',
        link_hi: 'https://www.policybazaar.com/general-insurance/articles/claim-settlement-ratio/',
    },
    {
        keywords: [
            'how to check claim settlement ratio', 'CSR of insurance companies', 'best insurer CSR',
            'क्लेम सेटलमेंट रेशियो जांचें', 'बीमा कंपनी का क्लेम रेट', 'CSR कैसे देखें', 'क्लेम भुगतान प्रतिशत'
        ],
        definition_en: 'You can check the CSR of insurers on IRDAI’s official website or through platforms like PolicyBazaar. It’s updated annually and helps choose a trustworthy insurer.',
        example_en: 'Example: Visit IRDAI’s annual report section to view each insurer’s CSR for the past year.',
        link_en: 'https://www.irdai.gov.in/',
        definition_hi: 'आप बीमा कंपनियों का क्लेम सेटलमेंट रेशियो IRDAI की वेबसाइट या PolicyBazaar जैसे प्लेटफॉर्म पर देख सकते हैं। यह हर साल अपडेट होता है और सही बीमा कंपनी चुनने में मदद करता है।',
        example_hi: 'उदाहरण: IRDAI की वार्षिक रिपोर्ट में सभी कंपनियों का पिछला वर्ष का CSR देखा जा सकता है।',
        link_hi: 'https://www.irdai.gov.in/',
    },
    {
        keywords: [
            'are car insurance add-ons necessary', 'do I need add-on cover', 'importance of insurance add-ons',
            'क्या बीमा ऐड‑ऑन जरूरी हैं', 'ऐड‑ऑन लेना चाहिए क्या', 'गाड़ी बीमा में एड‑ऑन क्यों'
        ],
        definition_en: 'Add-ons are optional but useful. They enhance your coverage. Depending on your vehicle’s usage and location, certain add-ons like roadside assistance or zero depreciation may be beneficial.',
        example_en: 'Example: In flood-prone areas, engine protection add-on is highly recommended.',
        link_en: 'https://www.policybazaar.com/motor-insurance/articles/benefits-of-car-insurance-add-ons/',
        definition_hi: 'ऐड‑ऑन वैकल्पिक होते हैं लेकिन उपयोगी होते हैं। ये आपकी बीमा सुरक्षा को बढ़ाते हैं। वाहन के उपयोग और स्थान के आधार पर कुछ ऐड‑ऑन जैसे रोडसाइड असिस्टेंस या जीरो डिप्रिशिएशन फायदेमंद हो सकते हैं।',
        example_hi: 'उदाहरण: बाढ़ प्रभावित क्षेत्रों में इंजन प्रोटेक्शन ऐड‑ऑन अत्यधिक अनुशंसित है।',
        link_hi: 'https://www.policybazaar.com/motor-insurance/articles/benefits-of-car-insurance-add-ons/',
    },
    {
        keywords: [
            'how to choose car insurance', 'best car insurance tips', 'selecting vehicle insurance', 'car policy buying guide',
            'गाड़ी बीमा कैसे चुनें', 'सही कार बीमा कैसे लें', 'बीमा पॉलिसी चयन', 'कार बीमा खरीदने की गाइड'
        ],
        definition_en: 'When choosing car insurance, compare policies based on coverage, premium, claim settlement ratio, customer reviews, and additional features. Ensure it meets your specific needs.',
        example_en: 'Example: Use aggregator sites like PolicyBazaar to compare multiple insurers and find the best fit for your car.',
        link_en: 'https://www.policybazaar.com/motor-insurance/articles/how-to-choose-car-insurance/',
        definition_hi: 'कार बीमा चुनते समय कवरेज, प्रीमियम, क्लेम सेटलमेंट रेशियो, ग्राहक समीक्षाएं और अतिरिक्त सुविधाओं के आधार पर तुलना करें। सुनिश्चित करें कि यह आपकी आवश्यकताओं को पूरा करता है।',
        example_hi: 'उदाहरण: PolicyBazaar जैसे एग्रीगेटर साइट्स का उपयोग करके विभिन्न बीमाकर्ताओं की तुलना करें और अपनी कार के लिए सबसे उपयुक्त पॉलिसी चुनें।',
        link_hi: 'https://www.policybazaar.com/motor-insurance/articles/how-to-choose-car-insurance/',
    },
    {
        keywords: [
            'popular car insurance add-ons', 'best insurance add-on cover', 'top motor policy add-ons',
            'लोकप्रिय एड‑ऑन बीमा', 'गाड़ी बीमा ऐड‑ऑन विकल्प', 'सर्वश्रेष्ठ एड‑ऑन कवर', 'बीमा एड‑ऑन कौन-कौन से'
        ],
        definition_en: `Popular add-ons include:  
    • Zero Depreciation Cover  
    • Engine Protection Cover  
    • Roadside Assistance  
    • Return to Invoice(RTI)  
    • NCB Protection  
    These add - ons provide more comprehensive protection.`,
        example_en: 'Example: Zero depreciation cover allows full claim amount without deducting part depreciation.',
        link_en: 'https://www.icicilombard.com/motor-insurance/car-insurance/add-on-covers',
        definition_hi: `लोकप्रिय बीमा ऐड‑ऑन में शामिल हैं:  
    • जीरो डिप्रिशिएशन कवर  
    • इंजन प्रोटेक्शन कवर  
    • रोडसाइड असिस्टेंस  
    • रिटर्न टू इनवॉइस(RTI)  
    • नो क्लेम बोनस(NCB) प्रोटेक्शन  
    ये ऐड‑ऑन ज्यादा सुरक्षा प्रदान करते हैं।',
example_hi: 'उदाहरण: जीरो डिप्रिशिएशन कवर में क्लेम राशि से पार्ट्स का मूल्यह्रास नहीं घटाया जाता।',
    link_hi: 'https://www.icicilombard.com/motor-insurance/car-insurance/add-on-covers`,
    },
    {
        keywords: [
            'hospitalization coverage', 'hospital expenses in insurance', 'बीमा में अस्पताल खर्च', 'अस्पताल में भर्ती बीमा',
            'hospital bill cover', 'स्वास्थ्य बीमा में क्या कवर होता है'
        ],
        definition_en: 'Hospitalization cover includes room rent, nursing charges, ICU charges, doctor fees, diagnostic tests, medicines, and surgery expenses during hospital stay.',
        example_en: 'Example: A 3-day hospital stay with surgery can be fully covered depending on policy terms.',
        link_en: 'https://www.maxbupa.com/health-insurance-plans/hospitalization-expenses.html',
        definition_hi: 'अस्पताल में भर्ती कवर में रूम रेंट, नर्सिंग, आईसीयू चार्ज, डॉक्टर फीस, जांच, दवाएं और सर्जरी शामिल होती हैं।',
        example_hi: 'उदाहरण: सर्जरी के साथ 3 दिन की अस्पताल भर्ती का खर्च बीमा से कवर हो सकता है।',
        link_hi: 'https://www.maxbupa.com/health-insurance-plans/hospitalization-expenses.html'
    },
    {
        keywords: [
            'pre hospitalization cover', 'pre admission expenses insurance', 'बीमा में पूर्व अस्पताल खर्च', 'pre hospital test coverage',
            'स्वास्थ्य बीमा में पहले का इलाज'
        ],
        definition_en: 'Yes, most health insurance plans cover pre-hospitalization expenses like doctor consultations, diagnostic tests, and medicines up to 30 days before hospitalization.',
        example_en: 'Example: Blood tests and doctor consultation done 10 days before surgery will be covered.',
        link_en: 'https://www.starhealth.in/blog/pre-and-post-hospitalization-cover',
        definition_hi: 'हां, अधिकांश हेल्थ बीमा प्लान अस्पताल में भर्ती से पहले के खर्च जैसे डॉक्टर की सलाह, जांच और दवाएं कवर करते हैं (अक्सर 30 दिनों तक)।',
        example_hi: 'उदाहरण: सर्जरी से 10 दिन पहले की जांच और डॉक्टर फीस बीमा में कवर होगी।',
        link_hi: 'https://www.starhealth.in/blog/pre-and-post-hospitalization-cover'
    },
    {
        keywords: [
            'pre and post hospitalization limits', 'health insurance coverage duration', 'प्रि पोस्ट हॉस्पिटल लिमिट', 'बीमा में पूर्व और पश्चात कवर सीमा',
            '30 दिन पूर्व अस्पताल कवर', '60 दिन पोस्ट हॉस्पिटल बीमा'
        ],
        definition_en: 'Pre-hospitalization is usually covered up to 30 days before admission, and post-hospitalization expenses like follow-up treatment are covered for 60 or 90 days depending on the policy.',
        example_en: 'Example: Medicines taken for 60 days after discharge may be reimbursed.',
        link_en: 'https://www.hdfcergo.com/health-insurance/pre-and-post-hospitalization-expenses',
        definition_hi: 'अस्पताल में भर्ती से पहले 30 दिन तक के खर्च और भर्ती के बाद 60–90 दिन तक के इलाज का खर्च बीमा योजना के अनुसार कवर होता है।',
        example_hi: 'उदाहरण: अस्पताल से छुट्टी के बाद 60 दिन तक ली गई दवाएं बीमा से कवर हो सकती हैं।',
        link_hi: 'https://www.hdfcergo.com/health-insurance/pre-and-post-hospitalization-expenses'
    },
    {
        keywords: [
            'maternity cover', 'pregnancy insurance', 'delivery cover in health insurance',
            'मेटरनिटी बीमा', 'प्रसव बीमा', 'स्वास्थ्य बीमा में डिलीवरी कवर'
        ],
        definition_en: 'Maternity cover includes expenses related to childbirth (normal or C-section), prenatal and postnatal care, and sometimes newborn baby cover for a limited period.',
        example_en: 'Example: A maternity rider may offer ₹50,000 cover for delivery expenses after a waiting period.',
        link_en: 'https://www.policybazaar.com/health-insurance/maternity-health-insurance/',
        definition_hi: 'मेटरनिटी कवर में सामान्य या सिजेरियन डिलीवरी, गर्भावस्था पूर्व और बाद की देखभाल तथा कुछ मामलों में नवजात शिशु का बीमा शामिल होता है।',
        example_hi: 'उदाहरण: एक मेटरनिटी राइडर ₹50,000 तक का डिलीवरी खर्च कवर कर सकता है, आमतौर पर वेटिंग पीरियड के बाद।',
        link_hi: 'https://www.policybazaar.com/health-insurance/maternity-health-insurance/'
    },
    {
        keywords: [
            'family floater plan', 'family health insurance', 'फैमिली हेल्थ इंश्योरेंस', 'फैमिली फ्लोटर बीमा', 'बीमा योजना परिवार के लिए'
        ],
        definition_en: 'A family floater plan covers the entire family under a single sum insured. All members share the total coverage limit rather than having individual policies.',
        example_en: 'Example: A ₹10 lakh floater plan can be used by any covered family member as needed.',
        link_en: 'https://www.hdfcergo.com/health-insurance/family-health-insurance',
        definition_hi: 'फैमिली फ्लोटर प्लान में एक ही बीमा राशि में पूरे परिवार को कवर किया जाता है, जिसमें सभी सदस्य उस राशि को साझा करते हैं।',
        example_hi: 'उदाहरण: ₹10 लाख का फैमिली फ्लोटर प्लान किसी भी परिवार सदस्य द्वारा आवश्यकता अनुसार उपयोग किया जा सकता है।',
        link_hi: 'https://www.hdfcergo.com/health-insurance/family-health-insurance'
    },
    {
        keywords: [
            'individual vs floater health insurance', 'family vs individual plan', 'फैमिली फ्लोटर बनाम इंडिविजुअल प्लान', 'स्वास्थ्य बीमा तुलना'
        ],
        definition_en: `In an individual plan, each member has a separate sum insured. In a floater plan, all members share a single sum insured. Floater plans are more cost-effective but carry a shared limit.`,
        example_en: 'Example: In a ₹5 lakh floater plan, if one person uses ₹4 lakh, only ₹1 lakh is left for others.',
        link_en: 'https://www.policybazaar.com/health-insurance/individual-vs-family-floater-plans/',
        definition_hi: 'इंडिविजुअल प्लान में प्रत्येक व्यक्ति के लिए अलग बीमा राशि होती है, जबकि फैमिली फ्लोटर प्लान में सभी सदस्य एक साझा राशि का उपयोग करते हैं।',
        example_hi: 'उदाहरण: ₹5 लाख के फ्लोटर प्लान में यदि एक सदस्य ₹4 लाख उपयोग कर लेता है, तो शेष ₹1 लाख ही बाकी रहता है।',
        link_hi: 'https://www.policybazaar.com/health-insurance/individual-vs-family-floater-plans/'
    },
    {
        keywords: [
            'OPD insurance', 'outpatient cover in health insurance', 'ओपीडी कवर', 'बीमा में ओपीडी', 'बिना भर्ती इलाज बीमा'
        ],
        definition_en: 'OPD (Outpatient Department) coverage includes expenses where hospitalization is not required, such as doctor consultations, medicines, or diagnostic tests. Not all plans offer OPD by default.',
        example_en: 'Example: A health plan with OPD cover may reimburse ₹5,000 per year for consultations and tests.',
        link_en: 'https://www.nivabupa.com/health-insurance-articles/importance-of-opd-cover.html',
        definition_hi: 'ओपीडी कवर में ऐसे खर्च शामिल होते हैं जहाँ अस्पताल में भर्ती की आवश्यकता नहीं होती, जैसे डॉक्टर से परामर्श, दवाएं या जांच। सभी पॉलिसियों में यह शामिल नहीं होता।',
        example_hi: 'उदाहरण: ओपीडी कवर वाली योजना ₹5,000 तक की सलाह व जांच का खर्च प्रतिवर्ष कवर कर सकती है।',
        link_hi: 'https://www.nivabupa.com/health-insurance-articles/importance-of-opd-cover.html'
    },
    {
        keywords: [
            'critical illness insurance', 'major illness cover', 'बीमा में गंभीर बीमारी', 'क्रिटिकल इलनेस', 'heart attack insurance', 'cancer cover'
        ],
        definition_en: 'Critical illness insurance pays a lump sum if you are diagnosed with serious illnesses like cancer, heart attack, stroke, or kidney failure. It is different from regular health insurance.',
        example_en: 'Example: A ₹10 lakh critical illness plan pays on diagnosis of a listed illness regardless of treatment cost.',
        link_en: 'https://www.icicilombard.com/health-insurance/critical-illness-health-insurance',
        definition_hi: 'क्रिटिकल इलनेस बीमा कुछ गंभीर बीमारियों जैसे कैंसर, हार्ट अटैक, स्ट्रोक या किडनी फेल होने पर एकमुश्त राशि प्रदान करता है। यह सामान्य स्वास्थ्य बीमा से अलग होता है।',
        example_hi: 'उदाहरण: ₹10 लाख का क्रिटिकल इलनेस प्लान बीमारी की पुष्टि होते ही भुगतान करता है, चाहे इलाज का खर्च कुछ भी हो।',
        link_hi: 'https://www.icicilombard.com/health-insurance/critical-illness-health-insurance'
    },
    {
        keywords: [
            'lifestyle disease insurance', 'diabetes insurance', 'BP cover', 'hypertension insurance',
            'लाइफस्टाइल डिजीज़ बीमा', 'डायबिटीज़ कवर', 'ब्लड प्रेशर बीमा'
        ],
        definition_en: 'Yes, most health insurance plans now offer coverage for lifestyle diseases like diabetes, hypertension, obesity-related conditions, after a waiting period or under specific disease management plans.',
        example_en: 'Example: A diabetes management plan may cover insulin, consultation, and tests after a 2-year waiting period.',
        link_en: 'https://www.maxbupa.com/health-insurance-articles/health-insurance-for-lifestyle-diseases.html',
        definition_hi: 'हां, आजकल अधिकांश हेल्थ बीमा योजनाएं डायबिटीज़, हाई बीपी, मोटापा जैसी लाइफस्टाइल बीमारियों को कवर करती हैं, आमतौर पर वेटिंग पीरियड के बाद।',
        example_hi: 'उदाहरण: डायबिटीज़ मैनेजमेंट प्लान में 2 साल बाद इंसुलिन, टेस्ट और डॉक्टर फीस कवर हो सकते हैं।',
        link_hi: 'https://www.maxbupa.com/health-insurance-articles/health-insurance-for-lifestyle-diseases.html'
    },
    {
        keywords: [
            'deductible in insurance', 'deductible health insurance', 'insurance excess',
            'डेडक्टिबल बीमा में', 'बीमा कटौती', 'deductible meaning in hindi'
        ],
        definition_en: 'Deductible is the fixed amount you must pay out-of-pocket before your insurance coverage starts. It reduces your premium but increases your out-of-pocket cost.',
        example_en: 'Example: If your deductible is ₹10,000 and hospital bill is ₹50,000, insurer pays ₹40,000.',
        link_en: 'https://www.policybazaar.com/health-insurance/general-info/articles/what-is-deductible-in-health-insurance/',
        definition_hi: 'डेडक्टिबल वह राशि होती है जो बीमित व्यक्ति को पहले खुद चुकानी होती है, उसके बाद ही बीमा कंपनी भुगतान करती है। इससे प्रीमियम कम होता है लेकिन आरंभिक खर्च ज्यादा होता है।',
        example_hi: 'उदाहरण: ₹10,000 का डेडक्टिबल होने पर ₹50,000 के अस्पताल खर्च में बीमा कंपनी ₹40,000 का भुगतान करेगी।',
        link_hi: 'https://www.policybazaar.com/health-insurance/general-info/articles/what-is-deductible-in-health-insurance/'
    },
    {
        keywords: [
            'copayment in health insurance', 'co-pay clause', 'insurance co payment meaning',
            'को पेमेंट क्या है', 'बीमा में को पेमेंट', 'health co-pay explained'
        ],
        definition_en: 'Co-payment is the fixed percentage of the claim amount that the insured must pay while the remaining is paid by the insurer. It is common in senior citizen and low-premium policies.',
        example_en: 'Example: With 20% co-pay on a ₹1 lakh bill, you pay ₹20,000 and insurer pays ₹80,000.',
        link_en: 'https://www.icicilombard.com/health-insurance/what-is-copay',
        definition_hi: 'को-पेमेंट वह तय प्रतिशत है जो क्लेम की राशि में बीमाधारक को खुद देना होता है। बीमा कंपनी शेष राशि का भुगतान करती है। यह आमतौर पर वरिष्ठ नागरिक योजनाओं में होता है।',
        example_hi: 'उदाहरण: ₹1 लाख के अस्पताल बिल पर 20% को-पेमेंट होने पर बीमाधारक ₹20,000 देगा और बीमा कंपनी ₹80,000।',
        link_hi: 'https://www.icicilombard.com/health-insurance/what-is-copay'
    },
    {
        keywords: [
            'sub-limit in insurance', 'health policy sublimit', 'room rent limit',
            'बीमा में सब-लिमिट', 'सब लिमिट क्या होती है', 'sub limit explained'
        ],
        definition_en: 'Sub-limit is a cap on specific expenses under your health insurance, such as room rent, ICU charges, or surgery fees, regardless of your total sum insured.',
        example_en: 'Example: Even if your total coverage is ₹5 lakh, room rent may be limited to ₹5,000 per day.',
        link_en: 'https://www.bajajallianz.com/health-insurance-articles/what-are-sub-limits.html',
        definition_hi: 'सब-लिमिट का मतलब है कि बीमा योजना में कुछ खर्चों (जैसे रूम रेंट या सर्जरी) की अधिकतम सीमा तय होती है, चाहे कुल बीमा राशि ज्यादा हो।',
        example_hi: 'उदाहरण: ₹5 लाख की पॉलिसी में रूम रेंट की सब-लिमिट ₹5,000 प्रतिदिन हो सकती है।',
        link_hi: 'https://www.bajajallianz.com/health-insurance-articles/what-are-sub-limits.html'
    },
    {
        keywords: [
            'room rent cap', 'room rent limit insurance', 'बीमा में रूम रेंट कैप',
            'hospital room rent insurance', 'room charges cap', 'रूम रेंट लिमिट'
        ],
        definition_en: 'Room rent cap is the maximum daily amount your insurance covers for hospital room stay. Choosing a higher-category room than the cap can reduce claim eligibility.',
        example_en: 'Example: If your room rent limit is ₹3,000/day and you choose a ₹6,000/day room, your claim may be reduced.',
        link_en: 'https://www.nivabupa.com/health-insurance-articles/room-rent-limit.html',
        definition_hi: 'रूम रेंट कैप बीमा कंपनी द्वारा तय की गई अधिकतम राशि होती है जो अस्पताल में एक दिन के रूम चार्ज पर दी जाती है। इससे अधिक रूम चुनने पर क्लेम घट सकता है।',
        example_hi: 'उदाहरण: यदि बीमा में रूम रेंट लिमिट ₹3,000 प्रतिदिन है और आप ₹6,000 का कमरा चुनते हैं तो क्लेम में कटौती हो सकती है।',
        link_hi: 'https://www.nivabupa.com/health-insurance-articles/room-rent-limit.html'
    },
    {
        keywords: [
            'port health insurance', 'health policy transfer', 'policy porting', 'बीमा पोर्ट करना', 'हेल्थ इंश्योरेंस पोर्ट'
        ],
        definition_en: `Yes, health insurance can be ported from one insurer to another without losing benefits like waiting period credits, provided it's done before policy expiry.`,
        example_en: 'Example: You can shift from Insurer A to Insurer B and retain credit for 2 years waiting period.',
        link_en: 'https://www.irdai.gov.in/document-detail?documentId=1240867',
        definition_hi: 'हां, आप अपनी हेल्थ बीमा पॉलिसी को एक बीमा कंपनी से दूसरी कंपनी में पोर्ट कर सकते हैं और वेटिंग पीरियड जैसे लाभ बनाए रख सकते हैं, यदि पॉलिसी समाप्त होने से पहले किया जाए।',
        example_hi: 'उदाहरण: आप बीमा कंपनी A से B में पॉलिसी ट्रांसफर करके 2 साल का वेटिंग पीरियड क्रेडिट बनाए रख सकते हैं।',
        link_hi: 'https://www.irdai.gov.in/document-detail?documentId=1240867'
    },
    {
        keywords: [
            'how to port policy', 'port insurance steps', 'बीमा पोर्ट प्रक्रिया', 'policy transfer process', 'health insurance switch'
        ],
        definition_en: 'To port your policy, apply to the new insurer at least 45 days before the current policy expires. Submit past policy details, medical records, and wait for approval.',
        example_en: 'Example: If your policy expires on July 31, apply to port by June 15.',
        link_en: 'https://www.policybazaar.com/health-insurance/portability/',
        definition_hi: 'पॉलिसी पोर्ट करने के लिए नई बीमा कंपनी में पॉलिसी खत्म होने से कम से कम 45 दिन पहले आवेदन करें। पिछली पॉलिसी और मेडिकल रिकॉर्ड जमा करें और मंजूरी की प्रतीक्षा करें।',
        example_hi: 'उदाहरण: यदि आपकी पॉलिसी 31 जुलाई को खत्म हो रही है, तो 15 जून तक पोर्टिंग के लिए आवेदन करें।',
        link_hi: 'https://www.policybazaar.com/health-insurance/portability/'
    },
    {
        keywords: [
            'waiting period in insurance', 'health insurance wait time', 'वेटिंग पीरियड', 'बीमा प्रतीक्षा अवधि', 'disease waiting time insurance'
        ],
        definition_en: 'Waiting period is the time during which specific illnesses or benefits are not covered after the policy is bought. It ranges from 1 to 4 years depending on the condition.',
        example_en: 'Example: Pre-existing disease may have a 2-4 year waiting period.',
        link_en: 'https://www.nivabupa.com/health-insurance-articles/what-is-waiting-period-in-health-insurance.html',
        definition_hi: 'वेटिंग पीरियड वह समय होता है जब पॉलिसी लेने के बाद कुछ बीमारियाँ या सुविधाएँ कवर नहीं होतीं। यह अवधि 1 से 4 साल तक हो सकती है।',
        example_hi: 'उदाहरण: प्री-एग्जिस्टिंग बीमारी के लिए 2-4 साल का वेटिंग पीरियड हो सकता है।',
        link_hi: 'https://www.nivabupa.com/health-insurance-articles/what-is-waiting-period-in-health-insurance.html'
    },
    {
        keywords: [
            'pre-existing disease cover', 'existing illness insurance', 'बीमा में पूर्व बीमारी', 'प्रीएग्जिस्टिंग बीमारी कवर'
        ],
        definition_en: 'Yes, pre-existing diseases are covered after a waiting period, usually ranging from 2 to 4 years, depending on the insurer and policy terms.',
        example_en: 'Example: Diabetes diagnosed before policy will be covered after a 3-year waiting period.',
        link_en: 'https://www.nivabupa.com/health-insurance-articles/what-are-pre-existing-diseases-in-health-insurance.html',
        definition_hi: 'हां, प्री-एग्जिस्टिंग बीमारियाँ (जैसे डायबिटीज़) आमतौर पर 2 से 4 साल के वेटिंग पीरियड के बाद कवर होती हैं। यह पॉलिसी और कंपनी पर निर्भर करता है।',
        example_hi: 'उदाहरण: यदि डायबिटीज़ पहले से है, तो बीमा उसे 3 साल बाद कवर कर सकता है।',
        link_hi: 'https://www.nivabupa.com/health-insurance-articles/what-are-pre-existing-diseases-in-health-insurance.html'
    },
    {
        keywords: [
            'renew health insurance', 'policy renewal steps', 'बीमा नवीनीकरण कैसे करें', 'health policy renewal process'
        ],
        definition_en: 'Health insurance can be renewed online or offline before the due date by paying the premium. Most insurers send reminders and allow renewal without medical checks if done on time.',
        example_en: 'Example: Renew your annual policy before expiry to avoid loss of continuity benefits.',
        link_en: 'https://www.policybazaar.com/health-insurance/renewal/',
        definition_hi: 'स्वास्थ्य बीमा पॉलिसी की समय सीमा समाप्त होने से पहले प्रीमियम का भुगतान कर ऑनलाइन या ऑफलाइन नवीनीकरण किया जा सकता है। समय पर करने पर मेडिकल टेस्ट की आवश्यकता नहीं होती।',
        example_hi: 'उदाहरण: समय पर नवीनीकरण करने से वेटिंग पीरियड दोबारा नहीं शुरू होता।',
        link_hi: 'https://www.policybazaar.com/health-insurance/renewal/'
    },
    {
        keywords: [
            'health insurance late renewal', 'renewal delay impact', 'बीमा नवीनीकरण देर से',
            'renew after expiry', 'delay in health policy renewal'
        ],
        definition_en: 'If you delay renewing your health insurance beyond the grace period (usually 15–30 days), you may lose continuity benefits like waiting period credits and will need to buy a new policy.',
        example_en: 'Example: A 2-day delay beyond grace period may lead to policy lapse and loss of accumulated benefits.',
        link_en: 'https://www.hdfcergo.com/health-insurance/articles/what-happens-if-you-dont-renew-health-insurance',
        definition_hi: 'यदि आप हेल्थ इंश्योरेंस पॉलिसी को ग्रेस पीरियड (आमतौर पर 15–30 दिन) के बाद नवीनीकरण करते हैं, तो वेटिंग पीरियड जैसे लाभ समाप्त हो सकते हैं और आपको नई पॉलिसी लेनी पड़ सकती है।',
        example_hi: 'उदाहरण: यदि आप ग्रेस पीरियड के 2 दिन बाद नवीनीकरण करते हैं तो पॉलिसी लैप्स हो सकती है और सभी लाभ खो सकते हैं।',
        link_hi: 'https://www.hdfcergo.com/health-insurance/articles/what-happens-if-you-dont-renew-health-insurance'
    },
    {
        keywords: [
            'how to claim health insurance', 'health insurance claim process', 'बीमा क्लेम कैसे करें',
            'hospital claim process', 'insurance reimbursement process'
        ],
        definition_en: 'You can claim health insurance either via cashless facility at a network hospital or through reimbursement by submitting bills and documents after discharge.',
        example_en: 'Example: For cashless claim, show your e-card at TPA desk before admission.',
        link_en: 'https://www.starhealth.in/blog/how-to-claim-health-insurance',
        definition_hi: 'हेल्थ इंश्योरेंस क्लेम दो तरीकों से किया जा सकता है: (1) नेटवर्क अस्पताल में कैशलेस (2) डिस्चार्ज के बाद रिइम्बर्समेंट के लिए दस्तावेज़ जमा करके।',
        example_hi: 'उदाहरण: कैशलेस क्लेम के लिए अस्पताल में भर्ती से पहले टीपीए डेस्क पर ई-कार्ड दिखाएं।',
        link_hi: 'https://www.starhealth.in/blog/how-to-claim-health-insurance'
    },
    {
        keywords: [
            'cashless vs reimbursement', 'health claim comparison', 'बीमा कैशलेस और रिइम्बर्समेंट',
            'insurance claim types', 'कैशलेस क्लेम क्या है'
        ],
        definition_en: 'In cashless claims, insurer pays the hospital directly; in reimbursement, you pay the hospital first and then get repaid by the insurer after submitting bills and forms.',
        example_en: 'Example: Cashless is faster and requires no upfront payment, while reimbursement gives flexibility of choosing any hospital.',
        link_en: 'https://www.policybazaar.com/health-insurance/cashless-health-insurance-vs-reimbursement/',
        definition_hi: 'कैशलेस क्लेम में बीमा कंपनी सीधे अस्पताल को भुगतान करती है। रिइम्बर्समेंट में आप पहले भुगतान करते हैं और बाद में दस्तावेज़ देकर पैसा वापस लेते हैं।',
        example_hi: 'उदाहरण: कैशलेस सेवा में आपको भर्ती के समय भुगतान नहीं करना होता, जबकि रिइम्बर्समेंट में पहले भुगतान करना होता है।',
        link_hi: 'https://www.policybazaar.com/health-insurance/cashless-health-insurance-vs-reimbursement/'
    },
    {
        keywords: [
            'network hospital list', 'cashless hospitals near me', 'बीमा नेटवर्क हॉस्पिटल',
            'insurance hospital network', 'कैशलेस अस्पताल सूची'
        ],
        definition_en: 'Most insurance companies provide a searchable list of their network hospitals on their website or app. You can filter by city, hospital name, or specialty.',
        example_en: 'Example: Visit your insurer’s portal, go to "network hospitals", enter your city and view options.',
        link_en: 'https://www.policybazaar.com/network-hospitals/',
        definition_hi: 'बीमा कंपनियाँ अपनी वेबसाइट या ऐप पर नेटवर्क हॉस्पिटल की सूची प्रदान करती हैं, जिसे आप शहर, हॉस्पिटल या विशेषज्ञता के अनुसार खोज सकते हैं।',
        example_hi: 'उदाहरण: बीमा कंपनी की वेबसाइट पर "नेटवर्क हॉस्पिटल" सेक्शन में जाकर अपने शहर का चयन करें।',
        link_hi: 'https://www.policybazaar.com/network-hospitals/'
    },
    {
        keywords: [
            'age and insurance premium', 'premium increase with age', 'health premium by age',
            'बीमा में उम्र का प्रभाव', 'उम्र के अनुसार प्रीमियम'
        ],
        definition_en: 'Premiums generally increase with age because health risks go up. Senior citizens or people above 45 often pay higher premiums compared to younger individuals.',
        example_en: 'Example: A 25-year-old may pay ₹7,000/year while a 55-year-old pays ₹18,000/year for similar coverage.',
        link_en: 'https://www.icicilombard.com/blogs/health-insurance/hi/does-age-affect-health-insurance-premium',
        definition_hi: 'प्रीमियम आमतौर पर उम्र के साथ बढ़ता है क्योंकि स्वास्थ्य जोखिम भी बढ़ते हैं। 45 वर्ष से ऊपर वालों के लिए प्रीमियम अधिक होता है।',
        example_hi: 'उदाहरण: एक 25 वर्षीय व्यक्ति ₹7,000 वार्षिक प्रीमियम देगा जबकि 55 वर्षीय व्यक्ति ₹18,000 तक दे सकता है।',
        link_hi: 'https://www.icicilombard.com/blogs/health-insurance/hi/does-age-affect-health-insurance-premium'
    },
    {
        keywords: [
            'senior citizen health insurance', 'old age health policy', '60+ insurance plan',
            'सीनियर सिटिजन बीमा', 'वरिष्ठ नागरिक हेल्थ पॉलिसी', 'बुजुर्गों के लिए बीमा'
        ],
        definition_en: 'Yes, there are specific health insurance plans for senior citizens (aged 60 and above) that offer coverage for age-related illnesses, though premiums are higher and coverage may be limited.',
        example_en: 'Example: Star Health’s Senior Citizens Red Carpet Plan offers coverage for people aged 60+.',
        link_en: 'https://www.policybazaar.com/health-insurance/senior-citizen-health-insurance/',
        definition_hi: 'हां, वरिष्ठ नागरिकों (60 वर्ष या उससे अधिक आयु) के लिए विशेष हेल्थ बीमा योजनाएं उपलब्ध हैं जो उम्र से संबंधित बीमारियों को कवर करती हैं। इनमें प्रीमियम अधिक होता है और कवरेज सीमित हो सकती है।',
        example_hi: 'उदाहरण: स्टार हेल्थ की "सीनियर सिटिजन रेड कार्पेट पॉलिसी" 60+ उम्र के लिए उपयुक्त है।',
        link_hi: 'https://www.policybazaar.com/health-insurance/senior-citizen-health-insurance/'
    },
    {
        keywords: [
            'lifetime renewability in health insurance', 'renew insurance forever', 'बीमा जीवनभर रिन्यू',
            'लाइफटाइम रिन्यू', 'पॉलिसी को हमेशा कैसे चालू रखें'
        ],
        definition_en: 'Lifetime renewability means your health insurance policy can be renewed for life, regardless of age or claims, as long as premiums are paid on time.',
        example_en: 'Example: IRDAI mandates lifetime renewability under all health insurance policies unless there’s fraud.',
        link_en: 'https://www.irdai.gov.in/document-detail?documentId=1240059',
        definition_hi: 'लाइफटाइम रिन्यूएबिलिटी का अर्थ है कि आपकी हेल्थ पॉलिसी जीवनभर नवीनीकरण की जा सकती है, भले ही उम्र या क्लेम हो, यदि समय पर प्रीमियम भरा जाए।',
        example_hi: 'उदाहरण: सभी हेल्थ पॉलिसियों में IRDAI के अनुसार लाइफटाइम रिन्यू की सुविधा होनी चाहिए।',
        link_hi: 'https://www.irdai.gov.in/document-detail?documentId=1240059'
    },
    {
        keywords: [
            'AYUSH treatment in insurance', 'ayurvedic homeopathic cover', 'आयुष बीमा',
            'आयुर्वेदिक बीमा कवर', 'homeopathy in insurance'
        ],
        definition_en: 'Yes, many health insurance policies now cover AYUSH treatments (Ayurveda, Yoga, Unani, Siddha, Homeopathy) up to a certain limit, if taken at a recognized hospital.',
        example_en: 'Example: A policy may cover ₹25,000 annually for AYUSH treatment.',
        link_en: 'https://www.nivabupa.com/health-insurance-articles/what-is-ayush-treatment.html',
        definition_hi: 'हां, अब कई हेल्थ बीमा पॉलिसियां आयुष (आयुर्वेद, योग, यूनानी, सिद्ध, होम्योपैथी) उपचार को सीमित राशि तक कवर करती हैं, यदि वह मान्यता प्राप्त अस्पताल में हो।',
        example_hi: 'उदाहरण: एक पॉलिसी हर साल ₹25,000 तक आयुष उपचार कवर कर सकती है।',
        link_hi: 'https://www.nivabupa.com/health-insurance-articles/what-is-ayush-treatment.html'
    },
    {
        keywords: [
            'ambulance charges insurance', 'ambulance fee cover', 'एम्बुलेंस बीमा',
            'एम्बुलेंस चार्ज कवर होता है क्या', 'hospital pickup insurance'
        ],
        definition_en: 'Yes, most health insurance policies include ambulance charges up to a certain limit per hospitalization, often between ₹1,000 to ₹2,000 per trip.',
        example_en: 'Example: A plan may reimburse ₹1,500 per ambulance trip to the hospital.',
        link_en: 'https://www.policybazaar.com/health-insurance/articles/ambulance-charges-in-health-insurance/',
        definition_hi: 'हां, अधिकांश हेल्थ बीमा पॉलिसियों में अस्पताल तक की एम्बुलेंस सेवा का खर्च सीमित राशि तक शामिल होता है, जैसे ₹1,000 से ₹2,000 प्रति बार।',
        example_hi: 'उदाहरण: पॉलिसी ₹1,500 प्रति एम्बुलेंस यात्रा का भुगतान कर सकती है।',
        link_hi: 'https://www.policybazaar.com/health-insurance/articles/ambulance-charges-in-health-insurance/'
    },
    {
        keywords: [
            'room upgrade in health insurance', 'hospital room change benefit', 'रूम अपग्रेड हेल्थ इंश्योरेंस',
            'बीमा में रूम सुविधा', 'private room in insurance'
        ],
        definition_en: 'Room upgrade benefit allows you to shift from a shared to a private or higher-category room during hospitalization without losing coverage, if your plan permits it.',
        example_en: 'Example: If your policy covers private rooms, you can shift from general ward to deluxe room.',
        link_en: 'https://www.policybazaar.com/health-insurance/articles/room-rent-limit-in-health-insurance/',
        definition_hi: 'रूम अपग्रेड बेनिफिट के तहत आप अस्पताल में सामान्य वार्ड से प्राइवेट या उच्च श्रेणी के कमरे में स्थानांतरित हो सकते हैं यदि पॉलिसी इसकी अनुमति देती है।',
        example_hi: 'उदाहरण: यदि पॉलिसी प्राइवेट रूम की अनुमति देती है तो आप जनरल वार्ड से डीलक्स रूम में जा सकते हैं।',
        link_hi: 'https://www.policybazaar.com/health-insurance/articles/room-rent-limit-in-health-insurance/'
    },
    {
        keywords: [
            'restoration benefit health insurance', 'sum insured refill', 'policy restoration',
            'रेस्टोरेशन बेनिफिट', 'बीमा राशि पुनः भरना', 'बीमा रीफिल'
        ],
        definition_en: 'Restoration benefit automatically refills your sum insured if it gets exhausted during the policy year, ensuring continued coverage.',
        example_en: 'Example: If your ₹5 lakh sum insured is used up, it gets restored for future claims within the same year.',
        link_en: 'https://www.policybazaar.com/health-insurance/articles/restoration-benefit-in-health-insurance/',
        definition_hi: 'रेस्टोरेशन बेनिफिट का मतलब है कि यदि आपकी बीमा राशि साल के भीतर खत्म हो जाए तो पॉलिसी उसे स्वतः फिर से भर देती है जिससे आगे का इलाज कवर हो सके।',
        example_hi: 'उदाहरण: अगर आपकी ₹5 लाख की राशि उपयोग हो गई है तो यह उसी साल फिर से क्लेम के लिए उपलब्ध हो जाएगी।',
        link_hi: 'https://www.policybazaar.com/health-insurance/articles/restoration-benefit-in-health-insurance/'
    },
    {
        keywords: [
            'health checkup benefit insurance', 'free health check insurance', 'बीमा में हेल्थ चेकअप',
            'हेल्थ चेकअप बेनिफिट', 'फ्री मेडिकल टेस्ट'
        ],
        definition_en: 'Health check-up benefit allows policyholders to get free medical check-ups annually or once in a few years, depending on the insurer’s policy.',
        example_en: 'Example: After 1 claim-free year, many insurers offer free preventive health tests worth ₹2,000.',
        link_en: 'https://www.policybazaar.com/health-insurance/articles/health-check-up-benefits-in-health-insurance/',
        definition_hi: 'हेल्थ चेक‑अप बेनिफिट के तहत पॉलिसीधारक को हर साल या कुछ वर्षों में एक बार फ्री मेडिकल टेस्ट की सुविधा मिलती है।',
        example_hi: 'उदाहरण: एक क्लेम-फ्री वर्ष के बाद बीमा कंपनियाँ ₹2,000 तक का फ्री हेल्थ चेक‑अप प्रदान करती हैं।',
        link_hi: 'https://www.policybazaar.com/health-insurance/articles/health-check-up-benefits-in-health-insurance/'
    },
    {
        keywords: [
            'add parents in health policy', 'parents above 60 insurance', 'senior parent cover',
            '60 से अधिक उम्र के माता‑पिता', 'पेरेंट्स को बीमा में जोड़ना', 'माता‑पिता का हेल्थ इंश्योरेंस'
        ],
        definition_en: 'Yes, many insurers allow you to add parents above 60 years to your health plan or purchase a senior citizen plan tailored to their needs.',
        example_en: 'Example: You can opt for a family floater or separate senior citizen policy for your parents.',
        link_en: 'https://www.policybazaar.com/health-insurance/family-floater-health-insurance/',
        definition_hi: 'हां, बीमा कंपनियाँ 60 वर्ष से ऊपर के माता‑पिता को आपकी हेल्थ पॉलिसी में जोड़ने या उनके लिए अलग वरिष्ठ नागरिक योजना लेने की अनुमति देती हैं।',
        example_hi: 'उदाहरण: आप अपने माता‑पिता के लिए फैमिली फ्लोटर या अलग सीनियर सिटिजन पॉलिसी ले सकते हैं।',
        link_hi: 'https://www.policybazaar.com/health-insurance/family-floater-health-insurance/'
    },
    {
        keywords: [
            'free look period insurance', 'cancel insurance early', 'बीमा फ्री लुक समय',
            'फ्री लुक पीरियड क्या है', 'बीमा वापसी समय सीमा'
        ],
        definition_en: 'The free-look period is a time (usually 15 days from policy receipt) during which you can cancel the health insurance policy if unsatisfied, and receive a refund.',
        example_en: 'Example: If you cancel your policy within 15 days of receipt, full refund is processed after minimal deductions.',
        link_en: 'https://www.irdai.gov.in/document-detail?documentId=1240059',
        definition_hi: 'फ्री‑लुक पीरियड वह अवधि (आमतौर पर 15 दिन) होती है जिसमें आप पॉलिसी से असंतुष्ट होने पर उसे रद्द कर सकते हैं और रिफंड प्राप्त कर सकते हैं।',
        example_hi: 'उदाहरण: यदि आप पॉलिसी रिसीव करने के 15 दिनों के भीतर रद्द करते हैं तो मामूली कटौती के बाद आपको रिफंड मिल जाता है।',
        link_hi: 'https://www.irdai.gov.in/document-detail?documentId=1240059'
    },
    {
        keywords: [
            'cancel health insurance policy', 'terminate insurance plan', 'बीमा रद्द कैसे करें',
            'पॉलिसी कैंसिल कैसे करें', 'insurance cancellation process'
        ],
        definition_en: 'To cancel your policy, you must submit a written request (online or offline) to your insurer along with required documents. Refund eligibility depends on when you cancel.',
        example_en: 'Example: Canceling during free-look period usually allows a near-full refund.',
        link_en: 'https://www.bankbazaar.com/insurance/health-insurance/cancellation.html',
        definition_hi: 'पॉलिसी को रद्द करने के लिए बीमा कंपनी को एक लिखित आवेदन (ऑनलाइन या ऑफलाइन) और आवश्यक दस्तावेज़ जमा करने होते हैं। रिफंड इस बात पर निर्भर करता है कि पॉलिसी कब रद्द की गई।',
        example_hi: 'उदाहरण: यदि आप फ्री‑लुक पीरियड के दौरान पॉलिसी रद्द करते हैं तो लगभग पूरा रिफंड मिलता है।',
        link_hi: 'https://www.bankbazaar.com/insurance/health-insurance/cancellation.html'
    },
    {
        keywords: [
            'insurance refund policy', 'health insurance cancellation refund', 'बीमा रद्द करने पर पैसा मिलेगा',
            'रिफंड मिलेगा या नहीं', 'insurance policy refund process'
        ],
        definition_en: 'Yes, you may get a refund depending on when you cancel the policy. If canceled within the free-look period, a full or partial refund (after deductions) is typically provided.',
        example_en: 'Example: Canceling the policy within 15 days of issue can get you a refund minus stamp duty and medical test charges.',
        link_en: 'https://www.bankbazaar.com/insurance/health-insurance/cancellation.html',
        definition_hi: 'हां, यदि आप समय पर पॉलिसी रद्द करते हैं तो आपको रिफंड मिल सकता है। फ्री‑लुक पीरियड के भीतर रद्द करने पर मामूली कटौती के बाद रिफंड मिलता है।',
        example_hi: 'उदाहरण: पॉलिसी जारी होने के 15 दिनों के भीतर रद्द करने पर स्टाम्प शुल्क और मेडिकल टेस्ट की कटौती के बाद रिफंड मिलता है।',
        link_hi: 'https://www.bankbazaar.com/insurance/health-insurance/cancellation.html'
    },
    {
        keywords: [
            'what is home insurance', 'house insurance meaning', 'गृह बीमा क्या है',
            'होम इंश्योरेंस की परिभाषा', 'घर का बीमा'
        ],
        definition_en: 'Home insurance provides financial protection against damages to your house caused by natural disasters, fire, theft, or other unforeseen events.',
        example_en: 'Example: A home insurance policy may cover ₹20 lakh worth of structure damage due to a fire.',
        link_en: 'https://www.policybazaar.com/home-insurance/',
        definition_hi: 'गृह बीमा आपके घर को प्राकृतिक आपदा, आग, चोरी या अन्य अप्रत्याशित घटनाओं से होने वाले नुकसान से वित्तीय सुरक्षा प्रदान करता है।',
        example_hi: 'उदाहरण: ₹20 लाख तक की संरचना क्षति को एक होम इंश्योरेंस पॉलिसी कवर कर सकती है।',
        link_hi: 'https://www.policybazaar.com/home-insurance/'
    },
    {
        keywords: [
            'why get home insurance', 'importance of house insurance', 'घर का बीमा क्यों जरूरी है',
            'गृह बीमा की आवश्यकता', 'home insurance benefit'
        ],
        definition_en: 'Home insurance safeguards your property from major losses due to disasters, theft, or accidents, helping you recover financially from damages.',
        example_en: 'Example: In case of an earthquake, home insurance can help repair or rebuild your house.',
        link_en: 'https://www.reliancegeneral.co.in/Insurance/Home-Insurance.aspx',
        definition_hi: 'गृह बीमा आपको प्राकृतिक आपदा, चोरी या दुर्घटनाओं से होने वाले भारी नुकसान से वित्तीय सुरक्षा देता है और घर को फिर से बनवाने में मदद करता है।',
        example_hi: 'उदाहरण: भूकंप आने पर गृह बीमा घर की मरम्मत या निर्माण में मदद करता है।',
        link_hi: 'https://www.reliancegeneral.co.in/Insurance/Home-Insurance.aspx'
    },
    {
        keywords: [
            'what does home insurance cover', 'home insurance coverage', 'गृह बीमा में क्या-क्या शामिल होता है',
            'होम इंश्योरेंस क्या कवर करता है', 'home policy benefits'
        ],
        definition_en: 'Home insurance typically covers structural damage, personal belongings inside the house, theft, natural disasters, fire, and more, based on your chosen policy.',
        example_en: 'Example: Your policy may cover structural repairs and furniture loss after a flood.',
        link_en: 'https://www.icicilombard.com/home-insurance/what-is-covered',
        definition_hi: 'गृह बीमा आमतौर पर घर की संरचना, अंदर मौजूद वस्तुएं, चोरी, प्राकृतिक आपदा, आग आदि से होने वाले नुकसान को कवर करता है।',
        example_hi: 'उदाहरण: बाढ़ के बाद संरचना की मरम्मत और फर्नीचर की क्षति को पॉलिसी कवर कर सकती है।',
        link_hi: 'https://www.icicilombard.com/home-insurance/what-is-covered'
    },
    {
        keywords: [
            'home insurance natural disasters', 'earthquake flood cover', 'गृह बीमा में प्राकृतिक आपदा',
            'भूकंप और बाढ़ कवर', 'natural calamity home cover'
        ],
        definition_en: 'Yes, most home insurance policies cover natural disasters like earthquakes, floods, cyclones, and landslides, though you should check for exclusions or additional riders.',
        example_en: 'Example: A comprehensive home insurance plan may include earthquake protection without additional cost.',
        link_en: 'https://www.hdfcergo.com/home-insurance/natural-calamity-insurance',
        definition_hi: 'हां, अधिकांश गृह बीमा नीतियाँ भूकंप, बाढ़, चक्रवात और भूस्खलन जैसी प्राकृतिक आपदाओं को कवर करती हैं, लेकिन कुछ मामलों में अतिरिक्त राइडर की आवश्यकता हो सकती है।',
        example_hi: 'उदाहरण: एक सम्पूर्ण गृह बीमा योजना में भूकंप कवर बिना अतिरिक्त शुल्क के शामिल हो सकता है।',
        link_hi: 'https://www.hdfcergo.com/home-insurance/natural-calamity-insurance'
    },
    {
        keywords: [
            'tenant insurance', 'renter insurance meaning', 'किरायेदार बीमा', 'किराएदार की बीमा योजना',
            'rental property insurance for tenants'
        ],
        definition_en: 'Tenant insurance (or renter’s insurance) provides coverage to tenants for personal belongings and liability while renting someone else’s property.',
        example_en: 'Example: If your rented flat catches fire and your personal items are damaged, tenant insurance can help cover the loss.',
        link_en: 'https://www.policybazaar.com/home-insurance/articles/what-is-tenants-insurance/',
        definition_hi: 'किरायेदार बीमा किराए पर रहने वाले व्यक्तियों के लिए उनके निजी सामान और जिम्मेदारी को कवर करने वाली योजना है।',
        example_hi: 'उदाहरण: यदि किराए के फ्लैट में आग लगने से आपका सामान जल जाता है, तो किरायेदार बीमा नुकसान की भरपाई कर सकता है।',
        link_hi: 'https://www.policybazaar.com/home-insurance/articles/what-is-tenants-insurance/'
    },
    {
        keywords: [
            'builder risk insurance', 'construction site insurance', 'बिल्डर बीमा', 'निर्माण स्थल बीमा',
            'builder’s liability insurance'
        ],
        definition_en: 'Builder’s risk insurance covers property and materials during construction against risks like fire, theft, vandalism, or weather damage.',
        example_en: 'Example: If a storm damages a partly built structure, the builder’s risk policy can cover repair costs.',
        link_en: 'https://www.investopedia.com/terms/b/builders-risk-insurance.asp',
        definition_hi: 'बिल्डर रिस्क इंश्योरेंस निर्माण के दौरान संपत्ति और सामग्री को आग, चोरी, तोड़फोड़ या मौसम से हुए नुकसान से सुरक्षा प्रदान करता है।',
        example_hi: 'उदाहरण: यदि निर्माणाधीन भवन तूफान में क्षतिग्रस्त हो जाए, तो यह बीमा मरम्मत खर्च को कवर करता है।',
        link_hi: 'https://www.investopedia.com/terms/b/builders-risk-insurance.asp'
    },
    {
        keywords: [
            'home insurance value calculation', 'property insurance valuation', 'बीमा राशि कैसे तय होती है',
            'मूल्य निर्धारण बीमा', 'घर की कीमत बीमा में'
        ],
        definition_en: 'The value for home insurance is determined based on the reconstruction cost of the property and the value of its contents, not the resale market value.',
        example_en: 'Example: A 1,000 sq. ft. house with ₹2,000 per sq. ft. reconstruction cost is valued at ₹20 lakh for insurance.',
        link_en: 'https://www.policybazaar.com/home-insurance/articles/how-to-calculate-home-insurance-premium/',
        definition_hi: 'गृह बीमा में मूल्य निर्धारण घर के पुनर्निर्माण की लागत और उसमें रखी वस्तुओं के मूल्य के आधार पर होता है, न कि बाजार बिक्री मूल्य पर।',
        example_hi: 'उदाहरण: यदि किसी 1,000 वर्गफुट के घर का पुनर्निर्माण खर्च ₹2,000 प्रति वर्गफुट है, तो बीमा मूल्य ₹20 लाख होगा।',
        link_hi: 'https://www.policybazaar.com/home-insurance/articles/how-to-calculate-home-insurance-premium/'
    },
    {
        keywords: [
            'home insurance deductible', 'deductible meaning in property insurance', 'बीमा में डीडक्टिबल क्या है',
            'गृह बीमा डिडक्टिबल', 'deductible in Hindi'
        ],
        definition_en: 'A deductible is the amount you agree to pay out of pocket before the insurer starts covering the claim. It applies per claim event.',
        example_en: 'Example: If your deductible is ₹5,000 and the damage is ₹50,000, the insurer pays ₹45,000.',
        link_en: 'https://www.investopedia.com/terms/d/deductible.asp',
        definition_hi: 'डीडक्टिबल वह राशि होती है जो आप किसी क्लेम की स्थिति में खुद से भुगतान करते हैं, इसके बाद ही बीमा कंपनी शेष राशि देती है।',
        example_hi: 'उदाहरण: अगर डीडक्टिबल ₹5,000 है और नुकसान ₹50,000 है, तो बीमा कंपनी ₹45,000 देगी।',
        link_hi: 'https://www.investopedia.com/terms/d/deductible.asp'
    },
    {
        keywords: [
            'personal property insurance', 'home content insurance', 'पर्सनल प्रॉपर्टी कवर क्या है',
            'घर के सामान का बीमा', 'content coverage in home insurance'
        ],
        definition_en: 'Personal property coverage protects household items like furniture, appliances, electronics, and clothing from damage or theft under your home insurance policy.',
        example_en: 'Example: If a burglary damages your furniture and TV, personal property coverage reimburses the cost.',
        link_en: 'https://www.nerdwallet.com/article/insurance/personal-property-insurance',
        definition_hi: 'पर्सनल प्रॉपर्टी कवर में आपके घर में मौजूद वस्तुएं जैसे फर्नीचर, उपकरण, इलेक्ट्रॉनिक्स और कपड़े आदि शामिल होते हैं, जो चोरी या नुकसान होने पर कवर किए जाते हैं।',
        example_hi: 'उदाहरण: यदि चोरी के दौरान फर्नीचर और टीवी क्षतिग्रस्त हो जाएं, तो यह कवर उन वस्तुओं की कीमत की भरपाई करता है।',
        link_hi: 'https://www.nerdwallet.com/article/insurance/personal-property-insurance'
    },
    {
        keywords: [
            'jewelry cover in home insurance', 'home insurance for ornaments', 'गृह बीमा में गहने',
            'आभूषण बीमा', 'jewellery insurance India', 'jewelry protection policy'
        ],
        definition_en: 'Jewelry is covered under home insurance but usually up to a sub-limit. For higher value items, you may need to buy additional riders or declare them separately.',
        example_en: 'Example: A home insurance policy might cover jewelry up to ₹1 lakh. For more, an add-on rider is required.',
        link_en: 'https://www.policybazaar.com/home-insurance/articles/is-your-jewellery-covered-under-home-insurance/',
        definition_hi: 'गृह बीमा में आभूषण शामिल होते हैं, लेकिन एक सीमित राशि तक ही। यदि आभूषण की कीमत अधिक है, तो आपको अतिरिक्त कवर या राइडर खरीदना पड़ सकता है।',
        example_hi: 'उदाहरण: एक होम इंश्योरेंस पॉलिसी ₹1 लाख तक के आभूषण को कवर कर सकती है, इससे अधिक राशि के लिए राइडर लेना होगा।',
        link_hi: 'https://www.policybazaar.com/home-insurance/articles/is-your-jewellery-covered-under-home-insurance/'
    },
    {
        keywords: [
            'flood insurance', 'earthquake cover', 'natural disaster home insurance',
            'भूकंप बीमा', 'बाढ़ बीमा', 'default cover for disasters'
        ],
        definition_en: 'Floods and earthquakes are generally not included by default in home insurance. These must be added as optional riders or endorsements to your policy.',
        example_en: 'Example: To get earthquake protection, you must select the “Acts of God” rider while purchasing the policy.',
        link_en: 'https://www.hdfcergo.com/home-insurance/natural-calamity-insurance',
        definition_hi: 'बाढ़ और भूकंप आमतौर पर होम इंश्योरेंस में डिफ़ॉल्ट रूप से शामिल नहीं होते हैं। इन्हें अलग से ऐड-ऑन या राइडर के रूप में लेना पड़ता है।',
        example_hi: 'उदाहरण: भूकंप से सुरक्षा के लिए पॉलिसी खरीदते समय “प्राकृतिक आपदा कवर” राइडर चुनना आवश्यक होता है।',
        link_hi: 'https://www.hdfcergo.com/home-insurance/natural-calamity-insurance'
    },
    {
        keywords: [
            'endorsement in insurance', 'policy endorsement meaning', 'बीमा में एंडोर्समेंट',
            'policy update or change', 'home insurance add rider'
        ],
        definition_en: 'An endorsement is an amendment to your insurance policy that adds, removes, or modifies coverage. It allows customization as per your needs.',
        example_en: 'Example: Adding jewelry coverage after purchasing the policy requires an endorsement.',
        link_en: 'https://www.investopedia.com/terms/e/endorsement-insurance.asp',
        definition_hi: 'एंडोर्समेंट बीमा पॉलिसी में किया गया संशोधन होता है जिससे कवर जोड़ा, हटाया या बदला जा सकता है। यह पॉलिसी को आपकी आवश्यकताओं के अनुसार अनुकूल बनाता है।',
        example_hi: 'उदाहरण: यदि आप पॉलिसी खरीदने के बाद गहनों का कवर जोड़ना चाहते हैं, तो उसके लिए एंडोर्समेंट आवश्यक होता है।',
        link_hi: 'https://www.investopedia.com/terms/e/endorsement-insurance.asp'
    },
    {
        keywords: [
            'policy exclusions', 'what is not covered in home insurance', 'गृह बीमा में क्या कवर नहीं है',
            'बीमा अपवाद', 'insurance exclusion list'
        ],
        definition_en: 'Exclusions are the specific situations or damages not covered by your home insurance policy, like wear and tear, war, intentional damage, or nuclear risks.',
        example_en: 'Example: Damage caused by termites or gradual wear and tear is usually excluded.',
        link_en: 'https://www.policybazaar.com/home-insurance/articles/common-home-insurance-exclusions/',
        definition_hi: 'अपवाद वे स्थितियाँ या नुकसान हैं जो पॉलिसी द्वारा कवर नहीं किए जाते, जैसे – सामान्य टूट-फूट, युद्ध, जानबूझकर किया गया नुकसान या परमाणु खतरे।',
        example_hi: 'उदाहरण: दीमक से हुआ नुकसान या धीरे-धीरे हुई क्षति आमतौर पर कवर नहीं होती।',
        link_hi: 'https://www.policybazaar.com/home-insurance/articles/common-home-insurance-exclusions/'
    },
    {
        keywords: [
            'home insurance claim process', 'how to claim property insurance', 'गृह बीमा क्लेम कैसे करें',
            'बीमा दावा कैसे करें', 'file insurance for house damage'
        ],
        definition_en: 'To file a home insurance claim, immediately notify your insurer, take photos of the damage, fill out the claim form, and provide documents like FIR (if theft), bills, or surveyor reports.',
        example_en: 'Example: After a fire, you contact your insurer, submit fire department and repair bills with a filled claim form.',
        link_en: 'https://www.icicilombard.com/home-insurance/file-a-claim',
        definition_hi: 'गृह बीमा क्लेम करने के लिए बीमा कंपनी को तुरंत सूचित करें, क्षति की तस्वीरें लें, क्लेम फॉर्म भरें और आवश्यक दस्तावेज जैसे एफआईआर (यदि चोरी हो), बिल या सर्वे रिपोर्ट जमा करें।',
        example_hi: 'उदाहरण: आग लगने की स्थिति में आप बीमा कंपनी को सूचित करते हैं और फायर डिपार्टमेंट की रिपोर्ट व मरम्मत के बिल के साथ क्लेम फॉर्म जमा करते हैं।',
        link_hi: 'https://www.icicilombard.com/home-insurance/file-a-claim'
    },
    {
        keywords: [
            'home insurance claim time', 'how long to settle claim', 'क्लेम प्रोसेस में कितना समय',
            'बीमा क्लेम टाइमलाइन', 'insurance settlement time'
        ],
        definition_en: 'Claim settlement timelines vary by insurer, but most home insurance claims are settled within 7 to 30 working days after submitting all required documents.',
        example_en: 'Example: If your fire damage claim is complete, the insurer may process it in about 15 days.',
        link_en: 'https://www.policybazaar.com/home-insurance/articles/home-insurance-claim-process/',
        definition_hi: 'बीमा क्लेम प्रक्रिया में लगने वाला समय बीमा कंपनी पर निर्भर करता है, लेकिन अधिकांश गृह बीमा क्लेम 7 से 30 कार्यदिवसों में निपटाए जाते हैं।',
        example_hi: 'उदाहरण: अगर आपने आग से नुकसान का क्लेम किया है और सभी दस्तावेज़ जमा कर दिए हैं, तो बीमा कंपनी 15 दिन में प्रोसेस कर सकती है।',
        link_hi: 'https://www.policybazaar.com/home-insurance/articles/home-insurance-claim-process/'
    },
    {
        keywords: [
            'home safety discount insurance', 'security system discount', 'गृह बीमा में सुरक्षा छूट',
            'स्मार्ट लॉक डिस्काउंट बीमा', 'fire alarm insurance discount'
        ],
        definition_en: 'Many insurers offer discounts on home insurance premiums if safety devices like fire alarms, smoke detectors, CCTV, or security systems are installed in your home.',
        example_en: 'Example: Installing a certified smoke detector can get you a 5–10% discount on your home insurance premium.',
        link_en: 'https://www.policybazaar.com/home-insurance/articles/factors-that-affect-home-insurance-premium/',
        definition_hi: 'अगर आपके घर में फायर अलार्म, स्मोक डिटेक्टर, सीसीटीवी या सिक्योरिटी सिस्टम लगे हैं, तो कई बीमा कंपनियां प्रीमियम पर छूट देती हैं।',
        example_hi: 'उदाहरण: यदि आपने मान्यता प्राप्त स्मोक डिटेक्टर लगाया है, तो आपको 5–10% तक बीमा प्रीमियम में छूट मिल सकती है।',
        link_hi: 'https://www.policybazaar.com/home-insurance/articles/factors-that-affect-home-insurance-premium/'
    },
    {
        keywords: [
            'landlord insurance requirement', 'rent agreement insurance', 'क्या किराए पर मकान बीमा जरूरी है',
            'मकान मालिक बीमा मांग सकता है', 'renter insurance by landlord'
        ],
        definition_en: 'Yes, a landlord can require a tenant to purchase renter’s insurance as a condition in the rental agreement to protect the tenant’s belongings and liability.',
        example_en: 'Example: Your rental agreement may state that you must carry ₹2 lakh renter’s insurance coverage.',
        link_en: 'https://www.bankrate.com/insurance/homeowners-insurance/does-my-landlord-require-renters-insurance/',
        definition_hi: 'हां, मकान मालिक किरायेदार से किरायेदारी अनुबंध में रेंटर्स इंश्योरेंस लेना अनिवार्य कर सकता है, ताकि किरायेदार की संपत्ति और जिम्मेदारी सुरक्षित रहे।',
        example_hi: 'उदाहरण: किरायेदारी अनुबंध में उल्लेख हो सकता है कि आपको ₹2 लाख का किरायेदार बीमा लेना होगा।',
        link_hi: 'https://www.bankrate.com/insurance/homeowners-insurance/does-my-landlord-require-renters-insurance/'
    },
    {
        keywords: [
            'liability insurance home', 'third party home insurance', 'home accident liability cover',
            'दायित्व बीमा', 'third party damage at home'
        ],
        definition_en: 'Liability insurance at home protects you against legal or financial responsibility if someone is injured on your property or their belongings are damaged.',
        example_en: 'Example: If a guest slips and falls on your wet floor, this insurance helps cover their medical bills and legal expenses.',
        link_en: 'https://www.policybazaar.com/home-insurance/articles/liability-coverage-in-home-insurance/',
        definition_hi: 'दायित्व बीमा घर पर होने वाली किसी दुर्घटना में यदि कोई व्यक्ति घायल हो जाए या किसी की संपत्ति को नुकसान हो, तो उससे उत्पन्न कानूनी या वित्तीय जिम्मेदारी से सुरक्षा देता है।',
        example_hi: 'उदाहरण: यदि कोई मेहमान फर्श पर फिसल कर गिर जाए, तो यह बीमा उसके इलाज और कानूनी खर्च को कवर करता है।',
        link_hi: 'https://www.policybazaar.com/home-insurance/articles/liability-coverage-in-home-insurance/'
    },
    {
        keywords: [
            'what is travel insurance', 'travel insurance meaning', 'यात्रा बीमा क्या है',
            'ट्रैवल इंश्योरेंस', 'यात्रा बीमा का अर्थ'
        ],
        definition_en: 'Travel insurance provides financial protection during travel against risks such as medical emergencies, trip cancellations, lost luggage, flight delays, and more.',
        example_en: 'Example: If you fall sick during a foreign trip, travel insurance covers hospital bills and medical evacuation.',
        link_en: 'https://www.policybazaar.com/travel-insurance/',
        definition_hi: 'यात्रा बीमा यात्रा के दौरान होने वाली समस्याओं जैसे चिकित्सा आपातकाल, यात्रा रद्द होना, सामान खोना, उड़ान में देरी आदि के लिए वित्तीय सुरक्षा प्रदान करता है।',
        example_hi: 'उदाहरण: विदेश यात्रा के दौरान बीमार होने पर यात्रा बीमा अस्पताल का खर्च और मेडिकल इवैकुएशन को कवर करता है।',
        link_hi: 'https://www.policybazaar.com/travel-insurance/'
    },
    {
        keywords: [
            'is travel insurance compulsory', 'travel insurance required for visa',
            'क्या यात्रा बीमा जरूरी है', 'ट्रैवल इंश्योरेंस अनिवार्य', 'visa travel insurance'
        ],
        definition_en: 'Travel insurance is not mandatory for all destinations, but some countries like Schengen nations, UAE, and Russia require it for visa approval.',
        example_en: 'Example: Schengen countries mandate travel insurance with a minimum coverage of €30,000 for medical emergencies.',
        link_en: 'https://www.policybazaar.com/travel-insurance/articles/is-travel-insurance-mandatory/',
        definition_hi: 'सभी देशों के लिए यात्रा बीमा अनिवार्य नहीं है, लेकिन शेंगेन देशों, यूएई और रूस जैसे कुछ देशों में वीज़ा के लिए यह जरूरी होता है।',
        example_hi: 'उदाहरण: शेंगेन देश वीज़ा के लिए कम से कम €30,000 का चिकित्सा बीमा अनिवार्य करते हैं।',
        link_hi: 'https://www.policybazaar.com/travel-insurance/articles/is-travel-insurance-mandatory/'
    },
    {
        keywords: [
            'domestic travel insurance', 'international travel insurance',
            'घरेलू यात्रा बीमा', 'अंतरराष्ट्रीय यात्रा बीमा', 'difference between domestic and international insurance'
        ],
        definition_en: 'Domestic travel insurance covers emergencies within India like trip delays, theft, or medical expenses. International travel insurance covers similar risks abroad, with higher medical coverage and additional services like evacuation.',
        example_en: 'Example: International travel insurance includes overseas hospitalization and passport loss support.',
        link_en: 'https://www.policybazaar.com/travel-insurance/articles/domestic-vs-international-travel-insurance/',
        definition_hi: 'घरेलू यात्रा बीमा भारत में यात्रा के दौरान देरी, चोरी या चिकित्सा आपात स्थिति को कवर करता है। अंतरराष्ट्रीय बीमा विदेश में होने वाले जोखिमों को कवर करता है और अधिक कवरेज व सेवाएं प्रदान करता है।',
        example_hi: 'उदाहरण: अंतरराष्ट्रीय यात्रा बीमा में विदेश में अस्पताल में भर्ती और पासपोर्ट गुम होने का कवर शामिल होता है।',
        link_hi: 'https://www.policybazaar.com/travel-insurance/articles/domestic-vs-international-travel-insurance/'
    },
    {
        keywords: [
            'TMPI travel insurance', 'travel medical protection', 'टीएमपीआई क्या है',
            'यात्रा बीमा मेडिकल कवर', 'emergency medical coverage travel'
        ],
        definition_en: 'TMPI (Travel Medical Protection Insurance) covers medical expenses incurred during a trip abroad due to illness, accidents, hospitalization, or emergency medical evacuation.',
        example_en: 'Example: If you break a bone during a trip to Europe, TMPI covers hospital charges and evacuation if required.',
        link_en: 'https://www.nivabupa.com/health-insurance-articles/benefits-of-travel-insurance.html',
        definition_hi: 'टीएमपीआई (यात्रा चिकित्सा परिरक्षण बीमा) विदेश यात्रा के दौरान बीमारी, दुर्घटना, अस्पताल में भर्ती या आपातकालीन चिकित्सा निकासी के खर्चों को कवर करता है।',
        example_hi: 'उदाहरण: यदि आप यूरोप यात्रा के दौरान पैर तोड़ बैठते हैं, तो TMPI अस्पताल का खर्च और इमरजेंसी निकासी कवर करेगा।',
        link_hi: 'https://www.nivabupa.com/health-insurance-articles/benefits-of-travel-insurance.html'
    },
    {
        keywords: [
            'trip cancellation insurance', 'travel cancellation coverage', 'flight cancel refund insurance',
            'यात्रा रद्द बीमा', 'trip refund insurance', 'trip cancel cover'
        ],
        definition_en: 'Travel insurance offers compensation if a trip is canceled due to reasons like sudden illness, death in the family, natural disaster, or airline strike.',
        example_en: 'Example: If you cancel a trip due to a medical emergency, the insurer refunds non-refundable ticket and hotel charges.',
        link_en: 'https://www.tataaig.com/knowledge-center/travel-insurance/trip-cancellation-insurance-cover',
        definition_hi: 'यदि आपकी यात्रा अचानक बीमार पड़ने, पारिवारिक मृत्यु, प्राकृतिक आपदा या एयरलाइन की हड़ताल जैसी वजहों से रद्द हो जाए तो बीमा कंपनी टिकट और होटल बुकिंग का रिफंड देती है।',
        example_hi: 'उदाहरण: बीमारी के कारण यात्रा रद्द होने पर बीमा कंपनी नॉन-रिफंडेबल टिकट और होटल का पैसा लौटा सकती है।',
        link_hi: 'https://www.tataaig.com/knowledge-center/travel-insurance/trip-cancellation-insurance-cover'
    },
    {
        keywords: [
            'lost baggage insurance', 'travel insurance baggage cover', 'travel luggage lost',
            'सामान खो जाने पर बीमा', 'बैगेज इंश्योरेंस', 'खोया हुआ सामान ट्रैवल'
        ],
        definition_en: 'Travel insurance covers loss or delay of checked-in baggage. You may get compensation for essentials or full replacement value depending on the policy.',
        example_en: 'Example: If your suitcase is lost by the airline, you may get up to ₹50,000 depending on declared value and documents.',
        link_en: 'https://www.bajajallianz.com/travel-insurance/loss-of-baggage-cover.html',
        definition_hi: 'यात्रा बीमा में अगर चेक-इन किया गया सामान खो जाए या देरी से पहुंचे तो उसका मुआवजा मिलता है। कुछ पॉलिसियाँ आवश्यक वस्तुओं या पूरे सामान की कीमत तक कवर देती हैं।',
        example_hi: 'उदाहरण: यदि एयरलाइन आपका बैग खो देती है, तो बीमा कंपनी ₹50,000 तक भुगतान कर सकती है, यह घोषित मूल्य और दस्तावेजों पर निर्भर करता है।',
        link_hi: 'https://www.bajajallianz.com/travel-insurance/loss-of-baggage-cover.html'
    },
    {
        keywords: [
            'travel delay benefit', 'flight delay insurance', 'trip delayed compensation',
            'यात्रा में देरी बीमा', 'flight late refund'
        ],
        definition_en: 'Travel delay benefit compensates you for expenses incurred due to a delayed flight or journey, such as meals, accommodation, and transport during the wait.',
        example_en: 'Example: If your flight is delayed by over 6 hours, you may get reimbursed for meals and hotel stay.',
        link_en: 'https://www.tataaig.com/knowledge-center/travel-insurance/what-is-trip-delay-in-travel-insurance',
        definition_hi: 'यदि आपकी यात्रा में देरी होती है (जैसे फ्लाइट लेट हो), तो बीमा कंपनी भोजन, होटल और अन्य आवश्यक खर्चों के लिए मुआवजा देती है।',
        example_hi: 'उदाहरण: यदि आपकी फ्लाइट 6 घंटे से अधिक देर से उड़ती है, तो आपको होटल और खाने का खर्च रिफंड मिल सकता है।',
        link_hi: 'https://www.tataaig.com/knowledge-center/travel-insurance/what-is-trip-delay-in-travel-insurance'
    },
    {
        keywords: [
            'travel delay benefit', 'flight delay insurance', 'trip delayed compensation',
            'यात्रा में देरी बीमा', 'flight late refund'
        ],
        definition_en: 'Travel delay benefit compensates you for expenses incurred due to a delayed flight or journey, such as meals, accommodation, and transport during the wait.',
        example_en: 'Example: If your flight is delayed by over 6 hours, you may get reimbursed for meals and hotel stay.',
        link_en: 'https://www.tataaig.com/knowledge-center/travel-insurance/what-is-trip-delay-in-travel-insurance',
        definition_hi: 'यदि आपकी यात्रा में देरी होती है (जैसे फ्लाइट लेट हो), तो बीमा कंपनी भोजन, होटल और अन्य आवश्यक खर्चों के लिए मुआवजा देती है।',
        example_hi: 'उदाहरण: यदि आपकी फ्लाइट 6 घंटे से अधिक देर से उड़ती है, तो आपको होटल और खाने का खर्च रिफंड मिल सकता है।',
        link_hi: 'https://www.tataaig.com/knowledge-center/travel-insurance/what-is-trip-delay-in-travel-insurance'
    },
    {
        keywords: [
            'emergency evacuation travel insurance', 'medical evacuation',
            'air ambulance travel cover', 'आपातकालीन निकासी बीमा', 'इमरजेंसी रेस्क्यू यात्रा'
        ],
        definition_en: 'Emergency evacuation coverage pays for transporting you to the nearest medical facility or back home if you fall seriously ill or get injured during travel.',
        example_en: 'Example: If you need airlift due to a heart attack abroad, this cover pays the cost of air ambulance and care.',
        link_en: 'https://www.nivabupa.com/health-insurance-articles/benefits-of-travel-insurance.html',
        definition_hi: 'यदि यात्रा के दौरान आपको गंभीर बीमारी या चोट लगती है, तो यह कवर आपको पास के अस्पताल या भारत वापस लाने के खर्च को कवर करता है।',
        example_hi: 'उदाहरण: यदि विदेश यात्रा में हार्ट अटैक आता है और एयर एंबुलेंस से अस्पताल ले जाना पड़े, तो यह बीमा उसकी लागत को कवर करता है।',
        link_hi: 'https://www.nivabupa.com/health-insurance-articles/benefits-of-travel-insurance.html'
    },
    {
        keywords: [
            'pre-existing disease travel insurance', 'already existing illness cover',
            'प्री-एग्जिस्टिंग कंडीशन बीमा', 'यात्रा बीमा अपवाद', 'chronic illness travel policy'
        ],
        definition_en: 'Most travel insurance policies exclude coverage for medical conditions that existed before the trip unless explicitly covered by the plan.',
        example_en: 'Example: If you have diabetes and face complications abroad, the claim may be rejected unless covered.',
        link_en: 'https://www.policybazaar.com/travel-insurance/articles/pre-existing-diseases-in-travel-insurance/',
        definition_hi: 'अधिकांश यात्रा बीमा पॉलिसियाँ यात्रा से पहले की बीमारियों (जैसे डायबिटीज़, हार्ट डिजीज़) को कवर नहीं करतीं, जब तक कि विशेष रूप से शामिल न किया गया हो।',
        example_hi: 'उदाहरण: यदि आपको डायबिटीज़ है और विदेश में कोई संबंधित समस्या होती है, तो क्लेम खारिज हो सकता है अगर पॉलिसी में वह शामिल नहीं है।',
        link_hi: 'https://www.policybazaar.com/travel-insurance/articles/pre-existing-diseases-in-travel-insurance/'
    },
    {
        keywords: [
            'adventure sports travel insurance', 'skydiving insurance', 'scuba diving cover',
            'एडवेंचर स्पोर्ट्स ट्रैवल कवर', 'बंजी जंप बीमा', 'साहसिक खेल बीमा'
        ],
        definition_en: 'Standard travel insurance does not cover injuries from adventure sports, but special plans or add-ons can include coverage for activities like skiing, rafting, or scuba diving.',
        example_en: 'Example: If you buy an add-on, your policy may cover injuries from mountain climbing or paragliding.',
        link_en: 'https://www.tataaig.com/knowledge-center/travel-insurance/does-travel-insurance-cover-adventure-sports',
        definition_hi: 'सामान्य यात्रा बीमा एडवेंचर स्पोर्ट्स (जैसे स्कूबा डाइविंग, स्कीइंग) से हुई चोटों को कवर नहीं करता, लेकिन कुछ विशेष योजनाएं या एड‑ऑन इसे कवर कर सकते हैं।',
        example_hi: 'उदाहरण: यदि आप एड‑ऑन लेते हैं, तो बीमा पॉलिसी पर्वतारोहण या पैराग्लाइडिंग से हुई चोट को कवर कर सकती है।',
        link_hi: 'https://www.tataaig.com/knowledge-center/travel-insurance/does-travel-insurance-cover-adventure-sports'
    },
    {
        keywords: [
            'travel insurance duration', 'how long is travel insurance valid',
            'बीमा पॉलिसी अवधि सीमा', 'maximum trip length insurance', 'policy duration limit'
        ],
        definition_en: 'Travel insurance has duration limits depending on policy type. Single-trip plans may cover up to 180 days, while multi-trip plans offer multiple 30–90 day trips in a year.',
        example_en: 'Example: A single-trip plan for Europe may cover your trip for 45 days, while an annual plan allows multiple 60-day trips.',
        link_en: 'https://www.policybazaar.com/travel-insurance/articles/travel-insurance-duration/',
        definition_hi: 'यात्रा बीमा की अवधि उसकी योजना पर निर्भर करती है। सिंगल ट्रिप बीमा अधिकतम 180 दिन तक वैध होता है जबकि मल्टी-ट्रिप प्लान एक साल में कई बार यात्रा के लिए 30–90 दिन तक कवर देते हैं।',
        example_hi: 'उदाहरण: यूरोप के लिए सिंगल ट्रिप योजना आपकी 45 दिन की यात्रा को कवर कर सकती है, जबकि वार्षिक योजना कई बार 60 दिन की यात्राओं को कवर करती है।',
        link_hi: 'https://www.policybazaar.com/travel-insurance/articles/travel-insurance-duration/'
    },
    {
        keywords: [
            'single trip vs annual trip insurance', 'multi-trip insurance difference',
            'एक बार यात्रा बीमा', 'मल्टी ट्रिप ट्रैवल इंश्योरेंस', 'वार्षिक यात्रा योजना'
        ],
        definition_en: 'Single-trip insurance covers one journey with a start and end date. Annual multi-trip plans cover multiple trips throughout the year, ideal for frequent travelers.',
        example_en: 'Example: Business travelers can save costs with an annual plan covering unlimited 30-day trips.',
        link_en: 'https://www.policybazaar.com/travel-insurance/articles/difference-between-single-trip-and-multi-trip-travel-insurance/',
        definition_hi: 'सिंगल ट्रिप बीमा एक बार की यात्रा के लिए होता है, जबकि वार्षिक मल्टी ट्रिप योजना पूरे वर्ष में कई यात्राओं को कवर करती है – खासकर लगातार यात्रा करने वालों के लिए।',
        example_hi: 'उदाहरण: व्यवसायी लोग वार्षिक योजना से कई 30 दिन की यात्राओं को एक ही पॉलिसी में कवर करवा सकते हैं।',
        link_hi: 'https://www.policybazaar.com/travel-insurance/articles/difference-between-single-trip-and-multi-trip-travel-insurance/'
    },
    {
        keywords: [
            'travel insurance claim process', 'how to file travel insurance claim',
            'यात्रा बीमा क्लेम कैसे करें', 'ट्रैवल इंश्योरेंस दावा प्रक्रिया'
        ],
        definition_en: 'To claim travel insurance, contact your insurer, submit claim forms, documents (like tickets, receipts, reports), and follow their verification process. Cashless or reimbursement may apply.',
        example_en: 'Example: If hospitalized abroad, inform the insurer within 24 hours and submit medical records and bills.',
        link_en: 'https://www.tataaig.com/knowledge-center/travel-insurance/how-to-file-a-travel-insurance-claim',
        definition_hi: 'यात्रा बीमा क्लेम करने के लिए बीमा कंपनी से संपर्क करें, क्लेम फॉर्म भरें, टिकट, रसीदें और रिपोर्ट जैसे दस्तावेज़ जमा करें और सत्यापन प्रक्रिया पूरी करें।',
        example_hi: 'उदाहरण: यदि आप विदेश में अस्पताल में भर्ती होते हैं, तो 24 घंटे के अंदर बीमा कंपनी को सूचित करें और चिकित्सा दस्तावेज़ जमा करें।',
        link_hi: 'https://www.tataaig.com/knowledge-center/travel-insurance/how-to-file-a-travel-insurance-claim'
    },
    {
        keywords: [
            'emergency travel insurance contact', 'travel insurance helpline',
            'आपातकालीन संपर्क नंबर यात्रा बीमा', 'इमरजेंसी हेल्पलाइन ट्रैवल इंश्योरेंस'
        ],
        definition_en: 'Travel insurers provide 24x7 emergency contact numbers on the policy document or website. These lines help during hospitalization, baggage loss, or delays abroad.',
        example_en: 'Example: TATA AIG’s travel policy includes toll-free global helpline for medical emergencies.',
        link_en: 'https://www.tataaig.com/customer-service/contact-us',
        definition_hi: 'यात्रा बीमा कंपनियाँ पॉलिसी दस्तावेज़ या वेबसाइट पर 24x7 आपातकालीन संपर्क नंबर प्रदान करती हैं, जो अस्पताल में भर्ती, सामान खोने या यात्रा देरी में मदद करते हैं।',
        example_hi: 'उदाहरण: टाटा एआईजी की ट्रैवल पॉलिसी में वैश्विक टोल-फ्री मेडिकल हेल्पलाइन शामिल होती है।',
        link_hi: 'https://www.tataaig.com/customer-service/contact-us'
    },
    {
        keywords: [
            'rental car insurance', 'travel insurance car hire cover',
            'रेन्टल कार बीमा', 'ट्रैवल इंश्योरेंस में कार कवर', 'rent car damage cover'
        ],
        definition_en: 'Some travel insurance policies offer optional add-ons for rental car damage protection, especially in international destinations where rentals are common.',
        example_en: 'Example: Rental car coverage can pay for repair costs if your rented vehicle is damaged during the trip.',
        link_en: 'https://www.policybazaar.com/travel-insurance/articles/car-rental-insurance/',
        definition_hi: 'कुछ ट्रैवल इंश्योरेंस पॉलिसियों में रेंटल कार के नुकसान को कवर करने वाला एड‑ऑन शामिल होता है, खासकर विदेशों में जहां कार किराए पर ली जाती है।',
        example_hi: 'उदाहरण: यदि आपकी किराए की कार को यात्रा के दौरान नुकसान होता है, तो यह बीमा मरम्मत का खर्च कवर कर सकता है।',
        link_hi: 'https://www.policybazaar.com/travel-insurance/articles/car-rental-insurance/'
    },
    {
        keywords: [
            'personal liability travel insurance', 'third-party damage abroad',
            'विदेश में व्यक्तिगत नुकसान बीमा', 'liability coverage travel', 'third-party travel claim'
        ],
        definition_en: 'Travel insurance may cover personal liability if you accidentally injure someone or damage property during your trip, subject to policy terms.',
        example_en: 'Example: If you damage hotel property abroad, liability cover may reimburse the cost.',
        link_en: 'https://www.bajajallianz.com/travel-insurance/personal-liability-cover.html',
        definition_hi: 'यदि आपकी गलती से यात्रा के दौरान किसी व्यक्ति को चोट या संपत्ति को नुकसान होता है, तो कुछ ट्रैवल बीमा पॉलिसी में व्यक्तिगत देयता कवर शामिल होता है।',
        example_hi: 'उदाहरण: यदि आप होटल की संपत्ति को नुकसान पहुंचाते हैं, तो व्यक्तिगत देयता कवर से वह खर्च चुकाया जा सकता है।',
        link_hi: 'https://www.bajajallianz.com/travel-insurance/personal-liability-cover.html'
    },
    {
        keywords: [
            'how to file general insurance claim', 'general insurance claim steps',
            'सामान्य बीमा दावा कैसे करें', 'बीमा क्लेम दाखिल कैसे करें', 'file insurance claim process'
        ],
        definition_en: 'To file a general insurance claim, inform the insurer immediately, submit required documents such as policy copy, bills, and FIR if applicable, and follow their verification and settlement process.',
        example_en: 'Example: After a car accident, inform your insurer, file an FIR, and submit damage photos with the claim form.',
        link_en: 'https://www.irdai.gov.in/',
        definition_hi: 'सामान्य बीमा क्लेम दर्ज करने के लिए बीमा कंपनी को तुरंत सूचित करें, पॉलिसी कॉपी, बिल और आवश्यक दस्तावेज़ जैसे एफआईआर जमा करें और उनकी प्रक्रिया का पालन करें।',
        example_hi: 'उदाहरण: कार दुर्घटना के बाद बीमा कंपनी को सूचित करें, एफआईआर दर्ज कराएं और क्लेम फॉर्म के साथ क्षति की फोटो भेजें।',
        link_hi: 'https://www.irdai.gov.in/hi'
    },
    {
        keywords: [
            'claim process flow', 'insurance claim steps', 'insurance claim timeline',
            'बीमा क्लेम प्रक्रिया', 'क्लेम प्रोसेस स्टेप्स', 'दावा प्रक्रिया फ्लो'
        ],
        definition_en: 'The typical claim process includes notification to insurer, documentation, surveyor/assessor verification, approval, and settlement either through reimbursement or cashless.',
        example_en: 'Example: In a health claim, the hospital sends documents to the insurer, which verifies and settles the bill.',
        link_en: 'https://www.policybazaar.com/insurance-companies/claim-settlement-ratio/',
        definition_hi: 'बीमा क्लेम प्रक्रिया में बीमा कंपनी को सूचित करना, दस्तावेज़ जमा करना, सर्वेयर द्वारा जांच, स्वीकृति और कैशलेस या रिइम्बर्समेंट द्वारा भुगतान शामिल होता है।',
        example_hi: 'उदाहरण: स्वास्थ्य बीमा में अस्पताल बीमा कंपनी को दस्तावेज़ भेजता है, कंपनी जांच करके बिल का भुगतान करती है।',
        link_hi: 'https://www.policybazaar.com/insurance-companies/claim-settlement-ratio/'
    },
    {
        keywords: [
            'insurance claim documents', 'documents for motor claim', 'health claim documents',
            'क्लेम के लिए आवश्यक दस्तावेज़', 'बीमा दस्तावेज़ सूची', 'दावा फॉर्म के दस्तावेज़'
        ],
        definition_en: 'Required documents vary by claim type. Motor claims need RC, license, FIR, repair estimate. Health claims need bills, prescriptions, discharge summary. Always check insurer checklist.',
        example_en: 'Example: For theft claims, FIR and non-traceable report are mandatory.',
        link_en: 'https://www.tataaig.com/claims/insurance-claim-process',
        definition_hi: 'विभिन्न बीमा दावों के लिए अलग-अलग दस्तावेज़ होते हैं। वाहन क्लेम में आरसी, लाइसेंस, एफआईआर लगती है; स्वास्थ्य क्लेम में बिल, प्रिस्क्रिप्शन, डिस्चार्ज रिपोर्ट जरूरी होते हैं।',
        example_hi: 'उदाहरण: चोरी के मामले में एफआईआर और "गाड़ी न मिलने की रिपोर्ट" जरूरी होती है।',
        link_hi: 'https://www.tataaig.com/claims/insurance-claim-process'
    },
    {
        keywords: [
            'track insurance claim', 'online claim status', 'claim tracking',
            'बीमा क्लेम स्टेटस', 'ऑनलाइन क्लेम ट्रैकिंग', 'दावा ट्रैक कैसे करें'
        ],
        definition_en: 'Yes, most insurers allow online claim tracking through their website or mobile app using claim ID or policy number.',
        example_en: 'Example: Log in to ICICI Lombard portal and check your claim progress with your claim reference number.',
        link_en: 'https://www.icicilombard.com/claims/track-your-claim',
        definition_hi: 'हां, अधिकतर बीमा कंपनियाँ अपनी वेबसाइट या मोबाइल ऐप पर क्लेम आईडी या पॉलिसी नंबर से क्लेम स्टेटस ट्रैक करने की सुविधा देती हैं।',
        example_hi: 'उदाहरण: ICICI Lombard की वेबसाइट पर लॉगिन करके क्लेम रिफरेंस नंबर से क्लेम की स्थिति देखें।',
        link_hi: 'https://www.icicilombard.com/claims/track-your-claim'
    },
    {
        keywords: [
            'claim settlement time', 'insurance claim duration', 'how long claim takes',
            'बीमा क्लेम में समय', 'क्लेम सेटलमेंट टाइम', 'दावा कितने दिन में निपटता है'
        ],
        definition_en: 'Claim settlement usually takes 7–30 days depending on the type of claim, documents submitted, and complexity. Cashless claims are often settled within a few days.',
        example_en: 'Example: Health cashless claims are often settled in 2–3 working days.',
        link_en: 'https://www.policybazaar.com/insurance-companies/claim-settlement-ratio/',
        definition_hi: 'बीमा क्लेम का निपटारा आमतौर पर 7 से 30 दिनों में होता है, जो क्लेम के प्रकार, दस्तावेज़ों और जटिलता पर निर्भर करता है। कैशलेस क्लेम जल्दी निपटते हैं।',
        example_hi: 'उदाहरण: हेल्थ बीमा में कैशलेस क्लेम अक्सर 2–3 कार्यदिवस में निपट जाते हैं।',
        link_hi: 'https://www.policybazaar.com/insurance-companies/claim-settlement-ratio/'
    },
    {
        keywords: [
            'claim rejected insurance', 'insurance claim denial', 'claim not approved',
            'बीमा क्लेम रिजेक्ट हो गया', 'क्लेम अस्वीकृत', 'बीमा अस्वीकृति के कारण'
        ],
        definition_en: 'If your insurance claim is rejected, the insurer will provide a reason. It may be due to incomplete documents, policy exclusions, or late filing. You can appeal or raise a grievance.',
        example_en: 'Example: If a health insurance claim is rejected due to missing discharge summary, you can submit it again and appeal.',
        link_en: 'https://www.irdai.gov.in/consumer-education/grievance-redressal/',
        definition_hi: 'अगर आपका बीमा क्लेम रिजेक्ट हो जाए, तो बीमा कंपनी कारण बताएगी। यह अधूरे दस्तावेज़, पॉलिसी अपवाद या देर से क्लेम दाखिल करने के कारण हो सकता है। आप अपील या शिकायत दर्ज कर सकते हैं।',
        example_hi: 'उदाहरण: यदि स्वास्थ्य बीमा क्लेम डिस्चार्ज समरी के अभाव में रिजेक्ट हो गया, तो आप दस्तावेज़ दोबारा जमा करके अपील कर सकते हैं।',
        link_hi: 'https://www.irdai.gov.in/consumer-education/grievance-redressal/'
    },
    {
        keywords: [
            'insurance claim appeal', 'how to contest rejected claim', 'file claim appeal',
            'क्लेम रिजेक्शन की अपील', 'बीमा दावा अस्वीकृति पर आपत्ति', 'क्लेम को चैलेंज कैसे करें'
        ],
        definition_en: 'To appeal a rejected claim, write to the insurer’s grievance officer with relevant documents and clarification. If unresolved, escalate to the Insurance Ombudsman or IRDAI grievance portal.',
        example_en: 'Example: You can submit your grievance online via IRDAI’s Bima Bharosa platform.',
        link_en: 'https://www.irdai.gov.in/consumer-education/grievance-redressal/',
        definition_hi: 'रिजेक्ट हुए क्लेम की अपील करने के लिए बीमा कंपनी के ग्रिवेंस ऑफिसर को दस्तावेज़ और स्पष्टीकरण के साथ लिखें। यदि समाधान न मिले तो बीमा लोकपाल या आईआरडीएआई पोर्टल पर शिकायत दर्ज करें।',
        example_hi: 'उदाहरण: आप IRDAI के बीमा भरोसा पोर्टल पर ऑनलाइन शिकायत दर्ज कर सकते हैं।',
        link_hi: 'https://www.irdai.gov.in/consumer-education/grievance-redressal/'
    },
    {
        keywords: [
            'claim amount calculation', 'how claim value is decided', 'insurance payout logic',
            'क्लेम राशि निर्धारण', 'क्लेम राशि कैसे तय होती है', 'बीमा राशि गणना'
        ],
        definition_en: 'Claim amount is decided based on sum insured, type of loss, depreciation, deductibles, and policy terms. Surveyors may assess damage in case of motor/property claims.',
        example_en: 'Example: In motor insurance, IDV minus depreciation and excess determines final payout.',
        link_en: 'https://www.policybazaar.com/motor-insurance/idv-in-insurance/',
        definition_hi: 'क्लेम राशि पॉलिसी की राशि, हानि के प्रकार, मूल्यह्रास, डिडक्टिबल और शर्तों पर आधारित होती है। मोटर/संपत्ति बीमा में सर्वेयर द्वारा क्षति का आकलन किया जा सकता है।',
        example_hi: 'उदाहरण: मोटर बीमा में आईडीवी से मूल्यह्रास और डिडक्टिबल घटाकर अंतिम भुगतान तय होता है।',
        link_hi: 'https://www.policybazaar.com/motor-insurance/idv-in-insurance/'
    },
    {
        keywords: [
            'reuse insurance documents', 'use same documents for multiple claims',
            'बीमा दस्तावेज़ पुन: उपयोग', 'क्या एक ही दस्तावेज़ फिर से इस्तेमाल हो सकता है', 'क्लेम पेपर्स दोबारा'
        ],
        definition_en: 'Generally, claim documents like FIRs, bills, and photos must be original or freshly generated for each claim. Reusing old documents is not accepted unless specified.',
        example_en: 'Example: You cannot use the same medical bill for two health insurance claims.',
        link_en: 'https://www.tataaig.com/claims/insurance-claim-process',
        definition_hi: 'आमतौर पर क्लेम के लिए एफआईआर, बिल और फोटो जैसे दस्तावेज़ मूल या नए होने चाहिए। पुराने दस्तावेज़ों का दोबारा उपयोग स्वीकार नहीं होता जब तक पॉलिसी में उल्लेख न हो।',
        example_hi: 'उदाहरण: एक ही मेडिकल बिल को दो बार हेल्थ बीमा क्लेम में उपयोग नहीं किया जा सकता।',
        link_hi: 'https://www.tataaig.com/claims/insurance-claim-process'
    },
    {
        keywords: [
            'subrogation in insurance', 'insurance recovery process', 'third party subrogation',
            'सब्रोगेशन बीमा', 'बीमा में सब्रोगेशन का मतलब', 'हक स्थानांतरण'
        ],
        definition_en: 'Subrogation is the insurer’s right to recover the amount they paid you from a third party responsible for the loss. This applies mostly in motor or liability cases.',
        example_en: 'Example: If your car is hit and insurer pays, they may recover from the other driver.',
        link_en: 'https://www.investopedia.com/terms/s/subrogation.asp',
        definition_hi: 'सब्रोगेशन वह अधिकार है जिसके तहत बीमा कंपनी तीसरे पक्ष से नुकसान की राशि वसूल सकती है जिसे उन्होंने बीमाधारक को चुकाया है। यह आमतौर पर मोटर या देयता मामलों में होता है।',
        example_hi: 'उदाहरण: आपकी कार को कोई और टक्कर मारता है और बीमा कंपनी आपको भुगतान करती है, तो वह उस तीसरे व्यक्ति से राशि वसूल सकती है।',
        link_hi: 'https://www.investopedia.com/terms/s/subrogation.asp'
    },
    {
        keywords: [
            'salvage in insurance', 'insurance salvage value', 'what is salvage after claim',
            'बीमा में सेल्वेज', 'सेल्वेज क्या होता है', 'दावे के बाद वाहन का क्या होता है'
        ],
        definition_en: 'Salvage refers to the remains of the insured asset (like a damaged car) after a claim is settled. The insurer may sell it to recover part of the claim paid.',
        example_en: 'Example: If a car is declared a total loss, the insurer may retain and sell its remains as salvage.',
        link_en: 'https://www.policybazaar.com/motor-insurance/articles/what-is-salvage-in-car-insurance/',
        definition_hi: 'बीमा में सेल्वेज उस बीमित वस्तु के बचे हुए हिस्से को कहते हैं (जैसे दुर्घटनाग्रस्त गाड़ी), जिसे क्लेम भुगतान के बाद बीमा कंपनी बेच सकती है ताकि कुछ राशि वसूली जा सके।',
        example_hi: 'उदाहरण: अगर कार को टोटल लॉस घोषित किया गया, तो बीमा कंपनी उसके बचे हुए हिस्सों को बेच सकती है।',
        link_hi: 'https://www.policybazaar.com/motor-insurance/articles/what-is-salvage-in-car-insurance/'
    },
    {
        keywords: [
            'constructive total loss', 'CTL in insurance', 'vehicle total loss',
            'कॉन्स्ट्रक्टिव टोटल लॉस', 'कुल क्षति का अर्थ', 'गाड़ी टोटल लॉस'
        ],
        definition_en: 'Constructive Total Loss occurs when the cost of repairs plus salvage exceeds the insured declared value (IDV) of the vehicle or asset. In this case, the insurer may declare it a total loss.',
        example_en: 'Example: If repairs cost ₹4 lakh and IDV is ₹3.8 lakh, it is declared a total loss.',
        link_en: 'https://www.policybazaar.com/motor-insurance/articles/what-is-total-loss-in-car-insurance/',
        definition_hi: 'जब किसी गाड़ी या संपत्ति की मरम्मत लागत और सेल्वेज का कुल मूल्य उसकी बीमित घोषित मूल्य (IDV) से अधिक हो जाता है, तब उसे कॉन्स्ट्रक्टिव टोटल लॉस कहा जाता है।',
        example_hi: 'उदाहरण: यदि मरम्मत की लागत ₹4 लाख है और IDV ₹3.8 लाख है, तो यह टोटल लॉस मानी जाएगी।',
        link_hi: 'https://www.policybazaar.com/motor-insurance/articles/what-is-total-loss-in-car-insurance/'
    },
    {
        keywords: [
            'insurance surveyor role', 'assessor in insurance', 'who is surveyor in claims',
            'बीमा सर्वेयर', 'क्लेम असेसर क्या करता है', 'सर्वेयर की भूमिका'
        ],
        definition_en: 'A surveyor or assessor is a licensed professional appointed by the insurer to inspect and assess the damage or loss. Their report helps in deciding the claim amount.',
        example_en: 'Example: After a car accident, a surveyor inspects the vehicle to assess the repair cost.',
        link_en: 'https://www.irdai.gov.in/document-detail?documentId=1239970',
        definition_hi: 'सर्वेयर या असेसर एक लाइसेंस प्राप्त पेशेवर होता है जिसे बीमा कंपनी क्षति या नुकसान का आकलन करने के लिए नियुक्त करती है। उनकी रिपोर्ट से क्लेम राशि तय होती है।',
        example_hi: 'उदाहरण: दुर्घटना के बाद सर्वेयर कार का निरीक्षण करता है और मरम्मत लागत का मूल्यांकन करता है।',
        link_hi: 'https://www.irdai.gov.in/document-detail?documentId=1239970'
    },
    {
        keywords: [
            'check insurance surveyor', 'is surveyor genuine', 'identify real insurance assessor',
            'सर्वेयर असली है या नहीं', 'बीमा सर्वेयर की पहचान', 'फर्जी बीमा सर्वेयर'
        ],
        definition_en: 'You can verify a licensed surveyor by checking their IRDAI registration number. Insurers also inform you via SMS or email about the assigned official.',
        example_en: 'Example: You can check the IRDAI website for a list of approved surveyors.',
        link_en: 'https://www.irdai.gov.in/registration-of-surveyors',
        definition_hi: 'आप किसी लाइसेंस प्राप्त सर्वेयर की पुष्टि IRDAI पंजीकरण नंबर से कर सकते हैं। बीमा कंपनियाँ आपको एसएमएस या ईमेल के माध्यम से जानकारी देती हैं।',
        example_hi: 'उदाहरण: IRDAI की वेबसाइट पर स्वीकृत सर्वेयर की सूची देखी जा सकती है।',
        link_hi: 'https://www.irdai.gov.in/registration-of-surveyors'
    },
    {
        keywords: [
            'dispute surveyor report', 'object to insurance assessment', 'challenge insurance surveyor',
            'सर्वेयर रिपोर्ट पर आपत्ति', 'बीमा सर्वेयर से असहमति', 'सर्वेयर रिपोर्ट विवाद'
        ],
        definition_en: 'Yes, if you disagree with the surveyor’s report, you can raise an objection with the insurer, provide your justification, or request a second opinion. You may also approach the grievance officer.',
        example_en: 'Example: If surveyor undervalues loss, you can submit alternate repair estimates.',
        link_en: 'https://www.irdai.gov.in/consumer-education/grievance-redressal/',
        definition_hi: 'हां, अगर आप सर्वेयर की रिपोर्ट से सहमत नहीं हैं, तो आप बीमा कंपनी को आपत्ति बता सकते हैं, स्पष्टीकरण दे सकते हैं या दूसरी राय का अनुरोध कर सकते हैं। आप शिकायत अधिकारी से भी संपर्क कर सकते हैं।',
        example_hi: 'उदाहरण: यदि सर्वेयर ने क्षति का मूल्य कम आंका है, तो आप वैकल्पिक रिपेयर एस्टीमेट दे सकते हैं।',
        link_hi: 'https://www.irdai.gov.in/consumer-education/grievance-redressal/'
    },
    {
        keywords: [
            'online policy renewal', 'renew insurance online', 'renew health insurance',
            'पॉलिसी रिन्यू कैसे करें', 'ऑनलाइन बीमा नवीनीकरण', 'बीमा रिन्यू करने का तरीका'
        ],
        definition_en: 'You can renew your insurance policy online by visiting your insurer’s website or app, entering your policy details, verifying premium, and making the payment digitally.',
        example_en: 'Example: Visit your insurer’s portal, enter policy number, and renew using UPI or net banking.',
        link_en: 'https://www.policybazaar.com/general-insurance/renewals/',
        definition_hi: 'आप बीमा कंपनी की वेबसाइट या ऐप पर जाकर पॉलिसी नंबर डालकर, प्रीमियम की पुष्टि कर और डिजिटल भुगतान करके अपनी बीमा पॉलिसी ऑनलाइन रिन्यू कर सकते हैं।',
        example_hi: 'उदाहरण: बीमा कंपनी के पोर्टल पर जाएं, पॉलिसी नंबर डालें और UPI या नेट बैंकिंग से रिन्यू करें।',
        link_hi: 'https://www.policybazaar.com/general-insurance/renewals/'
    },
    {
        keywords: [
            'premium change on renewal', 'renewal premium hike', 'insurance premium increased',
            'बीमा नवीनीकरण पर प्रीमियम बढ़ा', 'रिन्यू प्रीमियम बढ़ सकता है', 'प्रीमियम में बदलाव'
        ],
        definition_en: 'Yes, premium can change on renewal due to age, claim history, changes in sum insured, or revisions by the insurer. Premiums may increase for senior citizens or post-claims.',
        example_en: 'Example: A 45-year-old may pay higher health premium after crossing age slab.',
        link_en: 'https://www.policybazaar.com/health-insurance/articles/reasons-why-health-insurance-premium-increases/',
        definition_hi: 'हां, उम्र बढ़ने, क्लेम इतिहास, बीमा राशि बदलने या बीमा कंपनी की दरों में बदलाव के कारण प्रीमियम नवीनीकरण पर बदल सकता है।',
        example_hi: 'उदाहरण: 45 वर्ष की आयु पार करने पर हेल्थ इंश्योरेंस का प्रीमियम बढ़ सकता है।',
        link_hi: 'https://www.policybazaar.com/health-insurance/articles/reasons-why-health-insurance-premium-increases/'
    },
    {
        keywords: [
            'when to renew policy', 'insurance renewal time', 'how early to renew insurance',
            'बीमा कब रिन्यू करें', 'पॉलिसी नवीनीकरण समय', 'कब तक रिन्यू करना चाहिए'
        ],
        definition_en: 'Most insurers allow renewal 15 to 45 days before expiry. Renewing early ensures uninterrupted coverage and benefits like NCB continuation or no lapse in health coverage.',
        example_en: 'Example: Renew car insurance 30 days before expiry to avoid last-minute issues.',
        link_en: 'https://www.acko.com/articles/insurance/when-should-you-renew-your-car-insurance/',
        definition_hi: 'अधिकांश बीमा कंपनियां पॉलिसी समाप्त होने से 15 से 45 दिन पहले नवीनीकरण की अनुमति देती हैं। समय पर रिन्यू करने से कवरेज जारी रहता है और एनसीबी जैसे लाभ मिलते रहते हैं।',
        example_hi: 'उदाहरण: कार बीमा को समाप्ति से 30 दिन पहले रिन्यू करें ताकि अंतिम समय की परेशानियों से बचा जा सके।',
        link_hi: 'https://www.acko.com/articles/insurance/when-should-you-renew-your-car-insurance/'
    },
    {
        keywords: [
            'missed policy renewal', 'insurance expired', 'renew after expiry',
            'रिन्यू डेट छूट गई', 'बीमा समाप्त हो गया', 'पॉलिसी एक्सपायर के बाद क्या करें'
        ],
        definition_en: 'If you miss the renewal date, most insurers offer a grace period (15–30 days) for renewal without loss of benefits. If missed completely, the policy lapses and you may lose NCB or coverage.',
        example_en: 'Example: If you renew within 15 days of expiry, NCB may still be retained.',
        link_en: 'https://www.policybazaar.com/motor-insurance/articles/car-insurance-renewal-grace-period/',
        definition_hi: 'अगर आप रिन्यू डेट भूल जाते हैं तो अधिकतर बीमा कंपनियां 15–30 दिन का ग्रेस पीरियड देती हैं। अगर पूरी तरह से छूट गया तो पॉलिसी लैप्स हो जाती है और लाभ जैसे NCB समाप्त हो सकते हैं।',
        example_hi: 'उदाहरण: अगर आप एक्सपायरी के 15 दिन के अंदर रिन्यू करते हैं, तो NCB बरकरार रह सकता है।',
        link_hi: 'https://www.policybazaar.com/motor-insurance/articles/car-insurance-renewal-grace-period/'
    },
    {
        keywords: [
            'cancel insurance mid term', 'terminate policy early', 'how to stop insurance early',
            'बीच में बीमा बंद करना', 'पॉलिसी कैंसिल करना', 'बीमा समाप्ति पूर्व'
        ],
        definition_en: 'Yes, you can cancel your policy during its term by submitting a written request and required documents. The insurer may refund the premium on a pro-rata basis if no claim is made.',
        example_en: 'Example: If you sell your car and cancel its insurance mid-term, you may get refund.',
        link_en: 'https://www.policybazaar.com/general-insurance/articles/how-to-cancel-your-insurance-policy/',
        definition_hi: 'हां, आप बीमा अवधि के दौरान लिखित अनुरोध और आवश्यक दस्तावेज़ जमा करके पॉलिसी रद्द कर सकते हैं। यदि कोई क्लेम नहीं किया गया हो, तो बीमा कंपनी प्रीमियम का आंशिक रिफंड दे सकती है।',
        example_hi: 'उदाहरण: यदि आपने अपनी कार बेच दी और बीच में बीमा रद्द किया, तो आपको कुछ प्रीमियम वापस मिल सकता है।',
        link_hi: 'https://www.policybazaar.com/general-insurance/articles/how-to-cancel-your-insurance-policy/'
    },
    {
        keywords: [
            'insurance cancellation refund', 'policy refund rules', 'refund after insurance cancellation',
            'बीमा रद्द करने पर रिफंड', 'पॉलिसी रद्दीकरण रिफंड', 'रद्दीकरण के बाद पैसे वापस'
        ],
        definition_en: 'If you cancel a policy mid-term without making any claim, insurers may refund the premium based on the number of unused days. The refund is usually calculated on a short-term or pro-rata basis.',
        example_en: 'Example: Cancelling a 1-year policy after 3 months may give ~75% refund.',
        link_en: 'https://www.policybazaar.com/general-insurance/articles/refund-policy-in-general-insurance/',
        definition_hi: 'अगर आपने कोई क्लेम नहीं किया है और बीमा अवधि के बीच में पॉलिसी रद्द करते हैं, तो बीमा कंपनी शेष दिनों के अनुसार शॉर्ट-टर्म या प्रोराटा आधार पर प्रीमियम रिफंड कर सकती है।',
        example_hi: 'उदाहरण: अगर आपने 1 साल की पॉलिसी को 3 महीने बाद रद्द किया, तो लगभग 75% प्रीमियम वापस मिल सकता है।',
        link_hi: 'https://www.policybazaar.com/general-insurance/articles/refund-policy-in-general-insurance/'
    },
    {
        keywords: [
            'free look period insurance', 'what is free look', 'cancel insurance during free look',
            'फ्री लुक पीरियड', 'फ्री लुक अवधि क्या है', 'बीमा फ्री लुक टाइम'
        ],
        definition_en: 'Free-look period is the initial 15–30 days from receiving the policy document. During this period, you can cancel the policy and get a full refund after minimal deductions.',
        example_en: 'Example: If you find terms unsuitable during free-look, cancel and get refund.',
        link_en: 'https://www.irdai.gov.in/document-detail?documentId=1237722',
        definition_hi: 'फ्री-लुक अवधि वह प्रारंभिक 15–30 दिन होते हैं जब आप पॉलिसी दस्तावेज़ प्राप्त करते हैं। इस समय में आप पॉलिसी रद्द कर सकते हैं और न्यूनतम कटौती के बाद पूरा रिफंड प्राप्त कर सकते हैं।',
        example_hi: 'उदाहरण: यदि पॉलिसी की शर्तें ठीक न लगें तो फ्री-लुक अवधि में रद्द करके रिफंड ले सकते हैं।',
        link_hi: 'https://www.irdai.gov.in/document-detail?documentId=1237722'
    },
    {
        keywords: [
            'what is loading in insurance', 'insurance premium loading', 'loading meaning',
            'लोडिंग क्या होता है', 'बीमा में लोडिंग', 'प्रीमियम बढ़ाने का कारण'
        ],
        definition_en: 'Loading is an extra premium added by the insurer due to higher risk. It may apply to senior citizens, people with health conditions, or bad driving history.',
        example_en: 'Example: Smokers may be charged 10–25% higher premium due to health risk.',
        link_en: 'https://www.policybazaar.com/health-insurance/articles/what-is-loading-in-health-insurance/',
        definition_hi: 'लोडिंग वह अतिरिक्त प्रीमियम होता है जो बीमा कंपनी अधिक जोखिम के कारण जोड़ती है। यह वरिष्ठ नागरिकों, बीमार व्यक्तियों या खराब ड्राइविंग रिकॉर्ड वाले लोगों पर लगाया जा सकता है।',
        example_hi: 'उदाहरण: धूम्रपान करने वालों को स्वास्थ्य जोखिम के कारण 10–25% अधिक प्रीमियम देना पड़ सकता है।',
        link_hi: 'https://www.policybazaar.com/health-insurance/articles/what-is-loading-in-health-insurance/'
    },
    {
        keywords: [
            'claim loading', 'renewal premium loading', 'extra charge after claim',
            'क्लेम के बाद प्रीमियम बढ़ना', 'क्लेम लोडिंग क्या है', 'बीमा रिन्यू में लोडिंग'
        ],
        definition_en: 'Claim loading refers to the additional premium charged at renewal due to a claim filed during the previous policy period. It compensates the insurer for the increased risk.',
        example_en: 'Example: If you raise a claim, next year’s premium may increase by 10–15%.',
        link_en: 'https://www.policybazaar.com/health-insurance/articles/health-insurance-renewal-and-claim-loading/',
        definition_hi: 'क्लेम लोडिंग वह अतिरिक्त प्रीमियम है जो नवीनीकरण के समय लगाया जाता है यदि पिछले वर्ष क्लेम किया गया हो। यह बीमा कंपनी को बढ़े हुए जोखिम की भरपाई करने में मदद करता है।',
        example_hi: 'उदाहरण: यदि आपने क्लेम किया, तो अगले साल का प्रीमियम 10–15% बढ़ सकता है।',
        link_hi: 'https://www.policybazaar.com/health-insurance/articles/health-insurance-renewal-and-claim-loading/'
    },
    {
        keywords: [
            'multiple renewal missed', 'policy lapse for long time', 'renewal skipped many times',
            'बार-बार बीमा रिन्यू न किया', 'बीमा कई बार लैप्स हुआ', 'लंबे समय से बीमा नहीं रिन्यू'
        ],
        definition_en: 'If you miss multiple renewals, the policy lapses completely, and you lose continuity benefits like No Claim Bonus, waiting period credits, and lifetime renewability in some cases.',
        example_en: 'Example: Health policy not renewed for 90+ days may need to restart from scratch.',
        link_en: 'https://www.policybazaar.com/health-insurance/articles/what-happens-if-you-dont-renew-your-health-insurance-on-time/',
        definition_hi: 'अगर आप बार-बार पॉलिसी रिन्यू नहीं करते, तो वह पूरी तरह लैप्स हो जाती है और आप नो क्लेम बोनस, वेटिंग पीरियड क्रेडिट और कुछ मामलों में जीवनभर रिन्यू की सुविधा खो सकते हैं।',
        example_hi: 'उदाहरण: अगर हेल्थ पॉलिसी 90+ दिनों तक रिन्यू नहीं की गई, तो नए सिरे से शुरू करनी पड़ सकती है।',
        link_hi: 'https://www.policybazaar.com/health-insurance/articles/what-happens-if-you-dont-renew-your-health-insurance-on-time/'
    },
    {
        keywords: [
            'insurance portability', 'port insurance', 'switch policy provider',
            'बीमा पोर्ट करना', 'पोर्टेबिलिटी क्या है', 'पॉलिसी ट्रांसफर कैसे करें'
        ],
        definition_en: 'Portability in insurance allows you to transfer your existing health insurance policy from one insurer to another without losing continuity benefits like waiting periods or coverage.',
        example_en: 'Example: You can port your policy from Insurer A to Insurer B at the time of renewal.',
        link_en: 'https://www.irdai.gov.in/ADMINCMS/cms/Uploadedfiles/IRDAI_HealthInsurancePortability_Guidelines.pdf',
        definition_hi: 'बीमा पोर्टेबिलिटी का मतलब है कि आप अपनी मौजूदा स्वास्थ्य बीमा पॉलिसी को एक बीमा कंपनी से दूसरी में ट्रांसफर कर सकते हैं, बिना वेटिंग पीरियड या कवरेज नुकसान के।',
        example_hi: 'उदाहरण: आप अपनी पॉलिसी को रिन्यूअल के समय कंपनी A से कंपनी B में पोर्ट कर सकते हैं।',
        link_hi: 'https://www.irdai.gov.in/ADMINCMS/cms/Uploadedfiles/IRDAI_HealthInsurancePortability_Guidelines.pdf'
    },
    {
        keywords: [
            'policies eligible for portability', 'what insurance can be ported',
            'कौन सी पॉलिसी पोर्ट कर सकते हैं', 'पोर्टेबल बीमा पॉलिसी', 'बीमा पोर्ट करने योग्य पॉलिसी'
        ],
        definition_en: 'Only health insurance policies—like individual or family floater health plans—can be ported between insurers. Life insurance and motor insurance are not portable.',
        example_en: 'Example: You can port a mediclaim or family floater plan but not a car insurance policy.',
        link_en: 'https://www.policybazaar.com/health-insurance/general-info/articles/health-insurance-portability/',
        definition_hi: 'केवल स्वास्थ्य बीमा पॉलिसी जैसे व्यक्तिगत और फैमिली फ्लोटर प्लान को पोर्ट किया जा सकता है। जीवन बीमा और मोटर बीमा पोर्ट नहीं होते।',
        example_hi: 'उदाहरण: आप मेडिक्लेम या फैमिली फ्लोटर प्लान पोर्ट कर सकते हैं, लेकिन कार बीमा नहीं।',
        link_hi: 'https://www.policybazaar.com/health-insurance/general-info/articles/health-insurance-portability/'
    },
    {
        keywords: [
            'how to port insurance', 'porting procedure', 'steps for portability',
            'बीमा पोर्ट प्रक्रिया', 'बीमा पोर्ट करने के तरीके', 'पॉलिसी पोर्ट कैसे करें'
        ],
        definition_en: 'To port insurance, apply to the new insurer at least 45 days before expiry of your current policy. Fill the portability form, submit KYC, medical records, and the last policy schedule.',
        example_en: 'Example: Submit portability request with new insurer 45 days before policy expiry.',
        link_en: 'https://www.policybazaar.com/health-insurance/general-info/articles/health-insurance-portability/',
        definition_hi: 'बीमा पोर्ट करने के लिए, मौजूदा पॉलिसी की समाप्ति से कम से कम 45 दिन पहले नई कंपनी को आवेदन करें। पोर्टेबिलिटी फॉर्म, KYC, मेडिकल रिकॉर्ड और पिछली पॉलिसी दस्तावेज़ जमा करें।',
        example_hi: 'उदाहरण: पॉलिसी समाप्त होने से 45 दिन पहले नई कंपनी को पोर्टेबिलिटी आवेदन दें।',
        link_hi: 'https://www.policybazaar.com/health-insurance/general-info/articles/health-insurance-portability/'
    },
    {
        keywords: [
            'portability waiting period', 'will waiting reset', 'waiting after port',
            'पोर्ट के बाद वेटिंग पीरियड', 'बीमा पोर्ट और वेटिंग', 'वेटिंग रीसेट होता है क्या'
        ],
        definition_en: 'No, if porting is done without a gap and the policy terms are similar, the new insurer honors the already completed waiting periods from your old policy.',
        example_en: 'Example: If you completed 2 years waiting in old policy, new one carries it forward.',
        link_en: 'https://www.irdai.gov.in/document-detail?documentId=1237822',
        definition_hi: 'नहीं, यदि पोर्ट बिना किसी ब्रेक के किया गया है और पॉलिसी शर्तें समान हैं, तो नई कंपनी आपके पुराने वेटिंग पीरियड को मान्यता देती है।',
        example_hi: 'उदाहरण: यदि आपने पुरानी पॉलिसी में 2 साल का वेटिंग पीरियड पूरा किया है, तो नई पॉलिसी उसे आगे बढ़ाएगी।',
        link_hi: 'https://www.irdai.gov.in/document-detail?documentId=1237822'
    },
    {
        keywords: [
            'port vs buy new policy', 'porting vs fresh insurance', 'new insurance or portability',
            'नई पॉलिसी लें या पोर्ट करें', 'बीमा पोर्ट या नई पॉलिसी', 'पोर्टिंग सही है या नया बीमा'
        ],
        definition_en: 'If you are unhappy with your current insurer’s service or premium but want to retain waiting period benefits, portability is ideal. Buy new policy only if you want fresh terms and start.',
        example_en: 'Example: Port if you want better service but same coverage; buy new for different plan.',
        link_en: 'https://www.policybazaar.com/health-insurance/general-info/articles/should-you-port-your-health-insurance-policy/',
        definition_hi: 'अगर आप मौजूदा बीमा कंपनी की सेवा या प्रीमियम से संतुष्ट नहीं हैं लेकिन वेटिंग पीरियड जैसे लाभ बनाए रखना चाहते हैं तो पोर्ट करना बेहतर है। नई पॉलिसी तब लें जब पूरी तरह नई शुरुआत करनी हो।',
        example_hi: 'उदाहरण: बेहतर सेवा के लिए पोर्ट करें, अलग प्लान के लिए नई पॉलिसी लें।',
        link_hi: 'https://www.policybazaar.com/health-insurance/general-info/articles/should-you-port-your-health-insurance-policy/'
    },

];
