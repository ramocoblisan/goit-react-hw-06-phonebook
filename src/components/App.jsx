import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import FilterContacts from "./FilterContacts/FilterContacts";
import { getContacts } from "../redux/selectors";
import { useSelector } from "react-redux";


export const App = () => {
  const users = useSelector(getContacts);
  return (
    <>
      <Section title="PhoneBook">
        <ContactForm />
        <FilterContacts />
        <ContactList />
      </Section>
    </>
  );
};