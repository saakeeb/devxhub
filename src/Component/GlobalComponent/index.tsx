import HideComponentFromDevTools from './HideComponentFromDevTools';
import Footer from '../Footer/Footer';
import ScrollButton from '../ScrollButton/ScrollButton';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import ValuesCommunity from '../ValuesCommunity/ValuesCommunityComponent';

export const VideoPlayerComponent = HideComponentFromDevTools(VideoPlayer);
export const ScrollButtonComponent = HideComponentFromDevTools(ScrollButton);
export const ValuesCommunityComponent = HideComponentFromDevTools(ValuesCommunity);
export const FooterComponent = HideComponentFromDevTools(Footer);
