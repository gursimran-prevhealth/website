export type FAQItem = {
    question: string;
    answer: string;
};

export const faqData: FAQItem[] = [
    {
        question: "What kind of healthcare providers is PrevHealth built for?",
        answer:
            "PrevHealth is designed for clinics, hospitals, and digital health providers offering services across any speciality. From primary care and sexual health to psychiatry and speech therapy - our flexible modules adapt to your care model.",
    },
    {
        question: "How does PrevHealth improve clinical efficiency?",
        answer:
            "PrevHealth is an end-to-end platform, from digital triage and patient communication to clinical workflows and AI-powered documentation. We don't just offer isolated AI tools; we support the full care journey with integrated solutions that reduce administrative burden and let providers focus on what matters most: delivering care.",
    },
    {
        question: "Is PrevHealth compliant with European regulations?",
        answer:
            "Yes, PrevHealth is fully GDPR-compliant and built to meet regional healthcare requirements, including secure data storage, patient consent workflows, and integrations with national EHRs.",
    },
    {
        question: "Does PrevHealth support different languages and localizations?",
        answer:
            "Yes, PrevHealth supports region and language specific configurations. We currently serve providers across Sweden and broader Europe.",
    },
    {
        question: "How long does it take to go live with PrevHealth?",
        answer:
            "Depending on your scope and configuration needs, providers can typically launch within 2 to 6 weeks. Our team supports onboarding, customization, and training every step of the way.",
    },
];