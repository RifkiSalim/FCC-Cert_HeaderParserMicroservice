# Request Header Parser Microservice API

The Request Header Parser Microservice API is a simple service that extracts and returns the client's IP address, preferred language, and user agent (software and device information) from incoming HTTP requests.

## How it Works

This API can be accessed via HTTP requests to the following endpoint:

```
/api/whoami
```

- The service will analyze the headers of the incoming request and provide the relevant information.

### Functionality

1. **Client Information**:
   - A request to `/api/whoami` will return a JSON object with the following keys:
     - `ipaddress`: The client's IP address.
     - `language`: The client's preferred language.
     - `software`: The client's user agent string, containing information about the software and device.

## Example Usage

- To retrieve client information:
  - `GET /api/whoami`
  - Response (example):
    ```
    {
      "ipaddress": "192.168.1.1",
      "language": "en-US",
      "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.6543.1 Safari/537.36"
    }
    ```

## Getting Started

To run this API on your local machine, follow these steps:

1. Clone the repository.
2. Install the required dependencies using npm.
3. Start the server.

```
npm run dev
```

4. Access the API at `http://localhost:3000/api/whoami`.

## Author

Rifki Salim

## License

This project is open-source and available under the [MIT License](LICENSE.md).
