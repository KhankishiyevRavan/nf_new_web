import React, { useEffect,  useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { readData } from '../api/dbservice';
import "./BlogDetail.css"
import ReactPlayer from 'react-player/youtube';
const BlogDetail = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const path = `/news/${id}`;
      try {
        const result = await readData(path);
        if (i18n.language === "en") {
          result.name = result?.name_en
          result.about = result?.about_en
        }
        setBlog(result)


      } catch (error) {
        console.error("Error reading data: ", error);
      }
    };
    fetchData();
  }, [id, i18n.language]);
  return (
    <>
      <section id='blogdetail_sec'>
        <div className="container">
          <h2 className="title">
            {
              blog?.name
            }
          </h2>
          <ReactPlayer height={"auto"} url={`${blog?.video_url}`} controls/>
          {/* <frame src={`${blog?.video_url}`} width={"100%"}></frame> */}
          <span className='blog_date'><i className="fa-regular fa-calendar"></i> {blog?.date}</span>
          <p>{blog?.about}</p>
        </div>
      </section>
    </>
  )
}

export default BlogDetail