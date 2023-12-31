import React from "react";
import styles from "@/app/styles/button.module.scss";
import { AiFillChrome } from "react-icons/ai";

const Button = ({ text, icon }) => {
  return (
    <a
      href="https://chrome.google.com/webstore/detail/trueadblocker/bfnbbojgkemfejhnedknbidfceobmmek?utm_source=ext_sidebar&hl=en-US"
      target="_blank"
    >
      <button className={styles.btn}>
        {icon && <AiFillChrome />}
        {text}
      </button>
    </a>
  );
};

export default Button;
