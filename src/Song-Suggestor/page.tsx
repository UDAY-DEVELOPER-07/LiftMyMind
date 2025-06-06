
import MyVantaComponent from "../components/ui/background";

export default function SongSuggestorPage() {
  return (
        <>
            <div className="h-screen min-h-screen bg-black w-full fill flex justify-center relative overflow-hidden">
                       <div className="absolute inset-0 z-5">
                          <MyVantaComponent />
                        </div>
                <div className="relative h-screen w-full flex flex-col items-center min-h-screen backdrop-blur-sm  z-[5] pt-12  px-4">
                    <p className="absolute top-0 w-7xl left-1/2-translate-x-1/2 bg-clip-text  bg-gradient-to-b via-emerald-200 from-emerald-50 to-emerald-900 text-[700%] text-transparent z-5 font-extrabold text-center pointer-events-none select-none" style={{ marginTop: '9rem' }}>
                       Song Suggestor
                    </p>
                    <p className="absolute w-full top-0   text-[#CADBD5] text-[150%] z-5 font-extrabold text-center pointer-events-none select-none" style={{ marginTop: '18rem' }}>
                        Fill out the form below to get a song that matches your mood.
                    </p>
                    <div className="fixed top-8 flex w-[50%] h-[30%] rounded-2xl bg-white/25 backdrop-blur-3xl justify-between pt-1 z-[20]" style={{ marginTop: '20rem' }}>
                    </div>
                    <div className="absolute top-0 w-[50%] flex justify-between " style={{ marginTop: '40rem' }}>
                    <button className="px-6 py-2 mr-4 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-800 transition">Back</button>
                    <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-800 transition">Next</button>
                    </div>
                </div>
            </div>
        </>
    );
}