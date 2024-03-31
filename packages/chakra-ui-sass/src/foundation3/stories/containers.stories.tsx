import style from './storybook.module.scss';

export default {
  title: 'chakra-ui-sass/foundation'
};

const containersKey = ['sm', 'md', 'lg', 'xl'];

export const Containers = () => {
  return (
    <div>
      <div>Containers</div>
      <div>
        <div className={style.box_media}>Media Query</div>
      </div>
      <div>
        <div>Container Center</div>
        {containersKey.map((item) => {
          return (
            <div key={`c-${item}`} className={`containers-${item}-center ${style.box}`}>
              {item}
            </div>
          );
        })}
      </div>
      <div>
        <div>Containers Value</div>
        <div className={style.wrapper}>
          {containersKey.map((item) => {
            return (
              <div key={`c-${item}`} className={`containers-${item} ${style.box}`}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Containers.storyName = 'Containers';
