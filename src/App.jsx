
import PackingList from "./components/PackingList";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Stats from "./components/Stats";
import { useState } from "react";



// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

function App() {

  const [items, setItems] = useState([])
  // const numItems = items.length

  //same
  function handleAddItems(item) {
    setItems((items) => [
      ...items, 
      item
    ]);
  }
  //same
  function handleDeleteItem(id) {
    console.log(id)
    setItems( items => items.filter(item=> item.id !== id))
  }

  function handleToggleItem(id) {
    console.log(id)
    // updating an object in an array
    setItems((items)=> items.map((item)=> (
      item.id === id ? {
        ...item, 
        packed: !item.packed
      } : item
    )))
    // items.map((item)=> {
    //   (item.id === id ? {
    //     ...item, 
    //     packed: !item.packed
    //   } : item)
    // })
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />      
      <Stats items={items}/>
    </div>
  );
}

export default App;