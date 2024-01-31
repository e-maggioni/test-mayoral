import classes from "./Item.module.css";
import { ItemProps } from 'utilities/types';
import Button from '@mui/material/Button';

const Item = ({idProd, nameProd, imgName, price, moreColors, discount }: ItemProps) => {
    return(
        <div className={classes.container}>
           <figure>
             <img src={`/images/${imgName}`} alt="Product image" />
             <figcaption>{nameProd}</figcaption>
           </figure>
           <span className={(discount) ? classes.priceDiscounted : classes.price }>{price} €</span>
           {(discount) && <span className={classes.priceDiscountedRed}>{price} € (-{discount}%)</span>}
           {(moreColors) && <p>mas colores</p>}
           <Button variant="contained">AÑADIR</Button>
        </div>
  );
}

export default Item;