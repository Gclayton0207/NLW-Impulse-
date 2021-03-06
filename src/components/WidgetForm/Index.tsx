import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

export const feedbacktypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de uma inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lampada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de uma nuvem de pensamento",
    },
  },
};

export type Feedbacktype = keyof typeof feedbacktypes;

export function WidgetForm() {
  const [Feedbacktype, setFeedbacktype] = useState<Feedbacktype | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  function handRestartFeedback() {
    setFeedbackSent(false);
    setFeedbacktype(null);
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSucessStep
        onFeedbackRestartedRequest={handRestartFeedback} />
      ) : (
        <>
          {!Feedbacktype ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbacktype} />
          ) : (
            <FeedbackContentStep
              feedbacktype={Feedbacktype}
              onFeedbackRestartedRequest={handRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito por{" "}
        <a
          className="underline underline-offset-2"
          href="https://www.linkedin.com/in/giovanni-clayton/"
          target="_blank"
        >
          Giovanni Clayton
        </a>
      </footer>
    </div>
  );
}
