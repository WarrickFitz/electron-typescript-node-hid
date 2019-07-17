let HID: any;
if (process.env.REACT_APP_MODE === 'electron') {
    console.log(`REQUIRING node-hid`);
    HID = require('node-hid');
    // console.log("node-hid loaded: devices:", HID.devices());
    console.log("node-hid loaded: devices: DUMMY");
}

export default class TestFs {

    static getDirectoryListing(): string {
        if (process.env.REACT_APP_MODE === 'electron') {
            let usbDevices = HID.devices();
            return JSON.stringify(usbDevices, null, 2);
        } else {
            return 'USB device lising is not available in the browser.'
        }
    }
}
