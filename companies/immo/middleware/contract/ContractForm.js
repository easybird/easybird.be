import moment from 'moment';

export default class ContractForm {
    constructor({ contractType, language, checkInDate, checkOutDate, totalNights, rentalRate, guestName, totalPersons }) {
        this.contractType = contractType;
        this.language = language;
        this.guestName = guestName;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.totalNigths = totalNights;
        this.rentalRate = Number(rentalRate.replace(/,/g, '.'));
        this.totalPersons = Number(totalPersons);
    }

    transform(text) {
        text = text.replace("<GUEST-NAME></GUEST-NAME>", this.guestName);
        text = text.replace("<CHECK-IN-DATE></CHECK-IN-DATE>", this.checkInDate);
        text = text.replace("<CHECK-OUT-DATE></CHECK-OUT-DATE>", this.checkOutDate);
        text = text.replace("<TOTAL-NIGHTS></TOTAL-NIGHTS>", this.totalNigths);
        text = text.replace("<RENTAL-RATE></RENTAL-RATE>", this.rentalRate);

        text = text.replace("<TOTAL-DUE></TOTAL-DUE>", (500 + this.rentalRate).toFixed(2));
        text = text.replace("<TOTAL-PERSONS-1></TOTAL-PERSONS-1>", -1 + this.totalPersons);
        text = text.replace("<TODAY-DATE></TODAY-DATE>", moment().format('DD/MM/YYYY'));
        return text;
    }

    getFileName() {
        const findAllSlash = new RegExp('/', 'g');
        const findAllSpaces = new RegExp(' ', 'g');
        return `${this.guestName.replace(findAllSpaces, '-')}_${this.checkInDate.replace(findAllSlash, '-')}_${this.language}_${this.contractType}`;
    }
};