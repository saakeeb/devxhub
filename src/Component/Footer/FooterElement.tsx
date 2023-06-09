import FooterElement1st from "./FooterElement1st";
import FooterElement2nd from "./FooterElement2nd";
import FooterElement3rd from "./FooterElement3rd";
import FooterElement4th from "./FooterElement4th";

const FooterElement = () => {
  return (
    <>
      <div className="px-8 flex flex-wrap flex-col lg:flex-row items-center lg:items-start text-center lg:text-left space-y-5 lg:space-y-0 justify-between text-lg border-[#112105] border-b py-8">
        <div>
          <FooterElement1st />
        </div>
        <div>
          <FooterElement2nd />
        </div>
        <div>
          <FooterElement3rd />
        </div>
        <div>
          <FooterElement4th />
        </div>
      </div>
    </>
  );
};

export default FooterElement;
