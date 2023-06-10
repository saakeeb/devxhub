import { ElementDataTypes } from "../ComponentTypes/ComponentsType";
import { Element3rdData } from "./FooterData";

const FooterElement3rd = () => {
  return (
    <>
      <h3 className="title mb-6 text-xl font-bold text-[#294617]">Terms & Conditions</h3>
      <div className="">
        <ul className="text-[#e4801d]">
          {Element3rdData.map((data:ElementDataTypes) => (
            <li key={data._id}>
              <a href={data.link}>{data.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterElement3rd;
