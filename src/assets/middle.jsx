import React, { useState } from "react";
import Popup from "./popup.jsx";

function Middle() {
    const [textPrompt, setTextPrompt] = useState("");
    const [imagePrompt, setImagePrompt] = useState("");

    return (
        <div className="flex justify-center items-center w-screen h-[700px] mt-15 gap-x-70">
            <Popup
                distance={100}
                direction="vertical"
                reverse={true}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity={true}
                scale={1.05}
                threshold={0.2}
                delay={100}
            >
                <div className="w-[350px] h-[550px] card-spotlight rounded-2xl flex flex-col items-center justify-center gap-4 p-4">
                    <input
                        className="w-[300px] px-4 py-2 border text-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                        type="text"
                        placeholder="Write questions"
                        
                    />
                    <button
                        className="bg-purple-700 text-white px-4 py-2 rounded"
                    >
                        Send
                    </button>
                    <div className="w-[300px] text-white mt-2 h-[300px] overflow-y-auto border border-purple-600 p-2 rounded">
                    <h1>Works in Progress 🥲</h1>
                    </div>
                </div>
            </Popup>

            <Popup
                distance={100}
                direction="vertical"
                reverse={true}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity={true}
                scale={1.05}
                threshold={0.2}
                delay={300}
            >
                <div className="w-[350px] h-[550px] card-spotlight rounded-2xl flex flex-col items-center justify-center gap-4 p-4">
                    <input
                        className="w-[300px] px-4 py-2 border text-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                        type="text"
                        placeholder="Type to generate Image"
                    />
                    <button
                        className="bg-purple-700 text-white px-4 py-2 rounded"
                    >
                        Send
                    </button>
                    <div className="w-[300px] text-white mt-2 h-[300px] overflow-y-auto border border-purple-600 p-2 rounded"><h1>Works in Progress 🥲</h1></div>
                </div>
            </Popup>
        </div>
    );
}

export default Middle;
