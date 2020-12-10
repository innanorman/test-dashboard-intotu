import React, {useState} from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import ShipmentService from '../services/shipments.services';
import '../custom.css';


function Pengiriman() {
  const [senderName, setSenderName] = useState(" ");
  const [senderEmail, setSenderEmail] = useState('');
  const [senderAddress, setSenderAddress] = useState('');

  const [receiverName, setReceiverName] = useState('');
  const [receiverEmail, setReceiverEmail] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');

  const [goodsDetail, setGoodsDetail] = useState('');
  const [weightInKilo, setWeightInKilo] = useState('');
  const [volumeInCBM, setVolumeInCBM] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const [succesMessage, setSuccessMessage] = useState('')
  const [show, setShow] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(senderName || senderEmail || senderAddress || receiverName || receiverEmail || receiverAddress || weightInKilo || volumeInCBM === ''){
      setError(!error)
      setErrorMessage('data harus diisi')
    }

    const dataSubmit = {
      'senderName' : senderName,
      'senderEmail' : senderEmail,
      'senderAddress' : senderAddress,
      'receiverName' : receiverName,
      'receiverEmail' : receiverEmail,
      'receiverAddress' : receiverAddress,
      'goodsDetail' : goodsDetail,
      'weightInKilo' : weightInKilo,
      'volumeInCBM' : volumeInCBM
    }

    
    ShipmentService.postShipments(dataSubmit).then(
      () => {
        setSuccessMessage('Berhasil');
        window.location.reload();
      },
      (error) => {
        const resMessage = (error.response && error.response.data && error.response.data.message || error.message || error.toString()) 
      }
    )
  }

  return (
    <div className="shipment">
      <Container>
        {succesMessage ?
          <Alert variant="success" className="notif" show={show} onClose={() => setShow(false)}>
            <p>{succesMessage}</p>
          </Alert> : ''
        }
        
        <Row>
          <Form className="data-form" onSubmit={handleSubmit}>
            <div className="title-form">Pengirim</div>
            <Container className="left-padding">
              <Form.Group as={Row}>
                <Form.Label column md={2}>Nama</Form.Label>
                <Col md={10}>
                  <Form.Control 
                    type="text" 
                    placeholder="Nama"  
                    name="senderName"
                    value={senderName} 
                    onChange={e => setSenderName(e.target.value)}
                  />
                </Col>
                  {error ? <p className="text-error">{errorMessage}</p> : ''}
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column md={2}>Email</Form.Label>
                <Col md={10}>
                  <Form.Control 
                    type="email" 
                    placeholder="Email"
                    name="senderEmail"
                    value={senderEmail}
                    onChange={e => setSenderEmail(e.target.value)}
                    />
                </Col>
                {error ? <p className="text-error">{errorMessage}</p> : ''}
              </Form.Group>
   
              <Form.Group as={Row}>
                <Form.Label column md={2}>Alamat</Form.Label>
                <Col md={10}>
                  <Form.Control 
                    type="text" 
                    placeholder="Alamat"
                    name="senderAddress"
                    value={senderAddress}
                    onChange={e => setSenderAddress(e.target.value)}
                  />
                </Col>
                {error ? <p className="text-error">{errorMessage}</p> : ''}
              </Form.Group>
            </Container>

            <div className="title-form">Penerima</div>
            <Container className="left-padding">
              <Form.Group as={Row}>
                <Form.Label column md={2}>Nama</Form.Label>
                <Col md={10}>
                  <Form.Control 
                    type="text" 
                    placeholder="Nama"
                    name="receiverName"
                    value={receiverName} 
                    onChange={e => setReceiverName(e.target.value)}
                  />
                </Col>
                {error ? <p className="text-error">{errorMessage}</p> : ''}
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column md={2}>Email</Form.Label>
                <Col md={10}>
                  <Form.Control 
                    type="email" 
                    placeholder="Email"
                    name="receiverEmail"
                    value={receiverEmail} 
                    onChange={e => setReceiverEmail(e.target.value)}
                  />
                </Col>
                {error ? <p className="text-error">{errorMessage}</p> : ''}
              </Form.Group>
   
              <Form.Group as={Row}>
                <Form.Label column md={2}>Alamat</Form.Label>
                <Col md={10}>
                  <Form.Control 
                    type="text" 
                    placeholder="Alamat"
                    name="receiverAddress"
                    value={receiverAddress} 
                    onChange={e => setReceiverAddress(e.target.value)}
                  />
                </Col>
                {error ? <p className="text-error">{errorMessage}</p> : ''}
              </Form.Group>
            </Container>

            <div className="title-form">Muatan</div>
            <Container className="left-padding">
              <Form.Group as={Row}>
                <Form.Label column md={2}>Deskripsi</Form.Label>
                <Col md={10}>
                  <Form.Control 
                    type="text" 
                    placeholder="Nama"
                    name="goodsDetail"
                    value={goodsDetail} 
                    onChange={e => setGoodsDetail(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column md={2}>Berat</Form.Label>
                <Col md={10}>
                  <Form.Control 
                    type="text" 
                    placeholder="Kg"
                    name="weightInKilo"
                    value={weightInKilo} 
                    onChange={e => setWeightInKilo(e.target.value)}
                  />
                </Col>
                {error ? <p className="text-error">{errorMessage}</p> : ''}
              </Form.Group>
   
              <Form.Group as={Row}>
                <Form.Label column md={2}>Volume</Form.Label>
                <Col md={10}>
                  <Form.Control 
                    type="text" 
                    placeholder="m3"
                    name="volumeInCBM"
                    value={volumeInCBM} 
                    onChange={e => setVolumeInCBM(e.target.value)}
                  />
                </Col>
                {error ? <p className="text-error">{errorMessage}</p> : ''}
              </Form.Group>
            </Container>
          </Form>
          <Button type="submit" className="button-form-primary" onClick={handleSubmit}>Submit</Button>
        </Row>
      </Container>
      
    </div>
  )
}

export default Pengiriman

