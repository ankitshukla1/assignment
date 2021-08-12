export const getAllFilter = (empData) => {
  let status = [];
  let priority = [];
  let type = [];
  empData.records.forEach((element) => {
    if(!status.includes(element.status)){
      status.push(element.status);
    }
    if(!priority.includes(element.priority)){
      priority.push(element.priority);
    }
    if(!type.includes(element.issue_type)){
      type.push(element.issue_type);
    }
  });
  return { status, priority, type};
}

export const getAllUsers = (empData) => {
  let employee = {};
  empData.records.forEach((element) => {
    if(!Object.keys(employee).includes(element.assignee)) {
      employee[element.assignee] = {};
      employee[element.assignee]['totalTicket'] = 1;
    } else {
      employee[element.assignee]['totalTicket'] += 1;
    }
  });
  return employee;
}

export const getTotalTickets = (empData) => {
  let totalTicket = [];
  Object.keys(empData).forEach((element) => {
    totalTicket.push(empData[element].totalTicket);
  });
  return totalTicket;
}

export const getFilteredData = (empData, filter) => {
  return empData.records.filter(element => {
    switch (true) {
      case (filter.STATUS.length > 0 && filter.PRIORITY.length > 0 && filter.TYPE.length > 0):
        return filter.STATUS.includes(element.status) && filter.PRIORITY.includes(element.priority) && filter.TYPE.includes(element.issue_type);

      case (filter.STATUS.length > 0 && filter.PRIORITY.length > 0):
        return filter.STATUS.includes(element.status) && filter.PRIORITY.includes(element.priority);

      case (filter.PRIORITY.length > 0 && filter.TYPE.length > 0):
        return filter.PRIORITY.includes(element.issue_type) && filter.TYPE.includes(element.priority);

      case (filter.STATUS.length > 0 && filter.TYPE.length > 0):
        return filter.STATUS.includes(element.status) && filter.TYPE.includes(element.issue_type);

      case (filter.STATUS.length > 0):
        return filter.STATUS.includes(element.status);

      case (filter.PRIORITY.length > 0):
        return filter.PRIORITY.includes(element.priority);

      case (filter.TYPE.length > 0):
        return filter.TYPE.includes(element.issue_type);

      default:
        return empData.records;
    }
  })
}