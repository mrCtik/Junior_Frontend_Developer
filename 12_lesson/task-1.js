const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
      this.level += 1;
      
      switch (this.level) {
        case 2:
            this.stack.push('CSS');
        break;
        case 3:
            this.stack.push('JavaScri;pt');
        break;
        case 4:
            this.stack.push('React');
        break;
        case 5:
            this.stack.push('NodeJS');
        break;
        default:
            alert('Студент выучил все технологии!');
            console.log(student);
        break;

      }
      return this;
    }
  } 

student
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel();
