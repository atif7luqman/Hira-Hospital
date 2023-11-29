import { Row, Col, Card } from 'antd';
import EmeIcon from '../images/emergency-img.png';
import PedIcon from '../images/pediatrics-img.png';
import ObsIcon from '../images/gynecology-img.png';
import CarIcon from '../images/cardiology-img.png';
import NeuIcon from '../images/neurology-img.png';
import PsyIcon from '../images/pyschiatry-img.png';

export default function Departments() {
  return (
    <div className="text-center" style={{ background: 'linear-gradient(to right, #4BC0F2, #2359F4)', paddingTop: '4rem' }}>
      <h2 className="fw-bold fs-1 text-white  p-3">Departments</h2>

      <Row className='d-flex align-items-center justify-content-center mt-5 pt-5 pb-4' >
        <Col span={4} className="d-flex justify-content-center">
          <Card className='p-5 pb-2'
            hoverable
            style={{ width: '80%' }}
            cover={<img alt="example" src={EmeIcon} />}
          >
            <p className='fs-2' style={{color: '#002B9A'}}>Emergency Department</p>
          </Card>
        </Col>
        <Col span={4} className="d-flex justify-content-center">
          <Card className='p-5 pb-2'
            hoverable
            style={{ width: '80%' }}
            cover={<img alt="example" src={PedIcon} />}
          >
            <p className='fs-2' style={{color: '#002B9A'}}>Peduatruc Department</p>
          </Card>
        </Col>
        <Col span={4} className="d-flex justify-content-center">
          <Card
            hoverable
            style={{ width: '80%' }}
            cover={<img alt="example" src={ObsIcon}  className='p-5 pb-2'/>}
          >
            <p className='fs-2' style={{color: '#002B9A'}}>Obstetrics and Gynecology Department</p>
          </Card>
        </Col>
        <Col span={4} className="d-flex justify-content-center">
          <Card className='p-5 pb-2'
            hoverable
            style={{ width: '80%' }}
            cover={<img alt="example" src={CarIcon} />}
          >
            <p className='fs-2' style={{color: '#002B9A'}}>Cardiology Department</p>
          </Card>
        </Col>
        <Col span={4} className="d-flex justify-content-center">
          <Card className='p-5 pb-2'
            hoverable
            style={{ width: '80%' }}
            cover={<img alt="example" src={NeuIcon} />}
          >
            <p className='fs-2' style={{color: '#002B9A'}}>Neurology Department</p>
          </Card>
        </Col>
        <Col span={4} className="d-flex justify-content-center">
          <Card className='p-5 pb-2'
            hoverable
            style={{ width: '80%' }}
            cover={<img alt="example" src={PsyIcon} />}
          >
            <p className='fs-2' style={{color: '#002B9A'}}>Psychiatry Department</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
