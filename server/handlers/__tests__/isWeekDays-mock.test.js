const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");
const mathModel = require("../../../storage/models/math.model");

// jest.mock("../../../storage/models/math.model", () => {
//     return {
//         isWeekDays: jest.fn()
//     };
// })

test("isWeekDays true", async () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2022-07-09'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/isWeekDayz",
    });
    const response = httpMocks.createResponse();
    // mathModel.isWeekDays.mockResolvedValue(true);
    await mathHandler.isWeekDays(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});

test("isWeekDays false", async () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2022-07-11'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/isWeekDayz",
    });
    const response = httpMocks.createResponse();
    // mathModel.isWeekDays.mockResolvedValue(false);
    await mathHandler.isWeekDays(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: false,
        error: null
    });
});