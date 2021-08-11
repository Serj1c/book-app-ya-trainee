import axios from 'axios';

export const fetchBooksByTitle = async (searchValue: string) => {
    const response = await axios.get(`https://openlibrary.org/search.json?title=${searchValue}`);
    return response.data;
};