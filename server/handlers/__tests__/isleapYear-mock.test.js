const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");
const mathModel = require("../../../storage/models/math.model");

// jest.mock("../../../storage/models/math.model", () => {
//     return {
//         isleapYear: jest.fn()
//     };
// })

test("isleapYear true", async () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2000-01-29'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/isLeapYears",
    });
    const response = httpMocks.createResponse();
    // mathModel.isleapYear.mockResolvedValue(true);
    await mathHandler.isleapYear(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});

test("isleapYear false", async () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2022-07-11'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/isLeapYears",
    });
    const response = httpMocks.createResponse();
    // mathModel.isleapYear.mockResolvedValue(false);
    await mathHandler.isleapYear(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: false,
        error: null
    });
});