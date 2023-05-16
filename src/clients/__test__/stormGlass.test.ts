import { StormGlass  } from "@src/clients/StormGlass";
import stormglassNormalizedResponseFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';
import stormGlassWeatherThreeHoursFixture from "@test/fixtures/stormglass_weather_3_hours.json";
import axios from 'axios';

jest.mock('axios');

describe("StormGlass client", () => {
  it('should return the normalized forecast from the StormGlass service', async () => {
    
    // const mockedAxios = axios as jest.Mocked<typeof axios>;
    axios.get = jest.fn().mockResolvedValue(stormGlassWeatherThreeHoursFixture);
    
    const lat = -33.792726;
    const lng = 151.289824;

    const stormGlass = new StormGlass(axios);
     const response = await stormGlass.fetchPoints(lat, lng);
     
    expect(response).toEqual(stormglassNormalizedResponseFixture);
  })
});
