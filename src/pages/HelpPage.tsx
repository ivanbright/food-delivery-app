import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, CreditCard, User, Tag, Mail, MessageSquare, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const HelpPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const topics = [
        { icon: HelpCircle, title: "Order Issues", color: "bg-orange-100 text-orange-600" },
        { icon: CreditCard, title: "Payments & Refunds", color: "bg-blue-100 text-blue-600" },
        { icon: User, title: "Account Settings", color: "bg-green-100 text-green-600" },
        { icon: Tag, title: "Promos & Credits", color: "bg-purple-100 text-purple-600" },
    ];

    const faqs = [
        {
            question: "Where is my order?",
            answer: "You can track your order in real-time from the My Orders page or by tapping \"Track Order\"."
        },
        {
            question: "How do I change my delivery address?",
            answer: "You can edit your address before placing the order or contact support if the order is already confirmed."
        },
        {
            question: "My food arrived cold or damaged",
            answer: "We're sorry! Please report the issue in the app within 24 hours and we'll make it right with a refund or credit."
        },
        {
            question: "Can I cancel my order?",
            answer: "You can cancel before the restaurant confirms preparation. After that, contact support."
        }
    ];

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gray-50 min-h-screen pb-20"
        >
            <div className="bg-primary pt-12 pb-24 text-center px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
                <div className="relative z-10 container mx-auto max-w-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">How can we help you?</h1>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="e.g. Refund status, Missing item..."
                            className="w-full h-14 pl-12 pr-4 rounded-xl text-gray-900 focus:outline-none shadow-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-12 relative z-20">
                {/* Topics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {topics.map((topic, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer text-center group">
                            <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${topic.color}`}>
                                <topic.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-gray-900">{topic.title}</h3>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* FAQs */}
                    <div className="md:col-span-2">
                        <h2 className="text-xl font-bold mb-6">Frequently asked questions</h2>
                        <div className="space-y-3">
                            {faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-xl border border-gray-100 overflow-hidden cursor-pointer hover:shadow-sm transition-shadow"
                                    onClick={() => toggleFaq(idx)}
                                >
                                    <div className="p-4 flex items-center justify-between">
                                        <span className="font-medium text-gray-900">{faq.question}</span>
                                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-primary' : ''}`} />
                                    </div>

                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-2">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button variant="ghost" className="mt-4 text-primary font-medium pl-0 hover:bg-transparent hover:underline">
                            View all FAQs
                        </Button>
                    </div>

                    {/* Content Support */}
                    <div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center sticky top-24">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MessageSquare className="w-8 h-8 text-gray-500" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Still need help?</h3>
                            <p className="text-gray-500 text-sm mb-6">Our support team is available 24/7 to assist you with any issues.</p>

                            <div className="space-y-3">
                                <Button className="w-full">
                                    Start Live Chat
                                </Button>
                                <Button variant="outline" className="w-full">
                                    <Mail className="w-4 h-4 mr-2" /> Email Support
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
