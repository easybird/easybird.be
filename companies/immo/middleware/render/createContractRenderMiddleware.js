export default function(req, res, next) {
    
    return res.render('pages/companies/immo/createContract', {
        metaData: {
            title: 'Create contract'
        },
        data: {
            dropDown: [
                {
                    id: "contractType",
                    label: "Contract type",
                    options: [
                        {
                            id: "rentalAgreement",
                            value: "Booked contract"
                        },
                        {
                            id: "exampleAgreement",
                            value: "Example contract"
                        },
                        {
                            id: "welcome",
                            value: "Welcome bundle"
                        }
                    ]
                },
                {
                    id: "language",
                    label: "Language",
                    options: [
                        {
                            id: "nl",
                            value: "Nederlands"
                        },
                        {
                            id: "en",
                            value: "English"
                        },
                        {
                            id: "fr",
                            value: "Francais"
                        }
                    ]
                }
                
            ],
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