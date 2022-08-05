const persons = [
    {
      id: 1,
      firstName: 'Mario',
      lastName: 'Rossi',
      age: 25
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
      jobTitle: 'Project Manager'
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
                reject(new Error('id not found'))
            }
        }, 1000)
    });
}

function fetchJobById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const findJob = jobs.find(item => item.id === id);
            if (findJob) {
                resolve(findJob)
            } else {
                reject(new Error('job not found'))
            }
        }, 500)
    });
}

Promise.any([fetchPersonById(1), fetchJobById(2)]).then((value) => (console.log(value)))
