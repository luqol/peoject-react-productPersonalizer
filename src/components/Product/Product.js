import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';
import ProductImage from '../ProductImage/ProductImage';

const Product =  ({name, title, basePrice, colors, sizes})  => {
  const [currentColor, setCurrentColor] = useState ( colors[0] );
  const [currentSize, setCurrentSize] = useState (sizes[0].name);

  const prepareColorName  = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

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
        <form onSubmit={handleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
            {sizes.map(size => <li key={shortid()} ><button type="button" onClick={changeSize} className={clsx( (currentSize === size.name) && styles.active)} >{size.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {colors.map( color => <li key={shortid()}><button type="button" onClick={changeColor} color={color} className={clsx(prepareColorName(color), (currentColor === color) && styles.active)}/></li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
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