import ReactGA from "react-ga4";

class GoogleAnalytics {
    static instance: GoogleAnalytics;
    static send(event_name: string) {
        if (!GoogleAnalytics.instance)
        {
            GoogleAnalytics.instance = new GoogleAnalytics();
            GoogleAnalytics.instance.init();
        }
        GoogleAnalytics.instance.send(event_name);
    }
    private initialized = false;
    init() {
        if (!this.initialized)
            ReactGA.initialize(
                process.env.GOOGLE_ANALYTICS_ID as string
            );
    }
    send(event_name: string) {
        ReactGA.send(event_name);
    }
}

export default GoogleAnalytics