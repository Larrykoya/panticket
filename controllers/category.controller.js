import Category from "../models/category.model";


export async function createCategory (req, res){
    try{
        const newCategory = await Category.create(req.body);
        return res.status(201).json({
            message: 'Category created successfully',
            Category: newCategory
        });
    } catch (err) {
        console.log(err.messsage);
        return res.status(500).json({
            message: 'issue processing your request'
        });
    }
}
export async function updateCategory (req, res){
    try {
        let updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body);
        return res.status(201).json({
            message: 'update successful',
            updatedCategory
        });
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: 'unable to update'
        });
    }
}
export async function deleteCategory (req, res){
    try {
        await Category.findByIdAndDelete(req.params.id);
    return res.status(204).json({message: 'categoty successfully deleted'})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: 'unable to delete category'
        });
    };
};
export async function fetchCategory (req, res){
    try {
        let categories = await Category.find({});
        return res.status(200).json({
        message: 'See all available categories below',
        categories
    })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: 'Unable to fetch categories'
        });
    };
};
export async function fetchSingleCategory (req, res) {
    try {
        const category = await Category.findById(req.params.id)
        return res.status(200).json({
        message: 'Category Fetched',
        category
        })
        } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: 'Unable to Fetch category'
        });
    };
};