# Use a base Python image
FROM python:3.9

# Set the working directory
WORKDIR /app

# Copy the requirements.txt file and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Set the Flask app environment variable
ENV FLASK_APP=app.py

# Expose the port your Flask app will run on
EXPOSE 5000

# Run the Flask application
CMD ["flask", "run", "--host=0.0.0.0"]
