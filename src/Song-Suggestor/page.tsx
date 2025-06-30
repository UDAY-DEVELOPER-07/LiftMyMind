import MyVantaComponent from "../components/ui/background";
import ElasticSlider from "../components/ui/slider";
import { useState } from "react";
import { questions } from "../components/elements/questions";

export default function SongSuggestorPage() {
    const [satisfaction, setSatisfaction] = useState(50);
    const [i , setI] = useState(0); 

    const [currentQuestion, setCurrentQuestion] = useState("Let's get started!");
    const handleNext = () => {
        if(i< questions.length -1){
            setI(i + 1);
            setCurrentQuestion(questions[i].question);
            setSatisfaction(50); 
        }else{
            setCurrentQuestion("Thank you for your responses!");
        }
    };


    return (
        <div className="relative min-h-screen w-full flex justify-center bg-black overflow-hidden">
            <div className="absolute inset-0 z-0">
                <MyVantaComponent />
            </div>
            <div className="relative flex flex-col items-center w-full min-h-screen backdrop-blur-sm z-10 pt-32 px-4">
                <h1 className="text-[700%] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-emerald-50 via-emerald-200 to-emerald-900 text-center select-none pointer-events-none mb-6">
                    Song Suggestor
                </h1>
                <p className="text-xl font-extrabold text-[#CADBD5] text-center select-none pointer-events-none mb-16">
                    Fill out the form below to get a song that matches your mood.
                </p>
                <div className="relative flex flex-col items-center w-full max-w-2xl bg-white/25 backdrop-blur-3xl rounded-2xl p-8 z-20">
                    <h2 className="text-3xl text-center text-white font-extrabold mb-6">
                        How Satisfied Are You?
                    </h2>
                    <p className="text-2xl text-white font-semibold text-center mb-8">
                        {currentQuestion}
                    </p>
                    <ElasticSlider
                        leftIcon={<>Not Satisfied</>}
                        rightIcon={<>Satisfied</>}
                        startingValue={0}
                        defaultValue={satisfaction}
                        maxValue={100}
                        isStepped
                        stepSize={10}
                        onChange={setSatisfaction}
                        className="w-full max-w-md"
                    />
                    <div className="flex justify-between w-full max-w-md mt-10">
                        <button className="px-6 py-2 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-800 transition"
                        onClick={() => {
                            if (i > 0) {
                                setI(i - 1);
                                setCurrentQuestion(questions[i - 1].question);
                                setSatisfaction(50);
                            }
                        }}

                        >
                            Back
                        </button>
                        <button 
                        className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-800 transition"
                        onClick={handleNext}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}