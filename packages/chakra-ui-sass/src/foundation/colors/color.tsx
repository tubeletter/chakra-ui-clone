import styles from '../storybook.module.scss';

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
      {title !== '' && <h3 className="font-sm-lg">{title + alpha}</h3>}
      {color !== '' && (
        <ul className={styles.color_list}>
          {isType.map((depth: any, index: any) => {
            let colorType = colorSplit[index];
            let colorName = isOnly !== true ? color + ' ' + depth : depth.trim();
            let colorClass = isOnly !== true ? `${color}-${depth}` : colorType?.trim();
            console.log(depth);

            return (
              <li key={index}>
                <div className={styles.color_chip}>
                  <span className={`${styles.color} bg-${colorClass}`}></span>
                  <span>
                    <p className={styles.name}>{colorName}</p>
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
