import "./styles.css";
import Accordion from "./Accordion";

export default function App() {
  const sections = [
    {
      title: "Section 1",
      content: "This is the content for Section 1.",
    },
    {
      title: "Section 2",
      content: "This is the content for Section 2.",
    },
    {
      title: "Section 3",
      content: "This is the content for Section 3.",
    },
  ];

  return (
    <div className="App">
      <h1>Accordion Example</h1>
      <Accordion sections={sections} />
    </div>
  );
}
