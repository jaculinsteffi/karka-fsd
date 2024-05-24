import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const List = () => {
    const [data, setData] = useState([]);
    const [editedTask, setEditedTask] = useState(null);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedCompleted, setEditedCompleted] = useState(false);

    const fetchJson = async () => {
        try {
            const response = await axios.get('http://localhost:3001/tasks');
            setData(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    const handleEdit = (task) => {
        setEditedTask(task);
        setEditedTitle(task.title);
        setEditedCompleted(task.completed);
    };
    const handleUpdate = async () => {
        try {
            const updatedTask = {
                ...editedTask,
                title: editedTitle,
                completed: editedCompleted,
            };
            await axios.put(`http://localhost:3001/tasks/${editedTask.id}`, updatedTask);
    
            setData(prevData => prevData.map(task => (task.id === editedTask.id ? updatedTask : task)));
    
            setEditedTask(null);
            setEditedTitle('');
            setEditedCompleted(false);
    
        } catch (error) {
            console.log(error);
        }
    };
    

    // const handleUpdate = async () => {
    //     try {
    //         const updatedTask = {
    //             ...editedTask,
    //             title: editedTitle,
    //             completed: editedCompleted,
    //         };

    //         await axios.put(`http://localhost:3001/tasks/${editedTask.id}`, updatedTask);

    //         setData(prevData => prevData.map(task => (task.id === editedTask.id ? updatedTask : task)));

    //         setEditedTask(null);
    //         setEditedTitle('');
    //         setEditedCompleted(false);

    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:3001/tasks/${id}");
            setData(prevData => prevData.filter(task => task.id !== id));
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchJson();
    }, []);

    return (
        <div>
            <h2>Task List</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(task => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.completed ? 'Yes' : 'No'}</td>
                            <td><button onClick={() => handleEdit(task)}>Edit</button></td>
                            <td><button onClick={() => handleDelete(task.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editedTask && (
                <div>
                    <h2>Edit Task</h2>
                    <label>Title:</label>
                    <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
                    <label>Completed:</label>
                    <input type="checkbox" checked={editedCompleted} onChange={(e) => setEditedCompleted(e.target.checked)} />
                    <button onClick={handleUpdate}>Update</button>
                </div>
            )}
        </div>  
    );
};