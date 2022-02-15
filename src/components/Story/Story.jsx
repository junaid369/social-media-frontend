import "./Story.css"



export default function Story() {
    return (
        <div className="main-content" >
            <div className="story-gallery" >
                <div className="story"  >
                    <img src="assets/plus.png" alt="" style={{marginTop:"100px",marginLeft:"15px"}} />
                    <p>Post Story</p>
                </div>
                <div className="story"  >
                    <img className="storyperson" src="assets/person/pro-1.jpg" alt="" />
                </div>
                <div className="story"  >
                <img className="storyperson" src="assets/person/pro-3.jpg" alt=""  />
                </div>
                <div className="story" style={{borderColor:"red"}} >
                <img className="storyperson" src="assets/person/pro-4.jpg" alt="" />
                </div>
          



            </div>

        </div>
    );
}