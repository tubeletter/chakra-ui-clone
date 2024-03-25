import { Typography } from './Typography';
import styles from '../storybook.module.scss';

export default {
  title: 'chakra-ui-sass/components/Theme'
};

export const TypographyType = () => {
  return (
    <div className={`${styles.typography_area} ${styles.storybook_content}`}>
      <h2 className="font-lg-lg">Typography</h2>
      <Typography title="Heading Large" type="heading" size="large" />
      <Typography title="Heading Small" type="heading" size="small" />
      <Typography title="Text" type="text" />
    </div>
  );
};

TypographyType.storyName = 'Typography';
