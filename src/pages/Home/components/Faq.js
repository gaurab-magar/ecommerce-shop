import { Accodian } from "./Accodian";
import React from "react";

export const Faq = () => {
    const Faqs = [
        {
            "id": 1,
            "question": "How do I get started?",
            "answer": "To start using our platform, you need to create an account"
        },
        {
            "id": 2,
            "question":  "What is the cost of membership?",
            "answer":   "Our membership costs $5 per month. You can cancel at any time and we offer a free trial period."
        },
        {
            "id": 3,
            "question":  "Can I use this service for free?",
            "answer":   "No, unfortunately not. Our services are designed to provide value and require a subscription to access all features."
        },
        {
            "id": 4,
            "question":  "Is my data safe with your service?",
            "answer":   "Our security measures are robust and designed to protect your personal"
        },
        {
            "id": 5,
            "question":  "I don't have a computer. Can I still use your service?",
            "answer":   "Yes! You can access our services from any device with internet connectivity."
        },
    ]

  return (
    <seciton className="faq">
        <div className="container-fluid py-5">
            <h2 className="text-3xl text-center font-bold text-decoration-underline">Freaquently Ask Question ?</h2>
            <div className="container border p-4 rounded-4 mt-5">
                {Faqs.map((data)=>(
                    <Accodian key={data.id} data={data} />
                ))}
            </div>
        </div>
    </seciton>
  )
}
