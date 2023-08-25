import './Layout.css';
import Menu from '../menu/Menu';
import Footer from '../footer/Footer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import { AddCoupon } from '../addcoupon/AddCoupon';
import { Header } from '../header/Header';
import { CardContainer } from '../cardscontainer/cardConatiner';
import { Register } from '../Register/Register';
import Modal from 'react-modal';
import { Suspense, useState } from 'react';
import { Home } from '../home/home';


export function Layout() {
  const navigate = useNavigate();
  const onChangeComponent = (path: string) => navigate(path);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {

  }


  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '100%',
      left: '1000%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      // transform: 'translate( 0%, 0%)',
    },
  };

  Modal.setAppElement('#root');

  return (
    <section className="layout">
      <header>
        <Header />
      </header>
        
        <aside>
          <Menu />
        </aside>
  
      <main>
       
        <Modal className='modal'
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <Login/>
        </Modal>
        <Routes>
          <Route path="/Login" element={<Login />} /><Route />
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/Coupons' element={<CardContainer />}></Route>
          <Route path='/AddCoupon' element={<AddCoupon />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}
