import { Card, Col, Row } from 'antd';
import { Image } from 'react-bootstrap';
import Icon from '../images/valueicon.png'
import ResIcon from '../images/respect.png'
import ExceIcon from '../images/excellence.png'
import TeamIcon from '../images/teamwork.png'
import CompIcon from '../images/compassion.png'
import InteIcon from '../images/integrity.png'


export default function Values() {
  return (
    <div>
        <h2 className="text-center fs-1 fw-bold mt-5 pt-3 pb-5" style={{color: '#002B9A'}}>Our Values </h2>
    <Row className='m-5 p-5 mb-0'>
        <Col span={8} className="d-flex justify-content-center">
            <Card title={ <div> <Image src={ResIcon} style={{margin: '15px'}} /> Respect</div>} bordered={false} headStyle={{ background: '#1890ff', color: '#fff', fontSize: '2rem'}} style={{width:'80%', fontSize: '1.5rem'}}>
                We treat all individuals with respect and dignity.
                We believe that every person deserves to be treated with compassion and kindness 
            </Card>
        </Col>
        <Col xs={8} className="d-flex justify-content-center">
            <Image src={Icon} alt="Your Image" className="img-fluid" />
        </Col>
        <Col span={8} className="d-flex justify-content-center">
            <Card title={ <div> <Image src={ExceIcon} style={{margin: '15px'}} /> Excellence</div>} bordered={false} headStyle={{ background: '#1890ff', color: '#fff', fontSize: '2rem'}} style={{width:'80%', fontSize: '1.5rem'}}>
                We are committed to providing excelllent care and services to our patients
            </Card>
        </Col>
    </Row>
    <Row className='m-5 mt-0 p-5 pt-0'>
        <Col span={8} className="d-flex justify-content-center">
            <Card title={ <div> <Image src={TeamIcon} style={{margin: '15px'}} /> Teamwork</div>} bordered={false} headStyle={{ background: '#1890ff', color: '#fff', fontSize: '2rem'}} style={{width:'80%', fontSize: '1.5rem'}}>
                We believe in working collaboratively with our team  members and other healthcare provide effective care to our patients
            </Card>
        </Col>
        <Col span={8} className="d-flex justify-content-center">
            <Card title={ <div> <Image src={CompIcon} style={{margin: '15px'}} /> Compassion</div>} bordered={false} headStyle={{ background: '#1890ff', color: '#fff', fontSize: '2rem' }} style={{width:'80%', fontSize: '1.5rem'}}>
                We strive to create a welcoming and supportive environment that puts our patient ease.
            </Card>
        </Col>
        
        <Col span={8} className="d-flex justify-content-center">
            <Card title={ <div> <Image src={InteIcon} style={{margin: '15px'}} /> Integrity</div>} bordered={false} headStyle={{ background: '#1890ff', color: '#fff', fontSize: '2rem' }} style={{width:'80%', fontSize: '1.5rem'}}>
                We believe in practicing medicine with integrity and honesty. We are  always put our patient interest first
            </Card>
        </Col>
    </Row>
    </div>
  )
}
