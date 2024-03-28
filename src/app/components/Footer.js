import React from "react";
import styles from "../styles/footer.module.scss";
import Link from "next/link";
import background from "../../../public/3.png";
import footerBackground from "../../../public/footer.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Image src={background} className={styles.background} alt="bg" />
      <Image
        src={footerBackground}
        className={styles.footerbackground}
        alt="footerbackground"
      />
      <div className={styles.container}>
        <h2 className={styles.heading}>Get it free and block ads</h2>
        <p className={styles.subHeading}>
          This is the best extension that blocks all kinds of ads for free
          including banner ads, video ads, pop-ups, and many more.
        </p>
        <p className={styles.subText}>
          Ad-free freedom with Trueadblocker Get ready to use this ad-free
          extension now
        </p>
        <hr className={styles.line} />
        <div className={styles.content}>
          <ul className={styles.contentLinkContainer}>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link href="/terms-of-services">EULA</Link>
            </li>
            <li>
              <Link href="/terms-of-services">Terms Of Services</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
          <ul className={styles.socials}>
            <li>
              <a href="/">
                <svg
                  width="50%"
                  height="50%"
                  viewBox="0 0 45 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.5883 12.876V17.7789H31.6516L30.6915 24.3833H25.5883V39.5995C24.5652 39.7414 23.5184 39.8156 22.4558 39.8156C21.2293 39.8156 20.0248 39.7178 18.8519 39.5286V24.3833H13.26V17.7789H18.8519V11.7801C18.8519 8.05838 21.8678 5.04004 25.5899 5.04004V5.0432C25.601 5.0432 25.6104 5.04004 25.6215 5.04004H31.6532V10.7519H27.7119C26.5406 10.7519 25.5899 11.7028 25.5899 12.8745L25.5883 12.876Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="/">
                <svg
                  width="50%"
                  height="50%"
                  viewBox="0 0 45 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.4619 9.1582H15.5381C11.6914 9.1582 8.56201 12.2885 8.56201 16.1363V28.8783C8.56201 32.7261 11.6914 35.8564 15.5381 35.8564H29.4619C33.3085 35.8564 36.4379 32.7261 36.4379 28.8783V16.1363C36.4379 12.2885 33.3085 9.1582 29.4619 9.1582ZM11.023 16.1363C11.023 13.6463 13.0488 11.6199 15.5381 11.6199H29.4619C31.9512 11.6199 33.977 13.6463 33.977 16.1363V28.8783C33.977 31.3684 31.9512 33.3948 29.4619 33.3948H15.5381C13.0488 33.3948 11.023 31.3684 11.023 28.8783V16.1363Z"
                    fill="white"
                  />
                  <path
                    d="M22.5002 28.9963C26.0773 28.9963 28.9891 26.0852 28.9891 22.5055C28.9891 18.9257 26.0788 16.0146 22.5002 16.0146C18.9215 16.0146 16.0112 18.9257 16.0112 22.5055C16.0112 26.0852 18.9215 28.9963 22.5002 28.9963ZM22.5002 18.4779C24.7215 18.4779 26.5282 20.2851 26.5282 22.5071C26.5282 24.729 24.7215 26.5362 22.5002 26.5362C20.2789 26.5362 18.4722 24.729 18.4722 22.5071C18.4722 20.2851 20.2789 18.4779 22.5002 18.4779Z"
                    fill="white"
                  />
                  <path
                    d="M29.5897 17.0632C30.5529 17.0632 31.338 16.2794 31.338 15.3143C31.338 14.3492 30.5545 13.5654 29.5897 13.5654C28.6248 13.5654 27.8413 14.3492 27.8413 15.3143C27.8413 16.2794 28.6248 17.0632 29.5897 17.0632Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="/">
                <svg
                  width="50%"
                  height="50%"
                  viewBox="0 0 45 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.12324 9.92676L19.4998 23.8042L9.05859 35.0874H11.4092L20.5514 25.2092L27.9373 35.0874H35.935L24.9751 20.4294L34.6943 9.92676H32.3437L23.9251 19.0243L17.1225 9.92676H9.12479H9.12324ZM12.5789 11.6583H16.2522L32.4761 33.3559H28.8028L12.5789 11.6583Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="/">
                <svg
                  width="50%"
                  height="50%"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.5608 17.7914C36.3842 16.0867 36.0043 14.2022 34.6059 13.2118C33.5229 12.4439 32.0993 12.4155 30.7703 12.417C27.9609 12.417 25.15 12.4218 22.3407 12.4234C19.6385 12.4265 16.9364 12.4281 14.2342 12.4312C13.1054 12.4312 12.0082 12.3445 10.9598 12.8334C10.0596 13.2528 9.35491 14.0508 8.93083 14.9386C8.34279 16.1734 8.21983 17.5722 8.14889 18.9379C8.01804 21.4247 8.03223 23.9179 8.1883 26.4033C8.30339 28.2168 8.59504 30.2211 9.99656 31.3771C11.2388 32.4005 12.9919 32.451 14.6031 32.4526C19.7173 32.4573 24.8331 32.462 29.9489 32.4652C30.6047 32.4667 31.289 32.4541 31.9574 32.3816C33.2722 32.2397 34.5255 31.8628 35.3705 30.8882C36.2234 29.9057 36.4426 28.5385 36.5719 27.2438C36.8872 24.1025 36.884 20.9312 36.5608 17.7914ZM19.3831 26.8448V18.0374L27.0072 22.4403L19.3831 26.8448Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="/">
                <svg
                  width="50%"
                  height="50%"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6004 14.9608C11.0077 14.4104 10.7129 13.7292 10.7129 12.9186C10.7129 12.1081 11.0093 11.3968 11.6004 10.8449C12.1932 10.2945 12.9563 10.0186 13.8911 10.0186C14.826 10.0186 15.5591 10.2945 16.1503 10.8449C16.7431 11.3953 17.0378 12.0876 17.0378 12.9186C17.0378 13.7497 16.7415 14.4104 16.1503 14.9608C15.5575 15.5112 14.8055 15.7871 13.8911 15.7871C12.9767 15.7871 12.1932 15.5112 11.6004 14.9608ZM16.5397 18.1179V34.9916H11.2095V18.1179H16.5397Z"
                    fill="white"
                  />
                  <path
                    d="M34.2833 19.785C35.4452 21.0465 36.0253 22.7781 36.0253 24.9827V34.6937H30.9632V25.6671C30.9632 24.5553 30.6747 23.6911 30.0993 23.0761C29.5238 22.4611 28.7482 22.152 27.7771 22.152C26.8059 22.152 26.0302 22.4595 25.4548 23.0761C24.8794 23.6911 24.5909 24.5553 24.5909 25.6671V34.6937H19.4988V18.0708H24.5909V20.2754C25.1064 19.5405 25.8017 18.9602 26.6751 18.5328C27.5485 18.1055 28.5306 17.8926 29.6231 17.8926C31.5686 17.8926 33.123 18.5234 34.2833 19.7834V19.785Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <p className={styles.copyright}>
            Copyright © {new Date().getFullYear()} Truead blocker, All Rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
