import styles from "./item.module.css";

export default function Item({ item }) {
  console.log("Image URL: ", `https://spoonacular.com/cdn/ingredients_100x100/${item.image}`);

  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
            alt={item.name}
            onError={() => console.log("Error loading image")}
          />
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
