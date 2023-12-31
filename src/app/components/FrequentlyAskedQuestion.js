"use client";

import React, { useState } from "react";
import styles from "../styles/frequentlyAskedQuestions.module.scss";
import Image from "next/image";
import Button from "./Button";

const questions = [
  {
    id: 1,
    ques: "What is an True AdBlocker?",
    ans: "It is a tool that is made to preserve your privacy and make the internet safer and cleaner with total adblock. Pop-up advertising, banners, and video ads are all blocked by this extension, even on YouTube. It eliminates tracking requests and cookies. It assures you don't visit any of the risky websites by knowing which ones to avoid. From this, you can block all unwanted ads such as youtube, pop up ads, hulu no ads.    ",
  },
  {
    id: 2,
    ques: "Why is True AdBlocker is a superior to others?",
    ans: "The majority of free ad block for chrome are browser add-ons that can't get rid of all advertising. For this extension you'll need to install an ad-blocking extension on each browser you use if you use more than one. Additionally, you won't be able to ban app adverts if you wish to. With toal adblock, you can stop websites and businesses from tracking you, block adverts in browsers and applications, and safeguard yourself against malware and scams. This also includes in-app support, speeds up page loading, and lets you control DNS servers and web queries. From our comparison table, you may discover more.",
  },
  {
    id: 3,
    ques: "Are there any free versions of True AdBlocker?    ",
    ans: "You can test out all the features in this extension and total adblock has to offer with a free trial of our full-featured programs for Windows. It’s free versions for windows also have the ability to block the advertising and trackers in Safari, which is another way they might be useful. However, their usefulness is constrained; a full version is required to accomplish things like block app adverts, manage DNS requests, safeguard oneself from fraudulent domains, and more Additionally it offers totally free browser add-ons. Check out adguard adblocker comparison table to discover more about the differences between extensions and full-featured programs. ",
  },
  {
    id: 4,
    ques: "Can I utilize True AdBlocker across several platforms?",
    ans: "Sure! All windows are supported by this extesnion. Purchasing a license, downloading the browser extension for the required platform, and signing in with your license key and account details are the best ways to use this extension across many devices.    ",
  },
  {
    id: 5,
    ques: "Is using True AdBlocker secure?",
    ans: "We have been creating privacy-focused solutions, and we currently have more than 45 million users globally. We have only the data that is absolutely essential to run our websites and apps collected by google chrome adblocker  never share your personal information with anyone. Read more about it in our privacy policy.     ",
  },
];

const FrequentlyAskedQuestion = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (questionId) => {
    if (showAnswer === questionId) {
      setShowAnswer(null);
    } else {
      setShowAnswer(questionId);
    }
  };

  return (
    <div className={styles.frequently}>
      <div className={styles.container}>
        <h2>FREQUENTLY ASKED QUESTION</h2>
        <ol>
          {questions.map((question) => (
            <li key={question.id} onClick={() => toggleAnswer(question.id)}>
              <div className={styles.question}>
                <p>{question.ques}</p>
                <div className={styles["image-container"]}>
                  <Image
                    className={styles["image"]}
                    fill={true}
                    src="/addLogo.svg"
                    alt="add-logo"
                  />
                </div>
              </div>
              {showAnswer === question.id && (
                <div
                  className={`${styles.answer} ${
                    showAnswer === question.id ? styles.active : ""
                  }`}
                >
                  <p>{question.ans}</p>
                </div>
              )}

              {/*
               */}
            </li>
          ))}
        </ol>
        <Button text="Add to Chrome" icon={true} />
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
