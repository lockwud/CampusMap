import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GoogleMapsService {
  private readonly apiKey = process.env.GOOGLE_MAPS_API_KEY;

  async getRoute(start: string, end: string, mode: 'walking' | 'driving' = 'walking') {
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(start)}&destination=${encodeURIComponent(end)}&mode=${mode}&key=${this.apiKey}`;
    
    try {
      const response = await axios.get(url);
      if (response.data.status !== 'OK') {
        throw new HttpException(response.data.error_message, HttpStatus.BAD_REQUEST);
      }
      return response.data;
    } catch (error) {
      throw new HttpException('Failed to fetch route', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}