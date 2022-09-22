import React from 'react';
import './App.scss';

import Channels from './components/Channels';
import Graph from './components/ChannelGraph';
import ChannelTable from './components/ChannelTable';
import Table from './components/Table';

new ChannelTable("#app");

function App() {
    return(
        <div>
            <Channels />
            <Graph />
            <Table/>
            <div id="app"/>
        </div>
    );
}

export default App;
