import React from "react";
import Hero from "../hero-section/page";
import Marqueue from "../marqueue/page";
import AiModels from "../ai-models/page";

const Home = () => {
    return(
        <div>
            <Hero />
            <Marqueue />
            <AiModels />
        </div>
    )
}


export default Home