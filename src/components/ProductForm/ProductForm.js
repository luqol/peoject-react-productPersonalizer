import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OprionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

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

export default ProductForm;