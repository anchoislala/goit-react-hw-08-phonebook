import axios from "axios";

axios.defaults.baseURL = 'https://630fca12498924524a95b62d.mockapi.io'

export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
};

export async function addContact(contact) {
    const { data } = await axios.post('/contacts', contact);
     return data;
};

export async function deleteContact(id) {
    await axios.delete(`/contacts/${id}`)
    return id;
};