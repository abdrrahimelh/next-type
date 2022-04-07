import styles from "../styles/Home.module.css";
import Mynavbar from "../components/navbar";
import ShoppingList from "../components/shoppinglist";
export default function Home(props) {
  return (
    <div className="App">
      <ShoppingList data={props.data}></ShoppingList>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/api/items")
  const data = await res.json()

  return {
    props: {data},
    revalidate: 1,

  }
}