import React, { useEffect, useState } from 'react'
import { readData } from '../api/dbservice';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const UniversityDetail = () => {
    const { id } = useParams();
    const [university, setUniversity] = useState([]);
    const [universities, setUniversities] = useState([]);
    const [showCountry, setShowCountry] = useState("");
    const [documents, setDocuments] = useState([]);
    const { t, i18n } = useTranslation(["universityDetail"])
    useEffect(() => {
        console.log(id);
        const fetchData = async () => {
            const path = `/universities/${id}`;
            try {
                const result = await readData(path);
                console.log(result);
                if (i18n.language === "en") {
                    result.country = result?.country_en;
                    result.city = result?.city_en;
                    result.about = result?.about_en;
                    result.name = result?.name_en;
                    result?.documents?.map((d) => d.value = d.value_en)
                    result?.specialties?.map((s) => s.speciality_name = s.speciality_name_en)
                    console.log(result.documents);
                }
                console.log(result);
                setUniversity(result);

                setShowCountry(result?.country);
                setDocuments(result?.documents)
            } catch (error) {
                console.error("Error reading data: ", error);
            }
        };
        fetchData();
    }, [id, i18n.language]);
    useEffect(() => {
        console.log(id);
        const fetchData = async () => {
            const path = `/universities`;
            try {
                const result = await readData(path);
                console.log(result);
                if (result) {
                    const similarUniversity = [];
                    if (i18n.language === "en") {
                        for (let universityId in result) {
                            let university = result[universityId];
                            if (university.country_en === showCountry && universityId !== id) {
                                university["id"] = universityId;
                                university.name = university.name_en
                                similarUniversity.push(university);
                            }
                        }
                    }else{
                        for (let universityId in result) {
                            let university = result[universityId];
                            if (university.country === showCountry && universityId !== id) {
                                university["id"] = universityId;
                                similarUniversity.push(university);
                            }
                        } 
                    }
                    setUniversities(similarUniversity);
                }
            } catch (error) {
                console.error("Error reading data: ", error);
            }
        };
        fetchData();
    }, [showCountry, id, i18n.language]);
    useEffect(() => {
        console.log(universities);
    }, [universities])
    return (
        <>
            <section id="first_section_" className='u'
                style={{ backgroundImage: `url('${university?.image_url}')`, height: "500px" }}
            >
                <div className="container">
                    <div id="first_section_text" >
                        {/* <h1>Country Detailssss</h1> */}
                        <div style={{ color: "white", display: "flex", gap: "20px", flexDirection: "column" }}>
                            <h2 style={{ fontSize: "21px" }}>{university.country}, {university.city}</h2>
                            <h4 style={{ fontSize: "41px" }}>{university.name}</h4>
                        </div>
                        <div id="contries_div" style={{ marginTop: "20px" }}>
                            <Link to="/" className="links_for">
                                <span>{t("home")}</span>
                            </Link>
                            <p>/</p>
                            <Link to="/countries" className="links_for">
                                <span>{t("countries")}</span>
                            </Link>
                            <p>/</p>
                            <p>{university.city}</p>
                        </div>
                    </div>
                </div>
            </section>
            <div id="main_second_section" className='container' style={{ paddingTop: "50px" }} >
                <section id="second_section_">
                    <div id="text_foto_second_sec">
                        <p>{university.about}</p>
                        <h2>{t("why_choose_us")}</h2>
                        <div id="flx_second_sec">
                            <div className="boxes_choose">
                                <div className="svg_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M7.96875 21.7813C7.9375 21.7813 7.89583 21.8021 7.86458 21.8021C5.84375 20.8021 4.19792 19.1459 3.1875 17.125C3.1875 17.0938 3.20833 17.0521 3.20833 17.0209C4.47917 17.3959 5.79167 17.6771 7.09375 17.8959C7.32292 19.2084 7.59375 20.5105 7.96875 21.7813Z" fill="#FE6C3F"></path><path d="M21.8125 17.1355C20.7812 19.2084 19.0625 20.8855 16.9688 21.8959C17.3646 20.573 17.6979 19.2396 17.9167 17.8959C19.2292 17.6771 20.5208 17.3959 21.7917 17.0209C21.7812 17.0625 21.8125 17.1042 21.8125 17.1355Z" fill="#FE6C3F"></path><path d="M21.8958 8.03121C20.5833 7.63538 19.2604 7.31246 17.9167 7.08329C17.6979 5.73954 17.375 4.40621 16.9688 3.10413C19.125 4.13538 20.8646 5.87496 21.8958 8.03121Z" fill="#FE6C3F"></path><path d="M7.97005 3.21875C7.59505 4.48958 7.32422 5.78125 7.10547 7.09375C5.76172 7.30208 4.42839 7.63542 3.10547 8.03125C4.11589 5.9375 5.79297 4.21875 7.86589 3.1875C7.89714 3.1875 7.9388 3.21875 7.97005 3.21875Z" fill="#FE6C3F"></path><path d="M16.1341 6.86462C13.7174 6.59379 11.2799 6.59379 8.86328 6.86462C9.1237 5.43754 9.45703 4.01046 9.92578 2.63546C9.94661 2.55212 9.9362 2.48962 9.94661 2.40629C10.7695 2.20837 11.6133 2.08337 12.4987 2.08337C13.3737 2.08337 14.2279 2.20837 15.0404 2.40629C15.0508 2.48962 15.0508 2.55212 15.0716 2.63546C15.5404 4.02087 15.8737 5.43754 16.1341 6.86462Z" fill="#FE6C3F"></path><path d="M6.86328 16.1355C5.42578 15.875 4.00911 15.5417 2.63411 15.073C2.55078 15.0521 2.48828 15.0625 2.40495 15.0521C2.20703 14.2292 2.08203 13.3855 2.08203 12.5C2.08203 11.625 2.20703 10.7709 2.40495 9.95837C2.48828 9.94796 2.55078 9.94796 2.63411 9.92712C4.01953 9.46879 5.42578 9.12504 6.86328 8.86462C6.60286 11.2813 6.60286 13.7188 6.86328 16.1355Z" fill="#FE6C3F"></path><path d="M22.918 12.5C22.918 13.3855 22.793 14.2292 22.5951 15.0521C22.5117 15.0625 22.4492 15.0521 22.3659 15.073C20.9805 15.5313 19.5638 15.875 18.1367 16.1355C18.4076 13.7188 18.4076 11.2813 18.1367 8.86462C19.5638 9.12504 20.9909 9.45837 22.3659 9.92712C22.4492 9.94796 22.5117 9.95837 22.5951 9.95837C22.793 10.7813 22.918 11.625 22.918 12.5Z" fill="#FE6C3F"></path><path d="M16.1341 18.1354C15.8737 19.5729 15.5404 20.9895 15.0716 22.3645C15.0508 22.4479 15.0508 22.5104 15.0404 22.5937C14.2279 22.7916 13.3737 22.9166 12.4987 22.9166C11.6133 22.9166 10.7695 22.7916 9.94661 22.5937C9.9362 22.5104 9.94661 22.4479 9.92578 22.3645C9.46745 20.9791 9.1237 19.5729 8.86328 18.1354C10.0716 18.2708 11.2799 18.3645 12.4987 18.3645C13.7174 18.3645 14.9362 18.2708 16.1341 18.1354Z" fill="#FE6C3F"></path><path d="M16.4188 16.4202C13.8135 16.7489 11.1839 16.7489 8.57856 16.4202C8.24985 13.8149 8.24985 11.1852 8.57856 8.5799C11.1839 8.2512 13.8135 8.2512 16.4188 8.5799C16.7475 11.1852 16.7475 13.8149 16.4188 16.4202Z" fill="#FE6C3F"></path></svg>
                                </div>
                                <div className="text_center_second_sec">
                                    <h3>{t("known_diploma")}</h3>
                                </div>
                            </div>
                            <div className="boxes_choose blue">
                                <div className="svg_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M9.3737 2.08337C6.64453 2.08337 4.42578 4.30212 4.42578 7.03129C4.42578 9.70837 6.51953 11.875 9.2487 11.9688C9.33203 11.9584 9.41536 11.9584 9.47786 11.9688C9.4987 11.9688 9.50911 11.9688 9.52995 11.9688C9.54036 11.9688 9.54036 11.9688 9.55078 11.9688C12.2174 11.875 14.3112 9.70837 14.3216 7.03129C14.3216 4.30212 12.1029 2.08337 9.3737 2.08337Z" fill="#1496F8"></path><path d="M14.668 14.7396C11.7617 12.8021 7.02214 12.8021 4.09505 14.7396C2.77214 15.625 2.04297 16.823 2.04297 18.1042C2.04297 19.3855 2.77214 20.573 4.08464 21.448C5.54297 22.4271 7.45964 22.9167 9.3763 22.9167C11.293 22.9167 13.2096 22.4271 14.668 21.448C15.9805 20.5625 16.7096 19.375 16.7096 18.0834C16.6992 16.8021 15.9805 15.6146 14.668 14.7396Z" fill="#1496F8"></path><path d="M20.8242 7.64586C20.9909 9.66669 19.5534 11.4375 17.5638 11.6771C17.5534 11.6771 17.5534 11.6771 17.543 11.6771H17.5117C17.4492 11.6771 17.3867 11.6771 17.3346 11.6979C16.3242 11.75 15.3971 11.4271 14.6992 10.8334C15.7721 9.87502 16.3867 8.43752 16.2617 6.87502C16.1888 6.03127 15.8971 5.26044 15.4596 4.60419C15.8555 4.40627 16.3138 4.28127 16.7826 4.23961C18.8242 4.06252 20.6471 5.58336 20.8242 7.64586Z" fill="#1496F8"></path><path d="M22.9076 17.2812C22.8242 18.2916 22.1784 19.1666 21.0951 19.7604C20.0534 20.3333 18.7409 20.6041 17.4388 20.5729C18.1888 19.8958 18.6263 19.052 18.7096 18.1562C18.8138 16.8645 18.1992 15.625 16.9701 14.6354C16.2721 14.0833 15.4596 13.6458 14.5742 13.3229C16.8763 12.6562 19.7721 13.1041 21.5534 14.5416C22.5117 15.3125 23.0013 16.2812 22.9076 17.2812Z" fill="#1496F8"></path></svg>
                                </div>
                                <div className="text_center_second_sec">
                                    <h3>{t("military_service")}</h3>
                                </div>
                            </div>
                            <div className="boxes_choose green">
                                <div className="svg_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M17.5326 16.2917C18.2305 15.8334 19.1471 16.3334 19.1471 17.1667V18.5105C19.1471 19.8334 18.1159 21.25 16.8763 21.6667L13.5534 22.7709C12.9701 22.9688 12.0221 22.9688 11.4492 22.7709L8.1263 21.6667C6.8763 21.25 5.85547 19.8334 5.85547 18.5105V17.1563C5.85547 16.3334 6.77214 15.8334 7.45964 16.2813L9.60547 17.6771C10.4284 18.2292 11.4701 18.5 12.5117 18.5C13.5534 18.5 14.5951 18.2292 15.418 17.6771L17.5326 16.2917Z" fill="#00CC99"></path><path d="M20.8138 6.72913L14.5742 2.63538C13.4492 1.89579 11.5951 1.89579 10.4701 2.63538L4.19922 6.72913C2.1888 8.03121 2.1888 10.9791 4.19922 12.2916L5.86589 13.375L10.4701 16.375C11.5951 17.1145 13.4492 17.1145 14.5742 16.375L19.1471 13.375L20.5742 12.4375V15.625C20.5742 16.052 20.9284 16.4062 21.3555 16.4062C21.7826 16.4062 22.1367 16.052 22.1367 15.625V10.5C22.5534 9.15621 22.1263 7.59371 20.8138 6.72913Z" fill="#00CC99"></path></svg>
                                </div>
                                <div className="text_center_second_sec">
                                    <h3>{t("quality_higher_education")}</h3>
                                </div>
                            </div>
                            <div className="boxes_choose yellow">
                                <div className="svg_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M20.8763 7.10417L14.8763 2.90626C13.2409 1.76042 10.7305 1.82292 9.15755 3.04167L3.9388 7.11459C2.89714 7.92709 2.07422 9.59376 2.07422 10.9063V18.0938C2.07422 20.75 4.23047 22.9167 6.88672 22.9167H18.1159C20.7721 22.9167 22.9284 20.7604 22.9284 18.1042V11.0417C22.9284 9.63542 22.0221 7.90626 20.8763 7.10417ZM17.5846 13.9583C17.5846 14.3646 17.2617 14.6875 16.8555 14.6875C16.4492 14.6875 16.1263 14.3646 16.1263 13.9583V13.7708L13.293 16.6042C13.1367 16.7604 12.9284 16.8333 12.7096 16.8125C12.5013 16.7917 12.3034 16.6667 12.1888 16.4896L11.1263 14.9063L8.64714 17.3854C8.5013 17.5313 8.32422 17.5938 8.13672 17.5938C7.94922 17.5938 7.76172 17.5208 7.6263 17.3854C7.34505 17.1042 7.34505 16.6458 7.6263 16.3542L10.7305 13.25C10.8867 13.0938 11.0951 13.0208 11.3138 13.0417C11.5326 13.0625 11.7305 13.1771 11.8451 13.3646L12.9076 14.9479L15.1055 12.75H14.918C14.5117 12.75 14.1888 12.4271 14.1888 12.0208C14.1888 11.6146 14.5117 11.2917 14.918 11.2917H16.8555C16.9492 11.2917 17.043 11.3125 17.1367 11.3438C17.3138 11.4167 17.4596 11.5625 17.5326 11.7396C17.5742 11.8333 17.5846 11.9271 17.5846 12.0208V13.9583Z" fill="#FFBD0F"></path></svg>
                                </div>
                                <div className="text_center_second_sec">
                                    <h3>{t("high_standards")}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="specialities_section">
                        <div className="container">
                            <h2>{t("specialties")}</h2>
                            <div className="table-wrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>{t("specialty")}</th>
                                            <th>
                                                <div>
                                                    <p>{t("bachelor")}</p>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    <p>{t("master")}</p>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {university?.specialties?.map((s, index) => (
                                            <tr key={index}>
                                                <td>{s?.speciality_name}</td>
                                                <td>
                                                    <div>
                                                        <span>{s?.bachelor?.full_time_price}</span>
                                                        <span>{s?.bachelor?.correspondence_price}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span>{s?.master?.full_time_price}</span>
                                                        <span>{s?.master?.correspondence_price}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                <aside style={{ marginBottom: "20px" }}>
                    <div className="aside_second_sec">
                        <ul className="country_item">
                            {
                                universities?.map((u) => (
                                    <li key={u.id}>
                                        <Link to={`/country/university/${u.id}`}>
                                            <span>
                                                {u?.name?.split(" ").map(a => (a[0] === a[0]?.toUpperCase() ? a[0] : '')).join('')}
                                            </span>
                                            <div className="img_country">
                                                <img src={`${u?.logo_url}`} alt="" />
                                            </div>
                                        </Link>
                                    </li>
                                ))

                            }
                        </ul>
                    </div>
                    <div className="aside_second_sec margin">
                        <h3>Tələblər</h3>
                        <ul id="downloads_div">
                            {
                                documents?.map((d) => (
                                    <li>
                                        <Link to="">
                                            <div className="pdf_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none"><path d="M3.62109 24.9082C4.00853 26.1206 5.13241 27 6.45562 27H20.5432C21.8664 27 22.9903 26.1206 23.3777 24.9082H3.62109Z" fill="white"></path><path d="M22.65 4.33823L19.1847 0.872948C19.0418 0.729985 18.8872 0.60395 18.7227 0.494263V4.7813C18.7227 4.87886 18.8023 4.95802 18.8999 4.95802H23.1263C22.9976 4.73379 22.8378 4.52602 22.65 4.33823Z" fill="white"></path><path d="M23.5224 6.54028H18.8999C17.9295 6.54028 17.1404 5.75121 17.1404 4.78127V0.00105469C17.1198 0 17.0987 0 17.0782 0H6.45553C4.81306 0 3.47656 1.33655 3.47656 2.97949V11.1058H23.5225L23.5224 6.54028Z" fill="white"></path><path d="M13.5283 16.184H12.8047V19.9155H13.5283C14.016 19.9155 14.2599 19.6446 14.2599 19.1025V16.997C14.2599 16.4551 14.016 16.184 13.5283 16.184Z" fill="white"></path><path d="M8.98452 16.184H8.17969V17.8993H8.98452C9.47231 17.8993 9.71626 17.6284 9.71626 17.0863V16.9969C9.71616 16.4551 9.47226 16.184 8.98452 16.184Z" fill="white"></path><path d="M23.6257 12.6881H3.3739C2.2717 12.6881 1.375 13.5848 1.375 14.687V21.3269C1.375 22.4291 2.2717 23.3258 3.3739 23.3258H23.6257C24.7279 23.3258 25.6246 22.4291 25.6246 21.3269V14.687C25.6246 13.5848 24.7279 12.6881 23.6257 12.6881ZM10.9838 16.9888C10.9838 17.6338 10.8008 18.1094 10.435 18.4155C10.0692 18.7218 9.58543 18.8749 8.98383 18.8749H8.179V20.6309C8.179 20.7556 8.11661 20.8518 7.992 20.9195C7.86729 20.9873 7.71826 21.0211 7.54487 21.0211C7.37132 21.0211 7.22235 20.9873 7.09768 20.9195C6.97296 20.8518 6.91069 20.7556 6.91069 20.6309V15.4603C6.91069 15.3574 6.95398 15.268 7.04073 15.192C7.12737 15.1162 7.24117 15.0782 7.38218 15.0782H9.06504C9.64491 15.0782 10.1098 15.2286 10.4593 15.5295C10.8089 15.8303 10.9837 16.3032 10.9837 16.9481V16.9888H10.9838ZM15.5282 19.1026C15.5282 19.7639 15.3465 20.2488 14.9835 20.5578C14.6203 20.8667 14.1352 21.0212 13.5283 21.0212H12.0893C11.9267 21.0212 11.7938 20.9833 11.691 20.9074C11.588 20.8316 11.5364 20.7421 11.5364 20.6391V15.4604C11.5364 15.3575 11.5879 15.2681 11.691 15.1921C11.7938 15.1163 11.9267 15.0783 12.0893 15.0783H13.5283C14.1352 15.0783 14.6203 15.2329 14.9835 15.5418C15.3465 15.8507 15.5282 16.3359 15.5282 16.997V19.1026ZM19.9873 16.0214C19.9195 16.1299 19.8259 16.184 19.7068 16.184H17.6013V17.558H18.8288C18.9479 17.558 19.0415 17.6068 19.1093 17.7043C19.177 17.8018 19.2109 17.9185 19.2109 18.0538C19.2109 18.1786 19.1784 18.2896 19.1134 18.3872C19.0483 18.4847 18.9534 18.5335 18.8288 18.5335H17.6013V20.6309C17.6013 20.7556 17.5389 20.8518 17.4143 20.9195C17.2895 20.9873 17.1405 21.0211 16.9671 21.0211C16.7936 21.0211 16.6446 20.9873 16.5199 20.9195C16.3952 20.8518 16.3329 20.7556 16.3329 20.6309V15.4685C16.3329 15.3439 16.3871 15.2477 16.4956 15.1799C16.6039 15.1122 16.734 15.0783 16.8858 15.0783H19.7068C19.8313 15.0783 19.9263 15.1325 19.9913 15.2409C20.0564 15.3494 20.0889 15.4767 20.0889 15.623C20.0888 15.7802 20.0549 15.913 19.9873 16.0214Z" fill="white"></path></svg>
                                            </div>
                                            <h4>{d?.value}<br /></h4>
                                            <div className="down_icon">
                                                {/* 3.9 KB */}
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </aside>
            </div>

        </>
    )
}

export default UniversityDetail;