import { useState } from "react";
import { ChevronRight } from "react-feather";

export const Faq = () => {
  const faqData = [
    {
      question: "Is this server free to join?",
      answer:
        "Yes, The Bullish Network is 100% FREE but you can support our cause by purchasing merch or other offers. Click Now to join the community.",
    },
    {
      question: "What is the Elite Network?",
      answer:
        "Our Elite Network is a private network of Web 3 enthusiasts who have already maxed their Web 2 potential or strictly want our investments portfolio, advice, and inspiration.",
    },
    {
      question: "I want to join the Elite Network, what should I do?",
      answer:
        "Unlike the free server, to get access to our Private Network, a monthly subscription of $30 is needed. We made our pricing affordable to members who are ready for bigger things, members who are dedicated enough to change their financial perspective. You can find that via website or network.",
    },
    {
      question: "I want to be an affiliate, how?",
      answer:
        "To become an affiliate of our private network and start earning commissions for each sale you generate, Join us and message @bluebull to expedite the approval process. As an affiliate, you have the opportunity to earn 65% of the monthly sales as long as the member you referred remains actively subscribed. We appreciate your interest in partnering with us and look forward to working together!",
    },
    {
      question: "What am I gaining when joining The Bullish Network?",
      answer:
        "There is truly a lot to gain from this server! community, network, perspective, motivation, discipline, how the system operates, how to prepare for upcoming events, the list is infinite!",
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
    <div className="w-full flex flex-col items-center  gap-12">
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
              <div className="md:text-xl font-semibold flex justify-between">
                {question}
                <div className={`${openQuestion === index && 'rotate-90'} transition`}>
                  <ChevronRight />
                </div>
              </div>
              {openQuestion === index && (
                <div className="mt-2 text-sm sm:text-md text-gray-200 md:p-4">{answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
