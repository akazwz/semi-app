import React, {Fragment} from 'react';
import {Layout, Button, Toast, Col, Row} from '@douyinfe/semi-ui';
import './App.css'

const App = () => {
    const {Header, Footer, Content} = Layout;
    return (
        <Fragment>
            <Layout>
                <Header>header</Header>
                <Content>
                    <Row type='flex' justify='center' style={{textAlign: 'center'}}>
                        <Col span={12}>
                            <Button onClick={() => Toast.success({content: "Hello Semi!"})}>Hello Semi!</Button>

                        </Col>
                        <Col span={12}>
                            <Button onClick={() => {
                                const body = document.body;
                                if (body.hasAttribute('theme-mode')) {
                                    body.removeAttribute('theme-mode');
                                } else {
                                    body.setAttribute('theme-mode', 'dark');
                                }
                            }}
                            >
                                switch mode
                            </Button>
                        </Col>
                    </Row>
                </Content>
                <Footer>footer</Footer>
            </Layout>
        </Fragment>
    );
}

export default App;
