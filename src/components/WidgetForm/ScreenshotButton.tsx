import html2canvas from "html2canvas";
import {Camera} from "phosphor-react";
import { useState } from "react";

export function ScreenshotButton(){
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)
async function handleTakeScreenshot(){
    setIsTakingScreenshot(true);
const canvas = await html2canvas(document.querySelector('html')!);
const base64image = canvas.toDataURL('image/png');


setIsTakingScreenshot(false);
}

    return(
        <button className="p-2 bg-zinc-800 border-transparent hover:bg-zinc-700 transition-colors focus:ring-brand-500
        focus:outline-none focus:ring-1 resize-none"
      type="button"
      onClick={handleTakeScreenshot}>
      
        <Camera className="w-6 h-6"/>

      </button>
    )
}