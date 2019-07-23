import React from 'react';
import { Route, Link } from 'react-router-dom';

import Dashboard from './Container/Dashboard';
import Employee from './Container/Employee';
import FeedbackForm from './Container/FeedbackForm';
import Feedbacks from './Container/Feedbacks';
import Customers from './Container/Customers';
import AskFeedback from './Container/AskFeedback';
import Stores from './Container/Stores';
import ExportData from './Container/ExportData';
import Report from './Container/Report';
import Campaign from './Container/Campaign';
import PromotionalSms from './Container/PromotionalSms';
import LoyaltyProgram from './Container/LoyaltyProgram';
import ReferallProgram from './Container/ReferallProgram';
import VoucherProgram from './Container/VoucherProgram';
import Testimonial from './Container/Testimonial';



import { Layout, Menu,  Icon  } from 'antd';

const { Header,  Content, Footer, Sider  } = Layout;

class layout extends React.Component {
    state = {
        collapsed: false,
      };
    
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };

    render () {
        return (
            
            <Layout  style={{ minHeight: '100vh' }}>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>

                    </Menu>
                </Header>

                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>


                            <Menu.Item key="1">
                                <Link className="nav-link" to="/">
                                    <Icon type="pie-chart" />
                                        <span>Dashboard</span>
                                </Link>        
                            </Menu.Item>

                            <Menu.Item key="2">
                                <Link className="nav-link" to="/employee/">
                                    <Icon type="team" />
                                    <span>Employee</span>
                                </Link>
                            </Menu.Item>


                            <Menu.Item key="3">
                                <Link className="nav-link" to="/feedback-form/">
                                    <Icon type="unordered-list" />
                                    <span>Feedback form</span>
                                </Link>    
                            </Menu.Item>


                            <Menu.Item key="4">
                                <Link className="nav-link" to="/feedbacks/">
                                    <Icon type="desktop" />
                                    <span>Feedbacks</span>
                                </Link>    
                            </Menu.Item>


                            <Menu.Item key="5">
                                <Link className="nav-link" to="/customers/">
                                    <Icon type="desktop" />
                                    <span>Customers</span>
                                </Link>
                            </Menu.Item>


                            <Menu.Item key="6">
                                <Link className="nav-link" to="/ask-feedback/">
                                    <Icon type="desktop" />
                                    <span>Ask Feedback</span>
                                </Link>    
                            </Menu.Item>


                            <Menu.Item key="7">
                                <Link className="nav-link" to="/stores/">
                                    <Icon type="desktop" />
                                    <span>Stores</span>
                                </Link>    
                            </Menu.Item>


                            <Menu.Item key="8">
                                <Link className="nav-link" to="/export-data/">
                                    <Icon type="desktop" />
                                    <span>Export Data</span>
                                </Link>    
                            </Menu.Item>

                            <Menu.Item key="9">
                                <Link className="nav-link" to="/report/">
                                    <Icon type="desktop" />
                                    <span>Report</span>
                                </Link>    
                            </Menu.Item>

                            <Menu.Item key="10">
                                <Link className="nav-link" to="/campaign/">
                                    <Icon type="desktop" />
                                    <span>Campaign</span>
                                </Link>    
                            </Menu.Item>

                            <Menu.Item key="11">
                                <Link className="nav-link" to="/promotional-sms/">
                                    <Icon type="desktop" />
                                    <span>Promotional Sms</span>
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="12">
                                <Link className="nav-link" to="/loyalty-program/">
                                    <Icon type="desktop" />
                                    <span>Loyalty Program</span>
                                </Link>    
                            </Menu.Item>

                            <Menu.Item key="13">
                                <Link className="nav-link" to="/referall-program/">
                                    <Icon type="desktop" />
                                    <span>ReferallProgram</span>
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="14">
                                <Link className="nav-link" to="/voucher-program/">
                                    <Icon type="desktop" />
                                    <span>Voucher Program</span>
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="15">
                                <Link className="nav-link" to="/testimonial/">
                                    <Icon type="desktop" />
                                    <span>Testimonial</span>
                                </Link>    
                            </Menu.Item>


                        </Menu>
                    </Sider>
                
                    <Layout style={{ padding: '24px 24px' }}>
                        <Content style={{ background: '#fff', padding: 24, margin: 0,minHeight: 280,}}>

                        
                        <Route path="/" exact component={Dashboard}/>  
                        <Route path="/employee/" exact component={Employee}/> 
                        <Route path="/feedback-form/" exact component={FeedbackForm}/> 
                        <Route path="/feedbacks/" exact component={Feedbacks}/> 
                        <Route path="/customers/" exact component={Customers}/> 
                        <Route path="/ask-feedback/" exact component={AskFeedback}/>
                        <Route path="/stores/" exact component={Stores}/> 
                        <Route path="/export-data/" exact component={ExportData}/> 
                        <Route path="/report/" exact component={Report}/> 
                        <Route path="/campaign/" exact component={Campaign}/> 
                        <Route path="/promotional-sms/" exact component={PromotionalSms}/> 
                        <Route path="/loyalty-program/" exact component={LoyaltyProgram}/> 
                        <Route path="/referall-program/" exact component={ReferallProgram}/> 
                        <Route path="/voucher-program/" exact component={VoucherProgram}/> 
                        <Route path="/testimonial/" exact component={Testimonial}/> 

                        </Content>
                        <Footer style={{ textAlign: 'center' }}>FellaFeeds ©2018</Footer>
                    </Layout>

                </Layout>
            </Layout>
        
        )
    };
};

export default layout;