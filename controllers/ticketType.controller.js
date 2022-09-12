import TicketType from "../models/ticketType.model";

export async function createTicketType (req, res) {
    try{
        const newTicketType = await TicketType.create(req.body)
        return res.status(200).json({
        message: 'TicketType created successfully',
        TicketType: newTicketType
        });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: 'cannot process request'
        });
    }
}
export async function updateTicketType (req, res){
    try {
        let ticketType = await TicketType.findByIdAndUpdate(req.params.id, req.body);
        return res.status(201).json({
            message: 'update successful',
            ticketType
        });
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: 'unable to update'
        });
    }
}
export async function deleteTicketType (req, res){
    try {
        await TicketType.findByIdAndDelete(req.params.id);
    return res.status(204).json({message: 'Ticket-type successfully deleted'})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: 'unable to delete tickeck-type'
        });
    };
};
export async function fetchTicketType (req, res){
    try {
        let ticketTypes = await TicketType.find({});
        return res.status(200).json({
        message: 'See all available ticket-types below',
        ticketTypes
    })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: 'Unable to fetch ticket-types'
        });
    };
};
export async function fetchSingleTicketType (req, res) {
    try {
        const ticketType = await TicketType.findById(req.params.id)
        return res.status(200).json({
        message: 'TicketType Fetched',
        ticketType
        })
        } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: 'Unable to Fetch ticket-type'
        });
    };
};