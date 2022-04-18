import React from 'react'
import "./Testimonials.scss"

export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "ALICE",
          title: "Accountant",
          img:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/twitter.png",
          desc:
            "An accountant is a professional who is responsible for keeping and interpreting financial records.",
        },
        {
          id: 2,
          name: "EMILE",
          title: "Senior Developer",
          img:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/youtube.png",
          desc:
            "a senior developer performs various development duties, such as coding and web development. Senior developers may specialize in a specific area, oversee projects, and manage junior developers. ",
          featured: true,
        },
        {
          id: 3,
          name: "Rachel",
          title: "CEO of RAY STORE",
          img:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/linkedin.png",
          desc:
            "Fashion refers to a distinctive and often habitual trend in the style with which a person dresses, as well as to prevailing styles in behaviour.",
        },
      ];
    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d) =>(

                
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img className="user"src={d.img} alt="" />
                        <img className="right"src={d.icon} alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                         
                    </div>
                    <div className="bottom">
                         <h3>{d.name}</h3>
                         <h4>{d.title}</h4>
                         
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    )
}
