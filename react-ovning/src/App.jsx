import Header from "./Header";
import Student from "./Student";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Header />
      <h1>Elever i årskurs 4</h1>
      <Student name="Elias" program="Te" />
      <Student name="Anton" program="Te" />
      <Student name="Henry" program="EE" />
      <Student name="Emil" program="EE" />
      <Student name="John" program="Te" />
      <Counter /><Counter />    
    </div>
  )
}

export default App
