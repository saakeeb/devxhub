import { ElementDataTypes } from '../ComponentTypes/ComponentsType';
import { Element2ndData } from './FooterData';

const FooterElement2nd = () => {
  return (
    <>
      <h3 className="title mb-6 text-xl font-bold text-[#294617]">Information</h3>
      <div className="">
        <ul className="text-[#e4801d]">
          {Element2ndData.map((data: ElementDataTypes) => (
            <li key={data._id}>
              <a href={data.link}>{data.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterElement2nd;
