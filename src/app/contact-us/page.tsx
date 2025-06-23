'use client';

import Header from "../components/header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faDiscord,
  faTwitter,
  faLinkedin,
  faWeibo,
  faWeixin
} from '@fortawesome/free-brands-svg-icons';

import { faGlobe } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  return (
    <>
      <div className="mx-50 my-24 space-y-16">
        <Header text="For" important="general inquiries" />
        <div className="flex-col space-y-2">
          <div className="flex space-x-4 text-3xl">
            <a href="https://www.instagram.com/acyaunsw/" className="hover:brightness-90 transition text-[#E4405F]" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/acyaunsw/" className="hover:brightness-90 transition text-[#1877F2]" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://discord.gg/2XASXHcn8a" className="hover:brightness-90 transition text-[#5865F2]" aria-label="Twitter">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a href="" className="hover:brightness-90 transition text-[#09B83E]" aria-label="WeChat">
              <FontAwesomeIcon icon={faWeixin} />
            </a>
          </div>
          Please email <a href="mailto:unsw@acya.org.au" className="underline hover:decoration-acya bg-gradient-to-bl from-acya to-red-200/90 bg-clip-text hover:text-transparent">unsw@acya.org.au</a>.
        </div>

        <Header text="For more on" important="ACYA" />
        <div className="flex-col space-x-4 justify-center text-3xl">
          <a href="https://www.instagram.com/acya_national/" className="hover:brightness-90 transition text-[#E4405F]" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/australiachinayouthassociation" className="hover:brightness-90 transition text-[#1877F2]" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/a_cya" className="hover:brightness-90 transition text-[#1DA1F2]" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/company/australia-china-youth-association/" className="hover:brightness-90 transition text-[#0077B5]" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://weibo.com/acya" className="hover:brightness-90 transition text-[#DF2029]" aria-label="Weibo">
            <FontAwesomeIcon icon={faWeibo} />
          </a>
          <a href="https://www.acya.org.au/" className="hover:brightness-90 transition text-[#09B83E]" aria-label="WeChat">
            <FontAwesomeIcon icon={faWeixin} />
          </a>
          <a href="https://www.acya.org.au" className="hover:brightness-90 transition text-gray-600" aria-label="Website">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </div>
      </div>
    </>


  );
}
