
import EventInterface from "../../@shared/event/event.interface";
import Customer from "../entity/customer";

export default class CustomerChangedAddressEvent implements EventInterface {
  dataTimeOccurred: Date;
  eventData: Customer;

  constructor(eventData: any) {
    this.dataTimeOccurred = new Date();
    this.eventData = eventData;
  }
}
