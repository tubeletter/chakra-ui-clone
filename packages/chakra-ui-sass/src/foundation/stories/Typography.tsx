interface TypographyProps {
  title?: string;
  type?: 'heading' | 'text';
  size?: 'large' | 'small';
}

const headingValue = ['4xl', '3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs'];
const textValue = ['6xl', '5xl', '4xl', '3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs'];

export const Typography = ({ title, type = 'heading', size }: TypographyProps) => {
  const text = 'In love with Chakra';
  let value = [];
  let sizeClass = size ? (size == 'large' ? 'lg' : 'sm') : 'txt';

  if (type == 'heading') {
    value = headingValue;
  } else {
    value = textValue;
  }

  return (
    <>
      {title && <h3 className="font-sm-lg">{title}</h3>}
      {value.map((item) => {
        return (
          <p className={`font-${sizeClass}-${item}`}>
            {item} : {text}
          </p>
        );
      })}
    </>
  );
};
