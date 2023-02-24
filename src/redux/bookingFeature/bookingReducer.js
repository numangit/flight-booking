import { BOOKING, DELETEBOOKING } from "./actionType";

const bookingState = [];

const bookingReducer = (state = bookingState, action) => {
    switch (action.type) {
        case BOOKING:
            const updatedNewBookings = [...state];
            updatedNewBookings.length < 3 && updatedNewBookings.push(action.payload);
            console.log(updatedNewBookings);
            return updatedNewBookings;

        case DELETEBOOKING:
            const updatedBookings = state.filter(booking => booking.id !== action.payload)
            console.log(updatedBookings);
            return updatedBookings;

        default:
            return state;
    }
};

export default bookingReducer;