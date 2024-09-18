import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
    const faqs = [
        { question: "What is Comen?", answer: "Answer about what Comen is..." },
        { question: "Is comen free to use?", answer: "Information about Comen's pricing..." },
        { question: "How does the Comen community work?", answer: "Explanation of the Comen community..." },
        { question: "Is Comen a safe and secure platform for students?", answer: "Details about Comen's safety and security measures..." },
        { question: "How can I sign up as a mentor?", answer: "Steps to sign up as a mentor on Comen..." },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="container mx-auto flex">
                <div className='w-1/2'>
                    <h2 className="text-4xl font-bold mb-6">Frequently asked questions</h2>
                    <p className="text-gray-600 mb-8">Do you have similar question?</p>
                </div>
                <div className='w-1/2'>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;