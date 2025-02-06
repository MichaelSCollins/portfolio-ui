
class TimeLogger {
    private startTime;
    private message = `✅ Connected to MongoDB in $t`;
    constructor() {
        this.startTime = Date.now()
    }
    setMessage(message: string) {
        this.message = message;
        return this
    }
    addToMessage(message: string) {
        this.message += message
        return this;
    }
    log(message: string = this.message, endTime = Date.now()) {
        const speed = endTime - this.startTime + 'ms'
        const messageWithSpeed = message.includes('$t')
            ? this.message.replace(
                '$t', speed
            ) : this.message + ' ' + speed

        console.log(messageWithSpeed);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error(error: any) {
        console.error("❌ MongoDB connection error:", error);
    }
}
export default TimeLogger