import React from 'react';
import NotificationManager from "../components/common/react-notifications/NotificationManager";

const createNotification = (type, text, className) => {
    console.log("Creating notifications ", type)
    let cName = className || "";
    return () => {
        switch (type) {
            case "primary":
                NotificationManager.primary(
                    "This is a notification!",
                    "Primary Notification",
                    3000,
                    null,
                    null,
                    cName
                );
                break;
            case "secondary":
                NotificationManager.secondary(
                    "This is a notification!",
                    "Secondary Notification",
                    3000,
                    null,
                    null,
                    cName
                );
                break;
            case "info":
                NotificationManager.info("Info message", "", 3000, null, null, cName);
                break;
            case "success":
                NotificationManager.success(
                    "Success message",
                    "Title here",
                    3000,
                    null,
                    null,
                    cName
                );
                break;
            case "warning":
                NotificationManager.warning(
                    "Warning message",
                    "Close after 3000ms",
                    3000,
                    null,
                    null,
                    cName
                );
                break;
            case "error":
                NotificationManager.error(
                    text,
                    "Click me!",
                    5000,
                    null,
                    null,
                    cName
                );
                break;
            default:
                NotificationManager.info("Info message");
                break;
        }
    };
};

export { createNotification }