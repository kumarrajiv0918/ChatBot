export interface PolicyInfo {
    keywords: string[];
    definition_en: string;
    example_en?: string;
    link_en?: string;
    definition_hi: string;
    example_hi?: string;
    link_hi?: string;
}

export const policyData: PolicyInfo[] = [
    {
        keywords: [
            'policy', 'what is policy', 'policy meaning', 'types of policies', 'government policy',
            'insurance policy', 'health policy', 'life policy', 'policy info', 'policy details',
            'पॉलिसी', 'पॉलिसी क्या है', 'पॉलिसी के प्रकार', 'सरकारी पॉलिसी', 'पॉलिसी जानकारी'
        ],
        definition_en: `A policy is a formal set of rules or principles designed to guide decisions and achieve specific outcomes. Policies exist in various fields like:

**Common Policy Types:**
• Insurance Policies – agreements that provide risk coverage  
• Government Policies – laws and regulations guiding development  
• Corporate Policies – internal company rules and practices  

In personal finance, a policy usually refers to insurance (like health or life) that defines coverage, premium, and terms.`,
        example_en: `Example: A health insurance policy may cover hospitalization expenses up to ₹5 lakh annually.`,
        link_en: 'https://www.policybazaar.com',

        definition_hi: `पॉलिसी नियमों और सिद्धांतों का एक औपचारिक सेट होता है, जिसका उद्देश्य निर्णयों को निर्देशित करना और विशिष्ट लक्ष्यों को प्राप्त करना होता है। विभिन्न क्षेत्रों में पॉलिसी होती है:

**प्रमुख पॉलिसी प्रकार:**
• बीमा पॉलिसी – जोखिम से सुरक्षा प्रदान करने वाला समझौता  
• सरकारी पॉलिसी – विकास के लिए बनाए गए नियम व कानून  
• कॉर्पोरेट पॉलिसी – कंपनियों के आंतरिक नियम और दिशानिर्देश  

व्यक्तिगत वित्त में, पॉलिसी आमतौर पर बीमा से जुड़ी होती है जो कवरेज, प्रीमियम और शर्तों को दर्शाती है।`,
        example_hi: `उदाहरण: एक स्वास्थ्य बीमा पॉलिसी हर साल ₹5 लाख तक की अस्पताल खर्चों को कवर कर सकती है।`,
        link_hi: 'https://www.policybazaar.com/hindi'
    },
    {
        keywords: [
            'policy term', 'policy tenure', 'पॉलिसी की अवधि'
        ],
        definition_en: `Policy term is the duration for which the insurance contract remains valid.`,
        example_en: `Example: A 20-year term insurance policy matures after 20 years if no claim is made.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी अवधि वह समय होता है जिसके दौरान बीमा अनुबंध मान्य रहता है।`,
        example_hi: `उदाहरण: 20 साल की टर्म इंश्योरेंस पॉलिसी 20 साल के बाद समाप्त होती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy coverage', 'what does policy cover', 'पॉलिसी का कवरेज'
        ],
        definition_en: `Coverage defines the specific risks and situations that an insurance policy protects against.`,
        example_en: `Example: A home insurance policy may cover fire, theft, and natural disasters.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `कवरेज में वे जोखिम शामिल होते हैं जो पॉलिसी कवरेज के अंतर्गत सुरक्षित हैं।`,
        example_hi: `उदाहरण: गृह बीमा पॉलिसी आग, चोरी और प्राकृतिक आपदाओं का कवरेज देती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: ['policy exclusions', 'what is exclusion in policy', 'पॉलिसी में अपवाद'],
        definition_en: `Exclusions list specific situations or risks that are not covered by the insurance policy.`,
        example_en: `Example: Health policy may exclude pre-existing diseases for the first 2 years.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी में अपवाद वे जोखिम होते हैं जिन्हें बीमा पॉलिसी कवर नहीं करती।`,
        example_hi: `उदाहरण: हेल्थ पॉलिसी शुरूआती 2 साल में प्री-एग्ज़िस्टिंग डिजीज़ कवर नहीं करती।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy claims', 'insurance claim', 'दावा कैसे करें'
        ],
        definition_en: `A claim is a request made by the insured to the insurer for payment based on the terms of the policy.`,
        example_en: `Example: Filing a claim after hospitalisation under health insurance.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `दावा वह अनुरोध होता है जिसे बीमित व्यक्ति पॉलिसी के अनुसार भुगतान पाने के लिए बीमा कंपनी से करता है।`,
        example_hi: `उदाहरण: अस्पताल में भर्ती होने पर हेल्थ इंश्योरेंस के तहत दावा करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy premium waiver', 'waiver of premium', 'प्रीमियम माफ़ी'
        ],
        definition_en: `Premium waiver means the insurer stops charging premiums in certain situations, like disability, while coverage continues.`,
        example_en: `Example: In some life policies, if you become disabled, future premiums are waived.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `प्रीमियम माफ़ी का मतलब है कि कुछ परिस्थितियों (जैसे विकलांगता) में भविष्य में प्रीमियम नहीं लिया जाता जबकि कवरेज चलता रहता है।`,
        example_hi: `उदाहरण: कुछ जीवन पॉलिसियों में विकलांगता होने पर भविष्य के प्रीमियम माफ़ हो जाते हैं।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy rider', 'policy add-on', 'पॉलिसी अड-ऑन'
        ],
        definition_en: `A rider (add-on) is an optional cover added to the base policy for additional protection.`,
        example_en: `Example: Adding critical illness rider to a term insurance policy.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `राइडर या अड-ऑन एक वैकल्पिक कवरेज होता है जिसे मूल पॉलिसी के साथ जोड़ा जा सकता है।`,
        example_hi: `उदाहरण: टर्म इंश्योरेंस पॉलिसी में क्रिटिकल इलनेस राइडर जोड़ना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy surrender', 'surrender value', 'सुरेंडर वेल्यू'
        ],
        definition_en: `Surrender value is the amount payable by the insurer if the policy is terminated before maturity.`,
        example_en: `Example: After paying 5 years’ premium, you surrender life policy and get cash back.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `सुरेंडर वेल्यू वह राशि है जो पॉलिसी को अवधि समाप्त होने से पहले खत्म करने पर बीमा कंपनी देती है।`,
        example_hi: `उदाहरण: 5 साल प्रीमियम भरने के बाद जीवन पॉलिसी को बंद कर देने पर नकदी प्राप्त होती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy free-look period', 'free look', 'फ्री-लुक अवधि'
        ],
        definition_en: `Free-look period allows you to review and cancel the policy within a specified time after purchase without penalty.`,
        example_en: `Example: 15 days free-look period after policy issuance.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `फ्री-लुक अवधि वह समय होती है जिसमें आप बिना कोई जुर्माना लिए पॉलिसी को रद्द कर सकते हैं।`,
        example_hi: `उदाहरण: पॉलिसी जारी होने के 15 दिन तक फ्री-लुक अवधि।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy renewal', 'renew insurance', 'पॉलिसी नवीनीकरण कैसे करें'
        ],
        definition_en: `Policy renewal is the process of extending your insurance coverage before it expires to continue protection without interruption.`,
        example_en: `Example: Renewing car insurance annually to maintain road legality and coverage.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी नवीनीकरण का अर्थ है बीमा समाप्त होने से पहले उसे दोबारा सक्रिय करना ताकि सुरक्षा बनी रहे।`,
        example_hi: `उदाहरण: कार बीमा को हर साल नवीनीकरण करना ताकि गाड़ी वैध और सुरक्षित बनी रहे।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy grace period', 'insurance grace days', 'ग्रेस पीरियड क्या है'
        ],
        definition_en: `Grace period is the extra time given after premium due date to make payment without losing policy benefits.`,
        example_en: `Example: Life insurance may allow a 30-day grace period after the due date.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ग्रेस पीरियड वह अतिरिक्त समय होता है जब आप प्रीमियम समय पर न भरने पर भी पॉलिसी की सुविधाएं नहीं खोते।`,
        example_hi: `उदाहरण: जीवन बीमा में ड्यू डेट के बाद 30 दिन का ग्रेस पीरियड मिल सकता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy lapse', 'insurance lapse', 'पॉलिसी लैप्स क्या है'
        ],
        definition_en: `A lapsed policy is one that has become inactive due to non-payment of premium within the due and grace period.`,
        example_en: `Example: If you miss the premium and grace period ends, the policy lapses.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी लैप्स तब होती है जब प्रीमियम समय पर और ग्रेस पीरियड के भीतर नहीं भरा जाता, जिससे पॉलिसी निष्क्रिय हो जाती है।`,
        example_hi: `उदाहरण: यदि आप समय पर प्रीमियम नहीं भरते, तो पॉलिसी लैप्स हो जाती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy revival', 'revive lapsed policy', 'पॉलिसी पुनर्जीवन'
        ],
        definition_en: `Policy revival allows a lapsed policy to be reactivated by paying overdue premiums and sometimes undergoing medical checks.`,
        example_en: `Example: You can revive your life insurance within 2 years after lapse.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी पुनर्जीवन का अर्थ है निष्क्रिय पॉलिसी को दोबारा सक्रिय करना, जिसमें बकाया प्रीमियम भरना और संभवतः मेडिकल जांच कराना शामिल है।`,
        example_hi: `उदाहरण: जीवन बीमा को लैप्स के 2 साल के भीतर पुनर्जीवित किया जा सकता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy holder', 'insured person', 'बीमित व्यक्ति कौन होता है'
        ],
        definition_en: `The policyholder is the individual who owns the policy and is responsible for premium payments.`,
        example_en: `Example: If a father buys health insurance for his son, the father is the policyholder.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी होल्डर वह व्यक्ति होता है जो बीमा खरीदता है और प्रीमियम का भुगतान करता है।`,
        example_hi: `उदाहरण: अगर पिता बेटे के लिए हेल्थ इंश्योरेंस लेते हैं, तो पिता पॉलिसी होल्डर होते हैं।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'nominee in policy', 'insurance beneficiary', 'नामांकित व्यक्ति'
        ],
        definition_en: `A nominee is the person entitled to receive the insurance benefits in case of the policyholder’s death.`,
        example_en: `Example: In a life insurance policy, your spouse or child can be your nominee.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `नामांकित व्यक्ति वह होता है जिसे बीमा लाभ मिलते हैं यदि पॉलिसी होल्डर की मृत्यु हो जाए।`,
        example_hi: `उदाहरण: जीवन बीमा पॉलिसी में आप अपने जीवनसाथी या बच्चे को नामांकित कर सकते हैं।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy claim form', 'insurance claim documents', 'क्लेम फॉर्म क्या होता है'
        ],
        definition_en: `A claim form is the official document submitted to initiate an insurance claim.`,
        example_en: `Example: Submitting a filled claim form and bills for hospitalisation reimbursement.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `क्लेम फॉर्म वह आधिकारिक दस्तावेज होता है जिसे बीमा क्लेम शुरू करने के लिए जमा किया जाता है।`,
        example_hi: `उदाहरण: अस्पताल के खर्चों की प्रतिपूर्ति के लिए भरे हुए क्लेम फॉर्म और बिल जमा करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'sum insured', 'coverage amount', 'बीमित राशि क्या है'
        ],
        definition_en: `Sum insured is the maximum amount the insurer will pay in case of a claim.`,
        example_en: `Example: If the sum insured is ₹5 lakh, the maximum claim you can receive is ₹5 lakh.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमित राशि वह अधिकतम राशि है जो बीमा कंपनी क्लेम की स्थिति में देती है।`,
        example_hi: `उदाहरण: अगर बीमित राशि ₹5 लाख है, तो आप अधिकतम ₹5 लाख का क्लेम ले सकते हैं।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy endorsement', 'policy modification', 'पॉलिसी एंडोर्समेंट'
        ],
        definition_en: `An endorsement is a document that reflects any changes or additions made to the original insurance policy.`,
        example_en: `Example: Adding a new car accessory under your motor insurance via endorsement.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `एंडोर्समेंट वह दस्तावेज होता है जो मूल बीमा पॉलिसी में किसी भी बदलाव या जोड़ को दर्शाता है।`,
        example_hi: `उदाहरण: मोटर बीमा में नई कार एक्सेसरी को एंडोर्समेंट के जरिए जोड़ना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy schedule', 'insurance schedule', 'पॉलिसी शेड्यूल क्या होता है'
        ],
        definition_en: `A policy schedule is the part of the policy document that includes all key details like policy number, sum insured, and terms.`,
        example_en: `Example: Your motor insurance schedule contains car details, premium, and coverage.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी शेड्यूल बीमा दस्तावेज़ का वह भाग है जिसमें पॉलिसी नंबर, बीमित राशि और शर्तें जैसी जानकारियाँ होती हैं।`,
        example_hi: `उदाहरण: आपकी मोटर बीमा पॉलिसी का शेड्यूल वाहन की जानकारी, प्रीमियम और कवरेज दिखाता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance premium', 'what is premium in policy', 'बीमा प्रीमियम क्या है'
        ],
        definition_en: `Premium is the amount you pay to the insurance company in exchange for coverage and benefits under a policy.`,
        example_en: `Example: Paying ₹12,000 annually as premium for a ₹10 lakh health policy.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `प्रीमियम वह राशि है जो आप बीमा कवरेज और लाभ पाने के लिए बीमा कंपनी को भुगतान करते हैं।`,
        example_hi: `उदाहरण: ₹10 लाख की हेल्थ पॉलिसी के लिए ₹12,000 सालाना प्रीमियम देना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'free look period insurance', 'policy cancellation time', 'फ्री लुक अवधि क्या है'
        ],
        definition_en: `Free look period is the time frame (usually 15 days) during which you can cancel your new insurance policy for a full refund.`,
        example_en: `Example: Cancelling a health insurance policy within 14 days of purchase.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `फ्री लुक अवधि वह समय (आमतौर पर 15 दिन) होता है जब आप नई बीमा पॉलिसी को बिना नुकसान के रद्द कर सकते हैं।`,
        example_hi: `उदाहरण: पॉलिसी खरीदने के 14 दिनों के भीतर हेल्थ इंश्योरेंस रद्द करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy exclusion', 'insurance not covered', 'बीमा में क्या शामिल नहीं होता'
        ],
        definition_en: `Policy exclusions are conditions or events that are not covered by the insurance policy.`,
        example_en: `Example: Cosmetic surgery is excluded in most health insurance plans.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी में अपवर्जन वे स्थितियाँ होती हैं जो बीमा द्वारा कवर नहीं की जाती हैं।`,
        example_hi: `उदाहरण: अधिकतर हेल्थ पॉलिसियों में कॉस्मेटिक सर्जरी को कवर नहीं किया जाता।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance waiting period', 'policy delay period', 'वेटिंग पीरियड क्या होता है'
        ],
        definition_en: `Waiting period is the initial time span during which claims are not admissible for certain conditions.`,
        example_en: `Example: 2-year waiting period for pre-existing diseases in health insurance.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `वेटिंग पीरियड वह प्रारंभिक अवधि होती है जब कुछ बीमारियों के लिए क्लेम नहीं किया जा सकता।`,
        example_hi: `उदाहरण: हेल्थ इंश्योरेंस में प्री-एक्सिस्टिंग बीमारियों के लिए 2 साल का वेटिंग पीरियड।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance claim process', 'how to claim insurance', 'बीमा क्लेम कैसे करें'
        ],
        definition_en: `The insurance claim process is the formal request made to the insurance company for coverage or compensation.`,
        example_en: `Example: Submitting hospital bills and doctor's certificate to claim mediclaim.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा क्लेम प्रक्रिया वह औपचारिक अनुरोध है जो बीमा कंपनी से भुगतान के लिए किया जाता है।`,
        example_hi: `उदाहरण: मेडिक्लेम के लिए अस्पताल के बिल और डॉक्टर का प्रमाण पत्र जमा करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy document', 'insurance papers', 'पॉलिसी दस्तावेज क्या है'
        ],
        definition_en: `A policy document is the legal contract between the insurer and the insured stating terms, coverage, and conditions.`,
        example_en: `Example: Your motor insurance policy document outlines the IDV, coverage, and exclusions.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी दस्तावेज वह कानूनी अनुबंध है जो बीमाकर्ता और बीमित के बीच होता है, जिसमें शर्तें और कवरेज लिखी होती हैं।`,
        example_hi: `उदाहरण: मोटर बीमा दस्तावेज में कवरेज, IDV और अपवर्जन की जानकारी होती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance add-on', 'optional insurance covers', 'एड-ऑन कवर क्या होता है'
        ],
        definition_en: `Add-ons are additional covers you can include in your base policy for extended benefits at an extra premium.`,
        example_en: `Example: Adding zero depreciation cover in your car insurance.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `एड-ऑन कवर वह अतिरिक्त सुविधा है जिसे आप अपनी मूल बीमा पॉलिसी में अतिरिक्त प्रीमियम देकर जोड़ सकते हैं।`,
        example_hi: `उदाहरण: कार बीमा में ज़ीरो डिप्रिशिएशन कवर जोड़ना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy sum assured', 'insurance coverage amount', 'पॉलिसी में सम एश्योर्ड'
        ],
        definition_en: `Sum Assured is the guaranteed amount the insurer will pay to the policyholder or nominee.`,
        example_en: `Example: In term life insurance, ₹50 lakh is the sum assured payable on death.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `सम एश्योर्ड वह सुनिश्चित राशि है जो बीमा कंपनी द्वारा बीमित व्यक्ति या नामांकित को दी जाती है।`,
        example_hi: `उदाहरण: टर्म लाइफ इंश्योरेंस में ₹50 लाख की राशि मृत्यु पर दी जाती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance portability', 'switch policy company', 'पॉलिसी पोर्ट करना'
        ],
        definition_en: `Portability allows you to switch your policy from one insurer to another without losing benefits.`,
        example_en: `Example: Porting your health insurance from insurer A to B and retaining NCB.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पोर्टेबिलिटी का मतलब है कि आप अपनी बीमा पॉलिसी को एक कंपनी से दूसरी में बदल सकते हैं, बिना लाभ खोए।`,
        example_hi: `उदाहरण: हेल्थ इंश्योरेंस को कंपनी A से B में ट्रांसफर करना और NCB बरकरार रखना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance tax benefit', 'tax saving policy', 'बीमा में टैक्स लाभ'
        ],
        definition_en: `Many insurance policies provide tax deductions under Section 80C or 80D of the Income Tax Act.`,
        example_en: `Example: Health insurance premium up to ₹25,000 is eligible under 80D.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `कई बीमा पॉलिसियों पर इनकम टैक्स एक्ट की धारा 80C या 80D के तहत टैक्स छूट मिलती है।`,
        example_hi: `उदाहरण: हेल्थ इंश्योरेंस प्रीमियम ₹25,000 तक 80D के तहत टैक्स फ्री है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance rider meaning', 'what is rider in insurance', 'राइडर बीमा में क्या होता है'
        ],
        definition_en: `A rider is an additional benefit that can be attached to your base insurance policy for enhanced coverage.`,
        example_en: `Example: Adding a critical illness rider to your life insurance policy.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `राइडर एक अतिरिक्त लाभ है जिसे आपकी मूल बीमा पॉलिसी में जोड़ा जा सकता है ताकि अतिरिक्त सुरक्षा मिल सके।`,
        example_hi: `उदाहरण: जीवन बीमा पॉलिसी में क्रिटिकल इलनेस राइडर जोड़ना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'grace period in insurance', 'insurance late payment days', 'बीमा ग्रेस पीरियड क्या होता है'
        ],
        definition_en: `Grace period is the extra time (usually 15–30 days) given after premium due date to make payment without losing benefits.`,
        example_en: `Example: Paying your life insurance premium 10 days after the due date within the grace period.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ग्रेस पीरियड वह अतिरिक्त समय होता है (आमतौर पर 15–30 दिन), जब आप बीमा प्रीमियम देरी से चुका सकते हैं बिना लाभ खोए।`,
        example_hi: `उदाहरण: लाइफ इंश्योरेंस का प्रीमियम नियत तिथि के 10 दिन बाद ग्रेस पीरियड में भरना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'cashless insurance', 'how cashless policy works', 'कैशलेस बीमा कैसे काम करता है'
        ],
        definition_en: `Cashless insurance allows you to get treatment at network hospitals without paying upfront, as insurer settles directly.`,
        example_en: `Example: Under a cashless mediclaim, the insurer directly pays the hospital bills.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `कैशलेस बीमा में आप नेटवर्क अस्पताल में बिना भुगतान किए इलाज करा सकते हैं, भुगतान बीमा कंपनी करती है।`,
        example_hi: `उदाहरण: कैशलेस मेडिक्लेम में बीमा कंपनी अस्पताल का बिल सीधे चुकाती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'reimbursement insurance claim', 'बीमा में रिइम्बर्समेंट क्लेम', 'reimbursement policy claim process'
        ],
        definition_en: `Reimbursement insurance requires you to pay bills first and then claim compensation from the insurer.`,
        example_en: `Example: Paying hospital charges yourself and later submitting documents for reimbursement.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `रिइम्बर्समेंट क्लेम में पहले आप खर्च का भुगतान करते हैं और फिर बीमा कंपनी से राशि वापस लेते हैं।`,
        example_hi: `उदाहरण: पहले अस्पताल का भुगतान करना और बाद में क्लेम डॉक्युमेंट जमा कर रिइम्बर्समेंट लेना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance policy lapse', 'what is policy lapse', 'बीमा पॉलिसी लैप्स क्या होती है'
        ],
        definition_en: `A policy lapses when you fail to pay the premium within the due and grace period, leading to loss of coverage.`,
        example_en: `Example: Life insurance lapsed due to non-payment beyond the grace period.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `जब आप प्रीमियम नियत और ग्रेस पीरियड में नहीं भरते, तब पॉलिसी लैप्स हो जाती है और कवरेज समाप्त हो जाता है।`,
        example_hi: `उदाहरण: समय पर भुगतान नहीं करने पर जीवन बीमा पॉलिसी लैप्स हो गई।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'revival of lapsed policy', 'how to reactivate policy', 'लैप्स पॉलिसी को दोबारा चालू कैसे करें'
        ],
        definition_en: `A lapsed insurance policy can be revived within a specific time by paying overdue premiums and possibly undergoing medicals.`,
        example_en: `Example: Reviving a lapsed term plan by paying missed premium and submitting health certificate.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लैप्स बीमा पॉलिसी को कुछ समय के भीतर बकाया प्रीमियम और जरूरी मेडिकल चेकअप देकर फिर से चालू किया जा सकता है।`,
        example_hi: `उदाहरण: टर्म प्लान का प्रीमियम भरकर और हेल्थ सर्टिफिकेट देकर पॉलिसी रिवाइव करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'term insurance meaning', 'what is term plan', 'टर्म इंश्योरेंस क्या है'
        ],
        definition_en: `Term insurance is a life insurance plan that offers financial protection for a fixed period against death risk only.`,
        example_en: `Example: A ₹1 crore term plan provides life cover for 30 years at low premium.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `टर्म इंश्योरेंस एक जीवन बीमा पॉलिसी है जो एक निश्चित समय के लिए केवल मृत्यु के जोखिम को कवर करती है।`,
        example_hi: `उदाहरण: ₹1 करोड़ का टर्म प्लान 30 वर्षों के लिए जीवन सुरक्षा देता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'whole life insurance', 'what is whole life policy', 'होल लाइफ पॉलिसी क्या है'
        ],
        definition_en: `Whole life insurance covers the insured for their entire lifetime and pays the death benefit anytime death occurs.`,
        example_en: `Example: A whole life policy that offers coverage till age 99 with bonus benefits.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `होल लाइफ बीमा पॉलिसी आजीवन कवरेज देती है और मृत्यु के समय बीमा राशि का भुगतान होता है।`,
        example_hi: `उदाहरण: 99 वर्ष की उम्र तक कवरेज देने वाली बीमा पॉलिसी।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'ULIP plan meaning', 'unit linked insurance plan', 'ULIP क्या होता है'
        ],
        definition_en: `ULIP (Unit Linked Insurance Plan) combines life insurance with investment in equity or debt funds.`,
        example_en: `Example: ULIP with ₹1 lakh yearly premium splits into ₹50K insurance and ₹50K investment in equity fund.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ULIP एक ऐसा बीमा प्लान है जिसमें जीवन बीमा के साथ-साथ इक्विटी या डेट फंड में निवेश किया जाता है।`,
        example_hi: `उदाहरण: ₹1 लाख के प्रीमियम में ₹50,000 बीमा और ₹50,000 निवेश किया जाता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance for NRIs', 'NRI policy options', 'एनआरआई बीमा विकल्प'
        ],
        definition_en: `NRIs (Non-Resident Indians) can buy insurance policies in India for themselves and their families, subject to KYC norms.`,
        example_en: `Example: An NRI buying a term plan from LIC for their family in India.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `एनआरआई (अनिवासी भारतीय) भारत में अपने या परिवार के लिए बीमा पॉलिसी खरीद सकते हैं, लेकिन KYC नियमों का पालन आवश्यक है।`,
        example_hi: `उदाहरण: एक एनआरआई भारत में अपनी फैमिली के लिए LIC से टर्म प्लान खरीदता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'child insurance policy', 'insurance for children', 'बच्चों के लिए बीमा', 'चाइल्ड इंश्योरेंस प्लान'
        ],
        definition_en: `Child insurance policies are designed to provide financial support for your child's education and future goals.`,
        example_en: `Example: Buying a child plan that pays out lump sum when the child turns 18.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `चाइल्ड इंश्योरेंस पॉलिसी आपके बच्चे की शिक्षा और भविष्य की जरूरतों के लिए वित्तीय सहायता प्रदान करती है।`,
        example_hi: `उदाहरण: एक ऐसा प्लान खरीदना जो बच्चे के 18 वर्ष के होने पर एकमुश्त राशि दे।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'group insurance plan', 'what is group insurance', 'ग्रुप बीमा क्या है', 'समूह बीमा योजना'
        ],
        definition_en: `Group insurance provides coverage to a group of people under one master policy, often by employers to employees.`,
        example_en: `Example: A company offering group health insurance to all its staff.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ग्रुप बीमा एक मास्टर पॉलिसी के तहत कई लोगों को एक साथ कवर करता है, जैसे कि कंपनियाँ अपने कर्मचारियों को देती हैं।`,
        example_hi: `उदाहरण: एक कंपनी अपने सभी कर्मचारियों को ग्रुप हेल्थ इंश्योरेंस देती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'marine insurance', 'what is marine insurance', 'मरीन बीमा क्या है', 'नौवहन बीमा'
        ],
        definition_en: `Marine insurance covers the loss or damage to ships, cargo, and transport during transit by sea or other means.`,
        example_en: `Example: A shipping company insuring cargo during international transit.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `मरीन बीमा समुद्र या अन्य मार्गों से परिवहन के दौरान जहाज, माल या वस्तुओं को होने वाले नुकसान को कवर करता है।`,
        example_hi: `उदाहरण: एक शिपिंग कंपनी जो अपने माल को अंतरराष्ट्रीय ट्रांजिट के दौरान बीमा कराती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'fire insurance policy', 'what is fire insurance', 'आग बीमा क्या है', 'फायर इंश्योरेंस'
        ],
        definition_en: `Fire insurance provides coverage for damage or loss caused by fire to property or goods.`,
        example_en: `Example: A business insuring its warehouse against fire damage.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `फायर इंश्योरेंस संपत्ति या वस्तुओं को आग से होने वाले नुकसान को कवर करता है।`,
        example_hi: `उदाहरण: एक व्यवसाय जो अपने गोदाम को आग से होने वाले नुकसान के लिए बीमा कराता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance coverage amount', 'how much insurance cover needed', 'कवरेज राशि कितनी होनी चाहिए'
        ],
        definition_en: `The insurance coverage amount should be enough to cover your liabilities and support your dependents.`,
        example_en: `Example: Choosing a ₹1 crore term plan if you have loans and dependents.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा कवरेज राशि इतनी होनी चाहिए कि वह आपकी जिम्मेदारियों और आश्रितों की आवश्यकताओं को पूरा कर सके।`,
        example_hi: `उदाहरण: यदि आपके पास लोन और आश्रित हैं तो ₹1 करोड़ का टर्म प्लान लेना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy nomination', 'what is nominee in insurance', 'बीमा नामांकन', 'बीमा में नामांकित व्यक्ति'
        ],
        definition_en: `Nomination in insurance allows you to choose a person who will receive the policy benefits in case of your death.`,
        example_en: `Example: Naming your spouse as nominee in a life insurance policy.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा में नामांकन का मतलब है, किसी व्यक्ति को चुनना जो आपकी मृत्यु के बाद पॉलिसी का लाभ प्राप्त करेगा।`,
        example_hi: `उदाहरण: जीवन बीमा में अपने जीवनसाथी को नामांकित करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'claim rejection reasons', 'why insurance claim rejected', 'क्लेम रिजेक्शन कारण', 'बीमा क्लेम रिजेक्ट क्यों होता है'
        ],
        definition_en: `Claims may be rejected due to non-disclosure, incorrect information, lapse in policy, or excluded conditions.`,
        example_en: `Example: A claim rejected due to undeclared pre-existing illness.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `क्लेम रिजेक्ट होने के कारण हो सकते हैं – जानकारी छिपाना, गलत जानकारी देना, पॉलिसी लैप्स होना या एक्सक्लूडेड स्थिति।`,
        example_hi: `उदाहरण: पहले से मौजूद बीमारी छिपाने पर क्लेम रिजेक्ट होना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance policy benefits', 'बीमा के फायदे', 'insurance advantages'
        ],
        definition_en: `Insurance provides financial security, risk coverage, peace of mind, and tax benefits under applicable laws.`,
        example_en: `Example: Claiming tax deduction under Section 80C for life insurance.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा वित्तीय सुरक्षा, जोखिम कवर, मानसिक शांति और टैक्स लाभ प्रदान करता है।`,
        example_hi: `उदाहरण: जीवन बीमा पर धारा 80C के तहत टैक्स छूट लेना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'surrender value in policy', 'what is surrender value', 'बीमा सरेंडर वैल्यू क्या है'
        ],
        definition_en: `Surrender value is the amount you receive if you terminate your insurance policy before maturity.`,
        example_en: `Example: Getting ₹50,000 back if you surrender a policy after 5 years.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `सरेंडर वैल्यू वह राशि होती है जो आपको पॉलिसी को परिपक्वता से पहले समाप्त करने पर मिलती है।`,
        example_hi: `उदाहरण: 5 साल बाद पॉलिसी सरेंडर करने पर ₹50,000 मिलना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy maturity benefit', 'maturity in insurance', 'पॉलिसी मैच्योरिटी लाभ', 'बीमा परिपक्वता'
        ],
        definition_en: `Maturity benefit is the amount paid to the policyholder at the end of the policy term, provided all premiums are paid.`,
        example_en: `Example: Getting ₹10 lakh after 20 years on maturity of an endowment plan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `मैच्योरिटी लाभ वह राशि होती है जो पॉलिसी अवधि पूरी होने पर बीमाधारक को मिलती है, यदि सभी प्रीमियम समय पर भरे गए हों।`,
        example_hi: `उदाहरण: 20 साल की एंडोमेंट पॉलिसी पर ₹10 लाख का भुगतान।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'top-up insurance cover', 'top-up health insurance', 'टॉप-अप इंश्योरेंस', 'बीमा में टॉपअप क्या होता है'
        ],
        definition_en: `Top-up insurance is additional coverage over your existing policy when basic sum insured is exhausted.`,
        example_en: `Example: Having ₹5 lakh basic health cover and ₹10 lakh top-up cover.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `टॉप-अप बीमा आपके मौजूदा बीमा कवरेज के ऊपर अतिरिक्त सुरक्षा प्रदान करता है जब मूल राशि समाप्त हो जाती है।`,
        example_hi: `उदाहरण: ₹5 लाख बेसिक कवर और ₹10 लाख टॉप-अप हेल्थ कवर।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy exclusions', 'insurance exclusions', 'बीमा में क्या कवर नहीं होता', 'बीमा अपवाद'
        ],
        definition_en: `Exclusions are specific conditions or situations that are not covered by an insurance policy.`,
        example_en: `Example: Suicide within one year is excluded from most life insurance policies.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `अपवाद वे स्थितियाँ होती हैं जिन्हें बीमा पॉलिसी के तहत कवर नहीं किया जाता है।`,
        example_hi: `उदाहरण: जीवन बीमा में पहले साल में आत्महत्या कवर नहीं होती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy grace period', 'premium due grace period', 'ग्रेस पीरियड कब तक होता है'
        ],
        definition_en: `Grace period is the extra time given after the premium due date to pay without losing benefits.`,
        example_en: `Example: 30-day grace period on annual premium payment.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ग्रेस पीरियड वह अतिरिक्त समय होता है जो प्रीमियम तिथि के बाद भुगतान के लिए दिया जाता है, जिससे लाभ न खोएं।`,
        example_hi: `उदाहरण: वार्षिक प्रीमियम के लिए 30 दिन का ग्रेस पीरियड।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'what is claim ratio', 'claim settlement ratio explained', 'क्लेम सेटलमेंट रेशियो क्या होता है'
        ],
        definition_en: `Claim settlement ratio is the percentage of claims settled by an insurer out of total claims received.`,
        example_en: `Example: If an insurer settles 98 out of 100 claims, its CSR is 98%.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `क्लेम सेटलमेंट रेशियो वह प्रतिशत होता है जिसमें बीमा कंपनी ने कुल दावों में से कितने निपटाए।`,
        example_hi: `उदाहरण: अगर कंपनी 100 में से 98 दावे निपटाती है, तो उसका CSR 98% होगा।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'short term vs long term insurance', 'policy duration comparison', 'शॉर्ट टर्म बनाम लॉन्ग टर्म बीमा'
        ],
        definition_en: `Short-term insurance offers limited coverage for a short duration, while long-term policies offer sustained protection and returns.`,
        example_en: `Example: Travel insurance is short-term, life insurance is long-term.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `शॉर्ट टर्म बीमा कम समय के लिए सीमित सुरक्षा देता है, जबकि लॉन्ग टर्म पॉलिसी लंबी अवधि के लिए सुरक्षा और रिटर्न देती है।`,
        example_hi: `उदाहरण: ट्रैवल बीमा शॉर्ट टर्म है, जीवन बीमा लॉन्ग टर्म है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'term insurance vs endowment', 'difference between term and endowment plan', 'टर्म बनाम एंडोमेंट बीमा'
        ],
        definition_en: `Term insurance offers only risk cover, while endowment plans provide both life cover and maturity benefits.`,
        example_en: `Example: Endowment pays on survival or death, term pays only on death.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `टर्म बीमा केवल जोखिम कवर करता है, जबकि एंडोमेंट प्लान जीवन कवर के साथ-साथ परिपक्वता लाभ भी देता है।`,
        example_hi: `उदाहरण: एंडोमेंट योजना जीवित रहने या मृत्यु पर भुगतान करती है, टर्म केवल मृत्यु पर।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy lock-in period', 'lock-in in insurance', 'बीमा लॉक-इन अवधि क्या होती है'
        ],
        definition_en: `Lock-in period is the minimum time you must stay invested before exiting or withdrawing from the policy.`,
        example_en: `Example: ULIPs have a 5-year lock-in period.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लॉक-इन अवधि वह न्यूनतम समय होती है जिसमें आप पॉलिसी से बाहर नहीं निकल सकते या धन नहीं निकाल सकते।`,
        example_hi: `उदाहरण: ULIP में 5 वर्ष का लॉक-इन होता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'add-on covers in insurance', 'popular insurance riders', 'बीमा के ऐड-ऑन', 'राइडर विकल्प'
        ],
        definition_en: `Add-ons or riders are optional benefits that enhance the scope of the base policy for extra premium.`,
        example_en: `Example: Critical illness rider, accidental death rider.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ऐड-ऑन या राइडर ऐसे वैकल्पिक लाभ हैं जो अतिरिक्त प्रीमियम पर मूल पॉलिसी की सुरक्षा बढ़ाते हैं।`,
        example_hi: `उदाहरण: क्रिटिकल इलनेस राइडर, एक्सीडेंटल डेथ राइडर।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy assignment', 'assigning insurance policy', 'बीमा पॉलिसी असाइनमेंट', 'बीमा ट्रांसफर कैसे करें'
        ],
        definition_en: `Policy assignment is the legal transfer of rights under an insurance policy to another person or entity.`,
        example_en: `Example: Assigning life insurance to a bank as loan collateral.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा पॉलिसी का असाइनमेंट एक कानूनी प्रक्रिया है जिसके तहत बीमा के अधिकार किसी अन्य व्यक्ति या संस्था को हस्तांतरित किए जाते हैं।`,
        example_hi: `उदाहरण: लोन के लिए बीमा को बैंक को गिरवी रखना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'nominee in insurance', 'insurance nominee rules', 'बीमा में नॉमिनी कौन होता है', 'पॉलिसी नॉमिनी जानकारी'
        ],
        definition_en: `A nominee is the person appointed by the policyholder to receive the policy benefits in case of their death.`,
        example_en: `Example: Appointing a spouse or child as nominee in a life insurance policy.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `नॉमिनी वह व्यक्ति होता है जिसे बीमाधारक अपनी मृत्यु की स्थिति में पॉलिसी का लाभ प्राप्त करने के लिए नियुक्त करता है।`,
        example_hi: `उदाहरण: जीवन बीमा पॉलिसी में पत्नी या बच्चे को नॉमिनी बनाना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy surrender', 'how to surrender insurance', 'बीमा सरेंडर प्रक्रिया', 'बीमा पॉलिसी सरेंडर करें'
        ],
        definition_en: `Policy surrender means terminating your insurance before maturity and receiving a surrender value (if applicable).`,
        example_en: `Example: Surrendering an endowment plan after 5 years for partial return.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी सरेंडर का अर्थ है कि आप अपनी बीमा पॉलिसी को परिपक्वता से पहले समाप्त कर देते हैं और (यदि लागू हो) समर्पण मूल्य प्राप्त करते हैं।`,
        example_hi: `उदाहरण: 5 साल बाद एंडोमेंट पॉलिसी सरेंडर कर आंशिक राशि प्राप्त करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy lapse meaning', 'what happens if policy lapses', 'बीमा लैप्स क्या है', 'पॉलिसी लैप्स के बाद क्या होता है'
        ],
        definition_en: `A lapsed policy is one where premium payments have not been made within the due and grace periods, causing loss of coverage.`,
        example_en: `Example: Missing 3 months of payment and policy becomes inactive.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लैप्स पॉलिसी वह होती है जिसमें निर्धारित समय और ग्रेस पीरियड के अंदर प्रीमियम नहीं भरा गया हो, जिससे कवर समाप्त हो जाता है।`,
        example_hi: `उदाहरण: 3 महीने प्रीमियम नहीं भरने से पॉलिसी निष्क्रिय हो जाती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'revival of lapsed policy', 'how to revive insurance', 'लैप्स बीमा दोबारा शुरू कैसे करें', 'बीमा पुनर्जीवन'
        ],
        definition_en: `Policy revival means reinstating a lapsed policy by paying pending premiums and revival fees within a specified time.`,
        example_en: `Example: Reviving life insurance by paying 6-month dues and medical check-up.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी पुनर्जीवन का अर्थ है कि आप एक लैप्स हो चुकी पॉलिसी को लंबित प्रीमियम और शुल्क जमा करके दोबारा सक्रिय कर सकते हैं।`,
        example_hi: `उदाहरण: 6 महीने की बकाया राशि और मेडिकल परीक्षण के साथ जीवन बीमा पुनर्जीवित करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy document importance', 'why policy bond matters', 'बीमा दस्तावेज़ का महत्व', 'पॉलिसी पेपर क्या होता है'
        ],
        definition_en: `A policy document (bond) is the legal proof of your insurance agreement containing all terms, conditions, and benefits.`,
        example_en: `Example: The policy bond has your coverage details, sum insured, and nominee info.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी दस्तावेज़ (बॉन्ड) वह कानूनी प्रमाण होता है जो आपकी बीमा शर्तों, लाभों और नियमों को दर्शाता है।`,
        example_hi: `उदाहरण: पॉलिसी बॉन्ड में बीमा राशि, लाभ, और नॉमिनी की जानकारी होती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'unit linked insurance plan', 'ULIP meaning', 'यूलिप क्या होता है', 'यूनिट लिंक्ड बीमा'
        ],
        definition_en: `ULIPs are hybrid plans that offer both insurance and investment. A part of the premium is invested in market funds.`,
        example_en: `Example: Investing ₹10,000/month in ULIP gives life cover and market-linked growth.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `यूलिप (ULIP) ऐसी पॉलिसी होती है जो बीमा के साथ-साथ निवेश का विकल्प भी देती है। इसका एक हिस्सा शेयर बाजार में निवेश होता है।`,
        example_hi: `उदाहरण: ₹10,000 प्रति माह यूलिप में निवेश करने पर बीमा और निवेश दोनों लाभ मिलते हैं।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance endorsement', 'policy correction or change', 'बीमा में बदलाव', 'एंडोर्समेंट क्या होता है'
        ],
        definition_en: `Endorsement in insurance refers to changes or additions made to the original policy terms, like address update or nominee change.`,
        example_en: `Example: Adding spouse as nominee using endorsement request.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा में एंडोर्समेंट का मतलब है कि मूल पॉलिसी में कोई बदलाव या अतिरिक्त जानकारी दर्ज करना, जैसे पता बदलना या नॉमिनी बदलना।`,
        example_hi: `उदाहरण: पत्नी को नॉमिनी बनाने के लिए एंडोर्समेंट करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'survival benefit meaning', 'survival payout in policy', 'बीमा सर्वाइवल बेनिफिट क्या है'
        ],
        definition_en: `Survival benefit is a periodic payment to the policyholder if they survive certain milestones during the policy term.`,
        example_en: `Example: ₹1 lakh paid every 5 years in a 20-year money-back plan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `सर्वाइवल बेनिफिट वह राशि होती है जो बीमाधारक को पॉलिसी अवधि के दौरान कुछ निश्चित समय पर जीवित रहने पर मिलती है।`,
        example_hi: `उदाहरण: मनी बैक पॉलिसी में हर 5 साल पर ₹1 लाख मिलना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'what is insurance proposal form', 'proposal form in insurance', 'बीमा प्रस्ताव फॉर्म क्या होता है'
        ],
        definition_en: `A proposal form is the official application form filled by the buyer providing personal and risk-related details before issuing a policy.`,
        example_en: `Example: Filling health history and occupation while buying health insurance.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `प्रस्ताव फॉर्म वह दस्तावेज़ होता है जिसे बीमा खरीदने वाला व्यक्ति भरता है, जिसमें उसकी व्यक्तिगत और जोखिम संबंधी जानकारी होती है।`,
        example_hi: `उदाहरण: हेल्थ इंश्योरेंस लेते समय हेल्थ हिस्ट्री और पेशा भरना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance rider options', 'types of insurance riders', 'बीमा राइडर विकल्प', 'ऐड-ऑन राइडर क्या होता है'
        ],
        definition_en: `Insurance riders are optional benefits added to enhance the base coverage of a policy for specific risks.`,
        example_en: `Example: Accidental death rider or waiver of premium rider.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा राइडर अतिरिक्त लाभ होते हैं जिन्हें विशेष जोखिमों के लिए मूल पॉलिसी में जोड़ा जा सकता है।`,
        example_hi: `उदाहरण: एक्सीडेंटल डेथ राइडर या प्रीमियम माफी राइडर।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'difference between term and endowment plan', 'term plan vs endowment', 'term policy और endowment में फर्क', 'टर्म प्लान बनाम एंडोमेंट'
        ],
        definition_en: `Term plans offer pure life cover with no maturity benefit, while endowment plans offer both insurance and savings.`,
        example_en: `Example: Term plan gives ₹1 crore on death; endowment plan gives ₹1 crore or savings if alive at maturity.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `टर्म प्लान केवल जीवन बीमा सुरक्षा देता है और मैच्योरिटी पर कुछ नहीं मिलता, जबकि एंडोमेंट प्लान बीमा के साथ बचत भी देता है।`,
        example_hi: `उदाहरण: टर्म प्लान में मृत्यु पर ₹1 करोड़; एंडोमेंट प्लान में मृत्यु या मैच्योरिटी पर ₹1 करोड़ या बचत मिलती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy premium payment methods', 'how to pay insurance premium', 'प्रीमियम कैसे भरें', 'बीमा प्रीमियम भुगतान विकल्प'
        ],
        definition_en: `Insurance premiums can be paid through online banking, UPI, debit/credit cards, cheque, or auto-debit (ECS).`,
        example_en: `Example: Setting auto-debit through your bank to avoid missing payments.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा प्रीमियम का भुगतान ऑनलाइन बैंकिंग, यूपीआई, डेबिट/क्रेडिट कार्ड, चेक या ऑटो डेबिट (ECS) से किया जा सकता है।`,
        example_hi: `उदाहरण: समय पर भुगतान के लिए बैंक से ऑटो-डेबिट सेट करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'grace period in insurance', 'insurance grace days', 'बीमा ग्रेस पीरियड', 'ग्रेस अवधि क्या होती है'
        ],
        definition_en: `Grace period is the extra time given after the premium due date during which you can pay without policy lapse.`,
        example_en: `Example: Life insurance offers 30 days of grace after due date.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ग्रेस पीरियड वह अतिरिक्त समय होता है जो प्रीमियम की नियत तिथि के बाद भुगतान के लिए दिया जाता है जिससे पॉलिसी लैप्स न हो।`,
        example_hi: `उदाहरण: जीवन बीमा में ड्यू डेट के बाद 30 दिन का ग्रेस पीरियड होता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance cooling off period', 'insurance free look period', 'फ्री लुक पीरियड बीमा', 'बीमा रद्द करने की अवधि'
        ],
        definition_en: `Free-look period is the time (usually 15 days) during which you can cancel the policy after receiving documents.`,
        example_en: `Example: Canceling a policy within 15 days if you disagree with terms.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `फ्री-लुक पीरियड वह समय होता है (आमतौर पर 15 दिन), जिसमें आप पॉलिसी दस्तावेज़ प्राप्त करने के बाद उसे रद्द कर सकते हैं।`,
        example_hi: `उदाहरण: शर्तों से असहमति होने पर 15 दिन में पॉलिसी रद्द करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'top up in insurance', 'top up policy meaning', 'बीमा टॉप-अप पॉलिसी', 'अतिरिक्त बीमा कवर'
        ],
        definition_en: `Top-up insurance is an additional coverage purchased over the base policy to increase total sum insured.`,
        example_en: `Example: Buying ₹10 lakh top-up on ₹5 lakh health insurance plan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `टॉप-अप पॉलिसी वह अतिरिक्त बीमा होती है जो मौजूदा बीमा राशि से अधिक कवर के लिए ली जाती है।`,
        example_hi: `उदाहरण: ₹5 लाख की हेल्थ पॉलिसी पर ₹10 लाख का टॉप-अप लेना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'claim repudiation in insurance', 'claim rejection reasons', 'बीमा क्लेम रिजेक्शन', 'क्लेम अस्वीकृति कारण'
        ],
        definition_en: `Claim repudiation occurs when an insurer rejects a claim due to non-disclosure, fraud, or policy violations.`,
        example_en: `Example: Claim rejected for hiding pre-existing condition.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `जब बीमा कंपनी किसी क्लेम को अस्वीकार करती है, जैसे गलत जानकारी या शर्तों का उल्लंघन, तो उसे क्लेम रिप्युटेशन कहा जाता है।`,
        example_hi: `उदाहरण: पूर्व-निदान बीमारी छिपाने पर क्लेम रिजेक्ट हो सकता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance claim documents', 'documents needed for claim', 'क्लेम के लिए दस्तावेज़', 'बीमा क्लेम फॉर्म'
        ],
        definition_en: `To process a claim, insurers usually require a filled claim form, ID proof, policy copy, and relevant bills or certificates.`,
        example_en: `Example: Submitting discharge summary and hospital bills for health insurance claim.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा क्लेम के लिए आमतौर पर क्लेम फॉर्म, पहचान पत्र, पॉलिसी कॉपी और संबंधित बिल या प्रमाणपत्र चाहिए होते हैं।`,
        example_hi: `उदाहरण: हेल्थ क्लेम के लिए डिस्चार्ज समरी और अस्पताल बिल जमा करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance claim settlement process', 'how claim is settled', 'क्लेम सेटलमेंट प्रक्रिया', 'बीमा क्लेम प्रक्रिया'
        ],
        definition_en: `Claim settlement involves verifying the claim, checking documents, and releasing payment if found valid.`,
        example_en: `Example: Claim settled within 7 days after document submission.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा क्लेम सेटलमेंट प्रक्रिया में दस्तावेजों की जांच कर, क्लेम सत्यापित कर भुगतान किया जाता है।`,
        example_hi: `उदाहरण: दस्तावेज़ जमा करने के 7 दिन बाद क्लेम सेटल होना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'what is sum assured', 'sum insured vs sum assured', 'बीमा राशि क्या है', 'सम एश्योर्ड का अर्थ'
        ],
        definition_en: `Sum assured is the guaranteed amount that the insurer agrees to pay on claim or maturity.`,
        example_en: `Example: A term plan with ₹50 lakh sum assured means ₹50 lakh on death.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `सम एश्योर्ड वह निश्चित राशि होती है जो बीमा कंपनी क्लेम या परिपक्वता पर देने का वादा करती है।`,
        example_hi: `उदाहरण: ₹50 लाख सम एश्योर्ड का मतलब मृत्यु पर ₹50 लाख मिलेंगे।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy term meaning', 'insurance term duration', 'पॉलिसी की अवधि', 'बीमा अवधि क्या होती है'
        ],
        definition_en: `Policy term is the total duration during which the insurance policy remains active and offers coverage.`,
        example_en: `Example: A 20-year term policy provides life cover for 20 years.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी की अवधि वह समय होता है जब तक बीमा कवर सक्रिय रहता है और लाभ प्रदान करता है।`,
        example_hi: `उदाहरण: 20 साल की टर्म पॉलिसी अगले 20 वर्षों तक जीवन कवर देती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'lapsed policy meaning', 'what is a lapsed policy', 'बीमा लैप्स हो गया', 'पॉलिसी लैप्स क्या है'
        ],
        definition_en: `A lapsed policy is one where premium was not paid within due date or grace period, causing the policy benefits to stop.`,
        example_en: `Example: Life policy lapses if premium is not paid within 30 days of due date.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `जब प्रीमियम नियत तिथि या ग्रेस पीरियड में जमा नहीं होता है, तो पॉलिसी लैप्स हो जाती है और उसके लाभ रुक जाते हैं।`,
        example_hi: `उदाहरण: 30 दिन के अंदर प्रीमियम न भरने पर जीवन बीमा पॉलिसी लैप्स हो सकती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'revival of lapsed policy', 'how to revive lapsed insurance', 'लैप्स बीमा दोबारा चालू कैसे करें', 'बीमा रिवाइवल प्रक्रिया'
        ],
        definition_en: `Revival is the process of reactivating a lapsed policy by paying due premiums with interest and fulfilling health requirements.`,
        example_en: `Example: Paying 6 months of pending premiums and medical test to revive a lapsed term plan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लैप्स हुई पॉलिसी को पुनः सक्रिय करने के लिए बकाया प्रीमियम, ब्याज के साथ जमा करना और स्वास्थ्य संबंधी शर्तें पूरी करनी होती हैं।`,
        example_hi: `उदाहरण: 6 महीने का बकाया प्रीमियम और मेडिकल टेस्ट देकर टर्म प्लान को दोबारा चालू करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'nominee in insurance', 'who is a nominee in policy', 'बीमा में नॉमिनी कौन होता है', 'नॉमिनी का अर्थ'
        ],
        definition_en: `A nominee is the person chosen by the policyholder to receive the policy benefit in case of the policyholder's death.`,
        example_en: `Example: Appointing spouse as nominee in life insurance.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `नॉमिनी वह व्यक्ति होता है जिसे बीमा पॉलिसीधारक की मृत्यु के बाद पॉलिसी का लाभ मिलता है।`,
        example_hi: `उदाहरण: जीवन बीमा में पत्नी को नॉमिनी बनाना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'can nominee be changed', 'change insurance nominee', 'नॉमिनी बदलना', 'बीमा में नामांकित व्यक्ति कैसे बदलें'
        ],
        definition_en: `Yes, nominee details can be changed anytime during the policy tenure by submitting a request to the insurer.`,
        example_en: `Example: Changing nominee from parent to spouse after marriage.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `हां, पॉलिसी अवधि के दौरान बीमा कंपनी को अनुरोध देकर नॉमिनी बदला जा सकता है।`,
        example_hi: `उदाहरण: शादी के बाद नॉमिनी को माता-पिता से बदलकर जीवनसाथी बनाना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy rider meaning', 'what is rider in insurance', 'बीमा राइडर क्या होता है', 'ऐड‑ऑन कवर क्या होता है'
        ],
        definition_en: `A rider is an additional benefit added to the base insurance policy for enhanced protection, usually at extra cost.`,
        example_en: `Example: Adding critical illness rider to a term plan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `राइडर एक अतिरिक्त लाभ होता है जिसे मुख्य बीमा पॉलिसी में जोड़ा जाता है, सामान्यतः अतिरिक्त प्रीमियम पर।`,
        example_hi: `उदाहरण: टर्म प्लान में क्रिटिकल इलनेस राइडर जोड़ना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'how to add rider in insurance', 'बीमा में राइडर कैसे जोड़ें', 'add-on cover add कैसे करें', 'राइडर जोड़ने की प्रक्रिया'
        ],
        definition_en: `You can add a rider either at the time of buying the policy or during renewal by informing your insurer.`,
        example_en: `Example: Adding accidental death rider during policy renewal.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `आप पॉलिसी खरीदते समय या नवीनीकरण के दौरान बीमा कंपनी को सूचित करके राइडर जोड़ सकते हैं।`,
        example_hi: `उदाहरण: नवीनीकरण के समय एक्सीडेंटल डेथ राइडर जोड़ना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'what is insurance loading', 'premium loading meaning', 'लोडिंग क्या है बीमा में', 'बीमा प्रीमियम में लोडिंग'
        ],
        definition_en: `Loading is an additional charge added to the premium due to higher risk, like pre-existing illness or age.`,
        example_en: `Example: Higher premium for a smoker due to loading.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लोडिंग वह अतिरिक्त शुल्क होता है जो बीमा प्रीमियम में जोखिम के कारण जोड़ा जाता है जैसे पहले से बीमारी या अधिक उम्र।`,
        example_hi: `उदाहरण: धूम्रपान करने वाले व्यक्ति के लिए लोडिंग के कारण अधिक प्रीमियम।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'GST on insurance premiums', 'insurance GST rates', 'बीमा पर जीएसटी', 'प्रीमियम पर टैक्स'
        ],
        definition_en: `GST is applicable on insurance premiums. For life insurance, it’s usually 18% on risk portion and 4.5% on first year premiums.`,
        example_en: `Example: Paying ₹1180 for a ₹1000 term premium due to GST.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा प्रीमियम पर जीएसटी लागू होता है। जीवन बीमा पर यह आमतौर पर जोखिम हिस्से पर 18% और पहले वर्ष के प्रीमियम पर 4.5% होता है।`,
        example_hi: `उदाहरण: ₹1000 टर्म प्रीमियम पर ₹180 जीएसटी जोड़कर ₹1180 भुगतान।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'can I have multiple policies', 'multiple insurance policies', 'क्या एक से अधिक बीमा ले सकते हैं', 'बीमा पॉलिसी एक से ज्यादा'
        ],
        definition_en: `Yes, you can hold multiple insurance policies from the same or different insurers to enhance your coverage.`,
        example_en: `Example: Holding two health insurance plans from different companies.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `हां, आप एक या एक से अधिक बीमा कंपनियों से कई पॉलिसियां रख सकते हैं ताकि कवरेज बढ़े।`,
        example_hi: `उदाहरण: दो अलग-अलग कंपनियों से हेल्थ बीमा लेना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance portability eligibility', 'पॉलिसी पोर्ट करने के नियम', 'insurance transfer rules', 'बीमा पोर्ट प्रक्रिया'
        ],
        definition_en: `Insurance portability allows you to transfer your existing policy to a new insurer with continuity benefits like waiting periods.`,
        example_en: `Example: Porting a mediclaim from Insurer A to B while retaining 2-year waiting benefit.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा पोर्टेबिलिटी का मतलब है कि आप अपनी मौजूदा पॉलिसी को दूसरी कंपनी में ट्रांसफर कर सकते हैं, और पुराने लाभ जैसे वेटिंग पीरियड को जारी रख सकते हैं।`,
        example_hi: `उदाहरण: दो साल की वेटिंग सुविधा के साथ मेडिकल पॉलिसी को A से B बीमा कंपनी में पोर्ट करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'what is grace period in insurance', 'insurance grace time', 'grace period policy', 'बीमा में ग्रेस पीरियड क्या होता है', 'पॉलिसी ग्रेस अवधि'
        ],
        definition_en: `Grace period is the extra time given after the premium due date during which you can pay the premium without losing policy benefits.`,
        example_en: `Example: Life insurance policies usually have a 30-day grace period after due date.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ग्रेस पीरियड वह अतिरिक्त समय होता है जो प्रीमियम की नियत तिथि के बाद भुगतान के लिए दिया जाता है ताकि पॉलिसी के लाभ न छिनें।`,
        example_hi: `उदाहरण: जीवन बीमा में आमतौर पर 30 दिन का ग्रेस पीरियड होता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'difference between insurance policy and plan', 'पॉलिसी और प्लान में अंतर', 'बीमा पॉलिसी बनाम प्लान'
        ],
        definition_en: `A policy is the legal document of your coverage, while a plan is the product offered by the insurer which can have multiple policies.`,
        example_en: `Example: LIC’s Jeevan Anand is a plan; your individual document is the policy.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी बीमा का कानूनी दस्तावेज है, जबकि प्लान बीमा कंपनी का उत्पाद है जिसमें कई पॉलिसियां हो सकती हैं।`,
        example_hi: `उदाहरण: LIC की जीवन आनंद एक प्लान है, और आपकी व्यक्तिगत कॉपी पॉलिसी कहलाती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'surrender value meaning', 'what is surrender value', 'policy surrender benefits', 'सरेंडर वैल्यू क्या होती है', 'बीमा सरेंडर करना'
        ],
        definition_en: `Surrender value is the amount payable to the policyholder if they terminate the policy before maturity.`,
        example_en: `Example: Getting ₹30,000 surrender value after 5 years of premium payments.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `सरेंडर वैल्यू वह राशि है जो पॉलिसीधारक को पॉलिसी समय से पहले बंद करने पर मिलती है।`,
        example_hi: `उदाहरण: 5 साल प्रीमियम भरने के बाद ₹30,000 की सरेंडर वैल्यू मिलना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy maturity benefit', 'insurance maturity return', 'बीमा पर मैच्योरिटी बेनिफिट', 'पॉलिसी का मैच्योर रिटर्न'
        ],
        definition_en: `Maturity benefit is the lump sum amount paid by the insurer when the policy term ends, provided all premiums are paid.`,
        example_en: `Example: Getting ₹10 lakh maturity on a 20-year endowment policy.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `मैच्योरिटी लाभ वह एकमुश्त राशि है जो बीमा अवधि पूरी होने पर और सभी प्रीमियम भरने पर मिलती है।`,
        example_hi: `उदाहरण: 20 साल की एंडोमेंट पॉलिसी पर ₹10 लाख का मैच्योरिटी बेनिफिट मिलना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'ULIP vs endowment', 'यूलिप और एंडोमेंट में अंतर', 'ULIP policy meaning', 'endowment plan benefits'
        ],
        definition_en: `ULIPs offer market-linked returns and flexibility, while endowment plans provide guaranteed savings with insurance.`,
        example_en: `Example: ULIP NAV varies; endowment returns are fixed.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `यूलिप बाजार से जुड़े रिटर्न और लचीलापन देते हैं, जबकि एंडोमेंट योजनाएं गारंटीड सेविंग्स और बीमा कवर देती हैं।`,
        example_hi: `उदाहरण: यूलिप में NAV बदलता है, एंडोमेंट में रिटर्न फिक्स होते हैं।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'single premium policy', 'one time premium insurance', 'सिंगल प्रीमियम पॉलिसी क्या है', 'एकमुश्त बीमा भुगतान'
        ],
        definition_en: `Single premium policies require a one-time lump sum payment for the entire policy term instead of recurring annual payments.`,
        example_en: `Example: Paying ₹1.5 lakh once for a 10-year plan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `सिंगल प्रीमियम पॉलिसी में पूरे बीमा कार्यकाल के लिए केवल एक बार एकमुश्त राशि का भुगतान करना होता है।`,
        example_hi: `उदाहरण: 10 साल की योजना के लिए ₹1.5 लाख एक बार में भरना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy document lost', 'बीमा दस्तावेज़ गुम हो गया', 'how to recover lost insurance paper', 'duplicate insurance policy'
        ],
        definition_en: `If your policy document is lost, you can request a duplicate copy from the insurer by submitting identity proof and an indemnity bond.`,
        example_en: `Example: Requesting duplicate LIC policy with ID and affidavit.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `अगर बीमा दस्तावेज़ गुम हो जाए, तो आप बीमा कंपनी से पहचान पत्र और एफिडेविट देकर डुप्लिकेट कॉपी मांग सकते हैं।`,
        example_hi: `उदाहरण: LIC से डुप्लिकेट पॉलिसी के लिए आईडी और शपथपत्र देना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy reinstatement vs revival', 'policy पुनः चालू बनाम पुनर्जीवन', 'difference between reinstatement and revival'
        ],
        definition_en: `Revival is for policies in lapsed condition, while reinstatement is used for policies under cancellation due to fraud or dispute.`,
        example_en: `Example: Reinstatement may need legal proof; revival just needs premium.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पुनर्जीवन लैप्स पॉलिसियों के लिए होता है, जबकि पुनःस्थापन धोखाधड़ी या विवाद के कारण रद्द हुई पॉलिसी के लिए होता है।`,
        example_hi: `उदाहरण: पुनःस्थापन में कानूनी प्रमाण चाहिए, जबकि पुनर्जीवन में केवल प्रीमियम।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'top-up insurance policy', 'insurance top up benefit', 'बीमा टॉप अप पॉलिसी क्या है', 'टॉप अप हेल्थ पॉलिसी'
        ],
        definition_en: `A top-up policy offers additional coverage over your base policy once a certain threshold (deductible) is crossed.`,
        example_en: `Example: ₹5L base plan + ₹10L top-up with ₹5L deductible.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `टॉप-अप पॉलिसी एक बेस बीमा के ऊपर अतिरिक्त कवरेज देती है, जो एक तय सीमा (डिडक्टिबल) के बाद लागू होती है।`,
        example_hi: `उदाहरण: ₹5 लाख बेस प्लान के साथ ₹10 लाख का टॉप-अप जिसमें ₹5 लाख डिडक्टिबल हो।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'group insurance policy', 'what is group cover', 'ग्रुप बीमा पॉलिसी क्या होती है', 'कंपनी ग्रुप इंश्योरेंस'
        ],
        definition_en: `Group insurance covers a set of people (e.g., employees of a company) under one master policy at lower premium costs.`,
        example_en: `Example: Employer provides group health cover to staff.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ग्रुप बीमा एक मास्टर पॉलिसी के तहत लोगों के समूह (जैसे कंपनी के कर्मचारी) को कम प्रीमियम पर कवरेज देती है।`,
        example_hi: `उदाहरण: कंपनी द्वारा कर्मचारियों को ग्रुप हेल्थ कवर देना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'term insurance meaning', 'what is term insurance', 'टर्म इंश्योरेंस क्या होता है', 'term plan benefits'
        ],
        definition_en: `Term insurance is a pure life cover plan that provides a large sum assured at low premium. It pays the sum assured to the nominee in case of the insured’s death during the policy term.`,
        example_en: `Example: ₹1 crore cover for 30 years at ₹10,000 per year.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `टर्म इंश्योरेंस एक शुद्ध जीवन बीमा योजना है जो कम प्रीमियम पर अधिक बीमा राशि देती है। पॉलिसी अवधि में मृत्यु पर नामांकित व्यक्ति को राशि मिलती है।`,
        example_hi: `उदाहरण: ₹10,000 वार्षिक प्रीमियम पर 30 वर्षों के लिए ₹1 करोड़ का कवरेज।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'whole life insurance', 'what is whole life policy', 'whole life plan', 'पूर्ण जीवन बीमा क्या है'
        ],
        definition_en: `Whole life insurance provides coverage for the entire lifetime of the insured, usually up to 99 or 100 years, along with maturity or death benefit.`,
        example_en: `Example: Premium paid till 20 years, coverage up to 99 years.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पूर्ण जीवन बीमा बीमित व्यक्ति की पूरी उम्र तक (आमतौर पर 99 या 100 वर्ष तक) कवरेज प्रदान करता है, जिसमें मृत्यु या मैच्योरिटी बेनिफिट शामिल होता है।`,
        example_hi: `उदाहरण: 20 वर्षों तक प्रीमियम देकर 99 वर्ष तक कवरेज पाना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'return of premium plan', 'insurance with return of premium', 'प्रीमियम रिटर्न बीमा', 'return of premium meaning'
        ],
        definition_en: `In return of premium (ROP) plans, the total premium paid is returned to the policyholder if they survive the policy term.`,
        example_en: `Example: ₹2 lakh premium returned after 20 years if insured survives.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `रिटर्न ऑफ प्रीमियम योजनाओं में, यदि बीमित व्यक्ति पूरी बीमा अवधि तक जीवित रहता है, तो सभी भुगतान किए गए प्रीमियम वापस कर दिए जाते हैं।`,
        example_hi: `उदाहरण: 20 साल तक जीवित रहने पर ₹2 लाख प्रीमियम वापस मिलना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'rider in insurance', 'insurance rider meaning', 'बीमा में राइडर क्या है', 'राइडर लाभ'
        ],
        definition_en: `A rider is an add-on benefit to your base insurance policy that provides additional coverage such as critical illness, accidental death, etc.`,
        example_en: `Example: Adding accidental death rider to term plan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `राइडर बीमा पॉलिसी के साथ लिया जाने वाला एक अतिरिक्त लाभ है, जैसे कि गंभीर बीमारी, दुर्घटनाजन्य मृत्यु आदि का कवर।`,
        example_hi: `उदाहरण: टर्म प्लान के साथ एक्सीडेंटल डेथ राइडर जोड़ना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'critical illness rider', 'insurance with critical illness cover', 'गंभीर बीमारी कवर', 'बीमा राइडर गंभीर रोग'
        ],
        definition_en: `Critical illness rider pays a lump sum amount if the insured is diagnosed with a listed critical illness like cancer, heart attack, etc.`,
        example_en: `Example: ₹10 lakh lump sum paid on heart attack diagnosis.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `गंभीर बीमारी राइडर सूचीबद्ध गंभीर बीमारियों जैसे कैंसर या हार्ट अटैक होने पर एकमुश्त राशि प्रदान करता है।`,
        example_hi: `उदाहरण: हार्ट अटैक पर ₹10 लाख की एकमुश्त राशि मिलना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy nomination', 'who can be nominee', 'insurance nominee rules', 'पॉलिसी में नामांकन', 'बीमा नामांकित व्यक्ति'
        ],
        definition_en: `Nomination is the process of naming a person who will receive the policy benefits in case of the policyholder’s death.`,
        example_en: `Example: Naming spouse as nominee in a life policy.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `नामांकन उस व्यक्ति को नामित करने की प्रक्रिया है जिसे बीमाधारक की मृत्यु की स्थिति में लाभ मिलेगा।`,
        example_hi: `उदाहरण: जीवन बीमा पॉलिसी में पत्नी को नामांकित करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance underwriting', 'what is underwriting process', 'बीमा अंडरराइटिंग क्या है', 'underwriting policy'
        ],
        definition_en: `Underwriting is the process where insurers assess the risk of the applicant before issuing the policy.`,
        example_en: `Example: Health check-up and income proof are part of underwriting.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `अंडरराइटिंग वह प्रक्रिया है जिसमें बीमा कंपनी बीमाधारक के जोखिम का मूल्यांकन करती है।`,
        example_hi: `उदाहरण: अंडरराइटिंग में स्वास्थ्य जांच और आय प्रमाण पत्र शामिल हो सकते हैं।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance claim repudiation', 'claim rejection reasons', 'बीमा क्लेम रिजेक्शन', 'बीमा अस्वीकृति कारण'
        ],
        definition_en: `Claim repudiation means the insurer has rejected your claim, usually due to policy violation, non-disclosure, or fraud.`,
        example_en: `Example: Claim rejected due to hiding existing illness.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `क्लेम अस्वीकृति का मतलब है कि बीमा कंपनी ने आपका क्लेम खारिज कर दिया है, आमतौर पर जानकारी छुपाने या धोखाधड़ी के कारण।`,
        example_hi: `उदाहरण: मौजूदा बीमारी छुपाने पर क्लेम रिजेक्ट होना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy cooling-off period', 'cooling off insurance', 'फ्री लुक पीरियड', 'पॉलिसी रद्द करने की अवधि'
        ],
        definition_en: `Cooling-off or free-look period is the time within which a new policy can be cancelled and premium refunded, usually 15 days.`,
        example_en: `Example: Cancelling policy within 15 days of receipt.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `फ्री-लुक पीरियड वह समय होता है जब नई पॉलिसी को रद्द करके प्रीमियम वापस लिया जा सकता है, आमतौर पर 15 दिन में।`,
        example_hi: `उदाहरण: पॉलिसी मिलने के 15 दिन के अंदर उसे रद्द करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy reinstatement', 'insurance policy reactivation', 'पॉलिसी रीस्टेटमेंट क्या है', 'रीइनस्टेटमेंट प्रक्रिया'
        ],
        definition_en: `Policy reinstatement is the process of reactivating a lapsed policy by fulfilling certain conditions like medical check-up and paying dues.`,
        example_en: `Example: Reinstating a lapsed policy after 2 years with penalty.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `रीइनस्टेटमेंट प्रक्रिया के तहत बीमा पॉलिसी को फिर से सक्रिय किया जाता है, इसके लिए कुछ शर्तें पूरी करनी होती हैं जैसे मेडिकल जांच और बकाया भुगतान।`,
        example_hi: `उदाहरण: 2 साल बाद लैप्स पॉलिसी को पेनल्टी के साथ दोबारा सक्रिय करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'maturity benefit in insurance', 'insurance maturity meaning', 'मिच्योरिटी बेनिफिट क्या होता है', 'बीमा में मैच्योरिटी'
        ],
        definition_en: `Maturity benefit is the lump sum paid by the insurer if the policyholder survives the entire term of a life insurance policy.`,
        example_en: `Example: Receiving ₹10 lakh after 20 years of premium payment.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `मैच्योरिटी बेनिफिट वह एकमुश्त राशि होती है जो पॉलिसी अवधि पूरी होने पर बीमित व्यक्ति को मिलती है।`,
        example_hi: `उदाहरण: 20 साल तक प्रीमियम देने के बाद ₹10 लाख मिलना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'grace period in insurance', 'what is grace period', 'बीमा में ग्रेस पीरियड क्या है', 'premium grace days'
        ],
        definition_en: `Grace period is the extra time (usually 15-30 days) given to pay the premium after the due date without policy lapse.`,
        example_en: `Example: Paying premium within 30 days after the due date.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ग्रेस पीरियड वह अतिरिक्त समय (आमतौर पर 15-30 दिन) होता है, जिसमें प्रीमियम देरी से देने पर भी पॉलिसी लैप्स नहीं होती।`,
        example_hi: `उदाहरण: ड्यू डेट के 30 दिनों के भीतर प्रीमियम का भुगतान करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'lapsed policy', 'what happens if policy lapses', 'policy lapse meaning', 'लैप्स पॉलिसी क्या होती है'
        ],
        definition_en: `A lapsed policy is a policy where premiums have not been paid within the grace period, making the coverage inactive.`,
        example_en: `Example: Not paying premium for 3 months causes policy lapse.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लैप्स पॉलिसी वह होती है जिसमें ग्रेस पीरियड के अंदर भी प्रीमियम जमा नहीं किया गया हो, जिससे कवरेज निष्क्रिय हो जाता है।`,
        example_hi: `उदाहरण: 3 महीने तक प्रीमियम नहीं देने से पॉलिसी लैप्स हो गई।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance surrender value', 'surrendering policy', 'बीमा सरेंडर वैल्यू क्या है', 'policy surrender benefit'
        ],
        definition_en: `Surrender value is the amount a policyholder receives if they decide to terminate the policy before maturity.`,
        example_en: `Example: Getting ₹2.5 lakh after surrendering a 10-year policy in year 7.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `सरेंडर वैल्यू वह राशि होती है जो पॉलिसी होल्डर को बीमा पॉलिसी को मैच्योरिटी से पहले बंद करने पर मिलती है।`,
        example_hi: `उदाहरण: 7वें साल में 10 वर्षीय पॉलिसी को बंद करने पर ₹2.5 लाख मिलना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy assignment', 'what is insurance assignment', 'बीमा में असाइनमेंट', 'policy transfer rights'
        ],
        definition_en: `Assignment is the legal transfer of rights of the policy to another person, often done for securing loans.`,
        example_en: `Example: Assigning policy to a bank for home loan security.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `असाइनमेंट बीमा पॉलिसी के अधिकारों को किसी अन्य व्यक्ति या संस्था को कानूनी रूप से स्थानांतरित करने की प्रक्रिया है।`,
        example_hi: `उदाहरण: होम लोन के लिए पॉलिसी बैंक के नाम असाइन करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance claim process', 'how to file insurance claim', 'बीमा क्लेम कैसे करें', 'क्लेम की प्रक्रिया'
        ],
        definition_en: `The claim process involves informing the insurer, submitting documents, and receiving the approved amount as per policy terms.`,
        example_en: `Example: Submitting death certificate and policy document for claim.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `क्लेम प्रक्रिया में बीमा कंपनी को सूचित करना, दस्तावेज जमा करना और शर्तों के अनुसार भुगतान प्राप्त करना शामिल होता है।`,
        example_hi: `उदाहरण: मृत्यु प्रमाण पत्र और पॉलिसी दस्तावेज़ जमा करके क्लेम करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'benefits of term plan', 'why take term insurance', 'टर्म इंश्योरेंस के फायदे', 'term plan reasons'
        ],
        definition_en: `Term insurance offers high coverage at low premiums, ideal for securing family's future financially in case of untimely death.`,
        example_en: `Example: ₹1 crore cover available at just ₹800/month for 30-year-old.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `टर्म इंश्योरेंस कम प्रीमियम में ज्यादा कवर देता है और असमय मृत्यु की स्थिति में परिवार को आर्थिक सुरक्षा प्रदान करता है।`,
        example_hi: `उदाहरण: 30 वर्ष की आयु में ₹800 मासिक में ₹1 करोड़ का कवरेज।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'unit linked insurance plan', 'ULIP meaning', 'ULIP क्या होता है', 'यूनिट लिंक्ड प्लान'
        ],
        definition_en: `ULIP is a hybrid policy that combines life insurance and investment. A part of the premium goes to life cover and rest to market-linked funds.`,
        example_en: `Example: ULIP with ₹1 lakh premium—₹10k for life cover and ₹90k invested in mutual funds.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ULIP एक संयुक्त योजना है जिसमें बीमा और निवेश दोनों शामिल होते हैं। प्रीमियम का एक हिस्सा जीवन बीमा और बाकी निवेश में जाता है।`,
        example_hi: `उदाहरण: ₹1 लाख प्रीमियम में ₹10 हजार बीमा और ₹90 हजार निवेश में जाता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'endowment policy', 'what is endowment plan', 'एंडोमेंट पॉलिसी क्या है', 'endowment insurance meaning'
        ],
        definition_en: `Endowment plans provide a mix of savings and insurance. If the insured survives the term, they get maturity benefit; else nominee gets death benefit.`,
        example_en: `Example: After 20 years, ₹5 lakh is paid as maturity if alive.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `एंडोमेंट प्लान में बचत और बीमा दोनों शामिल होते हैं। पॉलिसी अवधि में जीवित रहने पर राशि मिलती है, अन्यथा नामांकित व्यक्ति को मृत्यु लाभ मिलता है।`,
        example_hi: `उदाहरण: 20 साल के बाद जीवित रहने पर ₹5 लाख मिलना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'money back policy', 'what is money back plan', 'मनी बैक पॉलिसी क्या होती है', 'money back insurance'
        ],
        definition_en: `Money back policy gives periodic payments during the policy term plus maturity benefit if the insured survives the term.`,
        example_en: `Example: 20% of sum assured every 5 years + balance on maturity.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `मनी बैक पॉलिसी में पॉलिसी अवधि के दौरान नियमित अंतराल पर राशि मिलती है और अंत में मैच्योरिटी पर शेष राशि मिलती है।`,
        example_hi: `उदाहरण: हर 5 साल में 20% राशि और अंत में शेष राशि मिलना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'group insurance policy', 'what is group insurance', 'ग्रुप इंश्योरेंस क्या होता है', 'group policy benefits'
        ],
        definition_en: `Group insurance provides coverage to a group of individuals under a single policy, usually offered by employers to employees.`,
        example_en: `Example: A company provides group health insurance to all staff members.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ग्रुप इंश्योरेंस एक ऐसी पॉलिसी होती है जो किसी समूह के सदस्यों को एक साथ कवरेज प्रदान करती है, आमतौर पर कंपनियां इसे कर्मचारियों को देती हैं।`,
        example_hi: `उदाहरण: एक कंपनी अपने सभी कर्मचारियों को ग्रुप हेल्थ इंश्योरेंस देती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance nominee meaning', 'who is nominee in policy', 'बीमा में नॉमिनी कौन होता है', 'nominee purpose'
        ],
        definition_en: `A nominee is the person chosen by the policyholder to receive the benefits of the policy in case of their death.`,
        example_en: `Example: Mentioning spouse as nominee in a life insurance policy.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `नॉमिनी वह व्यक्ति होता है जिसे पॉलिसीधारक अपनी मृत्यु की स्थिति में बीमा राशि प्राप्त करने के लिए नियुक्त करता है।`,
        example_hi: `उदाहरण: जीवन बीमा पॉलिसी में पत्नी को नॉमिनी बनाना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'difference between policyholder and life assured', 'पॉलिसीहोल्डर और लाइफ एश्योर्ड में अंतर', 'policyholder vs insured'
        ],
        definition_en: `Policyholder is the person who pays for and owns the policy. Life assured is the person whose life is covered under the policy.`,
        example_en: `Example: A father buys a policy for his son—the father is the policyholder and son is life assured.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसीहोल्डर वह होता है जो बीमा पॉलिसी खरीदता है और उसका मालिक होता है। लाइफ एश्योर्ड वह व्यक्ति होता है जिसकी जान बीमा द्वारा कवर होती है।`,
        example_hi: `उदाहरण: पिता ने बेटे के लिए पॉलिसी खरीदी—पिता पॉलिसीहोल्डर और बेटा लाइफ एश्योर्ड है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy reinstatement', 'how to reinstate lapsed policy', 'बीमा पुनः सक्रिय करना', 'policy reactivation process'
        ],
        definition_en: `Reinstatement is the process of restoring a lapsed policy by paying due premiums and fulfilling health requirements if any.`,
        example_en: `Example: Paying missed premiums and interest to revive a lapsed term plan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पुनः सक्रिय करना उस प्रक्रिया को कहते हैं जिसमें लैप्स हो चुकी पॉलिसी को बकाया प्रीमियम और स्वास्थ्य शर्तें पूरी कर के पुनः चालू किया जाता है।`,
        example_hi: `उदाहरण: छूटे हुए प्रीमियम और ब्याज देकर टर्म प्लान को दोबारा शुरू करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy revival vs reinstatement', 'revival and reinstatement difference', 'पॉलिसी रिवाइवल और रीइंस्टेटमेंट', 'difference between revive and reinstate'
        ],
        definition_en: `Revival and reinstatement are often used interchangeably, but revival usually refers to activating shortly after lapse, while reinstatement may involve more formalities after longer gaps.`,
        example_en: `Example: Reinstating a policy after 2 years vs. reviving it within 6 months.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `रिवाइवल और रीइंस्टेटमेंट समानार्थक शब्द हैं, लेकिन रिवाइवल आमतौर पर छोटी अवधि के लैप्स के बाद होता है जबकि रीइंस्टेटमेंट में अधिक औपचारिकताएं होती हैं।`,
        example_hi: `उदाहरण: 2 साल बाद पॉलिसी को रीइंस्टेट करना और 6 महीने में रिवाइव करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'how to update nominee', 'बीमा में नॉमिनी कैसे बदलें', 'change nominee in insurance policy', 'nominee change process'
        ],
        definition_en: `To update a nominee, the policyholder must submit a nomination form to the insurer with valid identity proof.`,
        example_en: `Example: Submitting new nominee form with Aadhar copy to LIC.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `नॉमिनी अपडेट करने के लिए पॉलिसीधारक को बीमा कंपनी में नॉमिनेशन फॉर्म और पहचान पत्र जमा करना होता है।`,
        example_hi: `उदाहरण: एलआईसी में नया नॉमिनी फॉर्म और आधार कार्ड जमा करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy exclusion meaning', 'exclusions in insurance', 'बीमा में अपवाद', 'policy terms and exclusions'
        ],
        definition_en: `Exclusions are situations or conditions that are not covered by the insurance policy.`,
        example_en: `Example: Suicide within first year of a life policy is often excluded.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `अपवाद वे स्थितियाँ होती हैं जो बीमा पॉलिसी द्वारा कवर नहीं की जातीं।`,
        example_hi: `उदाहरण: जीवन बीमा पॉलिसी के पहले वर्ष में आत्महत्या कवर नहीं होती।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'rider in insurance', 'add-ons in policy', 'बीमा राइडर क्या है', 'policy rider meaning'
        ],
        definition_en: `Riders are optional add-ons to a base insurance policy that provide additional benefits like critical illness cover or accidental death cover.`,
        example_en: `Example: Adding a critical illness rider to a term plan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `राइडर एक वैकल्पिक एड-ऑन होता है जिसे मुख्य बीमा पॉलिसी में जोड़ा जाता है और यह अतिरिक्त लाभ देता है, जैसे कि गंभीर बीमारी कवर।`,
        example_hi: `उदाहरण: टर्म प्लान में क्रिटिकल इलनेस राइडर जोड़ना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'return of premium plan', 'ROP in term insurance', 'return of premium benefit', 'प्रीमियम वापसी योजना'
        ],
        definition_en: `Return of premium plans refund the total premiums paid if the insured survives the term of the policy.`,
        example_en: `Example: Getting ₹5 lakh back after completing 20-year term policy.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `प्रीमियम वापसी योजना में अगर बीमित व्यक्ति पूरी अवधि तक जीवित रहता है तो उसे कुल प्रीमियम राशि वापस मिलती है।`,
        example_hi: `उदाहरण: 20 साल की टर्म पॉलिसी पूरी करने के बाद ₹5 लाख मिलना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance agent vs broker', 'difference between agent and broker', 'बीमा एजेंट और ब्रोकर में अंतर', 'agent broker comparison'
        ],
        definition_en: `An agent represents a specific insurer, while a broker can offer policies from multiple companies.`,
        example_en: `Example: An LIC agent can only sell LIC policies; a broker can offer LIC, ICICI, HDFC, etc.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा एजेंट किसी एक कंपनी का प्रतिनिधित्व करता है, जबकि ब्रोकर कई कंपनियों की पॉलिसी बेच सकता है।`,
        example_hi: `उदाहरण: एलआईसी एजेंट केवल एलआईसी की पॉलिसी बेचता है; ब्रोकर सभी कंपनियों की पॉलिसी ऑफर कर सकता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy surrender', 'how to surrender insurance policy', 'बीमा पॉलिसी सरेंडर कैसे करें', 'surrender value meaning'
        ],
        definition_en: `Surrendering a policy means terminating it before maturity to receive its surrender value—usually applicable for traditional or endowment plans.`,
        example_en: `Example: Surrendering a life insurance policy after 5 years to get partial returns.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा पॉलिसी को परिपक्वता से पहले बंद करना और उसकी सरेंडर वैल्यू प्राप्त करना 'सरेंडर' कहलाता है, यह पारंपरिक योजनाओं पर लागू होता है।`,
        example_hi: `उदाहरण: जीवन बीमा पॉलिसी को 5 साल बाद सरेंडर कर आंशिक राशि प्राप्त करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy grace period', 'insurance premium grace period', 'grace period in insurance', 'बीमा ग्रेस पीरियड'
        ],
        definition_en: `Grace period is the additional time after the premium due date during which you can still pay the premium without losing coverage.`,
        example_en: `Example: A 30-day grace period after your premium due date for life insurance.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ग्रेस पीरियड वह अतिरिक्त समय होता है जो प्रीमियम की नियत तिथि के बाद भी भुगतान करने के लिए दिया जाता है और इसमें पॉलिसी चालू रहती है।`,
        example_hi: `उदाहरण: जीवन बीमा में प्रीमियम भुगतान की अंतिम तिथि के बाद 30 दिन का ग्रेस पीरियड।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance maturity benefit', 'maturity value in policy', 'policy maturity process', 'बीमा मैच्योरिटी बेनिफिट'
        ],
        definition_en: `Maturity benefit is the amount payable to the policyholder at the end of the policy term, if the insured survives.`,
        example_en: `Example: ₹10 lakh maturity payout after 20 years of endowment plan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `मैच्योरिटी बेनिफिट वह राशि होती है जो पॉलिसी अवधि पूरी होने पर बीमित व्यक्ति को जीवित रहने की स्थिति में दी जाती है।`,
        example_hi: `उदाहरण: एंडोमेंट प्लान की 20 वर्ष की अवधि के बाद ₹10 लाख का भुगतान।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance claim eligibility', 'when can I claim insurance', 'बीमा क्लेम पात्रता', 'insurance policy claim rules'
        ],
        definition_en: `Claim eligibility refers to the conditions under which a policyholder or nominee can file a claim, based on policy terms and coverage.`,
        example_en: `Example: A health insurance claim can be filed after hospitalization for 24 hours.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `क्लेम पात्रता उन शर्तों को दर्शाती है जिनके अंतर्गत पॉलिसीधारक या नामांकित व्यक्ति क्लेम कर सकता है।`,
        example_hi: `उदाहरण: 24 घंटे की अस्पताल भर्ती के बाद स्वास्थ्य बीमा क्लेम फाइल करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance waiting period', 'policy waiting time', 'waiting period in health insurance', 'वेटिंग पीरियड क्या होता है'
        ],
        definition_en: `Waiting period is the duration after policy purchase during which specific claims cannot be made.`,
        example_en: `Example: 2-year waiting period for maternity claims in health policies.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `वेटिंग पीरियड वह समय होता है जब बीमा खरीदने के बाद कुछ विशेष बीमारियों या लाभों के लिए क्लेम नहीं किया जा सकता।`,
        example_hi: `उदाहरण: स्वास्थ्य बीमा में मैटरनिटी कवर के लिए 2 साल का वेटिंग पीरियड।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy lapsed meaning', 'insurance policy lapse', 'बीमा पॉलिसी लैप्स क्यों होती है', 'how to revive lapsed policy'
        ],
        definition_en: `A lapsed policy is one in which premium is not paid within the grace period, causing loss of coverage.`,
        example_en: `Example: A life insurance policy lapses after non-payment for 6 months.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लैप्स पॉलिसी वह होती है जिसमें निर्धारित समय और ग्रेस पीरियड में प्रीमियम का भुगतान नहीं किया गया हो, जिससे कवरेज बंद हो जाता है।`,
        example_hi: `उदाहरण: 6 महीने तक प्रीमियम नहीं देने पर जीवन बीमा पॉलिसी लैप्स हो जाती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'top-up insurance', 'top-up health plan', 'what is insurance top-up', 'बीमा टॉपअप क्या है'
        ],
        definition_en: `Top-up plans provide additional coverage beyond your base policy, usually after a deductible threshold.`,
        example_en: `Example: ₹5 lakh base cover + ₹10 lakh top-up cover with ₹5 lakh deductible.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `टॉप-अप प्लान मुख्य बीमा सीमा के ऊपर अतिरिक्त कवर प्रदान करते हैं, लेकिन एक तय राशि (डेडक्टिबल) के बाद ही लागू होते हैं।`,
        example_hi: `उदाहरण: ₹5 लाख बेस कवर + ₹10 लाख टॉपअप कवर जिसमें ₹5 लाख डेडक्टिबल है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy endorsement', 'endorsement in insurance', 'बीमा एंडोर्समेंट क्या है', 'endorsement form insurance'
        ],
        definition_en: `Endorsement is a document issued by the insurer to record changes or additions in the policy terms.`,
        example_en: `Example: Adding spouse name in health policy through endorsement.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `एंडोर्समेंट वह दस्तावेज़ होता है जो बीमा पॉलिसी की शर्तों में किसी बदलाव या अतिरिक्त जानकारी को दर्ज करने के लिए जारी किया जाता है।`,
        example_hi: `उदाहरण: स्वास्थ्य बीमा पॉलिसी में पत्नी का नाम जोड़ने के लिए एंडोर्समेंट।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'ULIP policy meaning', 'what is ULIP', 'ULIP plan advantages', 'यूएलआईपी क्या है', 'ULIP investment insurance'
        ],
        definition_en: `ULIP (Unit Linked Insurance Plan) is a combo of insurance and investment. Part of your premium goes to insurance, and the rest is invested in equity or debt funds.`,
        example_en: `Example: ₹50,000 annual premium where ₹10,000 is life cover and ₹40,000 goes to mutual fund-like investments.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ULIP (यूनिट लिंक्ड इंश्योरेंस प्लान) एक ऐसा प्लान है जिसमें बीमा और निवेश दोनों होते हैं। प्रीमियम का एक हिस्सा बीमा में और बाकी हिस्सा निवेश में जाता है।`,
        example_hi: `उदाहरण: ₹50,000 का प्रीमियम जिसमें ₹10,000 बीमा और ₹40,000 इक्विटी फंड में निवेश होता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy portability', 'how to switch policy', 'insurance portability meaning', 'पॉलिसी पोर्टेबिलिटी'
        ],
        definition_en: `Policy portability allows a policyholder to switch from one insurer to another without losing accrued benefits like waiting periods.`,
        example_en: `Example: Porting your health insurance from insurer A to B with no reset of waiting period.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी पोर्टेबिलिटी का मतलब है कि आप एक बीमा कंपनी से दूसरी में शिफ्ट हो सकते हैं और आपकी लाभ की अवधि जैसे वेटिंग पीरियड बरकरार रहती है।`,
        example_hi: `उदाहरण: हेल्थ इंश्योरेंस को बीमा कंपनी A से B में पोर्ट करना, बिना वेटिंग पीरियड रीसेट किए।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy exclusion', 'what is not covered in insurance', 'बीमा में क्या कवर नहीं होता', 'insurance exclusions'
        ],
        definition_en: `Exclusions are conditions or situations that are not covered by an insurance policy. These are mentioned in the policy document.`,
        example_en: `Example: Pre-existing illnesses not covered in the first 2 years in health insurance.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `अपवर्जन वे स्थितियाँ या स्थितियां होती हैं जो बीमा पॉलिसी द्वारा कवर नहीं की जाती हैं। इन्हें पॉलिसी दस्तावेज़ में लिखा होता है।`,
        example_hi: `उदाहरण: स्वास्थ्य बीमा में पहले 2 वर्षों तक पूर्व-विद्यमान बीमारियों का कवर न होना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance tax benefit', 'tax savings through insurance', 'बीमा पर टैक्स छूट', 'insurance section 80C'
        ],
        definition_en: `Premiums paid for life and health insurance may be eligible for tax deductions under Sections 80C and 80D of the Income Tax Act.`,
        example_en: `Example: ₹25,000 deduction under 80D for health insurance premiums.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `जीवन और स्वास्थ्य बीमा पर दिए गए प्रीमियम पर आयकर अधिनियम की धारा 80C और 80D के तहत टैक्स छूट मिल सकती है।`,
        example_hi: `उदाहरण: स्वास्थ्य बीमा प्रीमियम पर धारा 80D के तहत ₹25,000 की छूट।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'nominee in insurance', 'insurance beneficiary', 'बीमा में नामांकित व्यक्ति', 'who receives insurance payout'
        ],
        definition_en: `A nominee is the person designated by the policyholder to receive the insurance benefits in case of the policyholder’s death.`,
        example_en: `Example: Naming your spouse as nominee in life insurance policy.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `नामांकित व्यक्ति वह होता है जिसे बीमा धारक की मृत्यु के बाद बीमा राशि प्राप्त करने के लिए नामित किया जाता है।`,
        example_hi: `उदाहरण: जीवन बीमा पॉलिसी में अपनी पत्नी को नामांकित व्यक्ति बनाना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance rider', 'what is rider in insurance', 'बीमा राइडर क्या होता है', 'extra insurance coverage options'
        ],
        definition_en: `Riders are optional add-ons that enhance the scope of a base insurance policy by providing extra coverage.`,
        example_en: `Example: Adding accidental death benefit rider to a life insurance policy.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `राइडर ऐसे वैकल्पिक कवरेज होते हैं जो बीमा पॉलिसी में अतिरिक्त लाभ जोड़ते हैं।`,
        example_hi: `उदाहरण: जीवन बीमा में एक्सीडेंटल डेथ बेनिफिट राइडर जोड़ना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy reinstatement', 'revive lapsed insurance', 'पॉलिसी दोबारा चालू करना', 'बीमा रिनस्टेटमेंट क्या है'
        ],
        definition_en: `Reinstatement is the process of restoring a lapsed policy by paying overdue premiums and interest within a specific time frame.`,
        example_en: `Example: Reviving a lapsed policy within 2 years by paying premium + penalty.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी रिनस्टेटमेंट का मतलब है समय पर प्रीमियम न भरने से बंद हुई बीमा पॉलिसी को फिर से चालू करना। इसके लिए बकाया राशि और ब्याज देना होता है।`,
        example_hi: `उदाहरण: दो साल के भीतर प्रीमियम और पेनल्टी भरकर बीमा पॉलिसी को दोबारा चालू करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance policy document', 'how to get insurance copy', 'बीमा दस्तावेज़', 'download insurance policy'
        ],
        definition_en: `The insurance policy document is the official contract that outlines coverage, terms, conditions, and exclusions of the insurance agreement.`,
        example_en: `Example: You can download the policy PDF from your insurer’s portal.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा दस्तावेज़ वह आधिकारिक अनुबंध होता है जिसमें बीमा के कवरेज, शर्तें और अपवर्जन शामिल होते हैं।`,
        example_hi: `उदाहरण: आप अपनी बीमा कंपनी की वेबसाइट से पॉलिसी PDF डाउनलोड कर सकते हैं।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance policy number', 'policy number importance', 'बीमा पॉलिसी नंबर क्या है', 'track policy with number'
        ],
        definition_en: `Policy number is a unique identifier given to every issued insurance policy. It helps in tracking and managing the policy.`,
        example_en: `Example: Providing policy number while filing a claim or renewal.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी नंबर हर बीमा पॉलिसी को दिया गया एक यूनिक नंबर होता है जिससे उस पॉलिसी को ट्रैक किया जा सकता है।`,
        example_hi: `उदाहरण: क्लेम भरते समय पॉलिसी नंबर देना आवश्यक होता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance policy copy lost', 'lost insurance documents', 'बीमा दस्तावेज़ खो गए', 'duplicate policy copy'
        ],
        definition_en: `If you lose your insurance document, you can request a duplicate copy from your insurer by providing identity proof and policy details.`,
        example_en: `Example: Requesting a duplicate life insurance policy through email.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `अगर बीमा दस्तावेज़ खो जाएं, तो आप बीमा कंपनी से डुप्लीकेट कॉपी मांग सकते हैं। इसके लिए पहचान पत्र और पॉलिसी विवरण देना होता है।`,
        example_hi: `उदाहरण: बीमा कंपनी को ईमेल कर जीवन बीमा की डुप्लीकेट पॉलिसी मंगवाना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance grievance redressal', 'file insurance complaint', 'बीमा शिकायत कैसे करें', 'IRDA complaint process'
        ],
        definition_en: `If dissatisfied with your insurer’s service or claim process, you can file a complaint through the IRDA Grievance Redressal Mechanism.`,
        example_en: `Example: Logging a complaint on IRDAI portal for delay in claim settlement.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `अगर बीमा सेवा या क्लेम प्रक्रिया से असंतोष हो, तो आप IRDA की शिकायत निवारण प्रणाली में शिकायत दर्ज कर सकते हैं।`,
        example_hi: `उदाहरण: क्लेम सेटलमेंट में देरी पर IRDAI पोर्टल पर शिकायत दर्ज करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance premium frequency', 'monthly vs yearly premium', 'बीमा प्रीमियम आवृत्ति', 'premium payment modes'
        ],
        definition_en: `Premium can be paid monthly, quarterly, half-yearly, or yearly depending on the plan and the policyholder’s convenience.`,
        example_en: `Example: Paying health insurance premium annually for discount.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `प्रीमियम का भुगतान मासिक, त्रैमासिक, अर्धवार्षिक या वार्षिक आधार पर किया जा सकता है, जैसा कि पॉलिसी में दिया हो।`,
        example_hi: `उदाहरण: डिस्काउंट के लिए सालाना स्वास्थ्य बीमा प्रीमियम का भुगतान करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance grace period', 'what is grace period in insurance', 'बीमा ग्रेस पीरियड क्या है', 'प्रीमियम ग्रेस अवधि'
        ],
        definition_en: `Grace period is the additional time given after the premium due date to pay the premium without policy lapse.`,
        example_en: `Example: A 30-day grace period for life insurance premium payment.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ग्रेस पीरियड वह अतिरिक्त समय होता है जो बीमा प्रीमियम की नियत तिथि के बाद भुगतान करने के लिए दिया जाता है, जिससे पॉलिसी रद्द न हो।`,
        example_hi: `उदाहरण: जीवन बीमा प्रीमियम भुगतान के लिए 30 दिन का ग्रेस पीरियड।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance cooling-off period', 'free look period in policy', 'फ्री लुक पीरियड क्या है', 'insurance review period'
        ],
        definition_en: `Free-look period is the time allowed after purchasing a policy during which the buyer can cancel it for a full refund.`,
        example_en: `Example: Cancelling a health policy within 15 days of purchase.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `फ्री लुक पीरियड वह अवधि है जिसमें आप बीमा खरीदने के बाद उसे रद्द कर सकते हैं और पूरा पैसा वापस पा सकते हैं।`,
        example_hi: `उदाहरण: स्वास्थ्य बीमा को खरीद के 15 दिन के अंदर रद्द करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance underwriting process', 'underwriting meaning', 'बीमा अंडरराइटिंग प्रक्रिया', 'underwriter in insurance'
        ],
        definition_en: `Underwriting is the process where the insurer evaluates the risk of insuring a person or asset before issuing the policy.`,
        example_en: `Example: Medical test required before issuing a life insurance policy.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `अंडरराइटिंग वह प्रक्रिया है जिसमें बीमा कंपनी व्यक्ति या संपत्ति का मूल्यांकन करती है कि जोखिम कितना है और बीमा देना चाहिए या नहीं।`,
        example_hi: `उदाहरण: जीवन बीमा जारी करने से पहले मेडिकल टेस्ट कराना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy renewal benefits', 'renewing insurance advantages', 'पॉलिसी नवीनीकरण लाभ', 'renewal reward insurance'
        ],
        definition_en: `Renewing your insurance on time keeps the policy active and may also offer loyalty discounts or no-claim bonuses.`,
        example_en: `Example: Getting 5% discount on premium for timely renewal.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `समय पर बीमा नवीनीकरण करने से पॉलिसी सक्रिय रहती है और नो-क्लेम बोनस या लॉयल्टी छूट जैसे लाभ मिल सकते हैं।`,
        example_hi: `उदाहरण: समय पर नवीनीकरण करने पर प्रीमियम में 5% की छूट मिलना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy lapse', 'lapsed insurance policy', 'बीमा पॉलिसी लैप्स होना', 'non-payment of premium consequence'
        ],
        definition_en: `When premium is not paid even after the grace period, the insurance policy lapses and coverage ends.`,
        example_en: `Example: Life cover becomes invalid after policy lapse.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `यदि ग्रेस पीरियड के बाद भी प्रीमियम नहीं चुकाया जाए तो बीमा पॉलिसी लैप्स हो जाती है और कवरेज बंद हो जाता है।`,
        example_hi: `उदाहरण: पॉलिसी लैप्स होने के बाद जीवन बीमा का कवरेज समाप्त हो जाता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'revival of lapsed policy', 'how to revive expired insurance', 'लैप्स पॉलिसी को दोबारा शुरू करना', 'reinstatement process insurance'
        ],
        definition_en: `A lapsed policy can be revived within a specific period by paying pending premiums and penalties.`,
        example_en: `Example: Paying two years' pending premiums to revive a term insurance plan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लैप्स पॉलिसी को विशेष अवधि में बकाया प्रीमियम और जुर्माना देकर दोबारा चालू किया जा सकता है।`,
        example_hi: `उदाहरण: टर्म इंश्योरेंस को दोबारा चालू करने के लिए दो साल का बकाया प्रीमियम देना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy portability', 'switching insurance policy', 'पॉलिसी पोर्ट करना', 'insurance transfer process'
        ],
        definition_en: `Portability allows you to transfer your insurance policy from one insurer to another without losing benefits.`,
        example_en: `Example: Moving from one health insurance provider to another with no loss of continuity benefits.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पोर्टेबिलिटी का मतलब है कि आप अपनी बीमा पॉलिसी को एक कंपनी से दूसरी में ट्रांसफर कर सकते हैं, बिना किसी लाभ को खोए।`,
        example_hi: `उदाहरण: हेल्थ बीमा को एक बीमा कंपनी से दूसरी में पोर्ट करना और पुराना वेटिंग पीरियड जारी रहना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance policy termination', 'how to cancel insurance policy', 'बीमा पॉलिसी रद्द करना', 'policy closure process'
        ],
        definition_en: `A policyholder can cancel their insurance policy by informing the insurer and following the termination process.`,
        example_en: `Example: Submitting a cancellation request during the free-look period.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमाधारक बीमा कंपनी को सूचित करके और आवश्यक प्रक्रिया अपनाकर अपनी बीमा पॉलिसी को रद्द कर सकता है।`,
        example_hi: `उदाहरण: फ्री लुक पीरियड के दौरान पॉलिसी रद्द करने का अनुरोध देना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance endorsement', 'what is endorsement in policy', 'बीमा में एंडोर्समेंट क्या है', 'policy modification'
        ],
        definition_en: `An endorsement is an amendment or addition to the existing insurance policy to reflect changes like address or coverage.`,
        example_en: `Example: Adding a nominee through endorsement in a life policy.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `एंडोर्समेंट का मतलब होता है बीमा पॉलिसी में कोई बदलाव या नया प्रावधान जोड़ना जैसे पता बदलना या नया नामांकित व्यक्ति जोड़ना।`,
        example_hi: `उदाहरण: जीवन बीमा पॉलिसी में नया नामांकित व्यक्ति जोड़ना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance declaration page', 'policy summary', 'बीमा डिक्लेरेशन पेज', 'summary of insurance policy'
        ],
        definition_en: `The declaration page is the first page of the insurance policy containing key details like policyholder name, coverage, and premium.`,
        example_en: `Example: Checking sum insured and add-ons on the declaration page.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `डिक्लेरेशन पेज बीमा पॉलिसी का पहला पेज होता है जिसमें बीमाधारक का नाम, कवरेज, प्रीमियम आदि की जानकारी होती है।`,
        example_hi: `उदाहरण: डिक्लेरेशन पेज पर सम इंश्योर्ड और एड-ऑन देखना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'what is policy document', 'insurance policy copy', 'बीमा दस्तावेज़ क्या है', 'insurance agreement document'
        ],
        definition_en: `A policy document is the official contract between the insurer and the policyholder detailing terms, coverage, exclusions, and conditions.`,
        example_en: `Example: The policy document states the sum insured and the claim process.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी दस्तावेज़ बीमाकर्ता और बीमाधारक के बीच का आधिकारिक अनुबंध होता है जिसमें कवरेज, शर्तें और अपवादों की जानकारी होती है।`,
        example_hi: `उदाहरण: पॉलिसी दस्तावेज़ में बीमित राशि और क्लेम प्रक्रिया का विवरण होता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'what is insurance rider', 'insurance add-on benefit', 'बीमा राइडर क्या होता है', 'extra coverage in insurance'
        ],
        definition_en: `A rider is an optional add-on benefit to an insurance policy that provides additional coverage beyond the base policy.`,
        example_en: `Example: Critical illness rider added to a life insurance plan.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `राइडर एक वैकल्पिक ऐड-ऑन लाभ होता है जिसे बीमा पॉलिसी के साथ जोड़ा जाता है ताकि अतिरिक्त सुरक्षा मिल सके।`,
        example_hi: `उदाहरण: जीवन बीमा में क्रिटिकल इलनेस राइडर जोड़ना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'difference between policy and rider', 'policy vs rider', 'बीमा पॉलिसी और राइडर में अंतर', 'राइडर और पॉलिसी का फर्क'
        ],
        definition_en: `A policy is the main contract providing primary coverage, while a rider is an optional feature for additional protection.`,
        example_en: `Example: A term plan is a policy, while accidental death benefit is a rider.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा पॉलिसी मुख्य अनुबंध होती है जो मूल कवरेज देती है, जबकि राइडर एक वैकल्पिक सुविधा होती है जो अतिरिक्त लाभ देती है।`,
        example_hi: `उदाहरण: टर्म प्लान एक पॉलिसी है, जबकि एक्सीडेंटल डेथ बेनिफिट एक राइडर है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance proposal form', 'proposal form in policy', 'बीमा प्रस्ताव फॉर्म क्या है', 'insurance application form'
        ],
        definition_en: `A proposal form is the application filled by the policyholder to initiate the process of purchasing insurance.`,
        example_en: `Example: Filling out age, income, health details in proposal form for life insurance.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `प्रस्ताव फॉर्म वह आवेदन है जिसे बीमाधारक बीमा खरीदने की प्रक्रिया शुरू करने के लिए भरता है।`,
        example_hi: `उदाहरण: जीवन बीमा के लिए प्रस्ताव फॉर्म में आयु, आय और स्वास्थ्य जानकारी भरना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy assignment meaning', 'assign insurance policy', 'बीमा असाइनमेंट क्या है', 'transfer policy rights'
        ],
        definition_en: `Assignment in insurance is the transfer of policy ownership rights from the policyholder to another person or institution.`,
        example_en: `Example: Assigning policy to a bank as loan collateral.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा असाइनमेंट का मतलब है पॉलिसी के स्वामित्व अधिकारों को किसी अन्य व्यक्ति या संस्था को स्थानांतरित करना।`,
        example_hi: `उदाहरण: ऋण के लिए पॉलिसी को बैंक के नाम असाइन करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'nominee in policy', 'insurance nominee details', 'बीमा में नामांकित व्यक्ति', 'nominee vs beneficiary'
        ],
        definition_en: `A nominee is the person designated by the policyholder to receive the policy benefits in case of the policyholder's death.`,
        example_en: `Example: Mentioning spouse as nominee in a life insurance policy.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `नामांकित व्यक्ति वह होता है जिसे बीमाधारक की मृत्यु की स्थिति में बीमा लाभ प्राप्त करने के लिए नामित किया जाता है।`,
        example_hi: `उदाहरण: जीवन बीमा में पत्नी को नामांकित व्यक्ति बनाना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'change nominee in policy', 'nominee update process', 'बीमा में नामांकित व्यक्ति बदलना', 'how to update nominee'
        ],
        definition_en: `To change the nominee in a policy, a written request must be submitted to the insurer along with identity proof of the new nominee.`,
        example_en: `Example: Submitting a nominee change form with new nominee’s ID.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा में नामांकित व्यक्ति बदलने के लिए बीमाकर्ता को लिखित अनुरोध और नए नामांकित व्यक्ति का पहचान प्रमाण देना होता है।`,
        example_hi: `उदाहरण: नए नामांकित व्यक्ति का आईडी प्रूफ और चेंज फॉर्म जमा करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'types of insurance policies', 'insurance policy classification', 'बीमा पॉलिसियों के प्रकार', 'different types of insurance'
        ],
        definition_en: `There are several types of insurance policies including life, health, motor, travel, property, and liability insurance.`,
        example_en: `Example: Health insurance covers medical costs while motor insurance covers vehicle damage.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा पॉलिसियों के कई प्रकार होते हैं जैसे जीवन, स्वास्थ्य, वाहन, यात्रा, संपत्ति और देयता बीमा।`,
        example_hi: `उदाहरण: हेल्थ बीमा चिकित्सा खर्चों को कवर करता है, जबकि मोटर बीमा वाहन की क्षति को।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'sum insured vs coverage amount', 'what is sum insured', 'बीमा राशि क्या है', 'sum insured explained'
        ],
        definition_en: `Sum insured is the maximum amount the insurer agrees to pay under the policy in case of a claim.`,
        example_en: `Example: If sum insured is ₹5 lakh, claim payout can’t exceed ₹5 lakh.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा राशि वह अधिकतम राशि है जो बीमाकर्ता किसी दावे की स्थिति में देने के लिए सहमत होता है।`,
        example_hi: `उदाहरण: ₹5 लाख बीमा राशि होने पर अधिकतम क्लेम ₹5 लाख तक ही मिलेगा।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'insurance renewal reminder', 'automatic policy renewal', 'बीमा रिन्यूअल रिमाइंडर', 'auto renew policy'
        ],
        definition_en: `Some insurers offer automatic renewal features or send reminders before policy expiry to ensure continuous coverage.`,
        example_en: `Example: Getting SMS/email reminder 15 days before health policy renewal date.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `कुछ बीमाकर्ता पॉलिसी की समाप्ति से पहले रिमाइंडर भेजते हैं या ऑटोमैटिक रिन्यूअल की सुविधा देते हैं ताकि कवरेज बना रहे।`,
        example_hi: `उदाहरण: स्वास्थ्य बीमा की समाप्ति से 15 दिन पहले SMS रिमाइंडर मिलना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy grace period', 'what is grace period in insurance', 'बीमा ग्रेस पीरियड', 'policy late payment window'
        ],
        definition_en: `Grace period is the extra time given after the due date of premium payment during which the policy remains active.`,
        example_en: `Example: A 30-day grace period for life insurance allows late premium payment without policy lapse.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `ग्रेस पीरियड वह अतिरिक्त समय होता है जब आप प्रीमियम की निर्धारित तिथि के बाद भी भुगतान कर सकते हैं और पॉलिसी चालू रहती है।`,
        example_hi: `उदाहरण: जीवन बीमा में 30 दिन का ग्रेस पीरियड होता है जिसमें देर से भुगतान किया जा सकता है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy lapse meaning', 'what happens if policy lapses', 'बीमा पॉलिसी लैप्स', 'lapsed insurance consequences'
        ],
        definition_en: `A policy lapses when the premium is not paid within the grace period, resulting in loss of coverage.`,
        example_en: `Example: If premium is unpaid after 30 days grace, the life insurance policy lapses.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `जब प्रीमियम ग्रेस पीरियड में भी जमा नहीं होता, तो पॉलिसी लैप्स हो जाती है और कवरेज समाप्त हो जाता है।`,
        example_hi: `उदाहरण: 30 दिन तक प्रीमियम न भरने पर जीवन बीमा पॉलिसी लैप्स हो जाती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'revive lapsed policy', 'policy revival process', 'लैप्स पॉलिसी को फिर से शुरू करना', 'बीमा रिवाइवल कैसे करें'
        ],
        definition_en: `A lapsed policy can be revived by paying the pending premiums, late fee, and undergoing health checks if required.`,
        example_en: `Example: Paying past due premium with interest to revive a 1-year old lapsed policy.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `लैप्स पॉलिसी को फिर से चालू करने के लिए बकाया प्रीमियम, विलंब शुल्क और आवश्यकता होने पर चिकित्सा जांच करानी पड़ती है।`,
        example_hi: `उदाहरण: एक साल पुरानी लैप्स पॉलिसी को ब्याज के साथ प्रीमियम देकर रिवाइव करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy term meaning', 'duration of insurance policy', 'बीमा अवधि', 'policy duration explained'
        ],
        definition_en: `Policy term refers to the duration for which the policy remains valid and provides coverage.`,
        example_en: `Example: A term insurance policy for 30 years has a 30-year policy term.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी अवधि उस समयावधि को कहते हैं जब तक बीमा कवरेज प्रभावी रहता है।`,
        example_hi: `उदाहरण: 30 साल की टर्म इंश्योरेंस पॉलिसी की अवधि 30 साल होती है।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy premium meaning', 'how premium is calculated', 'बीमा प्रीमियम क्या है', 'premium in insurance policy'
        ],
        definition_en: `Premium is the amount paid by the policyholder to the insurer for availing insurance coverage.`,
        example_en: `Example: Paying ₹10,000 annually as premium for a ₹5 lakh health insurance.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `प्रीमियम वह राशि है जो बीमाधारक बीमा कवरेज प्राप्त करने के लिए बीमाकर्ता को देता है।`,
        example_hi: `उदाहरण: ₹5 लाख के हेल्थ बीमा के लिए ₹10,000 सालाना प्रीमियम देना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy surrender meaning', 'how to surrender policy', 'बीमा पॉलिसी सरेंडर', 'insurance cancellation'
        ],
        definition_en: `Surrendering a policy means voluntarily cancelling it before maturity and receiving the surrender value.`,
        example_en: `Example: Surrendering a traditional policy after 5 years to receive accumulated value.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `बीमा पॉलिसी को सरेंडर करना मतलब समय से पहले उसे रद्द करना और सरेंडर वैल्यू प्राप्त करना।`,
        example_hi: `उदाहरण: पारंपरिक पॉलिसी को 5 साल बाद सरेंडर करके जमा राशि प्राप्त करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'maturity benefit in policy', 'policy maturity amount', 'बीमा मैच्योरिटी लाभ', 'policy maturity payout'
        ],
        definition_en: `Maturity benefit is the amount paid to the policyholder at the end of the policy term if no claim is made.`,
        example_en: `Example: Getting ₹10 lakh after 20 years in an endowment policy.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `मैच्योरिटी लाभ वह राशि होती है जो पॉलिसी की अवधि समाप्त होने पर बीमाधारक को दी जाती है यदि कोई दावा नहीं किया गया हो।`,
        example_hi: `उदाहरण: 20 साल की एंडोवमेंट पॉलिसी पर ₹10 लाख प्राप्त करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy exclusion meaning', 'exclusion in insurance', 'बीमा में अपवाद क्या है', 'exclusions in policy coverage'
        ],
        definition_en: `Exclusions are conditions or situations that are not covered by an insurance policy.`,
        example_en: `Example: Pre-existing diseases may not be covered for the first 3 years.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `अपवाद वे परिस्थितियाँ होती हैं जिन्हें बीमा पॉलिसी कवर नहीं करती।`,
        example_hi: `उदाहरण: पहले 3 वर्षों तक प्री-एग्ज़िस्टिंग बीमारियों को कवर नहीं किया जाता।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy endorsement meaning', 'endorsement in insurance', 'बीमा में एंडोर्समेंट क्या होता है', 'policy change request'
        ],
        definition_en: `An endorsement is a change or addition made to an insurance policy to modify coverage or details.`,
        example_en: `Example: Updating vehicle registration number via endorsement.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `एंडोर्समेंट का अर्थ है बीमा पॉलिसी में परिवर्तन या अतिरिक्त जानकारी जोड़ना।`,
        example_hi: `उदाहरण: वाहन के रजिस्ट्रेशन नंबर को अपडेट करने के लिए एंडोर्समेंट करना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    },
    {
        keywords: [
            'policy reinstatement meaning', 'reinstating lapsed insurance', 'बीमा बहाल करना', 'पॉलिसी पुनः चालू करना'
        ],
        definition_en: `Reinstatement is the process of restoring a lapsed policy by fulfilling insurer's requirements.`,
        example_en: `Example: Submitting health report and overdue premium to reinstate a lapsed life policy.`,
        link_en: 'https://connectindiaenterprises.com/',
        definition_hi: `पॉलिसी को पुनः चालू करने की प्रक्रिया को रीइंस्टेटमेंट कहा जाता है, जिसके लिए बीमाकर्ता की शर्तों को पूरा करना होता है।`,
        example_hi: `उदाहरण: लैप्स हो चुकी जीवन बीमा पॉलिसी को चालू करने के लिए हेल्थ रिपोर्ट और बकाया प्रीमियम देना।`,
        link_hi: 'https://connectindiaenterprises.com/'
    }



];
