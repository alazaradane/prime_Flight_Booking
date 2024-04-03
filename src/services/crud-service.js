class CrudService{
  constructor(repository){
    this.repository = repository;
  }

  async create(data){
    try {
      const result = await this.repository.create(data);
      return result;
    } catch (error) {
      console.log('something went wrong in crud service create method')
    }
  }

  async destroy(id){
    try {
      const result = await this.repository.destroy(id);
      return result;
    } catch (error) {
      console.log('something went wrong in crud service destroy method')
    }
  }

  async get(id){
    try {
      const result = await this.repository.get(id);
      return result;
    } catch (error) {
      console.log('something went wrong in crud service get method')
    }
  }

  async getAll(){
    try {
      const result = await this.repository.getAll();
      return result;
    } catch (error) {
      console.log('something went wrong in crud service getAll method')
    }
  }

  async update(id, data){
    try {
      const result = await this.repository.update(id, data);
      return result;
    } catch (error) {
      console.log('something went wrong in crud service update method')
    }
  }



}

module.exports = CrudService;