import React from 'react'

import { Helmet } from 'react-helmet'

import './home1.css'

const Home1 = (props) => {
  return (
    <div className="home1-container">
      <Helmet>
        <title>stories by takktakk</title>
        <meta property="og:title" content="stories by takktakk" />
      </Helmet>
      <div className="home1-sidebar">
        <nav className="home1-nav">
          <span className="home1-text">TAKKTAKK</span>
          <h1 className="home1-heading">
            <span className="home1-text01">
              beautiful
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="home1-text02"></br>
            <span className="home1-text03">stories for beautiful spaces</span>
            <br></br>
          </h1>
        </nav>
        <div className="home1-container01">
          <span className="home1-text05">Architecture</span>
          <span className="home1-text06">Objects</span>
          <span className="home1-text07">Gardens</span>
        </div>
        <div className="home1-container02">
          <div className="home1-container03">
            <div className="home1-gallery">
              <span className="home1-text08">As featured on</span>
              <div className="home1-container04">
                <img
                  alt="image"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.chathambarsinn.com%2Fsites%2Fdefault%2Ffiles%2F2021-08%2FArchitectural_Digest_Logo.png&amp;f=1&amp;nofb=1&amp;ipt=0087294a4308c10f8e5476dde46127b804a69a7649fa72a4548789f4eed6307f&amp;ipo=images"
                  className="home1-image"
                />
                <img
                  alt="image"
                  src="https://www.habitusliving.com/HL_23_Black.svg"
                  className="home1-image01"
                />
                <img
                  alt="image"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogosmarcas.net%2Fwp-content%2Fuploads%2F2022%2F02%2FArchDaily-Logo-650x366.png&amp;f=1&amp;nofb=1&amp;ipt=ab2af4cc6b5616f345df1fe34981699ed57c46e58b5705cd80e9da0faa027a44&amp;ipo=images"
                  className="home1-image02"
                />
                <img
                  alt="image"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2az9qivg16qd4.cloudfront.net%2Fs3fs-public%2Fdesignboom_logo-01.png&amp;f=1&amp;nofb=1&amp;ipt=216ec0e865902d99c514148fd3fc3da0eb4043b4aa1c40f41480239fccfdb671&amp;ipo=images"
                  className="home1-image03"
                />
                <img
                  alt="image"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FA%2Farchitizer-logo-8A4360C928-seeklogo.com.png&amp;f=1&amp;nofb=1&amp;ipt=3a335363615b6418feac9a175776e392eba1a21be698e95c732b4516c3ce9934&amp;ipo=images"
                  className="home1-image04"
                />
              </div>
            </div>
            <div className="home1-container05">
              <img
                alt="image"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2az9qivg16qd4.cloudfront.net%2Fs3fs-public%2Fdesignboom_logo-01.png&amp;f=1&amp;nofb=1&amp;ipt=216ec0e865902d99c514148fd3fc3da0eb4043b4aa1c40f41480239fccfdb671&amp;ipo=images"
                className="home1-image05"
              />
              <img
                alt="image"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FA%2Farchitizer-logo-8A4360C928-seeklogo.com.png&amp;f=1&amp;nofb=1&amp;ipt=3a335363615b6418feac9a175776e392eba1a21be698e95c732b4516c3ce9934&amp;ipo=images"
                className="home1-image06"
              />
              <img
                alt="image"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogosmarcas.net%2Fwp-content%2Fuploads%2F2022%2F02%2FArchDaily-Logo-650x366.png&amp;f=1&amp;nofb=1&amp;ipt=ab2af4cc6b5616f345df1fe34981699ed57c46e58b5705cd80e9da0faa027a44&amp;ipo=images"
                className="home1-image07"
              />
              <div className="home1-container06">
                <img
                  alt="image"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.chathambarsinn.com%2Fsites%2Fdefault%2Ffiles%2F2021-08%2FArchitectural_Digest_Logo.png&amp;f=1&amp;nofb=1&amp;ipt=0087294a4308c10f8e5476dde46127b804a69a7649fa72a4548789f4eed6307f&amp;ipo=images"
                  className="home1-image08"
                />
              </div>
            </div>
          </div>
          <div className="home1-icon-group">
            <button className="home1-button button">
              <a
                href="mailto:hi@takktakk.studio?subject="
                className="home1-link"
              >
                <span>drop a mail</span>
                <br></br>
              </a>
            </button>
            <div className="home1-icon-group1">
              <svg viewBox="0 0 950.8571428571428 1024" className="home1-icon">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <a
                href="https://www.instagram.com/takktakk.studio"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home1-icon02"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home1-icon04"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <section className="home1-hero">
        <header data-thq="thq-navbar" className="home1-navbar">
          <span className="home1-text11">TAKKTAKK</span>
          <div data-thq="thq-burger-menu" className="home1-burger-menu">
            <div className="home1-hamburger">
              <svg viewBox="0 0 1024 1024" className="home1-icon06">
                <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="home1-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home1-nav1"
            >
              <div className="home1-container07">
                <span className="home1-text12">TAKKTAKK</span>
                <div data-thq="thq-close-menu" className="home1-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home1-icon08">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </div>
              </div>
              <div className="home1-icon-group2">
                <a
                  href="https://www.instagram.com/takktakk________/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home1-link2"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home1-icon10"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
              </div>
              <p className="home1-caption">
                <span>architecture</span>
                <br></br>
                <span>lifestyle</span>
                <br></br>
                <span>people</span>
                <br></br>
              </p>
              <div className="home1-container08">
                <p className="home1-caption1">
                  <span>hi@takktakk.studio</span>
                  <br></br>
                </p>
                <p className="home1-caption2">
                  <span>coimbatore  </span>
                  <span>madurai  </span>
                  <span>chennai  </span>
                  <span>bangalore</span>
                  <br></br>
                </p>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home1-nav2"
              >
                <span className="home1-text26">About</span>
                <span className="home1-text27">Features</span>
                <span className="home1-text28">Pricing</span>
                <span className="home1-text29">Team</span>
                <span className="home1-text30">Blog</span>
              </nav>
              <div className="home1-container09">
                <button className="home1-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
          </div>
        </header>
        <div className="home1-gallery1">
          <div className="home1-container10">
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/external/imgs/_dsf9102-1500w.webp"
              loading="eager"
              srcSet="external/imgs//_dsf9102-1500w.webp 1200w, external/imgs/_dsf9102-tablet.webp 800w, external/imgs/_dsf9102-mobile.webp 480w"
              className="home1-image09"
            />
            <img
              alt="image"
              src="https://64.media.tumblr.com/9044c0787d9b21a5f00abe2ed2613549/c3fb2f9a3423d91d-95/s1280x1920/7cf4c76b7f6524e2e25ccfa57320f5a4f7595e29.jpg"
              loading="eager"
              className="home1-image10"
            />
            <img
              alt="image"
              src="https://raw.githubusercontent.com/prthvbox/tk20810oa78/main/Picstash/NalamML17%20(1).jpeg"
              loading="eager"
              className="home1-image11"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/external/imgs/_dsf9180-1500w.webp"
              loading="eager"
              srcSet="external/imgs//_dsf9180-1500w.webp 1200w, external/imgs/_dsf9180-tablet.webp 800w, external/imgs/_dsf9180-mobile.webp 480w"
              className="home1-image12"
            />
            <iframe
              src="https://player.vimeo.com/video/898496952"
              allowFullScreen="true"
              className="home1-iframe"
            ></iframe>
            <img
              alt="image"
              src="https://64.media.tumblr.com/52a9df201bafad5fae07118375f69dfe/c5855191b482df8d-0e/s1280x1920/9a18131c0ec0baa6cd4e9683b73b0e7d499b0ff9.jpg"
              loading="eager"
              className="home1-image13"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/external/imgs/ekta_f_dsf3271-1500w.webp"
              loading="eager"
              srcSet="external/imgs//ekta_f_dsf3271-1500w.webp 1200w, external/imgs/ekta_f_dsf3271-tablet.webp 800w, external/imgs/ekta_f_dsf3271-mobile.webp 480w"
              className="home1-image14"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/external/imgs/_dsf5589-1500w.webp"
              loading="eager"
              srcSet="external/imgs//_dsf5589-1500w.webp 1200w, external/imgs/_dsf5589-tablet.webp 800w, external/imgs/_dsf5589-mobile.webp 480w"
              className="home1-image15"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/external/imgs/_dsc4282-1500w.webp"
              loading="eager"
              srcSet="external/imgs//_dsc4282-1500w.webp 1200w, external/imgs/_dsc4282-tablet.webp 800w, external/imgs/_dsc4282-mobile.webp 480w"
              className="home1-image16"
            />
            <img
              alt="image"
              src="https://64.media.tumblr.com/63fca650a71fb2732c4f08a26a82a35d/b0b750a8217bec48-65/s1280x1920/bdbebe2bb2713a4bbad156b22bbaeab770e2aad5.jpg"
              loading="eager"
              className="home1-image17"
            />
            <iframe
              src="https://player.vimeo.com/video/670603300"
              allowFullScreen="true"
              className="home1-iframe1"
            ></iframe>
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/external/imgs/firmqf-1932copy2%20(1)-1500w.webp"
              loading="eager"
              srcSet="external/imgs//firmqf-1932copy2%20(1)-1500w.webp 1200w, external/imgs/firmqf-1932copy2%20(1)-tablet.webp 800w, external/imgs/firmqf-1932copy2%20(1)-mobile.webp 480w"
              className="home1-image18"
            />
            <img
              alt="image"
              src="https://64.media.tumblr.com/be86d06fe3d3b1be1f833d494258c131/74e519e06ff513f7-42/s1280x1920/d5ebcade6912df480ae0520bf62ba608b66307e5.jpg"
              loading="eager"
              className="home1-image19"
            />
            <img
              alt="image"
              src="https://raw.githubusercontent.com/prthvbox/tk20810oa78/main/Picstash/_DSF5137.jpeg"
              loading="eager"
              className="home1-image20"
            />
            <img
              alt="image"
              src="https://raw.githubusercontent.com/prthvbox/tk20810oa78/main/Picstash/Ekta_F_DSF3546.jpeg"
              loading="eager"
              className="home1-image21"
            />
            <img
              alt="image"
              src="https://images.adsttc.com/media/images/5c90/e2b5/284d/d14c/8200/04c9/slideshow/24.jpg?1552999073"
              loading="eager"
              className="home1-image22"
            />
            <img
              alt="image"
              src="https://raw.githubusercontent.com/prthvbox/tk20810oa78/main/Picstash/43232174_582187705550905_5831916622704541696_o.jpeg"
              loading="eager"
              className="home1-image23"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/external/imgs/dsc_5669-1500w.webp"
              loading="eager"
              srcSet="external/imgs//dsc_5669-1500w.webp 1200w, external/imgs/dsc_5669-tablet.webp 800w, external/imgs/dsc_5669-mobile.webp 480w"
              className="home1-image24"
            />
            <iframe
              src="https://player.vimeo.com/video/881647238"
              allowFullScreen="true"
              className="home1-iframe2"
            ></iframe>
            <img
              alt="image"
              src="https://raw.githubusercontent.com/prthvbox/tk20810oa78/main/Picstash/433838578_17890411365003552_8998436130701242314_n.jpeg"
              loading="eager"
              className="home1-image25"
            />
            <img
              alt="image"
              src="https://raw.githubusercontent.com/prthvbox/tk20810oa78/main/Picstash/407757375_693292436252302_619868193996808544_n.jpeg"
              loading="eager"
              className="home1-image26"
            />
            <img
              alt="image"
              src="https://raw.githubusercontent.com/prthvbox/tk20810oa78/main/Picstash/357895945_660221616132077_2663590347638928377_n.jpeg"
              loading="eager"
              className="home1-image27"
            />
            <img
              alt="image"
              src="https://cdn.habitusliving.com/wp-content/uploads/INDIAHouseinaGrove_STO.M.P_ccPrithiviMSamy_24.jpg"
              loading="eager"
              className="home1-image28"
            />
            <img
              alt="image"
              src="https://raw.githubusercontent.com/prthvbox/tk20810oa78/main/Picstash/dc1a40_9442ba29c2734afebf9a19aa66527022%7Emv2_d_1814_2048_s_2.webp"
              loading="eager"
              className="home1-image29"
            />
          </div>
        </div>
        <div className="home1-container11">
          <div className="home1-container12">
            <span className="home1-text31">
              <span>taking spaces to places they deserve</span>
              <br></br>
            </span>
            <span className="home1-text34">
              <span>Archdaily Building of the Year 2020</span>
              <br></br>
              <br></br>
              <span>Habitus House of the Year 2019</span>
              <br></br>
              <br></br>
              <span>3 projects at FOAID 2019,</span>
              <br></br>
              <br></br>
              <span>2 projects at Trends Awards 2019</span>
              <br></br>
              <br></br>
              <span>2 projects at Matter Merit List 2019</span>
              <br></br>
              <br></br>
              <span>2ACA Awards Madrid 2019</span>
              <br></br>
            </span>
          </div>
          <div className="home1-clients">
            <span className="home1-text52">Clients &amp; Collaborators</span>
            <div className="home1-container13">
              <a
                href="https://www.architecturaldigest.in/content/tamil-nadu-thiruppathur-home-chettiar-style-modern-day-comfort-stomp/"
                target="_blank"
                rel="noreferrer noopener"
                className="home1-link3"
              >
                <img
                  alt="image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4p7GZqIf16vNjVvZbJ7969rHvBRW_Kl7uhmkC1lL7ZQ&amp;s"
                  className="home1-image30"
                />
              </a>
              <a
                href="https://www.designpataki.com/design-pataki-launches-dp-offline-in-madurai-contemporary-artworks-meet-everyday-objects-2/"
                target="_blank"
                rel="noreferrer noopener"
                className="home1-link4"
              >
                <img
                  alt="image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg09tOW6qOlnkUFkPdv8Z-wQZqZKuEFkXMY5L4ajY7zw&amp;s"
                  className="home1-image31"
                />
              </a>
              <a
                href="https://www.sppgardens.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="home1-link5"
              >
                <img
                  alt="image"
                  src="https://images.squarespace-cdn.com/content/v1/5f152ec422af2a37ad8d4da4/1595224562486-S9MOHQUJA526RYUWKZSZ/SPP+Gardens+Logo+Final-01.png"
                  className="home1-image32"
                />
              </a>
              <img
                alt="image"
                src="https://assets.jobsforher.com/uploads/v3/companies/employer/4719/hanu-reddy-realty-logo-1544423757.png"
                className="home1-image33"
              />
              <img
                alt="image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5fO0BgTc6O89lGXODoar9hiuwm6tbVAzooNmTpiWyTA&amp;s"
                className="home1-image34"
              />
              <img
                alt="image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDijh1hL6MwvQf5u8tZCkU8N9kaQqgPlSiICbQqXg3OA&amp;s"
                className="home1-image35"
              />
              <img
                alt="image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXfam2bCCkoOVPBfqkenhJPdzA_xxiUNe_6zUwI1VrQ&amp;s"
                className="home1-image36"
              />
              <img
                alt="image"
                src="https://static.wixstatic.com/media/66af26_837cee87a5eb421aa49492d361be39a2~mv2_d_2236_2393_s_2.png"
                className="home1-image37"
              />
              <img
                alt="image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5h5zscMPaR1a29XroyhH0D1MeCq5eCWujy_OUuTFRQ&amp;s"
                className="home1-image38"
              />
              <img
                alt="image"
                src="https://www.tripleostudio.com/wp-content/uploads/2018/09/triple_o_logo.png"
                className="home1-image39"
              />
            </div>
          </div>
        </div>
        <div className="home1-social-bar">
          <svg viewBox="0 0 950.8571428571428 1024" className="home1-icon12">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          <a
            href="https://www.instagram.com/takktakk.studio/"
            target="_blank"
            rel="noreferrer noopener"
            className="home1-link6"
          >
            <svg viewBox="0 0 877.7142857142857 1024" className="home1-icon14">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </a>
          <svg viewBox="0 0 602.2582857142856 1024" className="home1-icon16">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="home1-icon18">
            <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="home1-icon20">
            <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
          </svg>
          <a
            href="https://vimeo.com/prithivimsamy"
            target="_blank"
            rel="noreferrer noopener"
            className="home1-link7"
          >
            <svg viewBox="0 0 1029.12 1024" className="home1-icon22">
              <path d="M976.571 296c-4 90.286-67.429 214.286-189.714 372-126.857 164-233.143 246.286-321.143 246.286-54.286 0-100-50.286-137.143-150.286-25.143-91.429-50.286-183.429-75.429-275.429-27.429-100-57.714-149.714-89.714-149.714-6.857 0-30.857 14.286-72.571 43.429l-44-56c45.714-40.571 90.857-81.714 136-121.143 60.571-53.714 106.857-80.571 137.714-83.429 72.571-6.857 116.571 42.286 133.714 148 17.714 114.286 30.857 185.714 37.714 213.143 21.143 94.857 43.429 142.286 68.571 142.286 19.429 0 48.571-30.286 88-92 38.857-61.714 59.429-108.571 62.286-140.571 5.143-53.143-15.429-79.429-62.286-79.429-22.286 0-45.143 5.143-69.143 14.857 45.714-149.714 133.143-222.286 262.286-218.286 95.429 2.857 140.571 65.143 134.857 186.286z"></path>
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home1
