import Item from './Item.jsx';

export default function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients?.map((item) => (
          <Item key={item.id} item={item} />  // ✅ `key` should be here
        ))
      )}
    </div>
  );
}
