
import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerChangedAddressEvent from "../customer-changed-address.event";

export default class CustomerChangedAddressHandler
  implements EventHandlerInterface<CustomerChangedAddressEvent>
{
  handle(event: CustomerChangedAddressEvent): void {
    const { eventData } = event;
    console.log(`Endereço do cliente: ${eventData.id}, ${eventData.name} alterado para: ${eventData.Address}`);
  }
}
