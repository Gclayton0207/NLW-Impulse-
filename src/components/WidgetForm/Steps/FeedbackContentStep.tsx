import { ArrowLeft, Camera } from "phosphor-react";
import { CloseButton } from "../../CloseButton";
import { Feedbacktype, feedbacktypes } from "../Index";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbacktype: Feedbacktype;
  onFeedbackRestartedRequest: () => void;
}

export function FeedbackContentStep({
  feedbacktype,
  onFeedbackRestartedRequest,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbacktypes[feedbacktype];
  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute"
          onClick={onFeedbackRestartedRequest}
        >
          <ArrowLeft
            weight="bold"
            className="w-4 h-4 text-zinc-400 hover:text-zinc-100"
          />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form className="my-4 w-full">
        <textarea
          className="min-w[304px] w-full min-h[112px] text-sm placeholder-zinc-400 text-zinc-100
          border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500
            focus:outline-none focus:ring-1 resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent
            scrollbar-thin"
          placeholder="Conte com detalhes o que esta acontecendo..."
        />
        <footer className="flex gap-2 mt-2">
         <ScreenshotButton/>
          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex-justify-center hover:bg-brand-300
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
