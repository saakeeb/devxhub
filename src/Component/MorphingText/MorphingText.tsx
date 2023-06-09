import { useEffect, useRef } from 'react';
import { MorphingTextProps } from '../ComponentTypes/ComponentsType';

const MorphingText = ({ textList }: MorphingTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const elts = {
      text1: text1Ref.current,
      text2: text2Ref.current
    };

    const morphTime = 1;
    const cooldownTime = 0.25;

    let textIndex: number = textList.length - 1;
    let time: Date = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    };

    const setMorph = (fraction: number) => {
      if (elts.text2) {
        elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      }

      fraction = 1 - fraction;

      if (elts.text1) {
        elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
        elts.text1.textContent = textList[textIndex % textList.length];
      }

      if (elts.text2) {
        elts.text2.textContent = textList[(textIndex + 1) % textList.length];
      }
    };

    const doCooldown = () => {
      morph = 0;
      if (elts.text2) {
        elts.text2.style.filter = '';
        elts.text2.style.opacity = '100%';
      }
      if (elts.text1) {
        elts.text1.style.filter = '';
        elts.text1.style.opacity = '0%';
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);

      const newTime: Date = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    };

    animate();
  }, [textList]);

  return (
    <>
      <div
        id="container"
        ref={containerRef}
        className="filter-blur-06
         absolute lg:text-right m-auto z-20  py-4 font-raleway top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
      >
        <span
          id="text1"
          ref={text1Ref}
          className="lg:text-right absolute inline-block lg:text-[72px] text-[40px] text-color-[#2e5b1f] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></span>
        <span
          id="text2"
          ref={text2Ref}
          className="lg:text-right absolute inline-block lg:text-[72px] text-[40px] text-color-[#2e5b1f] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></span>
      </div>
      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default MorphingText;
