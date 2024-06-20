import { StyleBreadCrumb, StyleBreadCrumbLink } from './BreadCrumb.styled';

type BreadCrumbsPageType = {
  title: string;
  href: string;
  current: boolean;
};
type BreadCrumbsVariantType = 'dash' | 'arrow' | 'slash';
export type colorSchemeType = 'blue' | 'gray' | 'teal' | 'red' | 'orange' | 'yellow' | 'pink' | 'purple' | 'green';

export type BreadCrumbsType = {
  variant?: BreadCrumbsVariantType;
  pages: BreadCrumbsPageType[];
  $colorScheme?: colorSchemeType;
};

const getVariant = {
  dash: '-',
  slash: '/',
  arrow: '›'
};

const BreadCrumb = ({ pages, variant = 'dash', $colorScheme = 'gray' }: BreadCrumbsType) => {
  return (
    <StyleBreadCrumb $color={$colorScheme}>
      {pages.map((item) => (
        <>
          {item.current === false ? (
            <>
              <StyleBreadCrumbLink as="a" href={item.href} title={item.title} $color={$colorScheme}>
                {item.title}
              </StyleBreadCrumbLink>
              <span data-separator="true">{getVariant[variant]}</span>
            </>
          ) : (
            <>
              <StyleBreadCrumbLink $color={$colorScheme}>{item.title}</StyleBreadCrumbLink>
            </>
          )}
        </>
      ))}
    </StyleBreadCrumb>
  );
};

export default BreadCrumb;
