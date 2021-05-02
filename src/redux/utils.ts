import axios from 'axios';

export const fetchBooksByTitle = async (searchValue: string) => {
    const response = await axios.get(`http://openlibrary.org/search.json?title=${searchValue}`)
    console.log(response.data)
    return response.data;
}