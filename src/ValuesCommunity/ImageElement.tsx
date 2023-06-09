import { ImageElementProps } from '../Component/ComponentTypes/ComponentsType';

const ImageElement = ({ imageDesk, imageMob, text }: ImageElementProps) => {
  return (
    <>
      <img src={imageDesk} alt="Community Growth" className="h-full w-full lg:block hidden object-cover" />
      <img src={imageMob} alt="Community Growth" className="h-full w-full lg:hidden block object-cover" />
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">{text}</p>
    </>
  );
};

export default ImageElement;
