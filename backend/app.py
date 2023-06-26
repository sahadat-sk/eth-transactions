from flask import Flask, jsonify

import requests

from datetime import datetime, timedelta
from get_first_block_by_date import get_first_block_by_date


app = Flask(__name__)


@app.route('/fetch-transactions')
def fetch_transactions():
    api_key = 'Oy358BmYYRUGyJJCnEQVqsDB9hflePVC'
    api_endpoint = 'https://api.dune.com/api/v1/query/2663782/results?api_key=' + api_key
    try:
        response = requests.get(api_endpoint)
        data = response.json()

        return jsonify(data), 200
    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500


@app.route('/block-numbers/<date>')
def get_block_numbers(date):
    # Replace with your Infura project ID
    try:
        next_date = datetime.strptime(
            date, '%Y-%m-%d') + timedelta(days=1)
        next_date_first_block = get_first_block_by_date(
            next_date.strftime("%Y-%m-%d"))

        given_date_first_block = get_first_block_by_date(date)

        return jsonify({'lastBlockNumber': next_date_first_block-1, 'firstBlockNumber': given_date_first_block})

    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500
