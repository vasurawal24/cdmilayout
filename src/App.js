import { TfiEmail } from "react-icons/tfi";
import { FaCertificate, FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaChevronDown, FaHandPointRight } from "react-icons/fa";
import { TiSocialGooglePlus, TiSocialInstagram } from "react-icons/ti";
import { BsArrowRight } from "react-icons/bs";
import { GrFormNextLink } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io";
import { FiYoutube } from "react-icons/fi";
import { RiDoubleQuotesR } from "react-icons/ri";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineBank } from "react-icons/ai";
import { PiStudentBold } from "react-icons/pi";



import './App.css';
import myimage from './image/creative.svg';
import slider from './image/slider.webp';
import first from './image/couseImge.webp';
import second from './image/couseImge2.webp';
import third from './image/couseImge3.webp';
import fourth from './image/couseImge4.webp';
import fiveth from './image/couseImge5.webp';
import sixth from './image/couseImge6.webp';
import img2 from './image/about.webp';
import std from './image/std.jpg';
import girl from './image/girl.jpg';
import icon from './image/icon2.png';
import icon2 from './image/icon3.png';
import icon3 from './image/icon4.png';
import icon4 from './image/icon5.jpg';
import icon5 from './image/icon6.png';
import icon6 from './image/icon7.jpg';
import par from './image/partner1.png';
import par1 from './image/partner2.png';
import par2 from './image/partner3.png';
import par3 from './image/partner4.png';
import par4 from './image/partner5.png';
import par5 from './image/partner6.png';
import last_image from './image/last_creative.svg';

