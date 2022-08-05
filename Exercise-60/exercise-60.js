const persons = [
    {
      id: 1,
      firstName: 'Sharon',
      lastName: 'Duran',
      age: 20
    },
    {
      id: 2,
      firstName: 'Maria',
      lastName: 'Verdi',
      age: 32
    },
    {
      id: 3,
      firstName: 'Giovanni',
      lastName: 'Rossi',
      age: 35
    }
  ];
  
  const jobs = [
    {
      id: 1,
      jobTitle: 'CEO'
    },
    {
      id: 2,
      jobTitle: 'Junior Web Developer Student'
    },
    {
      id: 3,
      jobTitle: 'Developer'
    }
  ];

function fetchPersonById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const findPerson = persons.find(item => item.id === id);
            if (findPerson) {
                resolve(findPerson)
            } else {
                return(new Error('id not found'))
            }
        }, 1000);
    });
}

function fetchJobById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const findJob = jobs.find(item => item.id === id);
            if (findJob) {
                resolve(findJob)
            } else {
                return(new Error('job not found'))
            }
        }, 1000);
    });
}

  Promise.all([fetchPersonById(1), fetchJobById(2)]).then((value) => (console.log(value)))