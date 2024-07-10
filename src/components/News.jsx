import React, { useEffect, useState } from 'react';
import "./css/News.css";
import CardNews from "./CardNews";
import { readData } from "../api/dbservice";
import { useTranslation } from "react-i18next";

const News = () => {
  const [newsData, setNewsData] = useState(null);
  const [data, setData] = useState(null);
  const { t } = useTranslation(["news"]);

  useEffect(() => {
    const fetchData = async () => {
      const path = `/news`;
      try {
        const result = await readData(path);
        setData(result);
      } catch (error) {
        console.error("Error reading data: ", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    let blogs = [];
    for (let blogId in data) {
      let blog = data[blogId];
      blog["id"] = blogId;
      blogs.push(blog);
    }
    setNewsData(blogs);
  }, [data])
  return (
    <section id="news_sec">
      <div className="container">
        <div id="education_steps_text">
          <h2>
            {t("news_title")}
            <br />
            <span>{t("news_subtitle")}</span>
          </h2>
        </div>
        <div id="news_cards">
          {
            newsData?.map((n, index) => (
              <CardNews key={index} info={n} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default News;
