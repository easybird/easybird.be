export default class ContractForm {
    constructor({ checkInDate, checkOutDate, totalNights, rentalRate, guestName, totalPersons }) {
        this.guestName = guestName;
        this.checkInDate= checkInDate;
        this.checkOutDate = checkOutDate;
        this.totalNigths = totalNights;
        this.rentalRate = rentalRate;
        this.totalPersons = totalPersons;
    }
};