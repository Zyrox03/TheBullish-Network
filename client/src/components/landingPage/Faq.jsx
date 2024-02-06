import { useState } from "react";
import { ChevronRight } from "react-feather";

export const Faq = () => {
  const faqData = [
    {
      question: "What is the Bullish Network?",
      answer:
        "The Bullish Network is a community dedicated to empowering individuals through crypto strategies, financial sovereignty, and understanding the future of the internet.",
    },
    {
      question: "What does the Bullish Network offer its community?",
      answer:
        "We provide insights into crypto strategies, foster financial sovereignty, and unlock understanding of the future of the internet, serving as a key to financial enlightenment.",
    },
    {
      question: "Is membership required to access Bullish Network resources?",
      answer:
        "Membership is not mandatory, but it offers additional benefits such as exclusive content, community forums, and networking opportunities.",
    },
    {
      question: "Interested in becoming an affiliate?",
      answer:
        " Absolutely! Join our affiliate program to share the Bullish Network with others and earn rewards. Contact us for more information. Let's grow together!",
    },
    {
      question:
        "How can I contact Bullish Network for further assistance or inquiries?",
      answer:
        " If you have additional questions or need further assistance, we're here to help! You can chat with us on social media, or you can use the client chat widget located at the bottom right of the page for real-time support",
    },
  ];

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      // If the same question is clicked, close it
      setOpenQuestion(null);
    } else {
      // Open the clicked question
      setOpenQuestion(index);
    }
  };

  return (
    <div
      className="w-full flex flex-col items-center  gap-12 relative "
      style={{ zIndex: 100 }}
    >
      <div className="blur blur-effect"></div>
      <div className="blur blur-effect-1"></div>

      <div className="faq_container py-4 px-3 md:p-8 ">
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-center">
          Frequently Asked Questions
        </h2>

        <div className="w-full ">
          {faqData.map(({ question, answer }, index) => (
            <div
              key={index}
              className={`bg-question_bg p-4  rounded-lg my-4 shadow-[0px_0px_3px_rgba(200,200,200,0.3)] cursor-pointer ${
                openQuestion === index ? "" : ""
              }`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="text-xs md:text-xl font-semibold flex justify-between">
                {question}
                <div
                  className={`h-fit ${
                    openQuestion === index && "rotate-90"
                  } transition`}
                >
                  <ChevronRight />
                </div>
              </div>
              {openQuestion === index && (
                <div className="mt-2 text-xs sm:text-sm md:text-xl text-gray-200 md:p-4">
                  {answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
