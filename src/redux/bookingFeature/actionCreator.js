import BOOKING from './actionType';
import DELETEBOOKING from './actionType';

export const booking = (newBookingData) => {
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