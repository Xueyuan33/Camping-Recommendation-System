import React,{useState} from 'react';
import { Layout,Menu} from 'antd';
import NewButton from './NewButton'
const {Header} = Layout;


function Head(){

    const [menus, setMenus]= useState([ {title:"Campgrounds", path:"/"}, {title:"Menu",path:"/"},{title:"About",path:"/"} ]);
    return (
            <Header style={{
                    // textAlign: 'center',
                    // color:'#fff',
                    // height:64,
//                    paddingInline:50,
//                    lineHeight:'64px',
                    // backgroundColor:'#7dbcea'
                    backgroundColor:"rgba(255, 0, 5, 0.66)"
            }}>
                 <div style={{
                    color:"white",fontSize:"22px",float:"left",width:"120px",display:"block",textAlign: "left", marginLeft: "-30px"
                }}>
                    WorldCamping
                </div>

                <div style={{
                    marginLeft:"50px",
                    float:"left",
                    display:"block",
                    width:"400px"
                }}>
                    <Menu style={{
                        backgroundColor:"transparent",
                        // .55 means transparency
                        color: "rgba(255,255,255,.55)",
                        marginLeft: "10px"
                    }}
                    mode="horizontal"
                    // default select "Campgrounds" every time refresh the website
                    defaultSelectedKeys={['Campgrounds']}
                    items={menus.map((item)=>{
                      const key=item.title;
                      return {key, label: `${item.title}`, path: item.path};
                    })}>
                    </Menu>
                </div>

                <NewButton />

            </Header>

    );
}


export default Head;