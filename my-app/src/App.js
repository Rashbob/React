import React from 'react';
import './App.scss';

import Channels from './components/Channels';
import Graphs from './components/ChannelGraph';
import GraphChart from "./components/GraphChart";
import Table from './components/Table';


function App() {
    return(
        <div>
            <Channels />
            <Graphs />
            <Table/>
        </div>
    );
}

export default App;
