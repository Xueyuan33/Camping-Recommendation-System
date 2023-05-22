import React ,{useState} from 'react';
import { Layout, List,Card, Rate} from 'antd';
import {Link} from 'react-router-dom';
const {Content} = Layout;
const {Meta}= Card;

const data=[
{id:1,title:"test1",stars:3, addr:"addrtest", desc:"test", imgs:["https://koa.com/blog/images/family-camping-at-sunset.jpg?preset=heroimagecropped"]},
{id:2,title:"test2",stars:4, addr:"addrtest", desc:"test", imgs:["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg/1200px-Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg"]},
{id:3,title:"test3",stars:5, addr:"addrtest", desc:"test", imgs:["https://www.shutterstock.com/image-photo/friends-hikers-sitting-on-bench-260nw-587557163.jpg"]},
{id:4,title:"test4",stars:3, addr:"addrtest", desc:"test", imgs:["https://media.istockphoto.com/id/941906052/photo/tourist-camp-with-fire-tent-and-firewood.jpg?s=612x612&w=0&k=20&c=stTcOYmwwAicKqEknAuTJbxyqmQ5q1GB8R-NyK0gcQA="]},
{id:5,title:"test5",stars:5, addr:"addrtest", desc:"test", imgs:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmiF5NkPfFEpnWdU8XPYQh7Y9gxzuuaHLGYIOT8vn&s"]},
{id:6,title:"test6",stars:3, addr:"addrtest", desc:"test", imgs:["https://eurekacamping.johnsonoutdoors.com/sites/default/files/tent-camping-at-sunset.jpg"]},
{id:7,title:"test7",stars:4, addr:"addrtest", desc:"test", imgs:["https://www.switchbacktravel.com/sites/default/files/images/articles/Camping%20tent%20%28REI%20Co-op%20Base%20Camp%206%29.jpg"]},
{id:8,title:"test8",stars:3, addr:"addrtest", desc:"test", imgs:["https://images.squarespace-cdn.com/content/v1/63354de78c0b1108aecb2d9b/e15e50b4-9c11-4596-be27-05be6887c404/168792566-milky-way-camping-out+%281%29.jpg"]}

];

// function Body({windowHeight}){
const Body= ({windowHeight}) =>{
    return (
            <Content style={{
                    textAlign:'center',
                    minHeight: windowHeight,
            }}>

                <Camps/ >
            </Content>
    );
}

const Camps = () => {
  return (
    <div style={{marginLeft:"30px",marginTop:"20px"}}>
      <List
        grid={{column:4}}
        dataSource={data}
        renderItem={(item)=>(
          <List.Item>
            <Link target ="_blank" to ={{pathname:`/detail`, search:`id=${item.id}`}}>
              <Card
                style={{width:300}}
                cover={<img style={{height:"180px", width:"300px"}} src={item.imgs[0]} />}
              >
                <Rate disabled defaultValue={item.stars}/>
                <Meta title={item.title} description={`${item.desc.substring(0,16)}...`}/>
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
}



export default Body;