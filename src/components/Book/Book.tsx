import React, { useState } from 'react';
import styles from './Book.module.css';
import Modal from 'react-modal';


interface Props {
    book: any
}

const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

export const Book: React.FunctionComponent<Props> = ({ book }): JSX.Element => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    return (
        <>
            <div className={styles.card} onClick={() => setIsModalOpen(true)}>
                <img src={`http://covers.openlibrary.org/b/oclc/${book.oclc}-S.jpg`} alt="thumbnail"/>
                <div className={styles.card_text}>
                    <h3>{book.title}</h3>
                    <span>{Array.isArray(book.author_name) ? book.author_name[0] : book.author_name}</span>
                </div> 
            </div>
            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} style={customStyles} ariaHideApp={false}>
                <img src={`http://covers.openlibrary.org/b/oclc/${book.oclc}-M.jpg`} alt="thumbnail"/>
                <h2 className={styles.modal_title}>{book.title}</h2>
                <p className={styles.modal_text}>written by: {Array.isArray(book.author_name) ? book.author_name[0] : book.author_name}</p>
                <p className={styles.modal_text}>publish date: {Array.isArray(book.publish_date) ? book.publish_date[0] : book.publish_date}</p>
                <p className={styles.modal_text}>ISBN: {Array.isArray(book.isbn) ? book.isbn[0] : book.isbn}</p>
            </Modal>
        </>
    )
}
