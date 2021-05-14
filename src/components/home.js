import '../App.css';
import linkedin from '../images/linkedin.png';
import ig from '../images/ig.jpg';
import discord from '../images/discord.png';
import fb from '../images/fb.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.jpg';
import logo from '../images/logo.jpg';
import cfai from '../images/cfai.jpg';
import crimeagency from '../images/crimeagency.jpg';
import cybersalvager from '../images/cybersalvager.jpg';
import cybersuraksha from '../images/cybersuraksha.jpg';
import nhc from '../images/nhc.jpg';

const Home = () => {
    return (
    <div>
        <Header />
        <NavBar />
        <div style = {{display:'flex'}}>
            <AboutBox />
            <ServiceBox />
        </div>
        <div style = {{margin:'10px'}}><InitBox /></div>
        <Footer />
    </div>
    );
}

// const Bar = () => {
//     return(
//       <div className="bar">

//       </div>
//     );
// }

const Header =() => {
  return(
  <div className="header">
    <div className="header_logo"><img className="header_logo" src={logo} alt="Logo"/></div>
    <div><h1>CYBER WORLD ORGANISATION</h1></div>
  </div>
  );
}

const NavBar = ()  => {
    return(
        <div className="navbar">
            <NavMenu />
            {/* <a href=" " className="navbar_a">Home</a>
            <a href=" " className="navbar_a">About Us</a>
            <a href=" " className="navbar_a">Services</a>
            <a href=" " className="navbar_a">Vacancies</a>
            <a href=" " className="navbar_a">Events</a>
            <a href=" " className="navbar_a">Courses</a>
            <a href=" " className="navbar_a">Initiatives</a> */}
        </div>
    );
}

const NavMenu = () => {
    const data = ["Home","About Us","Services","Vacancies","Events","Courses","Initiatives"];
    return(
        <div className="navmenu">
            {data.map((t,index) => (
                <div 
                key={index}>
                <NavLink text={t} />
                </div>
            ))}
        </div>
    );
}

const NavLink = (props) => {
    return(
        <div className="navlink">
        {props.text}
        </div>
    );
}

