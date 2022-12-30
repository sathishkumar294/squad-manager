import { ConfigProvider, Layout } from 'antd';
import './App.css';
import Header from './header/Header';
const { Footer, Content } = Layout;

const App = () => (
    <ConfigProvider theme={{
        token: {
            colorPrimary: "#40E0D0"
        }
    }}>
        <Layout>
            <Layout>
                <Header></Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    </ConfigProvider>
);

export default App;
