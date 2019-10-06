import { PrNotifications as Notifications, Notify as Not } from '@i_oleksandr/prcomponents';

const defaults = {
    anchor: { horizontal: 'left', vertical: 'bottom' },
    behaviour: { type: 'fade', details: 'left' },
};


const Notify =  {
    info: (message) =>
        Not.success({
            message,
            ...defaults
        }),

        success: (message) =>
            Not.success({
            message,
            ...defaults
        }),

        warning: (message) =>
            Not.warning({
            message,
            ...defaults
        }),

        error: (message) =>
            Not.error({
            message,
            ...defaults
        }),

};

export {
    Notifications,
    Notify
}