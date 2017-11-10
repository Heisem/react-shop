// @flow
import * as React from 'react';
import Item from './Item';
import { type Product } from '../types';

const Grid = ({
  products,
  selectedCategory,
}: {
  products: Product[],
  selectedCategory: ?number,
}) => (
  <div>
    {products
        .filter(product => !selectedCategory || product.categoryId === selectedCategory)
        .map(product => <Item key={product.id} product={product} />)}
  </div>
);

export default Grid;
