import { ConfigProvider, Layout } from "antd";
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
        <Content className="site-layout">
          <SelectionContainer></SelectionContainer>
          <MessagesContainer></MessagesContainer>
        </Content>
        <Footer></Footer>
      </Layout>
    </ConfigProvider>
  </Provider>
);

export default App;
