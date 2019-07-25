import React from 'react';
import Card from '../../Component/card';
import {Row, Col } from 'antd';
import Chart from '../Library/Chart';
import Empty from '../../Component/empty';
import Skeleton from '../../Component/skeleton';

import {Statistic, Tag, Icon } from 'antd';


const fontSize = {
   fontSize : '20px' 
}
const tag =  <Tag color="magenta">56</Tag>

class Dashboard extends React.Component {
    render () {
        return (
            <div>
                <h1 style={{fontSize:'30px', color:'blue'}}>DASHBOARD</h1>
                <Row gutter={10}>
                    <Col  span={6}>
                        <Card>
                            <h1 style={fontSize}>Total Feedbacks</h1>
                            
                            <Card>
                            <Statistic
                                title={tag}
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<Icon type="arrow-up" />}
                                suffix="%"/>
                            </Card>
                        </Card>
                    </Col>
                    <Col  span={6}>
                        <Card>
                            <h1 style={fontSize}>Total Customer</h1>

                            <Card>
                            <Statistic
                                title={tag}
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<Icon type="arrow-up" />}
                                suffix="%"/>
                            </Card>
                        </Card>
                        
                    </Col>
                    <Col  span={6}>
                        <Card>
                            <h1 style={fontSize}>Loyalty Program</h1>

                            <Card>
                            <Statistic
                                title={tag}
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<Icon type="arrow-up" />}
                                suffix="%"/>
                            </Card>
                        </Card>
                        
                    </Col>
                    <Col  span={6}>
                        <Card>
                            <h1 style={fontSize}>Campaigns</h1>

                            <Card>
                            <Statistic
                                title={tag}
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<Icon type="arrow-down" />}
                                suffix="%"/>
                            </Card>
                        </Card>
                        
                    </Col>
                </Row>




                <Row gutter={10}>
                    <Col  span={12}>
                        <Card>
                            <h1 style={fontSize}>Customer Satisfaction Score</h1>
                            <Chart/>
                        </Card>
                    </Col>

                    <Col  span={12}>
                        <Card>
                            <h1 style={fontSize}>Customer Retention Score</h1>
                            <Chart/>
                        </Card>    
                    </Col>
                </Row>

                <Row gutter={10}>
                    <Col  span={12}>
                        <Card>
                            <h1 style={fontSize}>Feedback Categories</h1>
                            <Skeleton/>
                            
                        </Card>
                        
                    </Col>

                    <Col  span={12}>
                        <Card>
                            <h1 style={fontSize}>Feedback Categories</h1>
                            <Empty/>
                            
                        </Card>
                        
                    </Col>
                </Row>


                <Row gutter={10}>
                    <Col  span={12}>
                        <Card>
                            <h1 style={fontSize}>Latest Feedbacks</h1>
                            <Chart/>
                        </Card>
                    </Col>

                    <Col  span={12}>
                        <Card>
                            <h1 style={fontSize}>Survey Chart</h1>
                            <Chart/>
                        </Card>    
                    </Col>
                </Row>

                <Row gutter={10}>
                    <Col  span={24}>
                        <Card>
                            <h1 style={fontSize}>Question Categories</h1>
                            <Skeleton/>
                        </Card>
                    </Col>
                </Row>                
            </div>
        )
    }
}

export default Dashboard;