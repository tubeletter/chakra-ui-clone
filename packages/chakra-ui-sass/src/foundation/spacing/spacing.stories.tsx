import style from './spacing.module.scss';

export default {
  title: 'chakra-ui-sass/components/Theme'
};

const spacingKey = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '12',
  '14',
  '16',
  '20',
  '24',
  '28',
  '32',
  '36',
  '40',
  '44',
  '48',
  '52',
  '56',
  '60',
  '64',
  '72',
  '80',
  '96'
];
export const Spacing = () => {
  return (
    <div>
      <div>Spacing</div>
      <div className={`${style.test} mb-2`}>module test(spacing-10)</div>
      <div className={style.wrapper}>
        {spacingKey.map((item) => {
          return (
            <div key={`p-${item}`} className={`p-${item} ${style.box}`}>
              Spacing {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Spacing.storyName = 'Spacing';
