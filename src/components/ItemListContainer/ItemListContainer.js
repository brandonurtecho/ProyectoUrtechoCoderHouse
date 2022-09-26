import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <div className="body">
      <h3>{props.greeting}</h3>
    </div>
  );
}

export default ItemListContainer