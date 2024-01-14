import Image from 'next/image'
import Profile from "../../components/Profile"
import "./page.css"

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
    description: '',
    type: "Video",
    src: '/Videos/kbbq.mp4'
  },

];
export default function Home() {
  return (
    <div>
      <div id="profile-upper">
    <div id="profile-banner-image">
      <img src="/Photos/Niki_Concert.jpg" alt="Banner image"/>
    </div>
    <div id="profile-d">
      <div id="profile-pic">
        <img src="/Photos/snowman.jpg"/>
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
                <div className='post'> 
                  <p id='imageDesciption' key={i}> {media.description} </p>
                  <img key={i} src={media.src}></img>
                </div> 
                );
              }
            else{
              return (
              <div className='post'> 
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