const AboutBox = () => {
    return(
        <div className="aboutbox">
            <div style={{margin:'5% 5%'}}>
                <h3>Welcome!</h3>
                <p>
                    This Is a Non-Profit Organisation, started by Sumit Oneness and Piyush Kaushik. Mr. Raskhit Tandon 
                    (India's top Cyber Security Expert) Founder at HackDev Technology is our lead advisor.
                    We are officially registered under MSME Govt. of India. Our Community moto is Spreading Cyber Awareness 
                    among the teens, noob hackers or Cybersecurity researchers. Our Community have a single dominating active 
                    body "CYBER WORLD ORGANISATION" which consists of several other subdivisions.
                    <br/><br/> 
                    Regular-Based Activities :
                    <ul>
                        <li>Weekly Live Sessions at Youtube or Zoom.</li>
                        <li>Weekly Quiz activity after every session.</li>
                        <li>Free Certifications to all attendees during the session as well as the quizzes.</li>
                    </ul>
                    <br/>
                    <h4>Join our community : </h4> <a href="https://forms.gle/chh8Br1wUQvFx98S8">https://forms.gle/chh8Br1wUQvFx98S8</a>
                </p>
            </div>
        </div>
    );
}

const ServiceBox = () => {
    return(
        <div className="servicebox">
            <h2 style={{textAlign:'center'}}>SERVICES OFFERED</h2>
            <div className="sub_service">
                <div className="service1">
                    Crime Investigations on Online Frauds
                    <hr/>
                </div>
                <div className="service2">
                    National Conferences, Webinars
                    <hr/>
                </div>
                <div className="service3">
                    Free Training on Bug Bounty
                    <hr/>
                </div>
            </div>
            <div className="sub_service">
                <div className="service4">
                    Digital Forensics Workshops
                    <hr/>
                </div>
                <div className="service">
                    <img src={logo} alt="logo" style={{width:'100%',height:'100%'}}/>
                </div>
                <div className="service5">
                Cyber Crime Investigations on real time cases
                <hr/>
                </div>
            </div>
            <div className="sub_service">
                <div className="service6">
                Cyber Laws and Acts
                <hr/>
                </div>
                <div className="service7">
                Security In Mobile and Computer devices
                <hr/>
                </div>
                <div className="service8">
                Cyber Awareness, Information & Media
                <hr/>
                </div>
            </div>
        </div>
    );
}

const InitBox = () => {
    return(
        <div className = "initbox">
            <div style={{backgroundColor:'orange',height:'18%'}}>
                <h1 style={{textAlign:'center'}}>SUB-DIVISIONS</h1>
            </div>
            <div style={{display:'flex'}}>
                <div className="init_img"><a href="home.js"><img src={cybersuraksha} alt="Cyber Suraksha" style={{width:'80%', height:'70%'}} /></a></div>
                <div className="init_img"><a href="home.js"><img src={cfai} alt="Coders Flow AI" style={{width:'80%', height:'70%'}} /></a></div>
                <div className="init_img"><a href="home.js"><img src={cybersalvager} alt="Cyber Salvager" style={{width:'80%', height:'70%'}} /></a></div>
                <div className="init_img"><a href="home.js"><img src={crimeagency} alt="Cyber Crime Agency" style={{width:'80%', height:'70%'}} /></a></div>
                <div className="init_img"><a href="home.js"><img src={nhc} alt="Noob Hackers Community" style={{width:'80%', height:'70%'}} /></a></div>
            </div>
        </div>
    );
}

const Footer = () => {
    return (
        <div className="footer">
            <div style={{display:'flex'}}>
                <div className="sub_footer">
                    <h5>CONTACT US</h5>
                    <p>
                        <strong>&gt;</strong> 1259-A, Jharsa Village, Sector 39, Gurugram, Haryana 122003 <br/>
                        <strong>&gt;</strong> +91- 9876543210 <br/>
                        <strong>&gt;</strong> +91- 9876543210 <br/>
                        <strong>&gt;</strong> +91- 9876543210 <br/>
                        <strong>&gt;</strong> +91- 9876543210 <br/>
                    </p>
                </div>
                <div className="sub_footer">
                    <h5>COMMUNITY SUPPORTERS AND PARTNERS</h5>
                    <strong>&gt;</strong> BeFojji - Operational Security Squad <br/>
                    <strong>&gt;</strong> Anti Cyber Crime Society (Anti-Phishing Wing) <br/>
                    <strong>&gt;</strong> Gurugram Cyber Cell <br/>
                    <strong>&gt;</strong> Bsides Maharashtra <br/>
                    <strong>&gt;</strong> CySec Alliance <br/>
                    <strong>&gt;</strong> Crime Free Bharat <br/>
                </div>
                <div className="sub_footer">
                    <h5>SUBSCRIBE US</h5>
                    <ul>
                        <a href="https://www.linkedin.com/company/cyber-world-org/?originalSubdomain=in"><img className="bar_image" src={linkedin} alt="LinkedIn"/></a>
                        <a href="https://discord.gg/ZnXApXE"><img className="bar_image" src={discord} alt="Discord"/></a>
                        <a href="https://www.facebook.com/Cyber-World-Organisation-105132394747608"><img className="bar_image" src={fb} alt="Facebook"/></a>
                        <a href="https://instagram.com/cyberworldorg"><img className="bar_image" src={ig} alt="Instagram"/></a>
                        <a href="https://twitter.com/CyberWorldOrg"><img className="bar_image" src={twitter} alt="Twitter"/></a>
                        <a href="http://bit.ly/cyberpwned"><img className="bar_image" src={youtube} alt="YouTube"/></a>
                    </ul>
                    <a className="footer_a" href="home.js">Newsletter</a>
                </div>
            </div>
            <div className="disclaimer">
            <small>&copy; Copyright Registered, Cyber World Organisation</small>
            </div>
        </div>
    );
}

export default Home;