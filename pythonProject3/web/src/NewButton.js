import React, {useState} from "react";
import PlusOutlined from '@ant-design/icons';
import { Button , Modal,Row, Col, Input,Rate, Upload} from "antd";
import Maps from "./Map"
const {TextArea}=Input;

const getBase64 = (file) => new Promise((resolve, reject)=> {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload= () => resolve(reader.result);
    reader.onerror= (error)=> reject(error);
});

const NewButton= () => {

    const [show, setShow]=useState(false);

    const [maxUploadPicNum]=useState(6);
    const [imagePreviewShow, setImagePreviewShow]=useState(false);
    const [imagePreviewTitle, setImagePreviewTitle]=useState('');
    const [imagePreviewSrc,setImagePreviewSrc] =useState('');

    const [picList, setPicList] = useState([]);

    const handleShowModal =() =>{
        setShow(true);
    }

    const handleOnOk =() => {
        setShow(false);
    }

    const handleOnCancel =() => {
        setShow(false);
    }

    const uploadImagePreviewHandle = async(file) => {
        if(!file.url && !file.preview){
            file.preview =await getBase64(file.originFileObj);
        }
        setImagePreviewSrc(file.url || file.preview);
        setImagePreviewShow(true);
        setImagePreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/')+1));
    }

    const imagePreviewShowCancel= () => {setImagePreviewShow(false);}

    const uploadImageHandle = ({file,fileList, event}) =>{
        setPicList(fileList);
    }


    const UploadButton=(
        <div>
            <PlusOutlined />
            <div style={{marginTop:8}}> Upload
            </div>
        </div>
    )


    return (
        <div style={{float:"right", display:"block", width:"100px"}}>
            <Button  style={{
                backgroundColor:"transparent",
                color:"rgba(255,255,255)"
            }} size="large"  onClick={handleShowModal}>
                New
            </Button>

            <Modal width={"800px"} height={"400px"} title="add place" open={show} onOk={handleOnOk} onCancel={handleOnCancel}>
                <Row><Col span={3}> user name:</Col></Row>
                <Row><Col span={24}> <Input size="small" /> </Col></Row>

                <Row><Col span={3}> title:</Col></Row>
                <Row><Col span={24}> <Input size="small" /> </Col></Row>

                <Row><Col span={3}> rating:</Col></Row>
                <Row><Col span={24}> <Rate /> </Col></Row>

                <Row><Col span={3}> address:</Col></Row>
                <Row><Col span={24}> <Input size="small" /> </Col></Row>

                <Row><Col span={3}> map:</Col></Row>
                <Row><Col span={24}> <Maps latlng={{lat:0, lng:0}} zoom={6} /> </Col></Row>

                <Row><Col span={3}> description:</Col></Row>
                <Row><Col span={24}> <TextArea row={4}/> </Col></Row>

                <Row><Col span={3}> pictures:</Col></Row>
                <Row><Col span={24}>
                    <Upload
                    action=""
                    listType="picture-card"
                    fileList={picList}
                    onPreview={uploadImagePreviewHandle}
                    onChange={uploadImageHandle}
                    >
                    { picList.length >= maxUploadPicNum? null: UploadButton}

                    </Upload>
                </Col></Row>

            </Modal>

            <Modal title={imagePreviewTitle} open={imagePreviewShow} footer={null} onCancel={imagePreviewShowCancel}>
                <img alt="pic" style={{width:'100%'}} src={imagePreviewSrc} />
            </Modal>

        </div>
    );
}

export default NewButton;
