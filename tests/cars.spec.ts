import { test, expect } from "../playwright/fixtures/userPage";

test.describe("Cars", () => {
  test("create and remove car", async ({ request }) => {

    const response = await request.post("/api/cars", {
        data: {
            carBrandId: 1,
            carModelId: 1,
            mileage: 12,
          }
    });
    const newCar = await response.json();

    expect(newCar.status).toBe('ok')
    expect(newCar.data.id).not.toBeUndefined
    {
        const response = await request.delete(`/api/cars/${newCar.data.id}`);
        const deleteResponse = await response.json();

        expect(deleteResponse.status).toBe('ok')
    }
  });

  test("create car without brandID", async ({ request }) => {

    const response = await request.post("/api/cars", {
        data: {
            carModelId: 1,
            mileage: 12,
          }
    });
    const newCar = await response.json();

    expect(newCar.status).toBe('error')
    expect(newCar.message).toBe("Car brand id is required")
  });
  test("create car with error", async ({ request }) => {

    const response = await request.post("/api/cars", {
        data: {
            carBrandId:  "string",
            carModelId: 1,
            mileage: 12,
          }
    });
    const newCar = await response.json();

    expect(newCar.status).toBe('error')
    expect(newCar.message).toBe("Invalid car brand type")
  });
});
