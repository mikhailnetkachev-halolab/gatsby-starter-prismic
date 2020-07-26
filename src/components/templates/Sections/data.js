import loadable from '@loadable/component';

const Banner = loadable(() => import(`@organisms/Banner`));
const Blockquote = loadable(() => import(`@organisms/Blockquote`));
const ContactUs = loadable(() => import(`@organisms/ContactUs`));

const components = {
  ['banner']: Banner,
  ['blockquote']: Blockquote,
  ['contact_us']: ContactUs,
};

export { components };
