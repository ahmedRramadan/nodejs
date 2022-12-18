import { model,Schema } from "mongoose";

const productsSchema = new Schema(
    {
        tittle: String,
        description: String,
        price: String,
    }
)

const Product = model('product', productsSchema);


export default Product;