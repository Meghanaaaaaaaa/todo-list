import React from "react";
import { useState,useEffect} from "react";
import { RiDeleteBin6Line, RiLeafFill } from "react-icons/ri";
import {MdOutlineAddBox} from "react-icons/md"

const Content = () => {
  const API_URL= "http://localhost:3500/items"
  const [menuList, setMenuList] = useState([]);
  const [newItem, setNewItem] = useState("");
  
  useEffect(()=>{
    const fetchItems =async()=>{
      try{
        const response=await fetch(API_URL);
        const listItems=await response.json();
        console.log(listItems)
        setItems(listItems);
      }catch(err){
        console.log(err.stack)
      }
    }
    (async()=> await fetchItems())();
  },[])
  const handleChange = (e) => {
    setNewItem(e.target.value);
  };
  const addItem = () => {
    setMenuList([...menuList, newItem]);
  };
  const deleteItem = (itemName) => {
    setMenuList(menuList.filter((item) => item != itemName));
  };
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
}
useEffect(()=>{
  console.log('load title')
},[])
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Breakfast",
    },
    {
      id: 2,
      checked: false,
      item: "Lunch",
    },
    {
      id: 3,
      checked: false,
      item: "Dinner",
    },
  ]);
  return (
    <main>
      <div style={{ margintop: "20px" }}>
        <div className="addItem-btn"  >
          <input className="form-control" onChange={handleChange} placeholder="Add Item"></input>
          <div>
            <button class="btn btn-outline-primary" onClick={addItem}>
                <h3><MdOutlineAddBox/></h3></button>
          </div>
        </div>
        <div>
          <div className="list">
            {menuList.map((item) => {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent:'space-between'
                  }}
                >
                  <h3>{item}</h3>
                  <div>
                    <button
                      className="delete-btn"
                      onClick={() => deleteItem(item)}
                    >
                      <h3>
                        <RiDeleteBin6Line />
                      </h3>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ul>
        {items.map((item) => (
          <li style={(item.checked) ? { backgroundColor:'#20c997' } : null} className="item" key={item.id}>
          <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
          />
          <label
              
              
          >{item.item}</label>
          
            
            <div>
             
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
