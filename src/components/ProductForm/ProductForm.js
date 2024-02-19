import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OprionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = ({handleSubmit, sizes, changeSize, changeColor, colors, currentSize, currentColor}) => {
  return(
    <form onSubmit={handleSubmit}>
          <OptionSize sizes={sizes} changeSize={changeSize} currentSize={currentSize} />
          <OptionColor colors={colors} changeColor={changeColor} currentColor={currentColor} />
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
  );
};

ProductForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  sizes: PropTypes.array.isRequired,
  changeSize: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
};

export default ProductForm;
