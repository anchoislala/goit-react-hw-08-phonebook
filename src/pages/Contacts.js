import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations } from "redux/contacts";


export default function Contacts(params) {
    const dispatch = useDispatch();
    const isLoadingContacts = useSelector(contactsSelectors.getLoading);

    useEffect(() =>
        dispatch(contactsOperations.fetchContacts()),

        [dispatch]);
    
    return (
        <h1>Contacts</h1>
    )
    
}