import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { RootState } from "../Redux/store";
import { useSelector } from "react-redux"
import { useEffect, useState } from 'react';
const ItemList: React.FC = () => {
    const role = useSelector(
        (state: RootState) => state.user.role
    );

    let [items, setItems] = useState<string[]>([])
    
    useEffect(() => {
        if (role == "ADMIN") {
            setItems(['Managers', 'Statisctics'])
        } else if (role == "MANAGER") {
            setItems(['Delivery Managers', 'Drivers', 'Statisctics'])
        } else if (role == "DELIVERY_MANAGER") {
            setItems(['Deliveries', 'Statisctics'])
        } else if (role == "DRIVER") {
            setItems(['Deliveries', 'Statisctics'])
        }
    }, [role]);

    return <List>
        {items.map((text: string, index: number) => (
            <ListItem button key={index} onClick={() => console.log(index)}>

                <ListItemText primary={text} />
            </ListItem>
        ))}
    </List>;
};

export default ItemList;
