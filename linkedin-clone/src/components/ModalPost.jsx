import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNavUser } from '../redux/slice/NavUserSlice';

function ModalPost({ handleCloseModal, show }) {

  const dispatch = useDispatch();

  const userFetch = useSelector((state) => state.navUser.navUser);
  console.log(userFetch);
  useEffect(() => {
    dispatch(fetchNavUser());
  }, []);

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  return (
    <>
      {userFetch &&
        <Modal show={show} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title className='d-flex gap-2'>
              <div>
                <img
                  className='rounded-circle'
                  src={userFetch.image}
                  alt=""
                  style={{ width: '50px', height: '50px' }} />
              </div>
              <div>
                <h5>{userFetch.name} {userFetch.surname}</h5>
                <h6>Pubblica: <span>Solo veri amici</span></h6>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control
                placeholder='Di cosa vorresti parlare?'
                onChange={handleInputChange}
                as="textarea"
                rows={3}
                value={inputValue} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <div>
              <Button className='btn-secondary text-tertiary'>
                <svg className="text-tertiary" role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="starburst-medium">
                  <use href="#starburst-medium" width="24" height="24"></use>
                </svg>
              </Button>
              <Button> </Button>
              <Button> </Button>
              <Button> </Button>
            </div>
            <div>
              <i class="bi bi-clock"></i>
              <Button
                className={inputValue === '' ? "bg-secondary disabled border-0 rounded-pill" : "bg-primary border-0 rounded-pill"}
                onClick={handleCloseModal}>
                Pubblica
              </Button>
            </div>
          </Modal.Footer>
        </Modal>}
    </>
  );
}

export default ModalPost;