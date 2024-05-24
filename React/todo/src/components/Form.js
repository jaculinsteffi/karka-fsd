import React, { useState } from 'react';

const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [isEdit, setIsEdit] = useState(null);

  const handleChange = (event) => { 
    setInputValue(event.target.value);
  };

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = () => {
    if (isEdit === null) {
      setItems([...items, inputValue]);
      setInputValue('');
    } else {
      let editedItems = [...items];
      editedItems[isEdit] = inputValue;
      setItems(editedItems);
      setIsEdit(null);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleEdit = (index) => {
    setIsEdit(index);
    setInputValue(items[index]);
  };

  const handleSearch = () => {
    const filteredItems = items.filter(item =>
      item.toLowerCase().includes(search.toLowerCase())
    );
    return filteredItems;
  };
 
  return (
    <div>

      <div className='div1'>
      <input type='text' value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>{isEdit === null ? "Add" : "Edit"}</button>
      </div>
      <div className='div2'>
        <input type='text' value={search} onChange={handleChangeSearch} />
        <button onClick={handleSearch}>Search</button>
      </div>

      <table className="table" border={1}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {handleSearch().map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;