import style from './storybook.module.scss';

export default {
  title: 'chakra-ui-sass/foundation'
};

const breakPointKey = ['sm', 'md', 'lg', 'xl', '2xl'];

export const Breakpoints = () => {
  return (
    <div>
      <div>Breakpoints</div>
      <div className={style.wrapper}>
        {breakPointKey.map((item) => {
          return (
            <div key={`bp-${item}`} className={`${style[`box_${item}`]}`}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Breakpoints.storyName = 'Breakpoints';
