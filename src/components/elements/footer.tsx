import * as React from 'react';


const Footer: React.FC = () => {
    return (
        <>

            <div className="w-full mt-12 flex justify-center items-center py-6 bg-white/10 backdrop-blur-2xl text-gray-300 text-sm">
                © {new Date().getFullYear()} Lift My Mind. All rights reserved.
            </div>
        </>
    );
};

export default Footer;