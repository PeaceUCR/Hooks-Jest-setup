import React, {useState} from 'react';

export interface IProps {
    title: string
}

interface Item {
    value: string
}

export const TodoList:React.FC<IProps> = (props) => {
    const [items, setItems] = useState([{value: 'value1'}]);

    const addItem = (item:Item) => {
        setItems([...items, item]);
    }

    const removeItem = (index: number) => {
        const newList = [...items];
        newList.splice(index, 1);
        setItems(newList);
    }

    const handleKenEnter = (e: React.KeyboardEvent) => {
        if (e.keyCode === 13) {
            const target = e.target as HTMLInputElement;
            addItem({value: target.value});
        }
    }

    return <div>
        <p className="title">{props.title}</p>
        <div><input onKeyDown={handleKenEnter}/></div>
        {items.map((item, index) => {
            return <p onClick={() => {removeItem(index)}} key={index}>{item.value}</p>
        })}
    </div>
};

// js
// const TodoList = () => {
//     const [items, setItems] = useState([{value: 'value1'}]);
//
//     const addItem = (item) => {
//         setItems([...items, item]);
//     }
//
//     const removeItem = (index) => {
//         const newList = [...items];
//         newList.splice(index, 1);
//         setItems(newList);
//     }
//
//     const handleKenEnter = (e) => {
//         if (e.keyCode === 13) {
//             addItem({value: e.target.value});
//         }
//     }
//
//     return <div>
//         <div><input onKeyDown={handleKenEnter}/></div>
//         {items.map((item) => {
//             return <p onClick={removeItem}>{item.value}</p>
//         })}
//     </div>
// };

