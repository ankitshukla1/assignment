import React, {useState, useEffect} from 'react';
import BarChart from '../chart';
import { getAllUsers, getTotalTickets, getAllFilter, getFilteredData } from '../../utils/helper';
import Filter from '../filter';
import data from '../../utils/data';
import './App.css';


const App = () => {
  const initialFilter = {
    STATUS: [],
    PRIORITY: [],
    TYPE: []
  }
  const [labels, setLabels] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [status, setStatus] = useState([]);
  const [priority, setPriority] = useState([]);
  const [type, setType] = useState([]);
  const [filter, setFilter] = useState(initialFilter)

  useEffect(() => {
    setLabels(Object.keys(getAllUsers(data)));
    setGraphData(getTotalTickets(getAllUsers(data)));
    setStatus(getAllFilter(data).status);
    setPriority(getAllFilter(data).priority);
    setType(getAllFilter(data).type);
  }, [])

  const applyFilter = (newFilter) => {
    setFilter(newFilter);
    const filteredData = {
      records: getFilteredData(data, newFilter)
    };
    setLabels(() => Object.keys(getAllUsers(filteredData)));
    setGraphData(() => getTotalTickets(getAllUsers(filteredData)));
  }

  return (
    <div className="App">
      <div className="filter">
        <Filter status={status} priority={priority} type={type} appliedFilter={filter} applyFilter={applyFilter}/>
      </div>
      <div className="chartContainer">
        <BarChart labels={labels} graphData={graphData} />
      </div>
    </div>
  );
};

export default App;
