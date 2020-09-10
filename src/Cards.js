import React, { useState } from 'react';
import TinderCards from 'react-tinder-card'
import './Cards.css';


function Cards() {
    const [people, setPeople]=useState([
        {
            name:"Bill Gates",
            url:"https://media.wired.com/photos/5e6c06e613205e0008da2461/16:9/w_2400,h_1350,c_limit/Biz-billgates-950211062.jpg"
        },
        {
            name:"Steve Jobs",
            url:"https://d.newsweek.com/en/full/356491/steve-jobs.jpg"
        },
        {
            name:"Elon Musk",
            url:"https://specials-images.forbesimg.com/imageserve/5f3165c26ef4e2d3080a576b/960x0.jpg"
        },
        {
            name:"Black Widow",
            url:"https://a-static.besthdwallpaper.com/scarlett-johansson-as-black-widow-in-avengers-wallpaper-2732x2048-12874_172.jpg"

        },
        {
            name:"Iron Man",
            url:"https://pmcvariety.files.wordpress.com/2013/12/01-iron-man-3.jpg"
        },
        {
            name:"Wonder Woman",
            url:"https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/WONDER-WOMAN-921772.jpg"
        },
        {
            name:"Scarlet Witch",
            url:"https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:91092?quality=0.8&format=jpg&width=1440&height=810&.jpg"
        }
        
    ])
    return (
        <div className="card_container">
            {people.map(person=>(
                <TinderCards
                 className="swipe"
                 key={person.name}
                 preventSwipe={["up","down"]}
                >
                    <div
                    style={{backgroundImage:`url(${person.url})`}}
                    className="card"
                    >
                        <h2>{person.name}</h2>

                    </div>
                </TinderCards>

            ))}
            
        </div>
    )
}

export default Cards
