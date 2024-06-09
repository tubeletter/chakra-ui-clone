import { StyleBreadCrumb, StyleBreadCrumbLink } from './BreadCrumb.styled';

type BreadCrumbsPageType = {
  title: string;
  href: string;
  current: boolean;
};
type BreadCrumbsVariantType = 'dash' | 'arrow' | 'slash';

export type BreadCrumbsType = {
  variant: BreadCrumbsVariantType;
  pages: BreadCrumbsPageType[];
};

const getVariant = {
  dash: '-',
  slash: '/',
  arrow: '›'
};

const BreadCrumb = ({ pages, variant = 'dash' }: BreadCrumbsType) => {
  return (
    <StyleBreadCrumb>
      {pages.map((item) => (
        <>
          {item.current === false ? (
            <>
              <StyleBreadCrumbLink as="a" href={item.href} title={item.title}>
                {item.title}
              </StyleBreadCrumbLink>
              <span data-separator="true">{getVariant[variant]}</span>
            </>
          ) : (
            <>
              <StyleBreadCrumbLink>{item.title}</StyleBreadCrumbLink>
            </>
          )}
        </>
      ))}
    </StyleBreadCrumb>
  );
};

export default BreadCrumb;
