export class ApiRepository {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async create(coin: string, fitting: string) {
    const raw = JSON.stringify({
      hand: 'string',
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
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  }
}
