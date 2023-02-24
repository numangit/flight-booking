import { BOOKING, DELETEBOOKING } from "./actionType";

const bookingState = [
    { id: 1, destinationFrom: "sydbd", destinationTo: "shshshs", journeyDate: "12-333-33", guests: "1", ticketClass: "eco" },
]

// const bookingReducer = (state = bookingState, action) => {
//     switch (action.type) {
//         case BOOKING:

//             return {
//                 ...state,
//                 value: state.value + 1,
//             };

//         case DELETEBOOKING:
//             return {
//                 ...state,
//                 value: state.value - 1,
//             };

//         default:
//             return state;
//     }
// };

const bookingReducer = (state = bookingState, action) => {
    if (action.type === BOOKING) {
        const updatedBookings = [...state];
        if (updatedBookings.length <= 3) {
            updatedBookings.push(action.payload);
        }
        console.log(updatedBookings);
        return updatedBookings;
    } else if (action.type === DELETEBOOKING) {
        const updatedBookings = state.filter(booking => booking.id !== action.payload)
        console.log(updatedBookings);
        return updatedBookings;
    } else {
        return state;
    }
}

export default bookingReducer;