import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { product2 } from '../data/products';
import { ProductImage } from '../../src/components/ProductImage';

describe('ProductImage', () => {

    test('Debe mostrar el componente correctamente con la imagen personalizada', () => {

        const wrapper = renderer.create(
            <ProductImage img='product.jpg' className='custom-class' />
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });

    test('Debe mostrar el componente con la imagen del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    ( ) => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });

});


