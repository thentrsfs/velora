import { MenuCategory } from '@/app/types/menu';
import { client } from '@/sanity/lib/client';
import MenuContent from './MenuContent';

export const revalidate = 0;

const Menu = async () => {
	const menuCategories = await client.fetch<MenuCategory[]>(
		`
    *[_type == "category"]{
      _id,
      title,
      "items": *[_type == "menuItem" && references(^._id)]{
        _id,
        name,
        description,
        price
      }
    }
  `,
		{},
		{
			cache: 'no-store',
			next: { revalidate: 0 },
		},
	);
	return <MenuContent menuCategories={menuCategories} />;
};

export default Menu;
