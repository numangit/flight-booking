import BOOKING from './actionType';
import DELETEBOOKING from './actionType';

export const booking = (bookingData) => {
    return {
        type: BOOKING,
        payload: bookingData,
    }
};

export const deleteBooking = (bookingId) => {
    return {
        type: DELETEBOOKING,
        payload: bookingId,
    }
};