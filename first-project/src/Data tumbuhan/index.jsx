import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './header';
import CardList from './cardlist';
import data from './data';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: " Data Tumbuhan",
      data: data
    };
  }

  handleDelete = (id) => {
    const newData = this.state.data.filter(item => item.id !== id);
    this.setState({ data: newData });
  }

  render() {
    return (
      <div className="container">
        <Header theme={this.state.theme} />
        <CardList data={this.state.data} onDelete={this.handleDelete} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
