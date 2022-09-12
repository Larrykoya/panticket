import Organizer from "../models/organizer.model";


export async function createOrganizer (req, res){
    try{
        const newOrganizer = await Organizer.create(req.body);
        return res.status(201).json({
            message: 'Organizer created successfully',
            Organizer: newOrganizer
        });
    } catch (err) {
        console.log(err.messsage);
        return res.status(500).json({
            message: 'issue processing your request'
        });
    }
};
export async function updateOrganizer (req, res){
    try {
        let organizer = await Organizer.findByIdAndUpdate(req.params.id, req.body);
        return res.status(201).json({
            message: 'update successful',
            organizer
        });
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: 'unable to update'
        });
    };
};
export async function deleteOrganizer (req, res){
    try {
        await Organizer.findByIdAndDelete(req.params.id);
    return res.status(204).json({message: 'organizer successfully deleted'})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: 'unable to delete organizer'
        });
    };
};
export async function fetchOrganizer (req, res){
    try {
        let organizers = await Organizer.find({});
        return res.status(200).json({
        message: 'See all available organizers below',
        organizers
    })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: 'Unable to fetch organizers'
        });
    };
};
export async function fetchSingleOganizer (req, res) {
    try {
        const organizer = await Organizer.findById(req.params.id)
        return res.status(200).json({
        message: 'organizer Fetched',
        organizer
        })
        } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: 'Unable to Fetch organizer'
        });
    };
};