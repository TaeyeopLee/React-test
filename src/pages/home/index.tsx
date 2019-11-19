import * as React from 'react';
import Layout from '../../components/Layout';
import Sidebar, { SidebarTitle } from '../../components/Sidebar';
import Main from '../../components/Main';
import { List, ListItem } from '../../components/List';
import { Link } from 'react-router-dom';
import AddMemoBtn from '../../components/AddMenuBtn';

const style: React.CSSProperties = {
  textDecoration: 'none',
  color: '#000',
}

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Sidebar>
        <SidebarTitle>Folder</SidebarTitle>
        <List>
          <ListItem first>
            <Link to="/memo">Memo</Link>
          </ListItem>
          <ListItem>
            <Link to="/trash">Trash</Link>
          </ListItem>
        </List>
      </Sidebar>
      <Main>
        <div style={{
          margin: '10px'
        }}><AddMemoBtn /></div>
      </Main>
    </Layout>
  )
}

export default HomePage;