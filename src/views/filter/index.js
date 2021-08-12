import React from 'react';
import './filter.css';

const Filter = (props) => {
  console.log('Filter');
  const { status, priority, type, applyFilter, appliedFilter} = props;

  const handleChange = (e, filterType) => {
    if (e.target.checked) {
      appliedFilter[filterType].push(e.target.value);
    } else {
      var elementIndex = appliedFilter[filterType].indexOf(e.target.value);
      appliedFilter[filterType].splice(elementIndex, 1);
    }
    applyFilter(appliedFilter, filterType);
  }

  const filterOption = (element, filterType) => {
    return (
      <p className="options" key={element}>
        <input type="checkbox" id={element} name={element} value={element} onChange={e => handleChange(e, filterType)}></input>
        <label>{element}</label><br></br>
      </p>
    )
  }

  return (
    <div>
      <div>
        <p className="filterHeading">Status</p>
        {status.map(statusElement => (
          filterOption(statusElement, 'STATUS')
        ))}
      </div>
      <div>
        <p className="filterHeading">Priority</p>
        {priority.map(priorityElement => (
          filterOption(priorityElement, 'PRIORITY')
        ))}
      </div>
      <div>
        <p className="filterHeading">Type</p>
        {type.map(typeElement => (
          filterOption(typeElement, 'TYPE')
        ))}
      </div>
    </div>
  )
}

export default  React.memo(Filter);