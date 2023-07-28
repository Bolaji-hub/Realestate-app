import Header from "./components/Header";
import ContactList from "./components/ContactList";
import ContactCard from "./components/ContactCard";
import AddContacts from "./components/AddContacts";

const App = () => {
  return (
    <div>
      <Header />
      <AddContacts />
      <ContactList />
      <ContactCard />
    </div>
  );
};

export default App;
