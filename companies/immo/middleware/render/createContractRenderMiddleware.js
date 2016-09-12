export default function(req, res, next) {
    
    return res.render('pages/companies/immo/createContract', {
        metaData: {
            title: 'Create contract'
        },
        data: {
            form: [
                {
                    id: "checkInDate",
                    label: "Check-in date",
                    placeholder: "Check-in date (DD/MM/YYYY)"
                },
                {
                    id: "checkOutDate",
                    label: "Check-out date",
                    placeholder: "Check-out date (DD/MM/YYYY)"
                },
                {
                    id: "totalNights",
                    label: "Total nights"
                },
                {
                    id: "rentalRate",
                    label: "Rental rate",
                    placeholder: "Rental rate (excl. deposit)"
                },
                {
                    id: "guestName",
                    label: "Name of the guest"
                },
                {
                    id: "totalPersons",
                    label: "Total persons"
                }
            ],
            url: '/immo'
        }
    });
}