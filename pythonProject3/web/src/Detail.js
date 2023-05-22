import {useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {Layout,Row,Col, Divider, Rate, Carousel,Image, List,Typography, Button, Modal, Input} from 'antd';
import Maps from "./Map";

const {Content}=Layout;
const {Paragraph,Text}=Typography;
const {TextArea}=Input;


const Detail=({windowHeight}) =>{
    const [searchParams] =useSearchParams();
    return (

    <Content style={{minHeight:windowHeight,marginLeft:"30px",marginTop:"20px"}}>
        <Row>
            <Col span={1} ></Col>
            <Col span={13}><Description/>
                            <Divider>latest comment</Divider>
                            <Comment/>
            </Col>
            <Col span={8} offset={1}><Divider>image share</Divider>
                            <Imgs/>
                            <Divider>location info</Divider>
                            <Maps latlng={{lat:45, lng:145}} zoom={6} />
            </Col>
            <Col span={1} ></Col>
        </Row>
    </Content>
    );

}
// description component
const Description =() =>{
return (
    <div>
    <Row><h1>Test</h1></Row>
    <Row style={{lineHeight:"35px"}}>
        <Col span={6}><Rate disabled defaultValue={4}/></Col>
        <Col span={4}><span> Avg Rating is 4 </span></Col>
        <Col span={6}>Total 1000+ comments </Col>
        <Col span={4}>2023-05-06 </Col>
    </Row>
    <Row style={{marginTop:"10px"}}><h3> Address: vanderbilt university</h3></Row>
    <Row style={{marginTop:"10px"}}><h3> camp description: </h3></Row>
    <Row style={{marginTop:"10px"}}><span>... </span></Row>
    </div>
    );
}


// images component
const imgs=["https://koa.com/blog/images/family-camping-at-sunset.jpg?preset=heroimagecropped","https://eurekacamping.johnsonoutdoors.com/sites/default/files/tent-camping-at-sunset.jpg"];
const Imgs =() =>{

    return (
        <div>
            <Carousel autoplay style={{backgroundColor: `rgba(289,289,289,0.5)`, height:300,textAlign: "center"}}>
            {
                imgs.map((img,idx)=><Image key={idx} height={300} src={img}/>)
            }

            </Carousel>
        </div>
        );
}

// comment component
const comments=[
    {user:"A", stars:4, time:"2023-04-01", desc: "good"},
    {user:"B", stars:3, time:"2023-04-02", desc: "good"},
    {user:"C", stars:3, time:"2023-04-01", desc: "good"},
    {user:"D", stars:2, time:"2023-04-02", desc: "not good"}
];
const Comment =() =>{
    const [coms, setComs]=useState(comments);
    const commentAddEventHandle=()=>{
        console.log(comments);
        const data = comments.map(item=>item);
        setComs(data);
    }

    return (
        <div>
            <List
                header={<ComponentButton addEventCallbackFunc={commentAddEventHandle} />}
                bordered
                size="small"
                dataSource={coms}
                renderItem={(item) =>(
                    <List.Item>
                        <Typography>
                            <Paragraph>
                                <span>user: {item.user}</span>
                                <span style={{marginLeft:"20px"}}>rating: {item.stars}</span>
                                <span style={{marginLeft:"20px"}}>Time: {item.time}</span>
                            </Paragraph>
                            <Text>{item.desc}</Text>
                        </Typography>
                     </List.Item>
                )}


            />
        </div>
        );
}

const ComponentButton= ({addEventCallbackFunc}) => {
    const [show, setShow]=useState(false);
    const [user, setUser]=useState("");
    const [stars, setStars]=useState(0);
    const [desc, setDesc]=useState("")
    const handelShowModal=()=>{
    setUser("")
    setStars(0)
    setDesc("")
    setShow(true);
    }

    const handelCancelModal=()=>{
    setShow(false);
    }

    const handelOkModal=()=>{
    console.log("user:",  user);
    console.log("stars:",  stars);
    console.log("description:", desc);
    comments.push({user:user, stars:stars,time:"2023-05-01",desc:desc});
    addEventCallbackFunc();
    setShow(false);
    }
 //    setShow(true)
    return (
        <div>
            <Button type="primary" size="small" onClick={handelShowModal}>add comment</Button>
            <Modal title="comment" open={show} onOk={handelOkModal} onCancel={handelCancelModal}>
                <Row>
                    <Col span={4}> user name: </Col>
                    <Col span={17}> <Input size="small" value={user} onChange={e=>{e.persist(); setUser(e.target.value)}}   /></Col>
                </Row>
                <Row>
                    <Col span={4}> rating: </Col>
                    <Col span={17}> <Rate value={stars} onChange={setStars} /></Col>
                </Row>
                <Row>
                    <Col span={4}> comments: </Col>
                    <Col span={17}> <TextArea row ={4} value={desc} onChange={e=>{e.persist(); setDesc(e.target.value)}}/></Col>
                </Row>

            </Modal>
        </div>
    );

}

export default Detail;