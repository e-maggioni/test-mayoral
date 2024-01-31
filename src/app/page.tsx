import classes from "./page.module.css";
import Item from "components/item/Item";
import OrderField from "components/orderField/OrderField";
import SearchField from 'components/searchField/SearchField';

const Home = () => {
  return (
    <main className={classes.container}>
          <div className={classes.topbar}><OrderField /><SearchField /></div>
          <section className={classes.itemsContainer}>
              <Item idProd="1" nameProd="Polo manga larga estampa" imgName="polo1.png" price={15} moreColors  />
              <Item idProd="2" nameProd="Polo manga larga bandas" imgName="polo2.png" price={30} moreColors={false} discount={20}  />
              <Item idProd="3" nameProd="Polo manga larga estampa" imgName="polo3.png" price={15} moreColors={false}  />
              <Item idProd="4" nameProd="Polo manga larga bandas" imgName="polo4.png" price={30} moreColors={false} discount={20}  />
              <Item idProd="5" nameProd="Polo manga larga estampa" imgName="polo5.png" price={15} moreColors  />
              <Item idProd="6" nameProd="Polo manga larga bandas" imgName="polo1.png" price={30} moreColors discount={20}  />
              <Item idProd="7" nameProd="Polo manga larga estampa" imgName="polo2.png" price={15} moreColors  />
              <Item idProd="8" nameProd="Polo manga larga bandas" imgName="polo3.png" price={30} moreColors={false} discount={20}  />
          </section>
    </main>
  );
}

export default Home;