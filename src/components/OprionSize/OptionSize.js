import styles from './OptionSize.module.scss';
import shortid from 'shortid';
import clsx from 'clsx';

const OptionSize = ({sizes, changeSize, currentSize}) => {
  return(
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map(size => <li key={shortid()} ><button type="button" onClick={changeSize} className={clsx( (currentSize === size.name) && styles.active)} >{size.name}</button></li>)}
      </ul>
    </div>
  );
};

export default OptionSize;