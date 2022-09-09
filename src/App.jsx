import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AppBar from "components/AppBar";
// import Contacts from "pages/Contacts";
// import Home from "pages/Home";
// import LoginForm from "pages/LoginForm";
// import RegisterForm from "pages/RegisterForm";
import { authOperations } from "redux/auth";

const Home = lazy(() => import('./pages/Home'));
const RegisterForm = lazy(() => import('./pages/RegisterForm'));
const LoginForm = lazy(() => import('./pages/LoginForm'));
const Contacts = lazy(() => import('./pages/Contacts'));


export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      
      <Routes>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={RegisterForm} />
        <Route path='/login' component={LoginForm} />
        <Route path='/contacts' component={Contacts} />
      </Routes>
    </div>
  )
}









// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { updateFiter } from "redux/contacts/contactsActions";
// import { contactsOperations } from "redux/contacts";
// import { addContact } from "redux/contacts/contactsOperations"; 
// import ContactForm from "./components/ContactForm";
// import Filter from "./components/Filter";
// import ContactList from "./components/ContactList";


// export default function App() {

//   const dispatch = useDispatch();
//   const contacts = useSelector(state => state.contacts.entities);
//   const filter = useSelector(state => state.contacts.filter);

//   useEffect(() => {
//     dispatch(contactsOperations.fetchContacts());
//   }, [dispatch]);

//   const formSubmitHandler = data => {

//     const { name, number } = data;

//     const contact = {
//       name,
//       phone: number,
//     }
    
//     const nameExists = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

//     if (nameExists) {
//       alert(`${name} is already in contacts.`)
//       return;
//     }

//     dispatch(addContact(contact));
//   };

//   const changeFilter = event => {
//     dispatch(updateFiter(event.currentTarget.value));
//   };

//   const getFilteredContacts = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter));
//   };

//   return (
//     <div
//         style={{
//           height: '100vh',
//           display: 'grid',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101'
//         }}
//       >
//       <h1>Phonebook</h1>

//         <ContactForm onSubmit={formSubmitHandler} />

//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={changeFilter} />
//         <ContactList contacts={getFilteredContacts()}/>

//       </div>
//   )
// }