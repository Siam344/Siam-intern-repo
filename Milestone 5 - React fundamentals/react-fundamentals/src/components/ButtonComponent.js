import React, { useState } from 'react';

const getRandomEmoji = () => {
    const emojis = ["😂", "😜", "😎", "😆", "🤪", "😅", "😇", "😈", "😉", "😬", "🙃", "😋"];
    return emojis[Math.floor(Math.random() * emojis.length)];
};

const ButtonComponent = () => {
    const [feelGoodMessage, setFeelGoodMessage] = useState("");
    const [jokeMessage, setJokeMessage] = useState("");
    const [clickBaitMessage, setClickBaitMessage] = useState("");
    const [randomEmoji, setRandomEmoji] = useState("🔘");

    const handleFeelGoodClick = () => {
        setFeelGoodMessage("You are awesome! Keep clicking to spread positivity!");
    };

    const handleJokeClick = () => {
        setRandomEmoji(getRandomEmoji());
        setJokeMessage("You thought I am a button!");
    };

    const handleClickBait = () => {
        window.open("https://www.youtube.com/shorts/SXHMnicI6Pg", "_blank");
        setClickBaitMessage("Clickbaited! 😆");
    };

    return (
        <div className="flex justify-center space-x-8 items-center mt-8">
            <div className="flex flex-col items-center" style={{ minHeight: '100px' }}>
                <button
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:from-green-500 hover:to-blue-600 transition duration-300"
                    onClick={handleFeelGoodClick}
                >
                    Click Me to Feel Good!
                </button>
                <div className="text-xl text-gray-700 mt-2 min-h-[24px]">
                    {feelGoodMessage}
                </div>
            </div>

            <div className="flex flex-col items-center" style={{ minHeight: '100px' }}>
                <button
                    className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
                    onClick={handleJokeClick}
                >
                    {randomEmoji}
                </button>
                <div className="text-xl text-gray-700 mt-2 min-h-[24px]">
                    {jokeMessage}
                </div>
            </div>

            <div className="flex flex-col items-center" style={{ minHeight: '100px' }}>
                <button
                    className="bg-red-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
                    onClick={handleClickBait}
                >
                    Click Me
                </button>
                <div className="text-xl text-gray-700 mt-2 min-h-[24px]">
                    {clickBaitMessage}
                </div>
            </div>
        </div>
    );
};

export default ButtonComponent;
