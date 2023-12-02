import { Row, Col, Button } from 'antd'
import { RightOutlined, PhoneFilled} from '@ant-design/icons';
import { Image } from 'react-bootstrap';
import IconImage from '../images/icon.png'
import DoctorImg from '../images/doctor_home.png'

const App = () => {

  const phoneNumber = "1860-500-1066";
  const emergency = "1066";

  return (
    <div className='home' style={{backgroundColor: '#81BAEE' }}>
      <Row className='text-center text-white align-items- justify-content-end'>
        <div>
        <p className='fs-3 fw-bold p-2 p pb-0 mb-0 mx-3 text-white'>Health + Lifeline</p>

        <p className="border border-light p-1 rounded-5" style={{ display: 'inline-block' }} href={`tel:${phoneNumber}`}><PhoneFilled className='p-1' style={{ transform: 'rotate(90deg)', color:'#002B9A' }} />
          {phoneNumber}
        </p>
        </div>
        <div>
        <p className='fs-3 fw-bold p-2 p pb-0 mb-0 mx-3 text-white'>Emergency</p>

        <p className="border border-light p-1 rounded-5" style={{ display: 'inline-block' }} href={`tel:${emergency}`}><PhoneFilled className='p-1' style={{ transform: 'rotate(90deg)', color:'#002B9A' }} />
          {phoneNumber}
        </p>
        </div>
        <Image src={IconImage} roundedCircle />
      </Row>
      <Row className='m-5 p-5 pb-0 align-items-center'>
        <Col span={12}>
          <h2 className='fs-1 fw-bold pb-3' style={{color: '#002B9A'}}>Your Partner in <br /> Health and Wellness</h2>
          <p className='fs-5 f' style={{color: '#002B9A'}}>
            We are commiteed to providing youwith the best medical <br />
            and healthcare services to help you live healthier and happier
          </p>

          <Button className='text-white mt-5' style={{ height: '4rem', background: '#3A40DF', fontSize: '1.5rem', display: 'flex', alignItems: 'center', borderRadius: '1rem'}}>
            BOOK AN APPOINTMENT <RightOutlined />
          </Button>
        </Col>
        <Col span={12}>
        <Image src={DoctorImg}  className='pb-0 mb-0'/>
        </Col>
      </Row>
    </div>
  );
};

export default App;
