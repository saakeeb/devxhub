import { Element4thContact, Element4thSocial } from './FooterData';
import { Element4thContactTypes, Element4thSocialTypes } from '../ComponentTypes/ComponentsType';

const FooterElement4th = () => {
  return (
    <>
      <h3 className="title mb-6 text-xl font-bold text-[#294617]">Terms & Conditions</h3>
      <div className="">
        <ul className="text-[#294617] flex justify-center items-center lg:items-start gap-1 flex-col">
          {Element4thContact.map((data: Element4thContactTypes) => (
            <li key={data._id}>
              <a href={data.link} className="flex justify-center items-center gap-4">
                {data.icon}
                <span className="text-xl">{data.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <ul className="flex justify-center items-center gap-4">
          {Element4thSocial.map((data: Element4thSocialTypes) => (
            <li key={data._id} className="rounded-full w-10">
              <a href={data.link} className="" rel="noopener noreferrer">
                <img src={data.icon} alt={data.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterElement4th;
