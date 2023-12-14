console.log(`Trying to Connect`)


const prm = new Promise((resolve, reject) => {

    // code to connect to cctv
    // this connectivity might take time
    // so this is not synchronous call, it is asynchronous

    // here you will creat a promise for connecting to cctv

    /*
        - Fetching Data from an API: Connect to an external API and retrieve data asynchronously.
        - Reading/Writing from a File: Read/Write data from a file, either on the server or locally.
        - Connecting to a Database: Establish a connection to a database for data operations.
        - Sending Email: Send emails asynchronously, e.g., for user notifications.
        - Image Processing: Perform image processing tasks asynchronously.
        - User Authentication: Authenticate users by interacting with a database or external service.
        - Network Requests: Handle various types of network requests, such as HTTP requests.
        - Real-time Communication: Implement real-time communication using technologies like WebSockets.
        - File Upload: Handle asynchronous file uploads, ensuring proper storage and processing.
        - etc 
*/  

    resolve({ op : 'abc', sts: '101' }) // success

    reject(new Error()) // failed
})