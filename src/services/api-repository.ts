export class ApiRepository {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async create(coin: string, fitting: string) {
    const response = await fetch(
      `${this.urlBase}/calculator?coin=${coin}&fitting=${fitting}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'apikey',
        },
      }
    );
    const data = await response.json();
    return data;
  }
}
