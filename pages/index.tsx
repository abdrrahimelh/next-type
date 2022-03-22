import styles from "../styles/Home.module.css";
import Mynavbar from "../components/navbar";
import ShoppingList from "../components/shoppinglist";
export default function Home(props) {
  return (
    <div className="App">
      <ShoppingList data={props.data}></ShoppingList>
      <h1>hey</h1>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/api/items")
  const data = await res.json()
  console.log(data)

  return {
    props: {data},
    revalidate: 1,

  }
}