import { Row, Col, Radio, Button } from 'antd';
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';
import img from '../images/image.png';
import { ArrowRightOutlined } from '@ant-design/icons';

const Book = () => {
  const optionsFor1 = ['Routine Checkup', 'New Patient Visit', 'Specific Concern'];
  const optionsFor2 = ['Pediatric', 'Obstetrics and Gynecology', 'Cardiology', 'Neurology', 'Psychiatry'];

  return (
    <div className="m-5 " style={{ color: '#05226A' }}>
      <Row justify="center">
        <Col span={16}>
          <div className='px-5 mb-5 '>
            <p className='fs-4'>BOOK AN<br/>
            <span className='fw-bold fs-2' style={{ color: '#BE1E31' }}>Appointment</span></p>
          </div>
          <Form>
            <Row>
              <Col span={12}>
                <Form.Group className="mb-3 px-5" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" className="border p-2 rounded-5" />
                </Form.Group>
              </Col>

              <Col span={12}>
                <Form.Group className="mb-3 px-5" controlId="formBasicContactNumber">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control type="number" className="border p-2 rounded-5" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col span={12}>
                <Form.Group className="mb-3 px-5" controlId="formBasicPreferedDate">
                  <Form.Label>Preferred Date</Form.Label>
                  <Form.Control type="date" className="border p-2 px-3 rounded-5" />
                </Form.Group>
              </Col>
              <Col span={12}>
                <Form.Group className="mb-3 px-5" controlId="formBasicPreferedTime">
                  <Form.Label className='m'>Preferred Time</Form.Label>
                  <Form.Control type="Time" className="border p-2 px-3 rounded-5" />
                </Form.Group>
              </Col>
            </Row>

            <div className='px-5'>
              <Form.Group controlId="formBasicQuestion1">
                <Form.Label className="mt-4 fs-5 fw-bold">Reason for Visit</Form.Label>
                <Row>
                  <Col span={24}>
                    <Form.Group controlId="formBasicOptions1">
                      <Radio.Group>
                        {optionsFor1.map((option, index) => (
                          <Radio key={index} value={option}>
                            {option}
                          </Radio>
                        ))}
                      </Radio.Group>
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="formBasicQuestion2">
                <Form.Label className="mt-3 fs-5 fw-bold">Department</Form.Label>
                <Row>
                  <Col span={24}>
                    <Form.Group controlId="formBasicOptions2">
                      <Radio.Group>
                        {optionsFor2.map((option, index) => (
                          <Radio key={index} value={option}>
                            {option}
                          </Radio>
                        ))}
                      </Radio.Group>
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Group>
            </div>

            <Row justify="center">
              <Col span={24}>
              <Button className='text-white m-5 py-4' style={{background: '#BE2E3E', fontSize: '1.5rem', display: 'flex', alignItems: 'center', borderRadius: '1rem'}}>
                Submit <ArrowRightOutlined />
              </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col span={8}>
          <Image src={img} className='pb-0 mb-0' />
        </Col>
      </Row>
    </div>
  );
};

export default Book;
