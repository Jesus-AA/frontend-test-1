export class ApiRepository {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async create(coin: string, fitting: string, hand: string) {
    const raw = JSON.stringify({
      hand: hand,
    });

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('x-api-key', 'apikey');

    const response = await fetch(
      `${this.urlBase}/calculator?coin=${coin}&fitting=${fitting}`,
      {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      }
    );

    const data = await response.json();

    return data;
  }
}
