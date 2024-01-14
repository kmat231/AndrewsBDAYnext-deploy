import "./Profile.css"
export default function Home() {
    return <div>
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
                <div className="td active"><i className="material-icons"></i><span><a href="/">TIMELINE</a></span></div>
                <div className="td"><i className="material-icons"></i><span><a href="/photos">PHOTOS</a></span></div>
              </div>
            </div>
            <div className="td" id="p-tab-m"><i className="material-icons"></i></div>
          </div>
        </div>
        <div className="m-mrg" id="composer">
          <div id="c-tabs-cvr">
            <div className="tb" id="c-tabs">
              <div className="td active"><i className="material-icons"></i><span>Make Post</span></div>
              <div className="td"><i className="material-icons"></i><span>Photo/Video</span></div>
              <div className="td"><i className="material-icons"></i><span>Live Video</span></div>
              <div className="td"><i className="material-icons"></i><span>Life Event</span></div>
            </div>
          </div>
          <div id="c-c-main">
            <div className="tb">
              <div className="td" id="p-c-i"><img src="/Photos/snowman.jpg" alt="Profile pic"/></div>
              <div className="td" id="c-inp">
                <input type="text" placeholder="What's on your mind?"/>
              </div>
            </div>
            <div id="insert_emoji"><i className="material-icons"></i></div>
          </div>
        </div>
        <div>
        <div className="post" id="post1">
            <div className="tb">
              <a href="#" className="td p-p-pic"><img src="/Icons/man.png" alt="Rajeev's profile pic"/></a>
              <div className="td p-r-hdr">
                <div className="p-u-info">
                  <a href="#">Kevin Mathew</a>
                </div>
                <div className="p-dt">
                  <i className="material-icons"></i>
                  <span>January 13, 2024</span>
                </div>
              </div>
              <div className="td p-opt"><i className="material-icons"></i></div>
            </div>
            <div className="bday-message-div">
              <p id="bday-message" > Happy Birthday Andrew!</p>
              <div className="p-acts">
                <div className="p-act like"><i className="material-icons"></i></div>
                <div className="p-act comment"><i className="material-icons"></i></div>
                <div className="p-act share"><i className="material-icons"></i></div>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="tb">
              <a href="#" className="td p-p-pic"><img src="Icons/girl.png" alt="Rajeev's profile pic"/></a>
              <div className="td p-r-hdr">
                <div className="p-u-info">
                  <a href="#">Feng Jiaxi</a> shared a memory with <a href="#">Andrew Liang</a>
                </div>
                <div className="p-dt">
                  <i className="material-icons"></i>
                  <span>January 13, 2007</span>
                </div>
              </div>
              <div className="td p-opt"><i className="material-icons"></i></div>
            </div>
            <a href="#" className="p-cnt-v">
              <img src="/Photos/pastlives.jpg"/>
            </a>
            <div>
              <div className="p-acts">
                <div className="p-act like"><i className="material-icons"></i></div>
                <div className="p-act comment"><i className="material-icons"></i></div>
                <div className="p-act share"><i className="material-icons"></i></div>
              </div>
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
}
