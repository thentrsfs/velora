import { type SchemaTypeDefinition } from 'sanity'
import { menuItemType } from './menuItem'
import { categoryType } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, menuItemType],
}
