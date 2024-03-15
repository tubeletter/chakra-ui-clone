import styles from './color.module.scss';

const colorDepth = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const colorAlpha = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

interface ColorProps {
  title?: string;
  color?: string;
  isAlpha?: boolean;
  isOnly?: boolean;
}

export const Colors = ({ title = '', color = '', isAlpha = false, isOnly = false, ...props }: ColorProps) => {
  const colorSplit = color.split(',');
  const isType = isOnly == false ? (isAlpha == true ? colorAlpha : colorDepth) : colorSplit;
  const alpha = isAlpha == true ? ' Alpha' : '';

  return (
    <>
      {title !== '' && <h2 className={styles.title}>{title + alpha}</h2>}
      {color !== '' && (
        <ul className={styles.color_list}>
          {isType.map((depth: any, index: any) => {
            let colorClass = isOnly !== true ? color + depth : depth.trim();

            return (
              <li key={index}>
                <div className={styles.color_chip}>
                  <span className={`${styles.color} ${styles[colorClass]}`} id="color"></span>
                  <span>
                    <p className={styles.name}>{colorClass}</p>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
