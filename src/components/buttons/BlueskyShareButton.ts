import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function blueskyLink(
  url: string,
  {
    title,
    via,
    hashtags = [],
    related = [],
  }: { title?: string; via?: string; hashtags?: string[]; related?: string[] },
) {
  return (
    'https://bsky.app/intent/compose' +
    transformObjectToParams({
      url,
      text: title,
      via,
      hashtags: hashtags.length > 0 ? hashtags.join(',') : undefined,
      related: related.length > 0 ? related.join(',') : undefined,
    })
  );
}

const BlueskyShareButton = createShareButton<{
  title?: string;
  via?: string;
  hashtags?: string[];
  related?: string[];
}>(
  'bluesky',
  blueskyLink,
  (props) => ({
    hashtags: props.hashtags,
    title: props.title,
    via: props.via,
    related: props.related,
  }),
  {
    windowWidth: 550,
    windowHeight: 400,
  },
);

export default BlueskyShareButton;
