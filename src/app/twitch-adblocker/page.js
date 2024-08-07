import React from 'react'
import Usage from '../components/Usage'
import Footer from '../components/Footer'
import FrequentlyAskedQuestion from '../components/FAQ'
import BrowsingExperience from '../components/BrowsingExperience'
import Header from '../components/Header'
import PlatformIcons from '../components/PlatformIcons'

export const metadata = {
  title: "Stop Twitch Ads Now with Twitch adblocker Chrome extension",
  description: "The twitch adblocker chrome extension is the best way to block all types of annoying ads so that you can stream without any hassle.",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "Stop Twitch Ads Now with Twitch adblocker Chrome extension",
    description: "The twitch adblocker chrome extension is the best way to block all types of annoying ads so that you can stream without any hassle.",
    type: 'website',
    siteName: "Twitch ad blocker",
    images: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
};
const pages = () => {
  const data = {
    hero: {
      title: "<span class='bg-gradient-to-r from-[#D6BFE1] to-[#8C4FFF] text-transparent bg-clip-text'>Skip ads and stream your most awaited videos</span>",
      subHeading: "",
      subTitle: "Download Twitch Adblocker and enjoy live streaming without those annoying ads.",
      button: "Add to Chrome it's Free",
      Navbar: {
        title1: "About Us",
        title2: "Contact Us",
      },
      element: '/10.png',
      bannerImage: '/twitchad.png'
    },
    usage: {
      title: "Enjoy Ad-Free Content with Twitch Adblocker Chrome extension",
      expTitle: "Have the best online experience with this adblock Chrome",
      expText:
        "It is the best extension that improves your online experience. This adblocker Chrome extension is expertise in blocking unwanted ads and provides ad free journey. So, it’s time to say hello to seamless browsing and goodbye to all the disturbances.",
      subTitle: " Download and install the Adblocker | Chrome extension now.",
      featureTitle: "Understand The Benefits Of Our Twitch Adblocker",
      featureText: "Do you still need clarification about our chrome extension twitch adblock? Is it the right choice for you? Do not worry; here, we have listed some of the best benefits of your ad-blocking extension to make your decision-making process easy and smooth.",
      usage1: '/usage1.png',
      usage2: '/usage2.png',
      usage: [
        {
          title: "Customization Features",
          text: "We provide customization options for our extension twitch adblock. You may be able to permit specific adverts to support your favorite streams, safelist particular channels, or decide which kinds of ads to prohibit.",
          icon: (
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 0.625C20.1791 0.625 15.4664 2.05457 11.458 4.73293C7.44954 7.41129 4.32533 11.2181 2.48045 15.6721C0.635561 20.126 0.152855 25.027 1.09337 29.7553C2.03388 34.4836 4.35538 38.8268 7.76428 42.2357C11.1732 45.6446 15.5164 47.9661 20.2447 48.9066C24.973 49.8472 29.874 49.3644 34.3279 47.5196C38.7819 45.6747 42.5887 42.5505 45.2671 38.542C47.9454 34.5336 49.375 29.8209 49.375 25C49.3682 18.5374 46.7979 12.3415 42.2282 7.77181C37.6585 3.20209 31.4626 0.631825 25 0.625ZM38.125 26.875H25C24.5027 26.875 24.0258 26.6775 23.6742 26.3258C23.3226 25.9742 23.125 25.4973 23.125 25V11.875C23.125 11.3777 23.3226 10.9008 23.6742 10.5492C24.0258 10.1975 24.5027 10 25 10C25.4973 10 25.9742 10.1975 26.3258 10.5492C26.6775 10.9008 26.875 11.3777 26.875 11.875V23.125H38.125C38.6223 23.125 39.0992 23.3225 39.4508 23.6742C39.8025 24.0258 40 24.5027 40 25C40 25.4973 39.8025 25.9742 39.4508 26.3258C39.0992 26.6775 38.6223 26.875 38.125 26.875Z"
                fill="white"
              />
            </svg>
          ),
          gradient: "linear-gradient(180deg, #AE45EE 0%, #4345FD 100%)",
        },
        {
          title: "Peace of mind",
          text: "Doubtful software occasionally poses as advertisements can be risky. Twitch Adblocker can lessen the chance of inadvertently clicking on phishing links by blocking advertisements.",
          icon: (
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8749 25C12.8883 29.9183 11.7518 34.7716 9.55614 39.1727C9.45134 39.4008 9.30177 39.6056 9.11631 39.7749C8.93085 39.9442 8.71329 40.0745 8.47652 40.1581C8.23975 40.2417 7.9886 40.2768 7.73798 40.2615C7.48735 40.2462 7.24235 40.1807 7.01752 40.069C6.79268 39.9572 6.59259 39.8013 6.42911 39.6108C6.26564 39.4202 6.14211 39.1987 6.06585 38.9595C5.98959 38.7202 5.96216 38.4681 5.98519 38.2181C6.00821 37.9681 6.08123 37.7252 6.19989 37.5039C8.13583 33.6208 9.13747 29.3389 9.12489 25C9.12049 22.4698 9.68726 19.9712 10.783 17.6905C11.8787 15.4099 13.475 13.4059 15.453 11.8281C15.8412 11.5173 16.337 11.3735 16.8312 11.4282C17.3255 11.4829 17.7778 11.7317 18.0886 12.1199C18.3994 12.5081 18.5432 13.0039 18.4885 13.4981C18.4338 13.9924 18.185 14.4447 17.7968 14.7555C16.258 15.9823 15.0161 17.5408 14.1639 19.3147C13.3116 21.0886 12.871 23.032 12.8749 25ZM25.9999 23.125C25.5026 23.125 25.0257 23.3225 24.6741 23.6742C24.3224 24.0258 24.1249 24.5027 24.1249 25C24.1245 32.305 22.2697 39.4903 18.7343 45.8828C18.4931 46.3179 18.4346 46.831 18.5718 47.3093C18.7089 47.7875 19.0304 48.1916 19.4655 48.4328C19.9006 48.674 20.4137 48.7324 20.892 48.5953C21.3702 48.4582 21.7743 48.1367 22.0155 47.7016C25.8583 40.7522 27.8744 32.9411 27.8749 25C27.8749 24.5027 27.6773 24.0258 27.3257 23.6742C26.9741 23.3225 26.4972 23.125 25.9999 23.125ZM25.9999 15.625C23.5135 15.625 21.1289 16.6127 19.3708 18.3709C17.6126 20.129 16.6249 22.5136 16.6249 25C16.6249 25.4973 16.8224 25.9742 17.1741 26.3258C17.5257 26.6775 18.0026 26.875 18.4999 26.875C18.9972 26.875 19.4741 26.6775 19.8257 26.3258C20.1773 25.9742 20.3749 25.4973 20.3749 25C20.3749 23.5082 20.9675 22.0774 22.0224 21.0225C23.0773 19.9676 24.508 19.375 25.9999 19.375C27.4917 19.375 28.9225 19.9676 29.9774 21.0225C31.0323 22.0774 31.6249 23.5082 31.6249 25C31.6443 32.4554 30.0022 39.8214 26.8179 46.5625C26.7128 46.7858 26.6527 47.0276 26.641 47.2741C26.6293 47.5207 26.6664 47.7671 26.7499 47.9993C26.8335 48.2315 26.962 48.445 27.1281 48.6276C27.2942 48.8101 27.4946 48.9582 27.7179 49.0633C27.9412 49.1684 28.183 49.2285 28.4295 49.2401C28.676 49.2518 28.9224 49.2148 29.1546 49.1312C29.3869 49.0476 29.6004 48.9191 29.7829 48.7531C29.9655 48.587 30.1135 48.3866 30.2186 48.1633C33.6366 40.921 35.398 33.0082 35.3749 25C35.3749 22.5136 34.3872 20.129 32.629 18.3709C30.8709 16.6127 28.4863 15.625 25.9999 15.625ZM25.9999 0.625C19.5373 0.631825 13.3414 3.20209 8.7717 7.77181C4.20198 12.3415 1.63172 18.5374 1.62489 25C1.62837 27.3414 1.23205 29.6662 0.453017 31.8742C0.287361 32.3432 0.314797 32.8588 0.529292 33.3076C0.743787 33.7564 1.12777 34.1015 1.59677 34.2672C2.06577 34.4328 2.58136 34.4054 3.03013 34.1909C3.4789 33.9764 3.82408 33.5924 3.98974 33.1234C4.9096 30.514 5.37802 27.7668 5.37489 25C5.37489 19.5299 7.54788 14.2839 11.4158 10.4159C15.2838 6.54799 20.5298 4.375 25.9999 4.375C31.47 4.375 36.716 6.54799 40.584 10.4159C44.4519 14.2839 46.6249 19.5299 46.6249 25C46.6258 29.284 46.2106 33.558 45.3851 37.7617C45.3373 38.0033 45.3376 38.252 45.386 38.4935C45.4343 38.735 45.5298 38.9646 45.6669 39.1692C45.804 39.3738 45.9801 39.5493 46.1851 39.6859C46.3901 39.8224 46.62 39.9172 46.8616 39.9648C46.9813 39.988 47.103 39.9998 47.2249 40C47.6588 39.9995 48.0791 39.8486 48.4142 39.573C48.7492 39.2973 48.9783 38.914 49.0624 38.4883C49.9355 34.0453 50.3751 29.528 50.3749 25C50.3674 18.5376 47.797 12.3421 43.2274 7.77249C38.6578 3.20291 32.4623 0.632444 25.9999 0.625ZM18.1249 30.6648C17.6386 30.5681 17.1338 30.6679 16.7209 30.9424C16.308 31.217 16.0207 31.6438 15.9218 32.1297C15.161 35.8742 13.7988 39.4707 11.8882 42.7797C11.6395 43.2105 11.5722 43.7224 11.701 44.2028C11.8298 44.6832 12.1441 45.0928 12.5749 45.3414C13.0057 45.59 13.5176 45.6574 13.998 45.5286C14.4784 45.3998 14.888 45.0855 15.1366 44.6547C17.2481 40.9955 18.752 37.0181 19.5897 32.8773C19.639 32.6359 19.6402 32.3871 19.5932 32.1451C19.5462 31.9032 19.452 31.6729 19.316 31.4674C19.1799 31.2619 19.0047 31.0853 18.8003 30.9476C18.596 30.8098 18.3664 30.7138 18.1249 30.6648ZM25.9999 8.125C25.2947 8.12515 24.5903 8.16898 23.8905 8.25625C23.4063 8.32894 22.9698 8.58812 22.6742 8.97842C22.3786 9.36871 22.2474 9.85915 22.3086 10.3449C22.3698 10.8307 22.6186 11.2732 23.0018 11.578C23.385 11.8827 23.8722 12.0255 24.3593 11.9758C26.2064 11.7461 28.0813 11.9114 29.8598 12.4606C31.6383 13.0099 33.2798 13.9307 34.6757 15.162C36.0717 16.3933 37.1902 17.907 37.9572 19.603C38.7242 21.299 39.1222 23.1386 39.1249 25C39.1244 27.4288 38.9741 29.8553 38.6749 32.2656C38.642 32.5107 38.6579 32.76 38.7218 32.9989C38.7856 33.2378 38.8961 33.4618 39.0468 33.6579C39.1976 33.8539 39.3856 34.0182 39.6001 34.1413C39.8147 34.2644 40.0514 34.3438 40.2968 34.375C40.3745 34.3843 40.4528 34.389 40.5311 34.3891C40.9871 34.3881 41.4271 34.221 41.7688 33.919C42.1105 33.617 42.3304 33.2009 42.3874 32.7484C42.7036 30.1825 42.8601 27.5994 42.8561 25.0141C42.8549 20.5409 41.0796 16.2507 37.9197 13.0846C34.7597 9.91854 30.4731 8.13493 25.9999 8.125ZM39.5772 38.1836C39.3387 38.1219 39.0903 38.1078 38.8464 38.1422C38.6024 38.1766 38.3676 38.2587 38.1554 38.3838C37.9431 38.509 37.7577 38.6747 37.6095 38.8716C37.4614 39.0685 37.3535 39.2927 37.2921 39.5312C36.9499 40.8648 36.5538 42.2031 36.1202 43.5156C35.9615 43.9859 35.9958 44.4999 36.2155 44.9449C36.4351 45.39 36.8223 45.7298 37.2921 45.8898C37.4845 45.9553 37.6865 45.9886 37.8897 45.9883C38.2826 45.988 38.6654 45.8643 38.9842 45.6347C39.303 45.4051 39.5416 45.0811 39.6663 44.7086C40.135 43.3211 40.5546 41.8961 40.9202 40.4781C40.9831 40.2396 40.9982 39.991 40.9648 39.7466C40.9314 39.5022 40.8501 39.2668 40.7256 39.0538C40.601 38.8409 40.4357 38.6546 40.2391 38.5057C40.0424 38.3568 39.8183 38.2481 39.5796 38.1859L39.5772 38.1836Z"
                fill="white"
              />
            </svg>
          ),
          gradient: "linear-gradient(180deg, #49EDC7 0%, #3052B4 100%)",
        },
        {
          title: "Improved User Experience",
          text: "Some advertisements take up a large amount of the screen, which can be bothersome. These interruptions are removed by our Twitch adblock extension Chrome, allowing you to concentrate on the material without interruption.",
          icon: (
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.375 30V48.75C54.375 51.2364 53.3873 53.6209 51.6291 55.3791C49.871 57.1372 47.4864 58.125 45 58.125H31.875C31.3777 58.125 30.9008 57.9274 30.5492 57.5758C30.1975 57.2242 30 56.7472 30 56.25C30 55.7527 30.1975 55.2758 30.5492 54.9241C30.9008 54.5725 31.3777 54.375 31.875 54.375H45C46.4918 54.375 47.9226 53.7823 48.9775 52.7274C50.0324 51.6725 50.625 50.2418 50.625 48.75H45C43.5082 48.75 42.0774 48.1573 41.0225 47.1024C39.9676 46.0475 39.375 44.6168 39.375 43.125V33.75C39.375 32.2581 39.9676 30.8274 41.0225 29.7725C42.0774 28.7176 43.5082 28.125 45 28.125H50.543C50.1881 24.2272 48.7316 20.5108 46.3434 17.4099C43.9553 14.309 40.7341 11.9517 37.0561 10.6132C33.3782 9.27477 29.3953 9.01045 25.5728 9.85114C21.7502 10.6918 18.2457 12.6028 15.4688 15.3609C12.0156 18.7685 9.88576 23.2923 9.45938 28.125H15C16.4918 28.125 17.9226 28.7176 18.9775 29.7725C20.0324 30.8274 20.625 32.2581 20.625 33.75V43.125C20.625 44.6168 20.0324 46.0475 18.9775 47.1024C17.9226 48.1573 16.4918 48.75 15 48.75H11.25C9.75816 48.75 8.32742 48.1573 7.27252 47.1024C6.21763 46.0475 5.625 44.6168 5.625 43.125V30C5.63026 25.1716 7.06787 20.4533 9.75587 16.4424C12.4439 12.4314 16.2614 9.30809 20.7253 7.46773C25.1892 5.62737 30.0987 5.15272 34.8325 6.10386C39.5662 7.055 43.9114 9.38916 47.318 12.8109C49.5671 15.071 51.3482 17.7527 52.5592 20.7023C53.7701 23.6519 54.3872 26.8115 54.375 30Z"
                fill="white"
              />
            </svg>
          ),
          gradient: "linear-gradient(180deg, #EF40F9 0%, #D9333C 100%)",
        },
        {
          title: "Safety of Personal Information",
          text: "It's common knowledge that advertisements may monitor your browsing preferences and behaviors, invading your privacy. Our twitch ads extension protects your privacy by blocking these tracking technologies and restricting the sharing of your information with outside parties.",
          icon: (
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48.75 9.375H11.25C10.2554 9.375 9.30161 9.77009 8.59835 10.4733C7.89509 11.1766 7.5 12.1304 7.5 13.125V26.8992C7.5 47.9016 25.2703 54.8695 28.8281 56.0531C29.588 56.3115 30.412 56.3115 31.1719 56.0531C34.7344 54.8695 52.5 47.9016 52.5 26.8992V13.125C52.5 12.1304 52.1049 11.1766 51.4016 10.4733C50.6984 9.77009 49.7446 9.375 48.75 9.375ZM40.7016 25.7016L27.5766 38.8266C27.4024 39.0009 27.1956 39.1392 26.968 39.2336C26.7404 39.3279 26.4964 39.3765 26.25 39.3765C26.0036 39.3765 25.7596 39.3279 25.532 39.2336C25.3044 39.1392 25.0976 39.0009 24.9234 38.8266L19.2984 33.2016C18.9466 32.8497 18.749 32.3726 18.749 31.875C18.749 31.3774 18.9466 30.9003 19.2984 30.5484C19.6503 30.1966 20.1274 29.999 20.625 29.999C21.1226 29.999 21.5997 30.1966 21.9516 30.5484L26.25 34.8469L38.0484 23.0484C38.2226 22.8742 38.4295 22.736 38.6571 22.6418C38.8847 22.5475 39.1286 22.499 39.375 22.499C39.6214 22.499 39.8653 22.5475 40.0929 22.6418C40.3205 22.736 40.5274 22.8742 40.7016 23.0484C40.8758 23.2226 41.014 23.4295 41.1082 23.6571C41.2025 23.8847 41.251 24.1286 41.251 24.375C41.251 24.6214 41.2025 24.8653 41.1082 25.0929C41.014 25.3205 40.8758 25.5274 40.7016 25.7016Z"
                fill="white"
              />
            </svg>

          ),
          gradient: "linear-gradient(180deg, #9A52EF 0%, #E359AE 100%)",
        },
      ],
    },
    faq: {
      lang: "english",
      title: "FAQs",
      button: "More Questions",
      faqBackground: '/usage1.png',
      questions: [
        {
          id: 1,
          ques: "What is a Twitch Adblocker?",
          ans: "With the ability to filter ads on Twitch, viewers can have a more uninterrupted streaming experience. Twitch Adblocker is a potent tool for this purpose.",
        },
        {
          id: 2,
          ques: "How Does an Adblocker on Twitch Work?",
          ans: "Twitch Adblocker uses advanced algorithms to identify and block different kinds of ads. It ensures uninterrupted viewing by quietly running in the background of your streaming program or browser.",
        },
        {
          id: 3,
          ques: "Is the Twitch Adblocker slowing down my streaming experience?",
          ans: "Twitch Adblocker is designed to keep your streaming speed as low as possible while blocking adverts and other undesirable information.",
        },
        {
          id: 4,
          ques: "Does Twitch Adblocker gather private information?",
          ans: "No, personal information is not collected by Twitch Adblocker. Our primary concerns are still user security and privacy.",
        },
        {
          id: 5,
          ques: "Is there a free version of Twitch Adblocker?",
          ans: "Indeed, Twitch Adblocker has a free version that offers the most basic functions for preventing ads. We now offer a premium edition for users looking for more customization choices and increased functionality.",
        }
      ],
    },
    browsData: {
      background: '/usage1.png',
      Line: '/twitchLine.png',
      mainHeadingColor: 'bg-gradient-to-r to-[#8C4FFF] from-[#D6BFE1] text-transparent bg-clip-text',
      browsData: [
        {
          heading: '<span class="bg-gradient-to-r to-[#8C4FFF] from-[#D6BFE1] text-transparent bg-clip-text">Stream Smoother With Our Ad Remover</span>',
          desc: "Our approach with Adblock Twitch Extension improves your viewing experience by subtly preventing annoying adverts in the background, whether you're watching live events, gaming tournaments, or creative broadcasts. It's simple, streamlined, and made to meet your entertainment requirements. Countless customers have used our cutting-edge ad remover to enjoy a cleaner, ad-free streaming experience; become one of them. Easily immerse yourself in unbroken streams to maximize your enjoyment today."
        },
        {
          heading: '<span class="bg-gradient-to-r to-[#8C4FFF] from-[#D6BFE1] text-transparent bg-clip-text">Stream Without Interruptions with Our Trustworthy and Safe Plugin</span>',
          desc: "Wave goodbye to obtrusive advertisements on your preferred platforms with our trustworthy and safe Twitch no-ads extension. Whether you're streaming live streams on Twitch, enjoying music on Spotify, or keeping up with the newest videos on YouTube, we've got you covered. You can continue to uninterruptible enjoy your favorite material with our faultless cross-platform adblocker."
        },
        {
          heading: '<span class="bg-gradient-to-r to-[#8C4FFF] from-[#D6BFE1] text-transparent bg-clip-text">Twitch Adblock extension: Your Ultimate Stream Dream Extension</span>',
          desc: "Put an end to disruptions by using twitch adblocker extension! With the help of this stylish adblocker extension, you can enjoy flawless, ad-free streaming on Twitch, and continuous entertainment without waiting for those annoying advertisements to end. It's just you and your favorite content with our twitch ad block extension—no unwanted breaks. So put on your favorite music, binge-watch your favorite show, and enjoy hassle-free live streaming—our adblock twitch extension has you covered!"
        },
        {
          heading: '<span class="bg-gradient-to-r to-[#8C4FFF] from-[#D6BFE1] text-transparent bg-clip-text">Twitch Adblocker: The Ultimate Ad Blasting Extension</span>',
          desc: "Are those annoying Twitch commercials getting on your nerves? Presenting our effective Adblock Twitch Chrome Extension that doesn't contain any malicious garbage! Bid farewell to disruptions and welcome to blissful, uninterrupted streaming. This quirky, virus-free addon is going to be your new best friend in the fight against intrusive advertising. Your watching experience has just been enhanced with the Twitch Ad Blocking addon; you may now resume watching immediately as an ad ends. It's simple to use, efficient, and made to ensure that your Twitch streams remain ad-free."
        }
      ]
    },
    footer:{
      footerBackground:'/usage1.png'
    }
    }
  return(
    <div style = {{ background: "rgba(27, 27, 27, 1)" }} >
      <Header data={data.hero} />
      <PlatformIcons />
      <Usage data={data.usage} />
      <BrowsingExperience browsingData={data.browsData}/>
      <FrequentlyAskedQuestion data={data.faq} />
      <Footer Footerdata={data.footer}/>
    </div >
  )
}

export default pages
