import React from 'react'

import { Helmet } from 'react-helmet'

import GalleryCard331 from '../components/gallery-card331'
import './gardens.css'

const Gardens = (props) => {
  return (
    <div className="gardens-container">
      <Helmet>
        <title>Gardens - stories by takktakk</title>
        <meta property="og:title" content="Gardens - stories by takktakk" />
      </Helmet>
      <div className="gardens-sidebar">
        <nav className="gardens-nav">
          <span className="gardens-text">TAKKTAKK</span>
          <span className="gardens-text01">Architecture</span>
          <span className="gardens-text02">Objects</span>
          <span className="gardens-text03">Gardens</span>
        </nav>
        <div className="gardens-gallery">
          <span className="gardens-text04">As featured on</span>
          <div className="gardens-container1">
            <img
              alt="image"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.chathambarsinn.com%2Fsites%2Fdefault%2Ffiles%2F2021-08%2FArchitectural_Digest_Logo.png&amp;f=1&amp;nofb=1&amp;ipt=0087294a4308c10f8e5476dde46127b804a69a7649fa72a4548789f4eed6307f&amp;ipo=images"
              className="gardens-image"
            />
            <img
              alt="image"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogosmarcas.net%2Fwp-content%2Fuploads%2F2022%2F02%2FArchDaily-Logo-650x366.png&amp;f=1&amp;nofb=1&amp;ipt=ab2af4cc6b5616f345df1fe34981699ed57c46e58b5705cd80e9da0faa027a44&amp;ipo=images"
              className="gardens-image1"
            />
            <img
              alt="image"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2az9qivg16qd4.cloudfront.net%2Fs3fs-public%2Fdesignboom_logo-01.png&amp;f=1&amp;nofb=1&amp;ipt=216ec0e865902d99c514148fd3fc3da0eb4043b4aa1c40f41480239fccfdb671&amp;ipo=images"
              className="gardens-image2"
            />
            <img
              alt="image"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FA%2Farchitizer-logo-8A4360C928-seeklogo.com.png&amp;f=1&amp;nofb=1&amp;ipt=3a335363615b6418feac9a175776e392eba1a21be698e95c732b4516c3ce9934&amp;ipo=images"
              className="gardens-image3"
            />
          </div>
        </div>
        <div className="gardens-container2">
          <h1 className="gardens-heading">
            <span className="gardens-text05">
              beautiful
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="gardens-text06">architectural </span>
            <br className="gardens-text07"></br>
            <span className="gardens-text08">stories</span>
            <br></br>
          </h1>
          <div className="gardens-icon-group">
            <button className="gardens-button button">
              <a
                href="mailto:hi@takktakk.studio?subject="
                className="gardens-link"
              >
                <span>drop a mail</span>
                <br></br>
              </a>
            </button>
            <div className="gardens-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="gardens-icon"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <a
                href="https://www.instagram.com/takktakk.studio"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="gardens-icon2"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="gardens-icon4"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="gardens-imgslider"></div>
      <div className="gardens-gallery1">
        <h1 className="gardens-text12">Our portfolio</h1>
        <span className="gardens-text13">
          <span>
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <br></br>
          <span>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
        </span>
        <div className="gardens-container3">
          <GalleryCard331
            imageSrc="https://images.unsplash.com/photo-1707666729035-a4dc45f8fc94?ixid=M3w5MTMyMXwwfDF8YWxsfDI0fHx8fHx8Mnx8MTcwNzc2ODIwNHw&amp;ixlib=rb-4.0.3&amp;h=1500"
            rootClassName="rootClassName"
          ></GalleryCard331>
          <GalleryCard331
            imageSrc="https://images.unsplash.com/photo-1707492805162-7375871503af?ixid=M3w5MTMyMXwwfDF8YWxsfDd8fHx8fHwyfHwxNzA3NzY4MjA0fA&amp;ixlib=rb-4.0.3&amp;h=1500"
            rootClassName="rootClassName1"
          ></GalleryCard331>
          <GalleryCard331
            imageSrc="https://images.unsplash.com/photo-1707707366307-6996af74a6f2?ixid=M3w5MTMyMXwwfDF8YWxsfDIyfHx8fHx8Mnx8MTcwNzc2ODIwNHw&amp;ixlib=rb-4.0.3&amp;h=1500"
            rootClassName="rootClassName3"
          ></GalleryCard331>
          <GalleryCard331
            imageSrc="https://images.unsplash.com/photo-1707136507220-6e8e19fe0ae6?ixid=M3w5MTMyMXwwfDF8YWxsfDMwfHx8fHx8Mnx8MTcwNzc2ODIyOXw&amp;ixlib=rb-4.0.3&amp;h=1500"
            rootClassName="rootClassName2"
          ></GalleryCard331>
          <GalleryCard331
            imageSrc="https://images.unsplash.com/photo-1707662513398-68a35d05f852?ixid=M3w5MTMyMXwwfDF8YWxsfDMzfHx8fHx8Mnx8MTcwNzc2ODIyOXw&amp;ixlib=rb-4.0.3&amp;h=1500"
            rootClassName="rootClassName4"
          ></GalleryCard331>
          <GalleryCard331
            imageSrc="https://images.unsplash.com/photo-1707248591857-cd4f010b42df?ixid=M3w5MTMyMXwwfDF8YWxsfDQ1fHx8fHx8Mnx8MTcwNzc2ODIyOXw&amp;ixlib=rb-4.0.3&amp;h=1500"
            rootClassName="rootClassName5"
          ></GalleryCard331>
          <GalleryCard331
            imageSrc="https://images.unsplash.com/photo-1707669290376-0ea8ede9d1a1?ixid=M3w5MTMyMXwwfDF8YWxsfDY1fHx8fHx8Mnx8MTcwNzc2ODI4M3w&amp;ixlib=rb-4.0.3&amp;h=1500"
            rootClassName="rootClassName6"
          ></GalleryCard331>
          <GalleryCard331
            imageSrc="https://images.unsplash.com/photo-1707596369946-6445932ca9ae?ixid=M3w5MTMyMXwwfDF8YWxsfDczfHx8fHx8Mnx8MTcwNzc2ODI5NHw&amp;ixlib=rb-4.0.3&amp;h=1500"
            rootClassName="rootClassName7"
          ></GalleryCard331>
          <GalleryCard331
            imageSrc="https://images.unsplash.com/photo-1707301454103-1384f7c535d8?ixid=M3w5MTMyMXwwfDF8YWxsfDExN3x8fHx8fDJ8fDE3MDc3NjgzMTV8&amp;ixlib=rb-4.0.3&amp;h=1500"
            rootClassName="rootClassName8"
          ></GalleryCard331>
          <GalleryCard331
            imageSrc="https://images.unsplash.com/photo-1707301454066-aba9cf1fa47a?ixid=M3w5MTMyMXwwfDF8YWxsfDExMHx8fHx8fDJ8fDE3MDc3NjgzMTV8&amp;ixlib=rb-4.0.3&amp;h=1500"
            rootClassName="rootClassName9"
          ></GalleryCard331>
          <GalleryCard331
            imageSrc="https://images.unsplash.com/photo-1707301451916-faa7d4114b02?ixid=M3w5MTMyMXwwfDF8YWxsfDEwOXx8fHx8fDJ8fDE3MDc3NjgzMTV8&amp;ixlib=rb-4.0.3&amp;h=1500"
            rootClassName="rootClassName10"
          ></GalleryCard331>
          <GalleryCard331
            imageSrc="https://images.unsplash.com/photo-1682685796852-aa311b46f50d?ixid=M3w5MTMyMXwxfDF8YWxsfDk2fHx8fHx8Mnx8MTcwNzc2ODI5NHw&amp;ixlib=rb-4.0.3&amp;h=1500"
            rootClassName="rootClassName11"
          ></GalleryCard331>
        </div>
      </div>
    </div>
  )
}

export default Gardens
