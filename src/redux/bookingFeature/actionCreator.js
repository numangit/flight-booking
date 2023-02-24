import { BOOKING, DELETEBOOKING } from "./actionType";

export const bookFlight = (newBookingData) => {
    return {
        type: BOOKING,
        payload: newBookingData,
    }
};

export const deleteBooking = (bookingId) => {
    return {
        type: DELETEBOOKING,
        payload: bookingId,
    }
};