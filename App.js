import './App.css';
import Nav from './components/nav.js';
import Form from './components/form.js';
import Reminder from './components/reminder.js';
import Carousel from './components/carousel.js';
import Footer from './components/footer.js';


function App() {
  return (
    <div>
      <Nav/>
      <Form/>
      <Reminder/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
