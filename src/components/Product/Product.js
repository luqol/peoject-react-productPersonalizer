import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product =  ({name, title, basePrice, colors, sizes})  => {
  const [currentColor, setCurrentColor] = useState ( colors[0] );
  const [currentSize, setCurrentSize] = useState (sizes[0].name);
 
  const changeSize = e => {
    e.preventDefault();
    setCurrentSize(e.target.innerHTML);
  };
  
  const changeColor = e => {
    e.preventDefault();
    setCurrentColor(e.target.attributes[1].value);
  };

  const getPrice = () => {
    return basePrice + (sizes.find(elem => elem.name === currentSize)).additionalPrice;
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('========');
    console.log('Name: ', title);
    console.log('Price: ', getPrice() + '$');
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm handleSubmit={handleSubmit} sizes={sizes} changeSize={changeSize} changeColor={changeColor} colors={colors} currentSize={currentSize} currentColor={currentColor} />
      </div>
    </article>
  );
};

Product.propTypes = { 
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};


export default Product;