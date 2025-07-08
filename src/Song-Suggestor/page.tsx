import MyVantaComponent from "../components/ui/background";
import ElasticSlider from "../components/ui/slider";
import { useState } from "react";
import { questions } from "../components/elements/questions";
import SlideArrowButton from "../components/elements/slide-arrow-button";
import RippleButton from "../components/elements/Btn1"; 
import myImg from "../assets/images/aboutimg.png"

function scoreCalculator({score}: {score: number[]}) {
    const totalScore = score.reduce((acc, curr) => acc + curr, 0);
    const averageScore = totalScore / score.length;
    return averageScore;
}

function start(setI: (value: number) => void) {
    return(
        <div className="relative flex flex-col items-center w-full max-w-2xl bg-white/10 border-2 border-white backdrop-blur-3xl rounded-2xl p-8 z-20">
            <div className="text-3xl text-[#C7D6D1] font-semibold text-center mb-8">
                <h1 className="text-xl"> You have to give answer by sliding the Satisfaction Slider</h1>
                <SlideArrowButton
                    text="Start"
                    primaryColor="#177015"
                    className="mt-8 bg-[#C7D6D1]"
                    onClick={() => {
                        setI(1);
                    }}
                />
            </div>
        </div>
    )
}
function questionZone(handleBack:() => void,currentQuestion:string, satisfaction: number, setSatisfaction: (value: number) => void, i: number, handleNext: () => void) {
    const content =()=>{
        if(i < questions.length) {
            return "Next";
        } else {
            return "Submit";
        }
    }
    return (
        <div className="relative flex flex-col items-center w-full max-w-2xl bg-white/10 border-2 border-white backdrop-blur-3xl rounded-2xl p-8 z-20">
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
                className="w-full text-white max-w-md"
            />
            <div className="flex justify-between w-full max-w-md mt-10">
    
                <button className="px-6 py-2 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-800 transition"
                    onClick={() => {
                        handleBack();
                    }}
                    name="Back"
                >
                    Back
                </button>
                <div className="text-lg text-white font-semibold">
                    {i} / {questions.length}
                </div>
                <button
                    className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-800 transition"
                    onClick={() => {
                        handleNext()

                    }}
                >
                    {content()}
                </button>
            </div>
        </div>
    );
}
    
function getSongSuggestion(scoreCalculator: number) {
    const getSongSuggestion = () => {
        if (scoreCalculator < 30) {
            window.location.href = 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ'; // Sad song
        } else if (scoreCalculator < 60) {
            window.location.href = 'https://www.youtube.com/watch?v=2Vv-BfVoq4g'; // Neutral song
        } else {
            window.location.href = 'https://www.youtube.com/watch?v=9bZkp7q19f0'; // Happy song
        }
    }
    return (
        <div className=" flex  flex-col justify-center items-center"> 

            <img src={myImg} className="w-100  "></img>
            <div className="flex justify-center">
            <RippleButton
                className="font-jost m-3 duration-[600ms] relative flex items-center justify-center  overflow-hidden rounded-full bg-[#036041] p-[1.3rem] text-[1.2rem] font-extrabold text-[#D0E3DD] transition hover:text-white hover:bg-[#D0E3DD] hover:shadow-lg hover:shadow-[#D0E3DD] hover:scale-105 uppercase"
                onClick={() => getSongSuggestion()}
            >
                Get Your Song
            </RippleButton>
            </div>
        </div>
    );    
}



export default function SongSuggestorPage() {
    const [satisfaction, setSatisfaction] = useState(0);
    const [i , setI] = useState(0);
    const [score, setScore] = useState(Array(questions.length).fill(0));
    const [currentQuestion, setCurrentQuestion] = useState('LET\'S START!');

    const handleNext = () => {
        const newScore = [...score];
        newScore[i] = satisfaction;
        setScore(newScore);
        if(i < questions.length){
            setI(i + 1);
            setCurrentQuestion(questions[i].question);
            setSatisfaction(0); 
        } else {
            setI(11);
            return;
        }
    };

    const handleBack = () => {
        setI(i - 1);
        setCurrentQuestion(questions[i - 2].question);
        setSatisfaction(0);

    };
    const handlePanel = () => {
        if (i == 0) {
            return start(handleNext);
        } else if (i <= questions.length) {
            return questionZone(handleBack, currentQuestion, satisfaction, setSatisfaction, i, handleNext);
        } else {
            return getSongSuggestion(scoreCalculator({score}));
        }
    }

    return (
        <div className="relative min-h-screen w-full flex justify-center bg-black overflow-hidden">
            <div className="absolute inset-0 z-0">
                <MyVantaComponent />
            </div>
            <div className="relative flex flex-col items-center w-full min-h-screen z-10 px-2 sm:px-4 mt-32 md:mt-20 lg:mt-10   ">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[700%] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-emerald-400 to-emerald-900 text-center select-none pointer-events-none mb-4 sm:mb-6">
                    Song Suggestor
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-extrabold text-[#CADBD5] text-center select-none pointer-events-none mb-8 sm:mb-16">
                    Fill out the form below to get a song that matches your mood.
                </p>
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-2xl">
                        {handlePanel()}
                    </div>
                </div>
            </div>
        </div>
    );
}