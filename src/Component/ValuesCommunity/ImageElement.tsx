import { ImageElementProps } from '../ComponentTypes/ComponentsType';

const ImageElement = ({ imageDesk, imageMob, text }: ImageElementProps) => {
  return (
    <>
      <img src={imageDesk} alt="Community Growth desk" className="h-full w-full lg:block hidden object-cover" />
      <img
        src={imageMob}
        alt="Community Growth mob"
        className="h-[180px] w-[400px] lg:hidden block object-cover mx-auto"
      />
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">{text}</p>
    </>
  );
};

export default ImageElement;
