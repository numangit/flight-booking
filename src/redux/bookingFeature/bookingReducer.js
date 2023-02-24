import { BOOKING, DELETEBOOKING } from "./actionType";

const bookingState = []

const bookingReducer = (state = bookingState, action) => {
    if (action.type === BOOKING) {
        const updatedBookings = [...state];
        updatedBookings.length <= 3 && updatedBookings.push(action.payload.newBookingData);
        return updatedBookings;
    } else if (action.type === DELETEBOOKING) {
        const updatedBookings = state.filter(booking => {
            return booking.id !== action.payload.bookingId;
        })
        return updatedBookings;
    } else {
        return state;
    }
}

export default bookingReducer;