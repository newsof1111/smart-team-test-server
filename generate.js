module.exports = function(){
    var faker = require("faker/locale/fr");
    var _ = require("lodash");

    return {
        articles : _.times(5,function (n) {
            return {
                "id": n,
                "label": faker.lorem.words(),
                "description": faker.lorem.paragraph(),
                "photo": faker.image.image(),
                "date_ajout": faker.date.recent()
            }
            
        })
    }
}