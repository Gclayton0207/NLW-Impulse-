import { Feedbacktype, feedbacktypes } from "../Index";

interface FeedbackTypeStepProps{
    onFeedbackTypeChanged: (type: Feedbacktype) => void;
}
export function FeedbackTypeStep({onFeedbackTypeChanged}: FeedbackTypeStepProps) {
  return (
    <div className="flex py-8 gap-2 w-full">
      {Object.entries(feedbacktypes).map(([key, value]) => {
        return (
          <button
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent 
                  hover:border-brand-500  focus:border-brand-500 focus:outline-none"
            type="button"
            onClick={() => onFeedbackTypeChanged(key as Feedbacktype)}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        );
      })}
    </div>
  );
}
