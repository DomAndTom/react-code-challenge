import SearchContextProvider from "./contexts/search";
import Header from "./components/Header";
import Content from "./components/Content";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <SearchContextProvider>
        <Content />
      </SearchContextProvider>
    </div>
  );
}
