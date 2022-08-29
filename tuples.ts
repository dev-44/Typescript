//Arrays with fixed lenght and types

const color: [number, number, number] = [23, 45, 82]


type HTTPResponse = [number, string]
const goodResp: HTTPResponse = [200, "OK"] 

//Array of tuples
const responses: HTTPResponse[] = [[404, "Not Found"], [202, "OK"]]