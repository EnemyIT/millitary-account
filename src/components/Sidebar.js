import React, { useState } from 'react';
import './Sidebar.css';
import logo from './logos/ZCY.png';
import logo1 from './logos/ukr.png';
import Modal from 'react-modal';

const Sidebar = () => {

const [showFileUpload, setShowFileUpload] = useState(false);

  const handleFileUpload = (event) => {
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="sidebar-header">
        <img src={logo} alt="ZCY.png" className="sidebar-logo" />
        <h2>А0707</h2>
      </div>
      <section className="section">
        <nav>
          <ul>
            <li className="section-li">
              <a href="/App.js">Головна</a>
            </li>
            <li className="section-li">
              <a href="#surname" onClick={() => setShowFileUpload(true)}>
                Додати розхід
              </a>
              {showFileUpload && (
                <div>
                  <p>Оберіть файл який бажаєте додати</p>
                  <input type="file" onChange={handleFileUpload} />
                  <button onClick={() => setShowFileUpload(false)}>Закрити</button>
                </div>
              )}
            </li>
            <li className="section-li">
              <a href="#age" onClick={openModal}>Ввести ОШС</a>
            </li>
            <li className="section-li">
              <a href="./texnika.js">Список техніки</a>
            </li>
          </ul>
        </nav>
      </section>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>Закрыть</button>
      </Modal>
    </div>
  );
};

export default Sidebar;
