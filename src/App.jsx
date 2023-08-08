import Header from "./components/Header";
import ContactList from "./components/ContactList";
import ContactCard from "./components/ContactCard";
import AddContacts from "./components/AddContacts";

const App = () => {
  const contacts = [
    {
      id: "1",
      name: "Bolaji",
      email: "bolaji@gmail.com",
    },
    {
      id: "2",
      name: "Zahra",
      email: "zahra.awoyemi@gmail.com",
    },
  ];
  return (
    <div className="container">
      <Header />
      <AddContacts />
      <ContactList contacts={contacts} />
      <ContactCard />
    </div>
  );
};

export default App;
