import { Row, Col } from 'antd';
import { CopyrightOutlined,FacebookFilled, InstagramFilled, LinkedinFilled, YoutubeFilled } from '@ant-design/icons';

export default function Footer() {
  return (
    <div className='text-white text-center pt-5' style={{ background: '#002B9A' }}>
      <Row>
        <Col span={8}>       
          <p className='fs-5 p-3'><CopyrightOutlined className='px-3 fs-4'/> Copyright 2023. Kamalesh J. All Rights Reserved. </p>
        </Col>
        <Col span={8} >
          <FacebookFilled className='fs-5 p-1' />
          <YoutubeFilled className='fs-5 p-1' />
          <InstagramFilled className='fs-5 p-1' />
          <LinkedinFilled className='fs-5 p-3 px-1' />
        </Col>
        <Col span={8}>
        <ul  className='p-3 d-flex justify-content-center' style={{listStyle:'none'}}>
          <li className='mx-2'><p>Privacy Policy</p></li>
          <li className='mx-2'>|</li>
          <li className='mx-2'><p>Disclaimer</p></li>
          <li className='mx-2'>|</li>
          <li className='mx-2'><p>Contact Us</p></li>
        </ul>
        </Col>
      </Row>
    </div>
  );
}

{/* <div className='d-flex text-white align-items-center' style={{ background: '#002B9A' }}>
      <Row>
        <Col span={8} className='d-flex align-items-center justify-content-center'>
          <p>Copyright 2023. Kamalesh J. All Rights Reserved. </p>
        </Col>
        <Col span={8} >
          <FacebookFilled style={{ fontSize: '20px' }} />
          <YoutubeFilled style={{ fontSize: '20px' }} />
          <InstagramFilled style={{ fontSize: '20px' }} />
          <LinkedinFilled style={{ fontSize: '20px' }} />
        </Col>
        <Col span={8} className='d-flex align-items-center justify-content-between'>
          <p href="#features" className='text-white d-inline'>
            Privacy Policy
          </p>
          <p href="#pricing" className='text-white d-inline m-2'>|</p>
          <p href="#features" className='text-white d-inline'>
            Disclaimer
          </p>
          <p href="#pricing" className='text-white d-inline'>|</p>
          <p href="#features" className='text-white d-inline'>
            Contact Us
          </p>
        </Col>
      </Row>
    </div> */}