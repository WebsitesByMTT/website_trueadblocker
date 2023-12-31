import React from "react";
import styles from "../styles/footer.module.scss";
import Button from "./Button";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <h2>True AdBlocker</h2>
        <p>
          It blocks all annoying ads on{" "}
          <a href="https://www.spotifyadblocker.co/" target="_blank">
            {" "}
            spotify
          </a>
          ,{" "}
          <a href="https://www.huluadblocker.net/" target="_blank">
            hulu
          </a>
          ,{" "}
          <a href="https://www.twitchadblocker.co/" target="_blank">
            twitch
          </a>{" "}
          and{" "}
          <a href="https://www.youtubeadblocker.net/" target="_blank">
            youtube
          </a>
          . But if you want a separate adblocker of these extension then we have
          <a href="https://www.spotifyadblocker.co/" target="_blank">
            {" "}
            spotify adblocker
          </a>
          ,{" "}
          <a href="https://www.huluadblocker.net/" target="_blank">
            hulu adblocker
          </a>
          ,{" "}
          <a href="https://www.twitchadblocker.co/" target="_blank">
            adblocker for twitch{" "}
          </a>
          and{" "}
          <a href="https://www.youtubeadblocker.net/" target="_blank">
            youtube adblocker
          </a>
          .
        </p>

        <Button text="Add to Chrome" icon={true} />

        <hr className={styles.line} style={{ color: "gray" }} />

        <div className={styles.content}>
          <ul className={styles.lang}>
            <li>
              <Link href="/germany">Germany</Link>
            </li>
            <li>
              <Link href="/portuguese">Portuguese</Link>
            </li>
            <li>
              <Link href="/dutch">Dutch</Link>
            </li>
            <li>
              <Link href="/turkish">Turkish</Link>
            </li>
            <li>
              <Link href="/spanish">Spanish</Link>
            </li>
            <li>
              <Link href="/polish">Polish</Link>
            </li>
            <li>
              <Link href="/korean">Korean</Link>
            </li>
            <li>
              <Link href="/italian">Italian</Link>
            </li>
            <li>
              <Link href="/french">French</Link>
            </li>
          </ul>
          <div className={styles["popular-searches"]}>
            <p>
              <span>Popular Searches : </span> youtube no ads, chrome youtube
              adblocker, hulu without ads, pop up blocker chrome, Best ad
              blocker fireforx, twitch adblock firefox, adguard ablocker, Pop-
              up ads, ad blocker google chrome, chrome extension adblock and
              google chrome ad blocker.
            </p>
          </div>
          <ul>
            <li className="inline-block pl-4">
              <a href="/">
                <BsFacebook className={styles.icon} />
              </a>
            </li>
            <li className="inline-block pl-6">
              <a href="/">
                <AiFillTwitterCircle className={styles.icon} />
              </a>
            </li>
            <li className="inline-block pl-6">
              <a href="/">
                <AiFillLinkedin className={styles.icon} />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/disclaimer">Disclaimer</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">Terms & Condition</Link>
            </li>
            <li>
              <Link href="/sitemap.xml">Sitemap</Link>
            </li>
          </ul>

          <div className={styles.copyright}>
            <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
