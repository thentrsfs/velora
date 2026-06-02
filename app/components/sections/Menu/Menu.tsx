import { MenuCategory } from '@/app/types/menu';
import { client } from '@/sanity/lib/client';
import MenuContent from './MenuContent';

const menuCategories = await client.fetch<MenuCategory[]>(`
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
`);

const Menu = () => {
	return <MenuContent menuCategories={menuCategories} />;
};

export default Menu;
