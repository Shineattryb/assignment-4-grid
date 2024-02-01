import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Content1 from './components/content1';
import Content2 from './components/content2';
import Content3 from './components/content3';
import Footer from './components/footer';
function App() {
  return (
   <>
   <div className='container'>
<Header />
{/* <div className='main-section'> */}
<Sidebar className='sidebar'/>
{/* <div className='content'> */}
<Content1  classname='content1'/>

{/* <div className='content-gap'> */}
<Content2 text="Content2" />
<Content3 />
{/* </div>
</div>
</div> */}
<Footer className='footer'/>
   </div>
   </>
  );
}

export default App;
