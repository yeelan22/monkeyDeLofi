import React from 'react'
import unitedPeople from "../images/unitedPeople.jpeg"
import Article from '../../components/Article';
import {MaskHappy, MonitorPlay, ArticleNyTimes} from "phosphor-react"
import video1 from "../images/(1).mp4"
import video2 from "../images/(2).mp4"
import video3 from "../images/(3).mp4"
import NavBar from '../../components/NavBar';
import "./Home.css";

const Home = () => {
  return (
    <div>
        <NavBar />
      <div className='hero'>

        <div className='h-topSection'>
            <div className='presentation'>
               <div className='title'>
               <div> <p> Agir Ensemble </p><img src={unitedPeople} /> <p>pour </p></div>
                <p> un Avenir Durable </p>
                </div>

              <p className='description'>Découvrez comment notre classe s'engage à faire une différence dans la lutte contre le changement climatique, pour plus d'information:</p> 
               <button className='projetButton'>Notre Projet</button> 
            </div>
            <div className='h-rightSide'>
                <p className='p1'>Sauver</p>
              <div className='videos'>
             
                <div className='v-div add_margin'>
                  <video autoPlay="autoplay" loop muted plays-inline class="back-video">
                   <source src= {video1} type="video/mp4"></source>
                </video>
                </div>
                <div className='v-div'>
                <video autoplay="autoplay" loop muted plays-inline class="back-video s-vid">
                   <source src= {video2} type="video/mp4"></source>
                </video>
                </div>
                <div className='v-div add_margin'>
                <video autoplay="autoplay" loop muted plays-inline class="back-video">
                   <source src= {video3} type="video/mp4"></source>
                </video>
                <p className='p2'>Notre </p>
                <p className='p3'>Planet!</p>
                </div>
               
              </div>
            <div className='categories'>
                      
                 <div className='categorie'>
                 <MonitorPlay className='c-icons'  />
                 <p>Reportages</p>
                 </div>

                 <div className='categorie'>
                 <MaskHappy className='c-icons'  />
                 <p>Theatre</p>
                 </div>

                 <div className='categorie'>
                 <ArticleNyTimes className='c-icons'  />
                 <p>Articles</p>
                 </div>
           </div>
           </div>
        </div>
      <div className='h-bottomSection'>
         
      </div>
      </div>
        
       {/* sections */}
    </div>
  )
}

export default Home
