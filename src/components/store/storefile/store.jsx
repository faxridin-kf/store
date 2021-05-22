import React, { Component } from "react";
import reactDom from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Menu from "../blog/menu";
import StoreBlog from "../blog/storeblog";
import "../storefile/store.css";
import Home from "../blog/home";
import Aksesuar from "../blog/aksesuar";
import ImgFirst from "../../../img/imgfirst.webp";
import phone from "../../../img/phones.webp";
import tv from "../../../img/tv.webp";
import homepr from "../../../img/home.webp";
import aksesuar from "../../../img/aksesuar.webp";
import basket from "../../../img/basket.svg";
import user from "../../../img/user.svg";
import insta from "../../../img/instagram.svg";
import twitter from "../../../img/twitter.svg";
import youtube from "../../../img/youtube.svg";
import fb from "../../../img/fb.svg";
import Mobile from "../blog/mobile";
import Libraly from '../../../img/libraly.jpg'
import Books from '../blog/book'
// Imported files ends here

// Main part starts from here :P
class Store extends Component {
  state = {
    globalSearch: false,
    key: null,
  };
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="menu">
            <Link to="/" className="logolink">
              <img src="" alt="SAMSUNG" className="logo" />
            </Link>
            <div className="navigation">
              <Link to="/p1" className="link">
                ТВ и Аудио
              </Link>
              <Link to="/p2" className="link">
                Мобильные
              </Link>
              <Link to="/p3" className="link">
                Акксесуары
              </Link>
              <Link to="/p4" className="link">
                Бытовая техника
              </Link>
            </div>
            <div className="Userblog">
              <img src={basket} alt="" className="userblogimg" />
              <img src={user} alt="" className="userblogimg" />
            </div>
          </div>

          <div className="content">
            <Switch>
              <Route path="/p1">
                <StoreBlog />
              </Route>
              <Route path="/p2">
                <Mobile />
              </Route>
              <Route path="/p3">
                <Aksesuar />
              </Route>
              <Route path="/p4">
                <Home />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>

        <div className="firstpage">
          <h1 className="fistTitle">Предложения интернет-магазина</h1>
          <div className="categorydiv">
            <Link to="/p1" className="link">
              ТВ и Аудио
            </Link>
            <Link to="/p2" className="link">
              Мобильные
            </Link>
            <Link to="/p3" className="link">
              Для компьютера
            </Link>
            <Link to="/p4" className="link">
              Бытовая техника
            </Link>
          </div>
          <div className="Imgcategory">
       <BrowserRouter>
       <div className="bigImg">
              <Link to='/p4'>
              <img src={ImgFirst} alt="" className="imgFirst" />
              </Link>
            </div>
            <div className="main-rightcategory">
              <div className="top-right-category">
                <Link to='/p2'>
                <img src={phone} alt="" className="imgFirst imgLittle" />
                </Link>
                <Link to='/p1'>
                <img src={tv} alt="" className="imgFirst imgLittle" />
                </Link>
              </div>
              <div className="bottom-right-category">
                <Link to='/p1'>
                <img src={homepr} alt="" className="imgFirst imgLittle" />
                </Link>
                <Link to='/p3'>
                <img src={aksesuar} alt="" className="imgFirst imgLittle" />
                </Link>
              </div>
            </div>
            <Switch>
              <Route path='p4'>
                <Home/>
              </Route>
              <Route path='p2'>
                <Mobile/>
              </Route>
              <Route path='p1'>
                <StoreBlog/>
              </Route>
              <Route path='p3'>
                <Aksesuar/>
              </Route>
            </Switch>
       </BrowserRouter>
          </div>
        </div>
        <div className="content">
          <BrowserRouter>
          <div className="libraly">
          
          <Link to='/p5'>
            <img src={Libraly} alt="" className='libralyimg'/>
            </Link>
            </div>
            <Switch>
              <Route path='/p5'>
                <Books/>
              </Route>
            </Switch>
          </BrowserRouter>
          
        </div>

        <footer>
          <div className="footer content">
            <p className="copyright">
              © 1995-2021 Samsung. Все права защищены. Данный веб-сайт корректно
              отображается в браузере Microsoft Internet Explorer версии 11 или
              выше, а также в последних версиях браузеров Google Chrome и
              Mozilla Firefox.
            </p>
            <div className="contact">
              <div className="footerlinks">
                <a href="#" className="country">
                  Uzbekistan/русский
                </a>
                <a
                  href="https://www.samsung.com/ru/accessibility/overview/"
                  className="footerlink"
                >
                  Удобство пользования
                </a>
                <a
                  href="https://images.samsung.com/is/content/samsung/p5/ru/info/privacy/SERC_Personal_Data_policy.pdf"
                  className="footerlink"
                >
                  Персональные данные
                </a>
                <a
                  href="https://www.samsung.com/ru/info/privacy/"
                  className="footerlink"
                >
                  Конфиденциальность
                </a>
                <a
                  href="https://www.samsung.com/ru/info/legal/"
                  className="footerlink"
                >
                  Декларация
                </a>
                <a
                  href="https://www.samsung.com/ru/info/sitemap/"
                  className="footerlink"
                >
                  Карта сайта
                </a>
              </div>

              <div className="socilalinks">
                <p className="social-link-text">
                  ХОТИТЕ ОСТАВАТЬСЯ В КУРСЕ НОВИНОК?
                </p>
                <a href="" className="sociallink">
                  <img src={insta} alt="" className="socialimg" />
                </a>
                <a href="" className="sociallink">
                  <img src={twitter} alt="" className="socialimg" />
                </a>
                <a href="" className="sociallink">
                  <img src={youtube} alt="" className="socialimg" />
                </a>
                <a href="" className="sociallink">
                  <img src={fb} alt="" className="socialimg" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Store;
