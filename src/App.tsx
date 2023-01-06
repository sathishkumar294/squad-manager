import { ConfigProvider, Layout } from "antd";
import { Provider } from "react-redux";
import "./App.css";
import store from "./app/store";
import SelectionContainer from "./content/SelectionContainer";
import TeamStats from "./content/TeamStats";
import Footer from "./footer/Footer";
import Header from "./header/Header";
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
        <Layout>
          <Header></Header>
          <Content>
            <SelectionContainer></SelectionContainer>
            <TeamStats></TeamStats>
          </Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  </Provider>
);

export default App;
