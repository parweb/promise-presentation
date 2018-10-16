import { yellow } from 'mdx-deck/themes';
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia';

export default {
  ...yellow,
  prism: {
    style: okaidia
  },
  ul: {
    ...yellow.ul,
    listStyle: 'none !important'
  },
  li: {
    ...yellow.li,
    listStyle: 'none !important'
  }
};
