export default {
  title: 'chakra-ui-sass/Foundation/Radius'
};

const radiusKey = ['none', 'sm', 'base', 'lg', 'xl', '2xl', 'full'];

export const Radius = () => {
  return (
    <div>
      <div>Radius 입니다.</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {radiusKey.map((item) => {
          return (
            <div
              key={`border-${item}`}
              className={`border-radius-${item}`}
              style={{ border: `var(--radius-${item}) solid blue` }}
            >
              Radius {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Radius.storyName = 'Radius';
