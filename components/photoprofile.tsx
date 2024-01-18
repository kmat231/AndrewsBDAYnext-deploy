import Image from 'next/image'
import Profile from "./Profile"
import "./photoprofile.css"

export const data = [
  {
    id: 1,
    description: 'Excited Andrew!',
    type: "Picture",
    src:'/Photos/snowman.jpg'
  },
  {
    id: 2,
    description: 'Montreal Baby!',
    type: "Picture",
    src:'/Photos/montreal.jpeg'

  },
  {
    id:3,
    description: 'Uber drived kidnapped and fed us Chick-Fil-A',
    type: "Video",
    src: '/Videos/prom.mp4'
  },
  {
    id:3,
    description: 'The first of 123412413 times going to Lets meat',
    type: "Video",
    src: '/Videos/kbbq.mp4'
  },
  {
    id:4,
    description: 'Moments before the riverwater disaster',
    type: "Picture",
    src: '/Photos/riverwater.jpg'
  },
  {
    id:5,
    description: 'If a HOF for photos was a thing',
    type: "Picture",
    src: '/Photos/manzo.jpg'
  }, 
  {
    id:6,
    description: "I bet $100 you were salsa dancing",
    type: "Picture",
    src: '/Photos/clubber.jpg'
  },
  {
    id:7,
    description: 'Ferry vibes with the squad',
    type: "Picture",
    src: '/Photos/ferry.jpg'
  },
  {
    id:8,
    description: 'PeeWees',
    type: "Picture",
    src: '/Photos/PeeWee.jpg'
  },
  {
    id:9,
    description: "Martin had a dream Martin had a dream Andrew have a dream",
    type: "Picture",
    src: '/Photos/mlk.jpeg'
  },
  {
    id:10,
    description: "No question those tacos hit different that night",
    type: "Picture",
    src: '/Photos/tacos.jpeg'
  },
  {
    id:11,
    description: "Thumbs up if you stole money from Kevin",
    type: "Picture",
    src: '/Photos/Poker.jpg'
  },
  {
    id:12,
    description: "Why the hell did we go to SixFlags with that group LOL",
    type: "Video",
    src: '/Videos/karoke.mp4'
  },
  {
    id:13,
    description: "It's a GUCCI BAG!",
    type: "Video",
    src: '/Videos/gucci.mp4'
  },
  {
    id:14,
    description: "Taking our talents to South Beach",
    type: "Picture",
    src: '/Photos/beach.jpg'
  },
  {
    id:15,
    description: "When someone says their fantasy team is better",
    type: "Picture",
    src: '/Photos/mark.jpg'
  },
  {
    id:16,
    description: "Denzel Curry was the OG Hype Concert",
    type: "Video",
    src: '/Videos/IMG_2999.mov'
  },
  {
    id:17,
    description: "Entering the frozen tundra",
    type: "Picture",
    src: '/Photos/carpic.jpeg'
  },
  {
    id:18,
    description: "Bless Joannie and Vincent for a good time",
    type: "Picture",
    src: '/Photos/circle.jpeg'
  },

];

export default function Home() {
  return (
    <div>
      <div id="profile-upper">
    <div id="profile-banner-image">
      <img src={"/Photos/Niki_Concert.jpg"} alt="Banner image"/>
    </div>
    <div id="profile-d">
      <div id="profile-pic">
        <img src={"/Photos/snowman.jpg"}/>
      </div>
      <div id="u-name">Andrew Liang</div>
      <div className="tb" id="m-btns">
        <div className="td">
          <div className="m-btn"><i className="material-icons"></i><span>Activity log</span></div>
        </div>
        <div className="td">
          <div className="m-btn"><i className="material-icons"></i><span>Privacy</span></div>
        </div>
      </div>
      <div id="edit-profile"><i className="material-icons"></i></div>
    </div>
    <div id="black-grd"></div>
  </div>
  <div id="main-content">
    <div className="tb">
      <div className="td" id="l-col">
        <div className="l-cnt">
          <div className="cnt-label">
            <i className="l-i" id="l-i-i"></i>
            <span>Intro</span>
            <div className="lb-action"><i className="material-icons">edit</i></div>
          </div>
          <div id="i-box">
            <div id="intro-line">Consultant</div>
            <div id="u-occ">I love Fantasy Sports and Taylor Swift</div>
            <div id="u-loc"><i className="material-icons"></i><a href="#">New York City</a>, <a href="#">New York</a></div>
          </div>
        </div>
        <div className="l-cnt l-mrg">
          <div className="cnt-label">
            <i className="l-i" id="l-i-p"></i>
            <span><a href="/photos">Photos</a></span>
            <div className="lb-action" id="b-i"><i className="material-icons"></i></div>
          </div>
          <div id="photos">
        
          </div>
        </div>
     
        <div id="t-box">
          <a href="#">Privacy</a> <a href="#">Terms</a> <a href="#">Advertising</a> <a href="#">Ad Choices</a> <a href="#">Cookies</a> <span id="t-more">More<i className="material-icons"></i></span>
          <div id="cpy-nt">Facebook &copy; <span id="curr-year"></span></div>
        </div>
      </div>
      <div className="td" id="m-col">
        <div className="m-mrg" id="p-tabs">
          <div className="tb">
            <div className="td">
              <div className="tb" id="p-tabs-m">
                <div className="td"><i className="material-icons"></i><span><a href="/">TIMELINE</a></span></div>
                <div className="td active"><i className="material-icons"></i><span><a href="/photos">PHOTOS</a></span></div>
              </div>
            </div>
            <div className="td" id="p-tab-m"><i className="material-icons"></i></div>
          </div>
        </div>
        <div>
          <div>
          {
          data.map((media, i) => {
            if (media.type == "Picture") {
              return (
                <div className='post' key={i}> 
                  <p id='imageDesciption' key={i}> {media.description} </p>
                  <img key={i} src={media.src}></img>
                </div> 
                );
              }
            else{
              return (
              <div className='post' key={i}> 
                <p id='imageDesciption' key={i}> {media.description} </p>
                <video key={i} src={media.src} loop controls></video>
              </div>
              );
            }
        })
      }
          <div>
          
            </div>
          </div>
        </div>
        <div id="loading"><i className="material-icons"></i></div>
      </div>
      <div className="td" id="r-col">
       
      </div>
    </div>
  </div>
  <div id="device-bar-2"><i className="fab fa-apple"></i></div>
</div>
   
  )
}
