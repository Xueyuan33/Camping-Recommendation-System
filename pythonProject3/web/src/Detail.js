import {useSearchParams} from "react-router-dom";
import {Layout,Row,Col, Divider, Rate} from 'antd';


const {Content}=Layout;

const Detail=({windowHeight}) =>{
    const [searchParams]=useSearchParams();

    return (

    <Content style={{minHeight:windowHeight}}>
        <Row>
            <Col span={14}><Description/>
                            <Divider>latest comment</Divider>
                            <Comment/>
            </Col>
            <Col span={10}><Divider>image share</Divider>
                            <Imgs/>
                            <Divider>location info</Divider>
                            <Maps/>
            </Col>
        </Row>
    </Content>
    );

}
// description component
const Description =() =>{
return (
    <div><h1>Description</h1>
    <Row style={{lineHeight:"35px"}}>
        <Col span={6}><Rate disabled defaultValue={4}/></Col>
        <Col span={4}><span> Avg Rating is 4 </span></Col>
        <Col span={6}>Total 1000 comments </Col>
        <Col span={4}>2023-05-06 </Col>
    </Row>
    <Row><h3> Address: vanderbilt university</h3></Row>
    <Row><h3> camp description</h3></Row>
    <Row><span>... </span></Row>
    </div>
    );
}
// images component
const Imgs =() =>{
return (
    <div>imgs</div>
    );
}

// comment component
const Comment =() =>{
return (
    <div>comments</div>
    );
}
// maps component
const Maps =() =>{
return (
    <div>maps</div>
    );
}

export default Detail;