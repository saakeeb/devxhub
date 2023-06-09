import { MdPhoneInTalk } from 'react-icons/md';
import { RiMailFill } from 'react-icons/ri';

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
    </>
  );
};

export default FooterElement4th;
