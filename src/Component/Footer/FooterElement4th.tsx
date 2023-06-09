import { MdPhoneInTalk } from 'react-icons/md';
import { RiMailFill } from 'react-icons/ri';
import facebook from '../../assets/SVG/facebook.svg';
import twitter from '../../assets/SVG/twitter.svg';
import linkedin  from '../../assets/SVG/linkedin.svg';
import instagram from '../../assets/SVG/instagram.svg';

const FooterElement4th = () => {
  return (
    <>
      <h3 className="title mb-6 text-xl font-bold text-[#294617]">Terms & Conditions</h3>
      <div className="">
        <ul className="text-[#294617] flex justify-center items-center lg:items-start gap-1 flex-col">
          <li>
            <a href="tel:+240-247-1299" className="flex justify-center items-center gap-4">
              <MdPhoneInTalk className="text-2xl" />
              <span className="text-xl"> 240-247-1299 </span>
            </a>
          </li>
          <li>
            <a href="mailto:example@domain.com" className="flex justify-center items-center gap-4">
              <RiMailFill className="text-2xl" />
              <span className="text-xl"> example@domain.com </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <ul className="flex justify-center items-center gap-4">
          <li className="rounded-full w-10">
            <a href="/" className="" rel="noopener noreferrer">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li className="rounded-full w-10">
            <a href="/" className="" rel="noopener noreferrer">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li className="rounded-full w-10">
            <a href="/" className="" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li className="rounded-full w-10">
            <a href="/" className="" rel="noopener noreferrer">
              <img src={instagram} alt="instagram" className="w-full rounded-full" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FooterElement4th;
