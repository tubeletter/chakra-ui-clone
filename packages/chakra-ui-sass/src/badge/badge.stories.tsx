import styles from '../foundation/stories/storybook.module.scss';

export default {
  title: 'chakra-ui-sass/Bage'
};

const badgeKey = ['gray', 'blue', 'teal', 'green', 'red', 'purple', 'pink', 'orange'];

export const BadgeType = () => {
  return (
    <div className={`${styles.storybook_content}`}>
      <h2 className="font-lg-lg">Badge</h2>
      <div>
        {badgeKey.map((color, index) => {
          return (
            <span className={`badge-${color}`} key={index}>
              BADGE
            </span>
          );
        })}
      </div>

      <h3 className="font-sm-lg">Subtle</h3>
      <div>
        {badgeKey.map((color, index) => {
          return (
            <span className={`badge-subtle-${color}`} key={index}>
              BADGE
            </span>
          );
        })}
      </div>

      <h3 className="font-sm-lg">Outline</h3>
      <div>
        {badgeKey.map((color, index) => {
          return (
            <span className={`badge-outline-${color}`} key={index}>
              BADGE
            </span>
          );
        })}
      </div>
    </div>
  );
};

BadgeType.storyName = 'Badge';
