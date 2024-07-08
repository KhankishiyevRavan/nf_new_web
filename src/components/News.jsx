import React from "react";
import "./css/News.css";
const News = () => {
  return (
    <>
      <section id="news_sec">
        <div className="container">
          <div id="education_steps_text">
            <h2>
              Son Xəbərlər
              <br />
              <span>Ən son yenilikləri bu bölmədən izləyə bilərsiniz</span>
            </h2>
          </div>
          <div id="news_cards">
            <div className="news_card">
              <div className="news_card_image">
                <img
                  src="https://wp.xpressbuddy.com/evisa/wp-content/uploads/2023/12/post_02.jpg"
                  alt=""
                />
              </div>
              <div className="news_card_text">
                <span className="news_card_date">
                  <i className="fa-regular fa-calendar"></i>4 may 2024, 18:07
                </span>
                <h3>Your Comprehensive Guide to Successfully Pursuing</h3>
                <button>
                  Ətraflı <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
            <div className="news_card">
              <div className="news_card_image">
                <img
                  src="https://wp.xpressbuddy.com/evisa/wp-content/uploads/2023/12/post_02.jpg"
                  alt=""
                />
              </div>
              <div className="news_card_text">
                <span className="news_card_date">
                  <i className="fa-regular fa-calendar"></i>4 may 2024, 18:07
                </span>
                <h3>Your Comprehensive Guide to Successfully Pursuing</h3>
                <button>
                  Ətraflı <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
            <div className="news_card">
              <div className="news_card_image">
                <img
                  src="https://wp.xpressbuddy.com/evisa/wp-content/uploads/2023/12/post_02.jpg"
                  alt=""
                />
              </div>
              <div className="news_card_text">
                <span className="news_card_date">
                  <i className="fa-regular fa-calendar"></i>4 may 2024, 18:07
                </span>
                <h3>Your Comprehensive Guide to Successfully Pursuing</h3>
                <button>
                  Ətraflı <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
