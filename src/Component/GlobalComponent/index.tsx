import HideComponents from './HideComponent';
import Footer from '../Footer/Footer';
import ScrollButton from '../ScrollButton/ScrollButton';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import ValuesCommunity from '../ValuesCommunity/ValuesCommunityComponent';

export const VideoPlayerComponent = HideComponents(VideoPlayer);
export const ScrollButtonComponent = HideComponents(ScrollButton);
export const ValuesCommunityComponent = HideComponents(ValuesCommunity);
export const FooterComponent = HideComponents(Footer);
