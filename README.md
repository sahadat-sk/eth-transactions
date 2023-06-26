# ETH Transactions

Display day wise ethereum transactions of last 1 year

## Setup

### Cloning the repo

```bash
git clone https://github.com/sahadat-sk/eth-transactions.git
```

### Running docker-compose file

```bash
sudo docker-compose up
```

## View the project

go to <http://localhost:3000/> to see the chart

to retrieve the first and last block number of a given date GET request in <http://127.0.0.1:5000/block-numbers/:your-date>
(this may take a few seconds)

### Example

<http://127.0.0.1:5000/block-numbers/2023-05-04>
