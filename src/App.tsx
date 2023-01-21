import { ConfigProvider, Layout, Space } from "antd";
import { Provider } from "react-redux";
import "./App.css";
import store from "./app/store";
import SelectionContainer from "./content/SelectionContainer";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { MessagesContainer } from "./shared/MessagesContainer";
const { Content } = Layout;

const App = () => (
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#40E0D0",
        },
      }}
    >
      <Layout>
        <Header></Header>
        <Content className="site-layout" style={{ padding: "32px 50px" }}>
          <Space direction="vertical" size="large">
            <SelectionContainer></SelectionContainer>
            <MessagesContainer></MessagesContainer>
          </Space>
        </Content>
        <Footer></Footer>
      </Layout>
    </ConfigProvider>
  </Provider>
);

export default App;
