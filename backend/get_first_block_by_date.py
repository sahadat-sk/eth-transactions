import requests
from datetime import datetime, timedelta
import math


def get_first_block_by_date(date):

    infura_endpoint = 'https://mainnet.infura.io/v3/3d4d097c4410447785e30d37a55ca1ab'

    target_date = int(datetime.strptime(date, '%Y-%m-%d').timestamp())

    response = requests.post(
        infura_endpoint,
        json={
            'jsonrpc': '2.0',
            'method': 'eth_blockNumber',
            'params': [],
            'id': 1
        }
    )

    # Latest Block Number
    latest_block_number = int(response.json()['result'], 16)

    # Find the first block number for the given date
    first_block_number = 0
    last_block_number = latest_block_number

    lo = first_block_number
    hi = latest_block_number

    # Binary search for finding the desired block number
    while (lo <= hi):
        mid_block_number = math.floor((lo+hi)/2)

        response = requests.post(
            infura_endpoint,
            json={
                'jsonrpc': '2.0',
                'method': 'eth_getBlockByNumber',
                'params': [hex(mid_block_number), False],
                'id': 1
            }
        )
        block_timestamp = int(response.json()['result']['timestamp'], 16)

        print(datetime.fromtimestamp(block_timestamp))
        if block_timestamp < target_date:
            first_block_number = mid_block_number + 1  # Possible Answer
            lo = mid_block_number + 1
        else:
            hi = mid_block_number - 1

    return first_block_number
