// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
import { GA_TRACKING_ID } from "../../AppConstants";

export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
