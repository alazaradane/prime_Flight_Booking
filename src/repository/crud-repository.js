class CrudRepository{
  constructor(model){
    this.model= model;
  }

  async create(data){
    try {
      const result = await this.model.create(data);
      return result;
      
    } catch (error) {
      console.log('something went wrong in crud repository create method')
    }
  }

  async destroy(modelId){
    try {
      const result = await this.model.destroy({
        where: {id: modelId}
      });
    } catch (error) {
      console.log('something went wrong in crud repository destroy method')
    }
  }

  async get(modelId){
    try {
      const result  = await this.model.findByPk(modelId);
      return result;
    } catch (error) {
      console.log('something went wrong in crud repository get method')
    }
  }

  async getAll(){
    try {
      const result  = await this.model.findAll();
      return result;
    } catch (error) {
      console.log('something went wrong in crud repository getAll method')
    }
  }

  async update(modelId, data){
    try {
      const result = await this.model.update(data,{
        where:{
          id:modelId
        },
      })
      return result;
    } catch (error) {
      console.log('something went wrong in crud repository update method')
    }
  }

  

}

module.exports = CrudRepository;