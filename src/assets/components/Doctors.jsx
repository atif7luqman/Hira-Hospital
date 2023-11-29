import { Row, Col, Card, Button } from 'antd';
import Maran from '../images/Maran-img.png';
import Suganthi from '../images/Suganthi-img.png';
import John from '../images/John-img.png';

export default function Doctors() {
  return (
    <div className="text-center mt-5 " style={{ background: 'linear-gradient(to right, #2359F4, #4BC0F2)', paddingTop: '4rem' }}>
        <h2 className="text-white mb-3">Our Dedicated Doctors Team</h2>
        <Row className='justify-content-center pb-5 mb-5'>
            <Col span={8} className='d-flex justify-content-center'>
                <Card
                    hoverable
                    style={{ width: '80%' }}
                    cover={<img alt="example" src={Maran} className='p-5 pb-2'/>}
                >
                    <Row>
                        <Col span={12}>
                        <p className='fs-2' style={{color: '#002B9A'}}><span className='fw-bold'>Dr. Maran</span> Cardiologist</p>
                        </Col>
                        <Col span={12}>
                            <Button style={{background: '#6173ED', color: 'white'}}>View Profile</Button>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col span={8} className='d-flex justify-content-center'>
                <Card 
                    hoverable
                    style={{ width: '80%' }}
                    cover={<img alt="example" src={Suganthi} className='p-5 pb-2'/>}
                >
                    
                    <Row>
                        <Col span={12}>
                        <p className='fs-2' style={{color: '#002B9A'}}><span className='fw-bold'>Dr.Suganthi</span>Pediatrician</p>
                        </Col>
                        <Col span={12}>
                            <Button style={{background: '#6173ED', color: 'white'}}>View Profile</Button>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col span={8} className='d-flex justify-content-center'>
                <Card 
                    hoverable
                    style={{ width: '80%' }}
                    cover={<img alt="example" src={John} className='p-5 pb-2'/>}
                >
                    <Row>
                        <Col span={12}>
                        <p className='fs-2' style={{color: '#002B9A'}}><span className='fw-bold'>Dr. John Durai</span>Psychiatrist</p>
                        </Col>
                        <Col span={12} >
                            <Button style={{background: '#6173ED', color: 'white'}}>View Profile</Button>
                        </Col>
                    </Row>
                    
                </Card>
            </Col>
        </Row>
    </div>
  )
}
