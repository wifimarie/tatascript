import React from "react";
import { Block } from "../../components/Block";
import { Button } from "../../components/Button";
import { Dots } from "../../components/Dots";
import { Footer } from "../../components/Footer";
import { H } from "../../components/H";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Media } from "../../components/Media";
import { MediaWrapper } from "../../components/MediaWrapper";
import { Project } from "../../components/Project";
import { Discord1 } from "../../icons/Discord1";
import { Email1 } from "../../icons/Email1";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="div-2">
        <div className="overlap">
          <div className="background">
            <Dots className="dots-instance" />
            <Dots className="frame-17" />
            <Dots className="frame-18" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
          </div>
          <div className="contact">
            <H className="h-2" lineStroke="/img/line-7-stroke-5.svg" text="contacts" />
            <div className="div-wrapper">
              <p className="text-wrapper-13">
                I’m interested in freelance opportunities. However, if you have other request or question, don’t
                hesitate to contact me
              </p>
            </div>
            <div className="frame-wrapper">
              <div className="frame-19">
                <div className="text-wrapper-14">Message me here</div>
                <div className="frame-20">
                  <Media
                    className="design-component-instance-node-3"
                    icon={<Discord1 className="icon-instance-node-2" />}
                    stateProp="default"
                    text="!Elias#3519"
                  />
                  <Media
                    className="design-component-instance-node-3"
                    icon={<Email1 className="icon-instance-node-2" />}
                    stateProp="default"
                    text="elias@elias.me"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="about-me">
            <div className="about-me-2">
              <p className="hello-i-m-elias-i-m">
                Hello, i’m Elias!
                <br />
                <br />
                I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from
                scratch and raise them into modern user-friendly web experiences. <br />
                <br />
                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have
                been helping various clients to establish their presence online. I always strive to learn about the
                newest technologies and frameworks.
              </p>
              <Button className="button-2" stateProp="default" text="Read more -&gt;" type="primary" />
            </div>
            <H className="h-instance" lineStroke="/img/line-7-stroke-4.svg" text="about-me" />
            <div className="group-2">
              <div className="overlap-group-3">
                <img className="image" alt="Image" src="/img/image-1.png" />
                <Dots className="frame-21" />
                <Dots className="frame-22" hasFrame={false} />
              </div>
              <img className="line-stroke-3" alt="Line stroke" src="/img/line-7-stroke-3.svg" />
            </div>
          </div>
          <div className="skills">
            <H className="h2-instance" lineStroke="/img/line-7-stroke-2.svg" text="skills" />
            <div className="group-3">
              <Block className="design-component-instance-node-4" />
              <Block
                className="block-instance"
                hasDiv={false}
                text="Databases"
                text1="SQLite"
                text2="PostgreSQL"
                text3="Mongo"
              />
              <div className="frame-23">
                <div className="frame-24">
                  <div className="text-wrapper-14">Frameworks</div>
                </div>
                <img className="line-5" alt="Line" src="/img/line-13.svg" />
                <div className="frame-25">
                  <div className="frame-26">
                    <div className="text-wrapper-15">React</div>
                    <div className="text-wrapper-15">Vue</div>
                  </div>
                  <div className="frame-26">
                    <div className="text-wrapper-15">Disnake</div>
                    <div className="text-wrapper-15">Discord.js</div>
                  </div>
                  <div className="frame-27">
                    <div className="text-wrapper-15">Flask</div>
                    <div className="text-wrapper-15">Express.js</div>
                  </div>
                </div>
              </div>
              <div className="frame-28">
                <div className="frame-24">
                  <div className="text-wrapper-14">Other</div>
                </div>
                <img className="line-5" alt="Line" src="/img/line-13-4.svg" />
                <div className="frame-25">
                  <div className="frame-26">
                    <div className="text-wrapper-15">HTML</div>
                    <div className="text-wrapper-15">CSS</div>
                    <div className="text-wrapper-15">EJS</div>
                    <div className="text-wrapper-15">SCSS</div>
                  </div>
                  <div className="frame-26">
                    <div className="text-wrapper-15">REST</div>
                    <div className="text-wrapper-15">Jinja</div>
                  </div>
                </div>
              </div>
              <div className="frame-29">
                <div className="frame-24">
                  <div className="text-wrapper-14">Tools</div>
                </div>
                <img className="line-5" alt="Line" src="/img/line-13.svg" />
                <div className="frame-25">
                  <div className="frame-26">
                    <div className="text-wrapper-15">VSCode</div>
                    <div className="text-wrapper-15">Neovim</div>
                    <div className="text-wrapper-15">Linux</div>
                  </div>
                  <div className="frame-26">
                    <div className="text-wrapper-15">Figma</div>
                    <div className="text-wrapper-15">XFCE</div>
                    <div className="text-wrapper-15">Arch</div>
                  </div>
                  <div className="frame-27">
                    <div className="text-wrapper-15">Git</div>
                    <div className="text-wrapper-15">Font Awesome</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-4">
              <Dots className="frame-30" />
              <Dots className="frame-31" />
              <div className="rectangle-5" />
              <div className="rectangle-6" />
              <div className="logo-2">
                <div className="overlap-group-4">
                  <img className="union-2" alt="Union" src="/img/union-4.svg" />
                  <img className="union-3" alt="Union" src="/img/union-3.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="projects-2">
            <div className="frame-32">
              <Project className="project-instance" />
              <div className="group-5">
                <img className="rectangle-7" alt="Rectangle" src="/img/rectangle-22-1.png" />
                <div className="frame-33">
                  <div className="text-wrapper-15">React</div>
                  <div className="text-wrapper-15">Express</div>
                  <div className="text-wrapper-15">Discord.js</div>
                  <div className="text-wrapper-15">Node.js</div>
                </div>
                <div className="frame-33">
                  <div className="text-wrapper-15">HTML</div>
                  <div className="text-wrapper-15">SCSS</div>
                  <div className="text-wrapper-15">Python</div>
                  <div className="text-wrapper-15">Flask</div>
                </div>
                <div className="frame-34">
                  <div className="chert-nodes-2">ProtectX</div>
                  <div className="minecraft-servers-2">Discord anti-crash bot</div>
                  <div className="frame-35">
                    <Button
                      className="design-component-instance-node-3"
                      stateProp="default"
                      text="Live &lt;~&gt;"
                      type="primary"
                    />
                  </div>
                </div>
              </div>
              <Project
                className="group-6"
                hasDiv={false}
                rectangle="/img/rectangle-22.png"
                text="CSS"
                text1="Express"
                text2="Node.js"
                text3="Kahoot Answers Viewer"
                text4="Get answers to your kahoot quiz"
                visible={false}
              />
            </div>
            <div className="group-7">
              <H className="design-component-instance-node-4" lineStroke="/img/line-7-stroke.svg" text="projects" />
              <div className="view-all">View all ~~&gt;</div>
            </div>
          </div>
          <div className="quote">
            <p className="text-wrapper-16">With great power comes great electricity bill</p>
            <img className="frame-36" alt="Frame" src="/img/frame-50.svg" />
            <div className="frame-37">
              <div className="text-wrapper-17">- Dr. Who</div>
            </div>
            <img className="frame-38" alt="Frame" src="/img/frame-50.svg" />
          </div>
        </div>
        <Footer className="footer-instance" />
        <div className="first">
          <div className="group-8">
            <p className="elias-is-a-web">
              <span className="span">Elias is a </span>
              <span className="text-wrapper-18">web designer</span>
              <span className="span"> and </span>
              <span className="text-wrapper-18">front-end developer</span>
            </p>
            <p className="text-wrapper-19">He crafts responsive websites where technologies meet creativity</p>
            <Button className="button-3" stateProp="default" text="Contact me!!" type="primary" />
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <Logo
                className="logo-6"
                img="/img/union-1.svg"
                overlapGroupClassName="logo-3"
                style="outline"
                union="/img/union-2.svg"
                unionClassName="logo-4"
                unionClassNameOverride="logo-5"
              />
              <img className="image-2" alt="Image" src="/img/image.png" />
              <Dots className="dots-2" />
            </div>
          </div>
          <div className="frame-39">
            <div className="rectangle-8" />
            <p className="currently-working-on">
              <span className="text-wrapper-20">Currently working on </span>
              <span className="text-wrapper-21">Portfolio</span>
            </p>
          </div>
        </div>
        <Header className="header-instance" />
        <MediaWrapper className="media-instance" />
      </div>
    </div>
  );
};
