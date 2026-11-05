import Header from './Header';
import Student from './Student';
import Counter from './Counter';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <h1>Klasslista</h1>
      <Student name="Elias" program="Teknik" />
      <Student name="Anton" program="Teknik" />
      <Student name="Emil" program="El och energi" />
      <Student name="Henry" program="El och energi" />
      <Student name="John" program="Teknik" />

      <Counter /><Counter />
      <Footer year="2026" />
    </div>
  );
}

export default App;
