import { Element4thContactTypes, Element4thSocialTypes, ElementDataTypes } from '../ComponentTypes/ComponentsType';
import { MdPhoneInTalk } from 'react-icons/md';
import { RiMailFill } from 'react-icons/ri';
import facebook from '../../assets/SVG/facebook.svg';
import twitter from '../../assets/SVG/twitter.svg';
import linkedin from '../../assets/SVG/linkedin.svg';
import instagram from '../../assets/SVG/instagram.svg';

export const Element2ndData: ElementDataTypes[] = [
  {
    link: '/',
    text: 'About the Community',
    _id: 'E21'
  },
  {
    link: '/',
    text: 'The Healing Center',
    _id: 'E22'
  },
  {
    link: '/',
    text: 'Freedom OR Festival (2023)',
    _id: 'E23'
  },
  {
    link: '/',
    text: 'FAQ',
    _id: 'E24'
  }
];

export const Element3rdData: ElementDataTypes[] = [
  {
    link: '/',
    text: 'Terms of Service',
    _id: 'E31'
  },
  {
    link: '/',
    text: 'Privacy Policy',
    _id: 'E32'
  }
];

export const Element4thContact: Element4thContactTypes[] = [
  {
    icon: <MdPhoneInTalk className="text-2xl" />,
    text: '240-247-1299',
    link: 'tel:+240-247-1299',
    _id: 'E411'
  },
  {
    icon: <RiMailFill className="text-2xl" />,
    text: 'example@domain.com',
    link: 'mailto:example@domain.com',
    _id: 'E412'
  }
];

export const Element4thSocial: Element4thSocialTypes[] = [
  {
    icon: facebook,
    link: '/',
    alt: 'Facebook',
    _id: 'E421'
  },
  {
    icon: twitter,
    link: '/',
    alt: 'Twitter',
    _id: 'E422'
  },
  {
    icon: linkedin,
    link: '/',
    alt: 'Linkedin',
    _id: 'E423'
  },
  {
    icon: instagram,
    link: '/',
    alt: 'Instagram',
    _id: 'E424'
  }
];
