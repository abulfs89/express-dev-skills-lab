module.exports = {
  getAll,
  getOne,
};

const skills = [
    {id: 1, lang: 'HTML', done: true},
    {id: 2, lang: 'JavaScript', done: true},
    {id: 3, lang: 'ExpressJS', done: false}
  ];
	

	
  function getAll() {
    return skills;
  }


  function getOne(id) {
    id = parseInt(id);
    return skills.find(t => t.id === id);
  }