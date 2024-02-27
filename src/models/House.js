export class House {
    constructor(data){
        this.id = data.id || data._id
        this.bathrooms = data.bathrooms
        this.bedrooms = data.bedrooms
        this.imgUrl = data.imgUrl
        this.price = data.price
        this.levels = data.levels
        this.description = data.description
        this.creator = data.creator
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
    }
}

const houseData = {
    
}