function App() {
  return (
    <div>
      {/* top_info start */}
      <div className="topinfo">
        <div className="contain flex">
          <div className="flex">
            <TfiEmail className="icon info"></TfiEmail> <span>info@cdmi.in</span>
            <FaCertificate className="icon info"></FaCertificate><span>Verify Certificate</span>
          </div>
          <a style={{ color: "white", fontSize: "14px", cursor: "pointer", fontWeight: 600 }}>HAVE ANY QUESTION ? +91 90333 16003</a>
          <div className="flex social">
            <FaFacebookF className="icon1"></FaFacebookF>
            <FaTwitter className="icon1"></FaTwitter>
            <TiSocialGooglePlus className="icon1"></TiSocialGooglePlus>
            <IoLogoLinkedin className="icon1"></IoLogoLinkedin>
            <TiSocialInstagram className="icon1"></TiSocialInstagram>
            <FiYoutube className="icon1"></FiYoutube>
            <FaWhatsapp className="icon1"></FaWhatsapp>
          </div>
        </div>
      </div>
      {/* top_info end */}


      {/* logo */}
      <header>
        <div className="contain">
          <div className="flex">
            <div className="logo">
              <img src={myimage}></img>
            </div>
            {/* manu start*/}
            <nav className="flex">
              <ul className="flex main_manu">
                <li><a href="">HOME</a></li>
                <li><a href="">COURSES<FaChevronDown className="downIcon"></FaChevronDown></a></li>
                <li><a href="">ACTIVIES<FaChevronDown className="downIcon"></FaChevronDown></a></li>
                <li><a href="">BLOG</a></li>
                <li><a href="">KNOW US<FaChevronDown className="downIcon"></FaChevronDown></a></li>
                <li><a href="">GET IN TOUCH</a></li>
                <li><a href="">STUDENT ZONE<FaChevronDown className="downIcon"></FaChevronDown></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {/* manu start*/}

      {/* slider start*/}
      <div>
        <img src={slider} className="slider1"></img>
      </div>
      {/* slider end*/}

      {/* couses  section start */}

      <section>
        <div className="contain">
          <div className="space"></div>
          <div className="txt">
            <div className="creative">CREATIVE COUSES</div>
            <div className="couse">OFERED COUSES</div>
          </div>
          <div className="flex">
            <div className="Cimage">
              <div className="first">
                <img src={first}></img>
                <h3>Development Couses</h3>
                <hr></hr>
                <div className="flex">
                  <div className="Gstar">
                    <FaStar className="star"></FaStar>
                    <FaStar className="star"></FaStar>
                    <FaStar className="star"></FaStar>
                    <FaStar className="star"></FaStar>
                    <FaStarHalfStroke className="star"></FaStarHalfStroke>
                  </div>
                  <div>
                    <button className="btn">Know More..!</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="Cimage">
              <div className="first">
                <img src={second}></img>
                <h3>Design Courses</h3>
                <hr></hr>
                <div className="flex">
                  <div className="Gstar">
                    <FaStar className="star"></FaStar>
                    <FaStar className="star"></FaStar>
                    <FaStar className="star"></FaStar>
                    <FaStar className="star"></FaStar>
                    <FaStarHalfStroke className="star"></FaStarHalfStroke>
                  </div>
                  <div>
                    <button className="btn">Know More..!</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="Cimage">
              <div className="first">
                <img src={third}></img>
                <h3>Programming IT</h3>
                <hr></hr>
                <div className="flex">
                  <div className="Gstar">
                    <FaStar className="star"></FaStar>
                    <FaStar className="star"></FaStar>
                    <FaStar className="star"></FaStar>
                    <FaStar className="star"></FaStar>
                    <FaStarHalfStroke className="star"></FaStarHalfStroke>
                  </div>
                  <div>
                    <button className="btn">Know More..!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="Cimage">
              <div className="first">
                <img src={fourth}></img>
                <h3>Trendy Courses</h3>
                <hr></hr>
                <div className="flex">
                  <div className="Gstar">
                    <FaStar className="star"></FaStar>
                    <FaStar className="star"></FaStar>
                    <FaStar className="star"></FaStar>
                    <FaStar className="star"></FaStar>
                    <FaStarHalfStroke className="star"></FaStarHalfStroke>
                  </div>
                  <div>
                    <button className="btn">Know More..!</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="Cimage">
              <div className="first">
                <img src={fiveth}></img>
                <h3>Civil-Mech. Engineering</h3>
                <hr></hr>
                <div className="flex">
                  <div className="Gstar">
                    <FaStar className="star"></FaStar>
                    <FaStar className="star"></FaStar>
                    <FaStar className="star"></FaStar>
                    <FaStar className="star"></FaStar>
                    <FaStarHalfStroke className="star"></FaStarHalfStroke>
                  </div>
                  <div>
                    <button className="btn">Know More..!</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="Cimage">
              <div className="first">
                <img src={sixth}></img>
                <h3>Business Development</h3>
                <hr></hr>
                <div className="flex">
                  <div className="Gstar">
                    <FaStar className="star"></FaStar>
                    <FaStar className="star"></FaStar>
                    <FaStar className="star"></FaStar>
                    <FaStar className="star"></FaStar>
                    <FaStarHalfStroke className="star"></FaStarHalfStroke>
                  </div>
                  <div>
                    <button className="btn">Know More..!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space"></div>
      </section>
      <div className="button">
        <a href="">view all course<GrFormNextLink className="arrow"></GrFormNextLink></a>
      </div>
      {/* couses  section end */}

      {/* About As start */}
      <div className="space"></div>

      <div className="sec_2">
        <div className="detail">
          <div className="space"></div>
          <span className="contain">ABOUT US</span>
          <h4>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h4>
          <p className="contant">Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
          <div className="Cbutton">
            <a href="">Enroll Now...!<GrFormNextLink className="arrow"></GrFormNextLink></a>
          </div>
        </div>
        <div className="sec_2">
          <img src={img2}></img>
        </div>
      </div>
      {/* About As End */}


      {/* counter start */}

      <div className="bgimage">
        <div className="contain">
          <div className="flex spas1">
            <div className="bigicon">
              <div>
                <PiStudentBold className="student_icon"></PiStudentBold>
              </div>
              {/* <img width={"100px"} height={"100px"} src={counter.png}></img> */}
              <div className="bidiskrab">18000+</div>
              <div className="bidiskrab1">HAPPY STUDENTS</div>
            </div>
            <div className="bigicon">
              <div>
                <PiStudentBold className="student_icon"></PiStudentBold>
              </div>
              <div className="bidiskrab">10+</div>
              <div className="bidiskrab1">CERTIFICATION APPROVAL</div>
            </div>
            <div className="bigicon">
              <div>
                <PiStudentBold className="student_icon"></PiStudentBold>
              </div>
              <div className="bidiskrab">100+</div>
              <div className="bidiskrab1">CERTIFIED TEACHERS</div>
            </div>
            <div className="bigicon">
              <div>
                <PiStudentBold className="student_icon"></PiStudentBold>
              </div>
              <div className="bidiskrab">12000+</div>
              <div className="bidiskrab1">STUDENTS PLACED</div>
            </div>
          </div>
        </div>
      </div>
      {/* counter end */}


      {/* happy student start */}
      <section>
        <div className="space"></div>
        <div className="contain">

          <div className="part">
            <span className="happy_stud">HAPPY STUDENTS</span>
            <h2 className="h2">ALUMNI SPEAK</h2>
          </div>
          <div className="flex">
            <div className="cont">
              <div className="flex">
                <RiDoubleQuotesR className="double"></RiDoubleQuotesR>
                <div className="left_arrow">
                  <MdKeyboardArrowLeft className="LEFT"></MdKeyboardArrowLeft>
                  <MdKeyboardArrowRight className="RIGHT"></MdKeyboardArrowRight>
                </div>
              </div>
              <p>Thank you creative multimedia, for best training provided, it's a best training centre for learning softwares like Java,C,C ++ ,python  friendly faculties they clear your doubts and they provide placement facility also finally happy with the training.</p>
              <div className="mini_slider NewFlex">
                <img src={std}></img>
                <div className="tejas">
                  <div className="color">MALAVIYA TEJAS</div>
                  <div className="color1">Frond End Designer</div>
                </div>
              </div>
            </div>
            <div className="cont img">
              <img src={girl} className="sir"></img>


            </div>
          </div>
        </div>
        <div className="space"></div>
      </section>


      {/* happy student end */}

      {/*  choose creative start*/}
      <section>
        <div className="contain">
          <div className="space"></div>
          <div className="txt">
            <div className="creative">READ OUR DIFFERENCE</div>
            <div className="couse">WHY CHOOSE CREATIVE</div>
          </div>
          <div className="flex">
            <div className="Cimage">
              <div className="first1 icon_first">
                <img src={icon} className="smallIcon"></img>
                <div className="trainder">
                  <h3>Industry Experts As Trainers</h3>
                  <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                </div>
              </div>
            </div>
            <div className="Cimage">
              <div className="first1 icon_first">
                <img src={icon2} className="smallIcon"></img>
                <div className="trainder">
                  <h3>Latest Curriculum</h3>
                  <p>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time</p>
                </div>
              </div>
            </div>
            <div className="Cimage">
              <div className="first1 icon_first">
                <img src={icon3} className="smallIcon"></img>
                <div className="trainder">
                  <h3>Latest Technology</h3>
                  <p>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="Cimage">
              <div className="first1 icon_first">
                <img src={icon4} className="smallIcon"></img>
                <div className="trainder">
                  <h3>Interview Assistance</h3>
                  <p>At the end of each training,our training instructor will go through the possible technical questions you may be asked</p>
                </div>
              </div>
            </div>
            <div className="Cimage">
              <div className="first1 icon_first">
                <img src={icon5} className="smallIcon"></img>
                <div className="trainder">
                  <h3>Free Upgradation</h3>
                  <p>We will be provided free upgradation for any newer version of the course you have.</p>
                </div>
              </div>
            </div>
            <div className="Cimage">
              <div className="first1 icon_first">
                <img src={icon6} className="smallIcon"></img>
                <div className="trainder">
                  <h3>Lifetime Support</h3>
                  <p>We will provide you lifetime support on all the courses you learned from us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space"></div>
      </section>
      {/* choose creative end*/}


      {/* partners start */}

      <div className="contain">
        <div className="space"></div>
        <div className="txt">
          <div className="creative">STUDENT PLACEMENT</div>
          <div className="couse">OUR RECRUITMENT PARTNERS</div>
        </div>
        <div className="PARTNERS flex">
          <div className="par">
            <img src={par}></img>
          </div>
          <div className="par">
            <img src={par1}></img>
          </div>
          <div className="par">
            <img src={par2}></img>
          </div>
          <div className="par">
            <img src={par3}></img>
          </div>
          <div className="par">
            <img src={par4}></img>
          </div>
          <div className="par">
            <img src={par5}></img>
          </div>
        </div>
        <div className="space"></div>

        <div>
          <h3>Our Demanded Course -</h3>
        </div>
        <div>
          <a href="" className="demand">It training institute in in katargam</a>
          <a href="" className="demand">Adobe xd design course</a>
          <a href="" className="demand">Lumion training institute in Mota Varachha</a>
          <a href="" className="demand">3d game development training institute in varachha</a>
          <a href="" className="demand">Unity 3d training institute in surat</a>
          <a href="" className="demand">codeigniter training institute in Mota Varachha</a>
          <a href="" className="demand">Best Unity 3d training institute</a>
          <a href="" className="demand">Illustrator training in katargam</a>
          <a href="" className="demand">C++ programming language course</a>
          <a href="" className="demand">3d game development training institute in varachha</a>
          <a href="" className="demand">Unity 3d training institute in surat</a>
          <a href="" className="demand">codeigniter training institute in Mota Varachha</a>
          <a href="" className="demand">Best Unity 3d training institute</a>
          <a href="" className="demand">Illustrator training in katargam</a>
        </div>
      </div>
      {/* partners end */}

      {/* last section start */}
      <div className="space"></div>
      <footer className="last_back">
        <div className="top">
          <div className="contain">
            <div className="flex">
              <div className="last_cont">
                <div className="last_creative">
                  <img src={last_image} className="last_img"></img>
                </div>
                <p className="last_txt">Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                <h6 className="last_h6">FOLLOW US ON</h6>
                <div className="last_social">
                  <FaFacebookF className="icon2"></FaFacebookF>
                  <FaTwitter className="icon2"></FaTwitter>
                  <TiSocialGooglePlus className="icon2"></TiSocialGooglePlus>
                  <IoLogoLinkedin className="icon2"></IoLogoLinkedin>
                  <TiSocialInstagram className="icon2"></TiSocialInstagram>
                  <FiYoutube className="icon2"></FiYoutube>
                  <FaWhatsapp className="icon2"></FaWhatsapp>
                </div>

              </div>
              <div className="last_cont">
                <div>
                  <h4 className="link">FEATURE LINKS</h4>
                  <ul className="list">
                    <li><a href=""><FaHandPointRight></FaHandPointRight> About Us</a></li>
                    <li><a href=""><FaHandPointRight></FaHandPointRight> Blog</a></li>
                    <li><a href=""><FaHandPointRight></FaHandPointRight> Join Us</a></li>
                    <li><a href=""><FaHandPointRight></FaHandPointRight> Company Login</a></li>
                    <li><a href=""><FaHandPointRight></FaHandPointRight> Certificate verification</a></li>
                  </ul>
                </div>



              </div>


              <div className="last_cont">

                <h4 style={{ color: "white" }}>CONTACT US</h4>
                <h4 style={{ color: "white" }}>HEAD OFFICE-YOGICHOWK</h4>
                <span>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</span>
                <p style={{ color: "white" }}>M0: <a href="" style={{ color: "#FFBE00" }}>+91 90333 16003</a></p>
                <h4 style={{ color: "#FFBE00" }}>OTHER OFFICE</h4>
                <ul className="list">
                  <li><a href=""><AiOutlineBank ></AiOutlineBank> katargam</a></li>
                  <li><a href=""><AiOutlineBank ></AiOutlineBank> Mota Varachha</a></li>
                  <li><a href=""><AiOutlineBank ></AiOutlineBank> Adajan</a></li>
                  <li><a href=""><AiOutlineBank ></AiOutlineBank> Navsari</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="buttom">
          <div className="contain">
            <div className="copyright">
              <div className="allright">
                <p>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
              </div>
            </div>
          </div>
        </div>

      </footer>



      {/* last section end */}

    </div >
  )
}

export default App;
