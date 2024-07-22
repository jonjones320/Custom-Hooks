import { useState } from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";

const useAxios = (baseUrl) => {
    const [cards, setCards] = useState([]);
    
    const addCard = async (moreUrl = "") => {
        const res = await axios.get(`${baseUrl}${moreUrl}`);
        setCards(cards => [...cards, { ...res.data, id: uuid() }]);
    };
  return [cards, addCard];
};

export default useAxios;