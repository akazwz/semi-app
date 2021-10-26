import React, {Fragment} from 'react';
import {Layout, Button, Toast, Col, Row} from '@douyinfe/semi-ui';

const App = () => {
    const {Header, Footer, Content} = Layout;
    return (
        <Fragment>
            <Layout className="components-layout-demo">
                <Header></Header>
                <Content style={{}}>
                    <Row type='flex' justify='center'>
                        <Col>
                            <Button onClick={() => Toast.warning({content: "Hello Semi!"})}>Hello Semi!</Button>
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
                <Footer></Footer>
            </Layout>
        </Fragment>
    );
}

export default App;
