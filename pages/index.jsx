import React from 'react';

const Index = () => {
    return (
        <div className="flex flex-wrap items-center justify-center py-10">
            <div className="flex flex-col items-center align-middle py-4 px-4">
                <img src="/img/pfp.png" className="rounded-full shadow-md"></img>
                <h1 className="px-4 text-4xl text-white leading-normal">Hello there, i'm <span className="text-indigo-200 font-bold">Kyu</span></h1>
                <p className="py-4 px-4 text-2xl text-white leading-none font-semibold">I'm a high-school student, full-stack developer and an aspiring entrepreneur.</p>
                <div className="flex flex-row items-center justify-center">
                <a href="https://github.com/kyu2017" className="rounded-sm  bg-gray-600 mr-2 py-2 px-4 text-white font-bold">Github</a>
                <a href="https://discord.gg/ykgh6RMuSA" className="rounded-sm bg-blue-600 mr-2 py-2 px-4 text-white font-bold">Twitter</a>
                <a href="https://discord.gg/ykgh6RMuSA" className="rounded-sm bg-indigo-700 py-2 px-4 text-white font-bold">Discord</a>
                </div>
                </div>
        </div>
    )
}

export default Index;