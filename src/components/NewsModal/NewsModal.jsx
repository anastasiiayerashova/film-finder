import ReactModal from 'react-modal';
ReactModal.setAppElement('#root')
import s from './NewsModal.module.css';

export default function NewsModal({ isOpen, onRequestClose, image }) {
     const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            cursor: 'pointer',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%) scale(1)',
            padding: '0 0 10px 0',
            backgroundColor: 'rgb(252, 244, 244)',
            border: 'none',
            cursor: 'default',
            maxWidth: '900px',
        },
    }
      return (
        <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
                {image &&  
                <>  
                  <img src={image.link} className={s.img} />
                  <div className={s.textDiv}>  
                      <p className={s.text}>{image.text}</p>
                      </div>
                </>
            }
            </ReactModal>
    )
}