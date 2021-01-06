const db = require('../utils/db');

const TBL_COU = 'Course';
const TBL_RATE = 'CourseRating';

module.exports = {
  all() {return db.load(`select * from ${TBL_COU}`)},
  // async withField() {
  //   try {
  //     fieldwithcate = []
  //     fields = await db.load(`select * from ${TBL_FILED}`);
  //     fields.push({ID: 0, Name: "General", Description: "General"})
      
  //     for (let i = 0; i< fields.length; i++) {
  //       categorys = await db.load(`select * from ${TBL_CAT} where FieldID = ${fields[i].ID}`)
  //       fieldwithcate.push({ ...fields[i], categorys})
  //     }
  //     let lastItem = fieldwithcate.pop();
  //     lastItem.categorys.push({ID:0,Name: "All", Description: ""})
  //     fieldwithcate.push(lastItem);
  //     return fieldwithcate;
  //   }
  //   catch (err){
  //     console.log(err)
  //     return [{ID: 0, Name: "General", Description: "General", 
  //       categorys: [{ID:0,Name: "All", Description: ""}]}];
  //   }
  // },
  getByCate(CatID) {
    return db.load(`select * from ${TBL_COU} where CategoryID = ${CatID}`)
  },
  async getSingleByID(Id) {
      const course = await db.load(`SELECT * FROM ${TBL_COU} where ID = ${Id}`);
      if (course.length == 0) return null;
      return course[0]; 
  },
  getCountRate(id){
    return db.load(`select count(*) as sl from ${TBL_RATE} as r where r.CourseID = ${id}`);
  },
  getRates(id){
    return db.load(`select r.ID as ID, r.StudentID as StudentID, r.Point as Point, r.Feedback as Feedback, U.DisplayName as DisplayName  
      from CourseRating as r left join User as U on U.ID = r.StudentID where r.CourseID = ${id}`);
  },
  add(entity) {return db.add(entity, TBL_COU)},
  del(entity) {
    const condition = { ID: entity.ID };
    return db.del(condition, TBL_COU);
  },
  patch(entity) {
    const condition = { ID: entity.ID };
    delete entity.ID;
    return db.patch(entity, condition, TBL_COU);
  },
};
