import React, { useEffect, useState } from "react";
import "./css/News.css";
import CardNews from "./CardNews";
import { readData } from "../api/dbservice";
const News = () => {
  const [news, setNews] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const path = `/news`;
      try {
        const result = await readData(path);
        console.log(result);
        let blogs = [];
        for (let blogId in result) {
          let blog = result[blogId];

          blog["id"] = blogId;
          blogs.push(blog);
        }
        console.log(blogs);
        setNews(blogs)
      } catch (error) {
        console.error("Error reading data: ", error);
      }
    };
    fetchData();
  }, []);
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
            {
              news?.map((n, index) => (
                <CardNews key={index} info={n} />
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
