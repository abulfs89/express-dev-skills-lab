module.exports = {
    index,
    show
  };

  const Skill = require('../models/skill');
	
  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }
  function show(req, res) {
    const skill = Skill.getOne(req.params.id);
  
    res.render('skills/show', { skill });
  }
    
  