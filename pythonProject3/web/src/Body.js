import React ,{useState} from 'react';
import { Layout, List,Card, Rate} from 'antd';
import {Link} from 'react-router-dom';
const {Content} = Layout;
const {Meta}= Card;

const data=[
{title:"test1",stars:3, addr:"addrtest", desc:"test", imgs:["https://koa.com/blog/images/family-camping-at-sunset.jpg?preset=heroimagecropped"]},
{title:"test2",stars:4, addr:"addrtest", desc:"test", imgs:["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg/1200px-Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg"]},
{title:"test3",stars:3, addr:"addrtest", desc:"test", imgs:["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg/1200px-Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg"]},
{title:"test4",stars:3, addr:"addrtest", desc:"test", imgs:["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg/1200px-Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg"]},
{title:"test5",stars:3, addr:"addrtest", desc:"test", imgs:["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg/1200px-Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg"]},
{title:"test6",stars:3, addr:"addrtest", desc:"test", imgs:["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg/1200px-Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg"]},
{title:"test7",stars:3, addr:"addrtest", desc:"test", imgs:["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg/1200px-Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg"]},
{title:"test8",stars:3, addr:"addrtest", desc:"test", imgs:["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg/1200px-Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg"]}

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
            <Link to ={{pathname:`/detail`, search:`id=${item.id}`}}>
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