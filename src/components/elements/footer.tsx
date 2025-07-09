

export default function Footer() {
    return (
        <>
            <div className="fixed bottom-0 w-full h-fit  bg-white/10 backdrop-blur-2xl text-gray-300 pt-4  text-center z-100">
                <p className="text-sm md:text-base font-extrabold font-stretch-200% z-50">
                    Created with ❤️ by Uday Pratap Singh and contributors.
                </p>
                <div className="mt-4 py-0 flex justify-center gap-4">
                    <a href="https://lift-my-mind.vercel.app/" className="text-sm md:text-base text-emerald-300 hover:underline">
                        Home
                    </a>
                    <a href="https://github.com/UDAY-DEVELOPER-07/" className="text-sm md:text-base text-emerald-300 hover:underline ml-2">
                        GitHub
                    </a>
                </div>
                <p className="text-xs md:text-sm mt-3">
                    © {new Date().getFullYear()} Lift My Mind. All rights reserved.
                </p>
            </div>
        </>
    );
};
