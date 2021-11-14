import React from "react"
import ReactAudioPlayer from 'react-audio-player';
import "../styles/index.css"


export default function Home() {
    return <div><ReactAudioPlayer
        src="/media/Frank Sinatra & OpenAI - It's Hot Tub Time.wav"
        autoPlay={true}
        controls={false}
    />
    <img class="responsive" src={"img/ai-jesus.jpeg"}></img>
    </div>
}

