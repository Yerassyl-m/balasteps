import React from "react";
import "./Bodymainpages.css";
import img from "../../../assets/mainpage1.png";
import img2 from "../../../assets/mainpage2.png";
import news1 from "../../../assets/news1.png";
import news2 from "../../../assets/news2.png";
import news3 from "../../../assets/news3.png";
import card1_1 from "../../../assets/card1_left.png";
import card1_2 from "../../../assets/card1_right.png";
import card2_1 from "../../../assets/card2_left.png";
import card2_2 from "../../../assets/card2_right.png";
import card3_1 from "../../../assets/card3_left.png";
import card3_2 from "../../../assets/card3_right.png";
import card4_1 from "../../../assets/card4_left.png";
import card4_2 from "../../../assets/card4_right.png";

function Bodymainpages() {
  return (
    <div id="main" className="bodymainpage">
      <div className="bodymainpage_title">
        <h1>
          Your Step-by-Step Guide to
          <br />
          Support Your Special Child.
        </h1>
      </div>

      <div className="button_body">
        <button className="button_mainpage">Get Started</button>
      </div>

      <div id="news" className="img_mainpage">
        <img className="img1" src={img} alt="" width="419px" height="393px" />
        <img className="img2" src={img2} alt="" width="462px" height="393px" />
      </div>

      <div  className="news_all">
        <div className="news_right">
          <h1>News</h1>
        </div>
        <div className="news_left">
          <div className="first_newsimg">
            <img className="newsimg1" src={news1} alt="" />
            <h6 className="newsimg1_text">
              The issues of parents raising special needs <br />
              children were discussed at the JSDP
              <br />
              platform.
            </h6>
          </div>

          <div className="second_newsimg">
            <img className="newsimg2" src={news2} alt="" />
            <h6 className="newsimg2_text">
              A special day for special children.
            </h6>
          </div>

          <div className="third_newsimg">
            <img className="newsimg2" src={news3} alt="" />
            <h6 className="newsimg2_text">
              A sports relay competition was held <br />
              among special needs children in <br />
              Nur-Sultan..
            </h6>
          </div>
        </div>
      </div>

      <div className="card_all">

        <div id="ikomek" className="card1">
          <div className="card1_left">
            <img className="card1_imgleft" src={card1_1} alt="" />
          </div>
          <div className="card1_right">
            <img className="card1_imgright" src={card1_2} alt="" />
            <h6 className="card1_textright" src="" alt="">
              Get instant answers and
              <br /> expert
              <br /> recommendations.
            </h6>
          </div>
        </div>

        <div id="forums" className="card2">
          <div className="card2_left">
            <img className="card2_imgleft" src={card2_1} alt="" />
            <h6 className="card2_textleft" src="" alt="">
              Connect with other parents,
              <br /> share experiences, <br />
              and get support.
            </h6>
          </div>
          <div className="card2_right">
            <img className="card2_imgleft" src={card2_2} alt="" />
          </div>
        </div>

        <div id="marketplace" className="card3">
          <div className="card3_left">
            <img className="card3_imgleft" src={card3_1} alt="" />
          </div>
          <div className="card3_right">
            <img className="card3_imgright" src={card3_2} alt="" />
            <h6 className="card3_textright" src="" alt="">
              Share, sell and buy second
              <br />
              -hand items.
            </h6>
          </div>
        </div>

        <div id="aboutus" className="card4">
          <div className="card4_left">
            <img className="card4_imgright" src={card4_1} alt="" />
            <h6 className="card4_textleft" src="" alt="">Personalized step-by-step<br/> guidance tailored to your child's<br/>needs.</h6>
          </div>
          <div className="card4_right">
            <img className="card4_imgleft" src={card4_2} alt="" />
          </div>

        </div>
      </div>
    </div>
  );
}
export default Bodymainpages;
